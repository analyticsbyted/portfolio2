import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import ImageWithSkeleton from './ImageWithSkeleton';

const PhoneMockup = ({ src, alt, className = "" }) => {
    // Motion values for mouse tracking
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth springs for rotation
    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    // Map mouse position to rotation degrees
    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

    // Calculate mouse position relative to center
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXVal = e.clientX - rect.left;
        const mouseYVal = e.clientY - rect.top;
        
        // Normalize to -0.5 to 0.5
        const xPct = mouseXVal / width - 0.5;
        const yPct = mouseYVal / height - 0.5;
        
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div style={{ perspective: "1200px" }} className={className}>
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d"
                }}
                className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl cursor-default"
            >
                {/* Notch */}
                <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-10"></div>

                {/* Side buttons */}
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>

                {/* Screen content */}
                <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white dark:bg-gray-800 z-0 relative transform translate-z-1">
                    <ImageWithSkeleton
                        src={src}
                        alt={alt}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Glare effect */}
                <div className="absolute inset-0 rounded-[2.5rem] pointer-events-none ring-1 ring-white/10 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] z-20"></div>
                
                {/* Dynamic Shine */}
                <motion.div 
                    className="absolute inset-0 rounded-[2.5rem] pointer-events-none z-30 bg-gradient-to-tr from-transparent via-white/5 to-transparent"
                    style={{
                        opacity: useTransform(mouseY, [-0.5, 0.5], [0, 0.3])
                    }}
                />
            </motion.div>
        </div>
    );
};

export default PhoneMockup;
