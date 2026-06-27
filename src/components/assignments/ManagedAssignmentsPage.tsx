'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { createClient } from '@/lib/supabase/client';
import { ArrowLeft, ClipboardList, Calendar, Clock } from 'lucide-react';
import type { MachineModule } from '@/data/learning-paths';

interface Assignment {
    id: string;
    title: string;
    description: string | null;
    due_date: string | null;
}

interface ManagedAssignmentsPageProps {
    module: MachineModule;
}

export function ManagedAssignmentsPage({ module }: ManagedAssignmentsPageProps) {
    const supabase = createClient();
    const [assignments, setAssignments] = useState<Assignment[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;
        async function fetchAssignments() {
            if (!supabase) {
                setLoading(false);
                return;
            }

            const { data, error } = await supabase
                .from('assignments')
                .select('id, title, description, due_date')
                .eq('module', module)
                .eq('published', true)
                .order('created_at', { ascending: false });

            if (!error && data && mounted) {
                setAssignments(data);
            }
            if (mounted) setLoading(false);
        }

        fetchAssignments();
        return () => { mounted = false; };
    }, [module, supabase]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f0e6fa] via-[#f3e8ff] to-[#e5d0f5] relative overflow-hidden pb-20">
            {/* Background elements */}
            <div className="absolute top-8 right-6 w-32 h-32 rounded-full bg-purple-200/30 pointer-events-none animate-float" />
            <div className="absolute bottom-32 left-6 w-28 h-28 rounded-full bg-blue-200/25 pointer-events-none animate-float-delayed" />
            
            {/* Navigation Bar */}
            <div className="relative z-10 px-5 sm:px-8 pt-6 pb-4 flex items-center justify-between max-w-4xl mx-auto w-full">
                <Link href={`/${module}/menu`}>
                    <motion.button
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 text-[#4169E1] hover:text-[#1E3A8A] transition-all group"
                    >
                        <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform">
                            <ArrowLeft className="w-5 h-5" />
                        </div>
                        <span className="font-semibold text-sm hidden sm:block">Back to Menu</span>
                    </motion.button>
                </Link>
                
                <div className="flex items-center gap-3">
                    <div className="h-px w-8 bg-purple-300" />
                    <span className="text-xs font-bold uppercase tracking-widest text-purple-600">
                        {module === 'aas' ? 'AAS' : 'Centrifuge'}
                    </span>
                    <div className="h-px w-8 bg-purple-300" />
                </div>
            </div>

            {/* Content Area */}
            <main className="relative z-10 max-w-4xl mx-auto w-full px-5 sm:px-8 mt-6">
                <div className="text-center mb-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/20 text-white"
                    >
                        <ClipboardList className="w-8 h-8" />
                    </motion.div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl sm:text-4xl font-bold text-[#1a237e] tracking-tight"
                    >
                        Your Assignments
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mt-3 text-slate-600 max-w-lg mx-auto"
                    >
                        Complete these tasks assigned by your instructor to strengthen your understanding of the {module === 'aas' ? 'AAS' : 'Centrifuge'} machine.
                    </motion.p>
                </div>

                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <div className="w-10 h-10 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mb-4" />
                        <p className="text-slate-500 font-medium">Loading assignments...</p>
                    </div>
                ) : assignments.length === 0 ? (
                    <div className="bg-white rounded-3xl p-10 text-center shadow-sm border border-slate-100 max-w-2xl mx-auto">
                        <div className="w-20 h-20 mx-auto bg-slate-50 rounded-full flex items-center justify-center mb-4">
                            <ClipboardList className="w-10 h-10 text-slate-300" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800">No Assignments Yet</h3>
                        <p className="text-slate-500 mt-2">Your instructor hasn't published any assignments for this module.</p>
                    </div>
                ) : (
                    <div className="grid gap-4 sm:gap-6">
                        {assignments.map((assignment, index) => (
                            <motion.article 
                                key={assignment.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <h2 className="text-xl sm:text-2xl font-bold text-[#1a237e]">{assignment.title}</h2>
                                        {assignment.description && (
                                            <p className="mt-3 text-slate-600 leading-relaxed whitespace-pre-wrap">
                                                {assignment.description}
                                            </p>
                                        )}
                                    </div>
                                    {assignment.due_date && (
                                        <div className="shrink-0 flex items-center gap-2 bg-rose-50 text-rose-700 px-4 py-2 rounded-xl text-sm font-semibold border border-rose-100">
                                            <Calendar className="w-4 h-4" />
                                            <span>Due: {new Date(assignment.due_date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                            <Clock className="w-4 h-4 ml-1" />
                                            <span>{new Date(assignment.due_date).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}</span>
                                        </div>
                                    )}
                                </div>
                            </motion.article>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}
