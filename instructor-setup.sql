-- SQL to create new instructor tables for Centraas

-- 1. Course Modules (if needed to make modules dynamic, though currently aas/centrifuge are hardcoded)
create table course_modules (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique, -- e.g., 'aas', 'centrifuge'
  title text not null,
  description text,
  published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 2. Lessons
create table lessons (
  id uuid primary key default gen_random_uuid(),
  module text not null check (module in ('aas', 'centrifuge')),
  title text not null,
  description text,
  objectives jsonb not null default '[]'::jsonb, -- Array of strings
  safety_notes jsonb not null default '[]'::jsonb, -- Array of strings
  content text,
  published boolean not null default false,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 3. Worksheet Templates
create table worksheet_templates (
  id uuid primary key default gen_random_uuid(),
  lesson_id uuid references lessons(id) on delete cascade,
  module text not null check (module in ('aas', 'centrifuge')),
  title text not null,
  tasks jsonb not null default '[]'::jsonb, -- Array of strings
  published boolean not null default false,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 4. Assignments
create table assignments (
  id uuid primary key default gen_random_uuid(),
  module text not null check (module in ('aas', 'centrifuge')),
  title text not null,
  description text,
  due_date timestamptz,
  published boolean not null default false,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Triggers for updated_at
create trigger set_course_modules_updated_at
before update on course_modules
for each row execute function set_updated_at();

create trigger set_lessons_updated_at
before update on lessons
for each row execute function set_updated_at();

create trigger set_worksheet_templates_updated_at
before update on worksheet_templates
for each row execute function set_updated_at();

create trigger set_assignments_updated_at
before update on assignments
for each row execute function set_updated_at();

-- RLS Policies

alter table course_modules enable row level security;
alter table lessons enable row level security;
alter table worksheet_templates enable row level security;
alter table assignments enable row level security;

-- Students can read published content
create policy "Published modules are visible to authenticated users"
on course_modules for select to authenticated using (published = true or exists (select 1 from profiles where profiles.id = auth.uid() and profiles.role in ('instructor', 'admin')));

create policy "Published lessons are visible to authenticated users"
on lessons for select to authenticated using (published = true or exists (select 1 from profiles where profiles.id = auth.uid() and profiles.role in ('instructor', 'admin')));

create policy "Published worksheet templates are visible to authenticated users"
on worksheet_templates for select to authenticated using (published = true or exists (select 1 from profiles where profiles.id = auth.uid() and profiles.role in ('instructor', 'admin')));

create policy "Published assignments are visible to authenticated users"
on assignments for select to authenticated using (published = true or exists (select 1 from profiles where profiles.id = auth.uid() and profiles.role in ('instructor', 'admin')));

-- Instructors/Admins can manage content
create policy "Instructors can insert modules" on course_modules for insert to authenticated with check (exists (select 1 from profiles where profiles.id = auth.uid() and profiles.role in ('instructor', 'admin')));
create policy "Instructors can update modules" on course_modules for update to authenticated using (exists (select 1 from profiles where profiles.id = auth.uid() and profiles.role in ('instructor', 'admin')));
create policy "Instructors can delete modules" on course_modules for delete to authenticated using (exists (select 1 from profiles where profiles.id = auth.uid() and profiles.role in ('instructor', 'admin')));

create policy "Instructors can insert lessons" on lessons for insert to authenticated with check (exists (select 1 from profiles where profiles.id = auth.uid() and profiles.role in ('instructor', 'admin')));
create policy "Instructors can update lessons" on lessons for update to authenticated using (exists (select 1 from profiles where profiles.id = auth.uid() and profiles.role in ('instructor', 'admin')));
create policy "Instructors can delete lessons" on lessons for delete to authenticated using (exists (select 1 from profiles where profiles.id = auth.uid() and profiles.role in ('instructor', 'admin')));

create policy "Instructors can insert worksheet templates" on worksheet_templates for insert to authenticated with check (exists (select 1 from profiles where profiles.id = auth.uid() and profiles.role in ('instructor', 'admin')));
create policy "Instructors can update worksheet templates" on worksheet_templates for update to authenticated using (exists (select 1 from profiles where profiles.id = auth.uid() and profiles.role in ('instructor', 'admin')));
create policy "Instructors can delete worksheet templates" on worksheet_templates for delete to authenticated using (exists (select 1 from profiles where profiles.id = auth.uid() and profiles.role in ('instructor', 'admin')));

create policy "Instructors can insert assignments" on assignments for insert to authenticated with check (exists (select 1 from profiles where profiles.id = auth.uid() and profiles.role in ('instructor', 'admin')));
create policy "Instructors can update assignments" on assignments for update to authenticated using (exists (select 1 from profiles where profiles.id = auth.uid() and profiles.role in ('instructor', 'admin')));
create policy "Instructors can delete assignments" on assignments for delete to authenticated using (exists (select 1 from profiles where profiles.id = auth.uid() and profiles.role in ('instructor', 'admin')));
