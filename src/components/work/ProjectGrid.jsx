import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

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
    const [selectedId, setSelectedId] = useState(null);

    const handleSelect = (id) => {
        setSelectedId(id);
    };

    const handleClose = () => {
        setSelectedId(null);
    };

    const selectedProject = projects.find(p => p.title === selectedId);

    return (
        <>
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
                                    onSelect={() => handleSelect(app.title)}
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            </AnimatePresence>
            
            <ProjectModal 
                project={selectedProject} 
                isOpen={!!selectedId} 
                onClose={handleClose} 
            />
        </>
    );
}

export default ProjectGrid;
