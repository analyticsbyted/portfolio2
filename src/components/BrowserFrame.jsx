import React from 'react';

const BrowserFrame = ({ children, className = '' }) => {
    return (
        <div className={`relative rounded-xl overflow-hidden bg-surface dark:bg-card border border-border dark:border-border shadow-sm ${className}`}>
            {/* Browser Toolbar */}
            <div className="bg-muted dark:bg-muted/10 border-b border-border dark:border-border h-8 flex items-center px-4 gap-2 select-none">
                <div className="flex gap-1.5">
                    {/* Mac traffic light buttons - keeping realistic colors for browser chrome */}
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
                </div>
                {/* URL Bar simulation */}
                <div className="flex-1 ml-4 flex items-center">
                    <div className="h-4 bg-surface dark:bg-surface-dark/50 rounded-md w-full max-w-[60%] mx-auto opacity-50" />
                </div>
            </div>
            {/* Content Area */}
            <div className="relative w-full overflow-hidden bg-surface dark:bg-surface-dark">
                {children}
            </div>
        </div>
    );
};

export default BrowserFrame;
