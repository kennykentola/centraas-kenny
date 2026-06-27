create table if not exists quiz_questions (
  id uuid primary key default gen_random_uuid(),
  module text not null check (module in ('aas', 'centrifuge')),
  question text not null,
  options jsonb not null,
  correct_answer integer not null check (correct_answer >= 0),
  explanation text,
  published boolean not null default false,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint quiz_questions_options_array check (jsonb_typeof(options) = 'array'),
  constraint quiz_questions_correct_answer_bounds check (correct_answer < jsonb_array_length(options))
);

create index if not exists quiz_questions_module_idx on quiz_questions(module);
create index if not exists quiz_questions_published_idx on quiz_questions(published);

create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists set_quiz_questions_updated_at on quiz_questions;
create trigger set_quiz_questions_updated_at
before update on quiz_questions
for each row execute function set_updated_at();

alter table quiz_questions enable row level security;

drop policy if exists "Published quiz questions are visible to authenticated users" on quiz_questions;
create policy "Published quiz questions are visible to authenticated users"
on quiz_questions for select
to authenticated
using (
  published = true
  or exists (
    select 1 from profiles
    where profiles.id = auth.uid()
    and profiles.role in ('instructor', 'admin')
  )
);

drop policy if exists "Instructors can create quiz questions" on quiz_questions;
create policy "Instructors can create quiz questions"
on quiz_questions for insert
to authenticated
with check (
  created_by = auth.uid()
  and exists (
    select 1 from profiles
    where profiles.id = auth.uid()
    and profiles.role in ('instructor', 'admin')
  )
);

drop policy if exists "Instructors can update quiz questions" on quiz_questions;
create policy "Instructors can update quiz questions"
on quiz_questions for update
to authenticated
using (
  exists (
    select 1 from profiles
    where profiles.id = auth.uid()
    and profiles.role in ('instructor', 'admin')
  )
)
with check (
  exists (
    select 1 from profiles
    where profiles.id = auth.uid()
    and profiles.role in ('instructor', 'admin')
  )
);

drop policy if exists "Instructors can delete quiz questions" on quiz_questions;
create policy "Instructors can delete quiz questions"
on quiz_questions for delete
to authenticated
using (
  exists (
    select 1 from profiles
    where profiles.id = auth.uid()
    and profiles.role in ('instructor', 'admin')
  )
);
