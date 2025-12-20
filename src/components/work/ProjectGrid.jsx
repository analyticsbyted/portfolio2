import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';

function ProjectGrid({ activeTab, projects }) {
    // Check if we are in "Product/Web" mode (visual cards) or "Data/Research" mode (detailed analysis cards)
    const isVisualTab = activeTab === 'products' || activeTab === 'web';

    return (
        <AnimatePresence mode="wait">
            <motion.section
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mb-16"
                id={`tabpanel-${activeTab}`}
                role="tabpanel"
                aria-labelledby={`tab-${activeTab}`}
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((app) => (
                        <ProjectCard
                            key={`${activeTab}-${app.title}`}
                            project={app}
                            isVisual={isVisualTab}
                        />
                    ))}
                </div>
            </motion.section>
        </AnimatePresence>
    );
}

export default ProjectGrid;
