import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageWithSkeleton from '../ImageWithSkeleton';

const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
};

const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
        opacity: 1, 
        scale: 1, 
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    exit: { opacity: 0, scale: 0.95, y: 20 }
};

const ProjectModal = ({ project, isOpen, onClose }) => {
    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={onClose}
                    />

                    {/* Modal Content */}
                    <motion.div
                        className="relative w-full max-w-4xl max-h-[90vh] bg-surface dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        layoutId={`project-${project.title}`}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-md transition-colors"
                            aria-label="Close modal"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>

                        {/* Scrollable Container */}
                        <div className="overflow-y-auto no-scrollbar flex-1">
                            {/* Hero Image Section */}
                            <div className="relative h-64 md:h-80 w-full bg-muted dark:bg-gray-800">
                                <ImageWithSkeleton
                                    src={project.img || (project.images && project.images[0].src)}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-surface dark:from-gray-900 to-transparent opacity-80" />
                                
                                <div className="absolute bottom-0 left-0 p-8 w-full">
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {project.stack && project.stack.slice(0, 4).map((tech, i) => (
                                            <span key={i} className="px-2.5 py-1 bg-white/20 backdrop-blur-md text-white rounded-md text-xs font-bold border border-white/30">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-bold text-white font-headline tracking-tight shadow-black drop-shadow-lg">{project.title}</h2>
                                    <p className="text-lg md:text-xl text-white/90 font-medium mt-2 max-w-2xl text-shadow-sm font-body">{project.tagline}</p>
                                </div>
                            </div>

                            {/* Details Content */}
                            <div className="p-8 md:p-10 space-y-8">
                                
                                {/* Problem / Approach / Result Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {project.problem && (
                                        <div className="space-y-2">
                                            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground font-body">The Challenge</h3>
                                            <p className="text-body text-gray-700 dark:text-gray-300 leading-relaxed font-body">{project.problem}</p>
                                        </div>
                                    )}
                                    {project.approach && (
                                        <div className="space-y-2">
                                            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground font-body">The Solution</h3>
                                            <p className="text-body text-gray-700 dark:text-gray-300 leading-relaxed font-body">{project.approach}</p>
                                        </div>
                                    )}
                                    {project.result && (
                                        <div className="space-y-2">
                                            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground font-body">The Impact</h3>
                                            <p className="text-body text-gray-700 dark:text-gray-300 leading-relaxed font-body">{project.result}</p>
                                        </div>
                                    )}
                                    
                                    {/* Fallback for projects using 'features' array instead of Problem/Approach/Result */}
                                    {project.features && !project.problem && (
                                        <div className="col-span-full">
                                            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4 font-body">Key Features</h3>
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {project.features.map((f, i) => (
                                                    <li key={i} className="flex items-start gap-3 bg-muted/30 p-4 rounded-xl">
                                                        <span className="text-brand-primary mt-1 flex-shrink-0">
                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                        </span>
                                                        <span className="text-gray-700 dark:text-gray-300 font-body">{f}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                {/* Full Stack List */}
                                {project.stack && (
                                    <div className="border-t border-border pt-8">
                                        <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4 font-body">Technology Stack</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.stack.map((s, i) => (
                                                <span key={i} className="px-3 py-1.5 bg-muted dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium border border-border dark:border-gray-700">
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Call to Actions */}
                                <div className="flex flex-wrap items-center gap-4 pt-4">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-xl font-bold text-lg hover:from-brand-accent hover:to-brand-accent-alt hover:-translate-y-1 hover:shadow-xl transition-all font-headline"
                                    >
                                        {project.linkLabel || 'Visit Project'}
                                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                    </a>
                                    {(project.repoLink || project.demoLink) && (
                                        <a
                                            href={project.repoLink || project.demoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-8 py-4 bg-surface dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-border dark:border-gray-700 rounded-xl font-bold text-lg hover:border-brand-primary dark:hover:border-blue-500 hover:text-brand-primary dark:hover:text-blue-500 transition-all font-headline"
                                        >
                                            {project.repoLabel || project.demoLabel || 'View Code'}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
