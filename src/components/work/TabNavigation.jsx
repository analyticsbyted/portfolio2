import React from 'react';
import { motion } from 'framer-motion';

function TabNavigation({ tabs, activeTab, setActiveTab }) {
    return (
        <div className="inline-flex flex-wrap justify-center p-1.5 bg-surface/50 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl border border-border dark:border-gray-700 shadow-sm relative">
            {tabs.map(tab => (
                <button
                    key={tab.key}
                    onClick={() => { setActiveTab(tab.key); }}
                    className={`relative px-6 py-3 rounded-xl text-sm font-bold transition-colors duration-200 z-10 font-headline ${
                        activeTab === tab.key 
                        ? 'text-white' 
                        : 'text-muted-foreground dark:text-gray-400 hover:text-foreground dark:hover:text-white'
                    }`}
                    role="tab"
                    aria-selected={activeTab === tab.key}
                    aria-controls={`tabpanel-${tab.key}`}
                    id={`tab-${tab.key}`}
                >
                    {activeTab === tab.key && (
                        <motion.div
                            layoutId="activeTab"
                            className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-xl shadow-md -z-10"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    )}
                    {tab.name}
                </button>
            ))}
        </div>
    );
}

export default TabNavigation;
