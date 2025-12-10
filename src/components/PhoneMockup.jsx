
import ImageWithSkeleton from './ImageWithSkeleton';

const PhoneMockup = ({ src, alt, className = "" }) => {
    return (
        <div className={`relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl ${className}`}>
            {/* Notch */}
            <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-10"></div>

            {/* Side buttons */}
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>

            {/* Screen content */}
            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white dark:bg-gray-800 z-0 relative">
                <ImageWithSkeleton
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Glare effect (optional) */}
            <div className="absolute inset-0 rounded-[2.5rem] pointer-events-none ring-1 ring-white/10 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] z-20"></div>
        </div>
    );
};

export default PhoneMockup;
