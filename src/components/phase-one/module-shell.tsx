'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, ClipboardCheck, FlaskConical, HelpCircle, Home, Layers, PlayCircle } from 'lucide-react';
import SafetyDisclaimer from './safety-disclaimer';

type ModuleType = 'aas' | 'centrifuge';

type NavItem = {
    title: string;
    href: string;
    icon: React.ElementType;
};

const navItems: Record<ModuleType, NavItem[]> = {
    aas: [
        { title: 'Overview', href: '/aas/overview', icon: BookOpen },
        { title: 'Parts', href: '/aas/parts', icon: Layers },
        { title: 'Techniques', href: '/aas/techniques', icon: FlaskConical },
        { title: 'Types', href: '/aas/types', icon: Layers },
        { title: 'SOP', href: '/aas/sop', icon: ClipboardCheck },
        { title: 'Quiz', href: '/aas/quiz', icon: HelpCircle },
        { title: 'Video', href: '/aas/video', icon: PlayCircle },
    ],
    centrifuge: [
        { title: 'Overview', href: '/centrifuge/overview', icon: BookOpen },
        { title: 'Parts', href: '/centrifuge/parts', icon: Layers },
        { title: 'Types', href: '/centrifuge/types', icon: Layers },
        { title: 'Techniques', href: '/centrifuge/techniques', icon: FlaskConical },
        { title: 'SOP', href: '/centrifuge/sop', icon: ClipboardCheck },
        { title: 'Quiz', href: '/centrifuge/quiz', icon: HelpCircle },
        { title: 'Video', href: '/centrifuge/video', icon: PlayCircle },
    ],
};

const moduleMeta: Record<ModuleType, { title: string; menuHref: string; icon: React.ElementType }> = {
    aas: { title: 'AAS Module', menuHref: '/aas/menu', icon: FlaskConical },
    centrifuge: { title: 'Centrifuge Module', menuHref: '/centrifuge/menu', icon: Layers },
};

const breadcrumbLabels: Record<string, string> = {
    overview: 'Overview',
    parts: 'Parts',
    techniques: 'Techniques',
    types: 'Types',
    sop: 'SOP',
    quiz: 'Quiz',
    results: 'Results',
    review: 'Review',
    video: 'Video',
    menu: 'Menu',
};

function getModuleFromPath(pathname: string): ModuleType | null {
    if (pathname.startsWith('/aas')) return 'aas';
    if (pathname.startsWith('/centrifuge')) return 'centrifuge';
    return null;
}

function getBreadcrumbItems(pathname: string, module: ModuleType) {
    const segments = pathname.split('/').filter(Boolean);
    const items = [
        { label: 'Home', href: '/' },
        { label: 'Select Machine', href: '/select-machine' },
        { label: moduleMeta[module].title, href: moduleMeta[module].menuHref },
    ];

    segments.slice(2).forEach((segment) => {
        const href = `/${segments.slice(0, segments.indexOf(segment) + 3).join('/')}`;
        items.push({ label: breadcrumbLabels[segment] || segment, href });
    });

    return items;
}

export default function ModuleShell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const module = getModuleFromPath(pathname);

    if (!module) {
        return <>{children}</>;
    }

    const meta = moduleMeta[module];
    const items = navItems[module];
    const breadcrumbs = getBreadcrumbItems(pathname, module);

    return (
        <div className="min-h-screen bg-slate-50">
            <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 border-r border-slate-200 bg-white/95 backdrop-blur lg:flex lg:flex-col">
                <div className="flex items-center gap-3 border-b border-slate-200 px-5 py-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-700 to-purple-600 text-white shadow-sm">
                        <meta.icon className="h-5 w-5" />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-slate-900">{meta.title}</p>
                        <p className="text-xs text-slate-500">Centraas learning path</p>
                    </div>
                </div>

                <nav className="space-y-1 overflow-y-auto px-3 py-4">
                    {items.map((item) => {
                        const Icon = item.icon;
                        const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${active
                                    ? 'bg-blue-50 text-blue-700'
                                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                                    }`}
                            >
                                <Icon className="h-4 w-4" />
                                {item.title}
                            </Link>
                        );
                    })}

                    <div className="mt-4 border-t border-slate-200 pt-3">
                        <Link
                            href="/glossary"
                            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium ${pathname === '/glossary'
                                ? 'bg-blue-50 text-blue-700'
                                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                                }`}
                        >
                            <BookOpen className="h-4 w-4" />
                            Glossary
                        </Link>
                        <Link
                            href="/references"
                            className={`mt-1 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium ${pathname === '/references'
                                ? 'bg-blue-50 text-blue-700'
                                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                                }`}
                        >
                            <BookOpen className="h-4 w-4" />
                            References
                        </Link>
                    </div>
                </nav>

                <div className="mt-auto border-t border-slate-200 p-4">
                    <SafetyDisclaimer compact />
                    <Link
                        href="/select-machine"
                        className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-3 py-2 text-xs font-semibold text-white transition hover:bg-slate-700"
                    >
                        <Home className="h-4 w-4" />
                        Choose machine
                    </Link>
                </div>
            </aside>

            <main className="lg:pl-72">
                <div className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 px-4 py-3 backdrop-blur lg:px-6">
                    <nav className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 text-xs text-slate-500" aria-label="Breadcrumb">
                        {breadcrumbs.map((item, index) => {
                            const isLast = index === breadcrumbs.length - 1;
                            return (
                                <span key={`${item.href}-${index}`} className="flex items-center gap-2">
                                    {index > 0 && <span className="text-slate-300">/</span>}
                                    {isLast ? (
                                        <span className="font-medium text-slate-800">{item.label}</span>
                                    ) : (
                                        <Link href={item.href} className="hover:text-blue-700">
                                            {item.label}
                                        </Link>
                                    )}
                                </span>
                            );
                        })}
                    </nav>
                </div>

                <div className="mx-auto max-w-7xl px-4 py-5 lg:px-6 lg:py-6">
                    <div className="mb-4 lg:hidden">
                        <SafetyDisclaimer compact />
                    </div>
                    {children}
                </div>
            </main>
        </div>
    );
}
