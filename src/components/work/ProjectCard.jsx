import React from 'react';
import Card from '../Card';
import ImageWithSkeleton from '../ImageWithSkeleton';
import BrowserFrame from '../BrowserFrame';

function ProjectCard({ project, isVisual, onSelect }) {
    return (
        <Card
            key={`${isVisual ? 'visual' : 'data'}-${project.title}`}
            layoutId={`project-${project.title}`}
            onClick={onSelect}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/60 hover:shadow-xl transition-shadow group h-full flex flex-col cursor-pointer"
        >
            {isVisual ? (
                // Visual Card Content (Mobile/Web)
                <>
                    {/* Image Area - Different for Mobile vs Web */}
                    {project.type === 'mobile' && project.images ? (
                        <div className="relative bg-muted/40 overflow-hidden rounded-t-2xl mt-3 mx-3 pt-4">
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary/30 to-brand-secondary/30 z-10" aria-hidden="true" />
                            <div className="p-3 flex justify-center">
                                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
                                    {project.images.map((image, imgIdx) => (
                                        <div key={imgIdx} className="flex-shrink-0 w-32 md:w-36 h-auto flex items-center justify-center">
                                            <ImageWithSkeleton
                                                src={image.src}
                                                alt={image.alt}
                                                className="h-full w-auto object-contain rounded-lg shadow-sm"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="p-6 mt-2">
                            <BrowserFrame className="group-hover:shadow-md transition-shadow duration-300">
                                <div className="aspect-[16/10] bg-muted dark:bg-muted/20 flex items-start overflow-hidden">
                                    <ImageWithSkeleton
                                        src={project.img}
                                        alt={project.alt}
                                        className="w-full h-auto object-cover object-top hover:-translate-y-[10%] transition-transform duration-[2000ms] ease-in-out cursor-pointer"
                                    />
                                </div>
                            </BrowserFrame>
                        </div>
                    )}

                    {/* Content Area */}
                    <div className="p-6 flex-1 flex flex-col">
                        {/* Tech Stack Badges */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.stack.map((s, i) => (
                                <span key={i} className="px-2.5 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-md text-xs font-bold border border-blue-200 dark:border-blue-800">
                                    {s}
                                </span>
                            ))}
                        </div>

                        <h3 className="text-headline-3 md:text-headline-3-md font-bold text-foreground dark:text-white mb-2 font-headline">{project.title}</h3>
                        <p className="text-body text-muted-foreground dark:text-gray-300 mb-6 flex-1 leading-relaxed font-body">{project.tagline}</p>

                        <ul className="space-y-2 text-muted-foreground dark:text-gray-300 mb-8 text-body-small font-body">
                            {project.features.map((f, i) => (
                                <li key={i} className="flex items-start gap-2.5">
                                    <span className="text-brand-primary dark:text-brand-accent mt-0.5 flex-shrink-0">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    </span>
                                    <span>{f}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border dark:border-gray-700">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-xl font-semibold hover:from-brand-accent hover:to-brand-accent-alt transition-all shadow-sm text-sm font-headline"
                                aria-label={`Open ${project.title}`}
                            >
                                {project.linkLabel}
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                            {project.repoLink && (
                                <a
                                    href={project.repoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-xl border border-gray-200 dark:border-gray-600 text-foreground dark:text-white hover:border-brand-primary dark:hover:border-brand-primary hover:text-brand-primary dark:hover:text-brand-primary hover:bg-brand-primary/5 dark:hover:bg-brand-primary/10 transition-all shadow-sm font-headline"
                                    aria-label={`View Code for ${project.title}`}
                                >
                                    {project.repoLabel || 'View Code'}
                                </a>
                            )}
                        </div>
                    </div>
                </>
            ) : (
                // Analysis Card Content (Data/Research)
                <>
                    <div className={`relative ${project.scrollable ? 'h-64' : 'h-48'} bg-muted/40 dark:bg-muted/20 overflow-hidden rounded-t-2xl flex items-start justify-center ${project.scrollable ? 'pt-0' : 'pt-8'} px-4 pb-0 mt-3 mx-3`}>
                        <div className="absolute top-0 right-0 bg-brand-primary/10 dark:bg-brand-primary/20 text-brand-primary dark:text-brand-accent text-xs font-bold px-3 py-1 rounded-bl-xl z-20">
                            {project.category}
                        </div>
                        <ImageWithSkeleton
                            src={project.img}
                            alt={project.title}
                            className={`${project.scrollable ? 'w-full h-auto object-cover object-top hover:-translate-y-[50%] transition-transform duration-[6000ms]' : 'h-full w-full object-contain'} ease-in-out cursor-pointer opacity-90 group-hover:opacity-100 transition-opacity`}
                        />
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                        <div className="flex flex-wrap gap-2 mb-3">
                            {project.skills && project.skills.map((skill, i) => (
                                <span key={i} className="px-2.5 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-md text-xs font-bold border border-blue-200 dark:border-blue-800">
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <h3 className="text-headline-3 font-bold text-foreground dark:text-white mb-4 font-headline">{project.title}</h3>

                        <div className="space-y-4 mb-6 flex-1">
                            <div>
                                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground/70 dark:text-gray-500 mb-1 font-body">Problem</div>
                                <p className="text-sm text-muted-foreground dark:text-gray-300 leading-relaxed font-body">
                                    {project.problem}
                                </p>
                            </div>

                            <div>
                                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground/70 dark:text-gray-500 mb-1 font-body">Approach</div>
                                <p className="text-sm text-muted-foreground dark:text-gray-300 leading-relaxed font-body">
                                    {project.approach}
                                </p>
                            </div>

                            <div>
                                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground/70 dark:text-gray-500 mb-1 font-body">Result</div>
                                <p className="text-sm text-muted-foreground dark:text-gray-300 leading-relaxed font-body">
                                    {project.result}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 pt-4 border-t border-border dark:border-gray-700 mt-auto">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-xl font-semibold hover:from-brand-accent hover:to-brand-accent-alt transition-all shadow-sm text-sm font-headline"
                            >
                                {project.linkLabel}
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                            {project.demoLink && (
                                <a
                                    href={project.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-xl border border-gray-200 dark:border-gray-600 text-foreground dark:text-white hover:border-brand-primary dark:hover:border-brand-primary hover:text-brand-primary dark:hover:text-brand-primary hover:bg-brand-primary/5 dark:hover:bg-brand-primary/10 transition-all shadow-sm font-headline"
                                >
                                    {project.demoLabel}
                                </a>
                            )}
                        </div>
                    </div>
                </>
            )}
        </Card>
    );
}

export default ProjectCard;
