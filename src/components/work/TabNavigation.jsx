import React from 'react';

function TabNavigation({ tabs, activeTab, setActiveTab }) {
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map(tab => (
                <button
                    key={tab.key}
                    className={`px-8 py-4 rounded-2xl text-button transition-all duration-300 border-2 font-headline ${activeTab === tab.key
                        ? 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white border-brand-primary shadow-lg transform hover:scale-105'
                        : 'bg-card dark:bg-gray-800 text-foreground dark:text-gray-300 border-border dark:border-gray-700 hover:border-brand-primary/50 hover:shadow-md hover:bg-muted dark:hover:bg-gray-700'
                        }`}
                    onClick={() => { setActiveTab(tab.key); }}
                    role="tab"
                    aria-selected={activeTab === tab.key}
                    aria-controls={`tabpanel-${tab.key}`}
                    id={`tab-${tab.key}`}
                >
                    {tab.name}
                </button>
            ))}
        </div>
    );
}

export default TabNavigation;
