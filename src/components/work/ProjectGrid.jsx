import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    },
    exit: { 
        opacity: 0,
        transition: { duration: 0.2 }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: {
            type: "spring",
            stiffness: 50,
            damping: 15
        }
    }
};

function ProjectGrid({ activeTab, projects }) {
    // Check if we are in "Product/Web" mode (visual cards) or "Data/Research" mode (detailed analysis cards)
    const isVisualTab = activeTab === 'products' || activeTab === 'web';

    return (
        <AnimatePresence mode="wait">
            <motion.section
                key={activeTab}
                variants={container}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="mb-16"
                id={`tabpanel-${activeTab}`}
                role="tabpanel"
                aria-labelledby={`tab-${activeTab}`}
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((app) => (
                        <motion.div key={`${activeTab}-${app.title}`} variants={item} className="h-full">
                            <ProjectCard
                                project={app}
                                isVisual={isVisualTab}
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </AnimatePresence>
    );
}

export default ProjectGrid;
