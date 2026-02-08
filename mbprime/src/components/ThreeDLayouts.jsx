import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight, Map, Info } from 'lucide-react';

// Image URLs (provided by user)
const layouts = [
    {
        image: "https://res.cloudinary.com/durbtkhbz/image/upload/v1770525312/sklmlayout_apnxnc.png",
        title: "Architectural Master Plan",
        subtitle: "Global Vision",
        desc: "A comprehensive overview of the entire project landscape and community zones."
    },
    {
        image: "https://res.cloudinary.com/durbtkhbz/image/upload/v1770525074/mb-villa2_hmgskh.png",
        title: "Elite Villa Layout",
        subtitle: "Modern Living",
        desc: "Detailed floor plans for our premium villas focusing on space and natural light."
    },
    {
        image: "https://res.cloudinary.com/durbtkhbz/image/upload/v1770525074/mb-vill1_a2frsm.png",
        title: "Premier Plot Map",
        subtitle: "Investment Hub",
        desc: "Strategic plot distributions optimized for maximum ROI and privacy."
    }
];

const TiltCarouselCard = ({ image }) => {
    const cardRef = useRef(null);

    // Mouse position relative to the card center
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth springing for the tilt
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    // Rotate mapping
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = (mouseX / width) - 0.5;
        const yPct = (mouseY / height) - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: "1500px",
                transformStyle: "preserve-3d",
                rotateX,
                rotateY,
            }}
            className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-white border border-secondary/10 shadow-2xl cursor-grab active:cursor-grabbing"
        >
            <motion.div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
            />
            {/* Ambient Lighting Overlay */}
            <div className="absolute inset-0 bg-linear-to-tr from-primary/30 via-transparent to-white/5 pointer-events-none" />
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.2)] pointer-events-none" />
        </motion.div>
    );
};

const ThreeDLayouts = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    // Auto-play logic
    useEffect(() => {
        const timer = setInterval(() => {
            nextStep();
        }, 5000); // Change every 5 seconds

        return () => clearInterval(timer);
    }, [currentIndex]);

    const nextStep = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % layouts.length);
    };

    const prevStep = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + layouts.length) % layouts.length);
    };

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.9,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.9,
        })
    };

    return (
        <section id="layouts" className="py-12 md:py-20 bg-bg-light overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container">
                <div className="text-center max-w-4xl mx-auto mb-10 md:mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-secondary font-bold tracking-[0.5em] uppercase mb-4 text-[10px] md:text-xs">Premium Engineering</h4>
                        <h2 className="text-4xl md:text-6xl font-serif font-extrabold text-primary mb-8 md:mb-10 leading-tight">
                            Project <span className="text-secondary italic">Blueprints</span>
                        </h2>
                    </motion.div>
                </div>

                {/* Carousel Container */}
                <div className="relative max-w-6xl mx-auto px-4 md:px-0">
                    <div className="relative overflow-visible min-h-[400px] md:min-h-[750px]">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.4 },
                                    scale: { duration: 0.4 }
                                }}
                                className="absolute inset-0"
                            >
                                <div className="flex flex-col items-center">
                                    <TiltCarouselCard image={layouts[currentIndex].image} />

                                    {/* Text Content Below Image */}
                                    <motion.div
                                        className="mt-12 md:mt-10 text-center max-w-3xl"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <div className="flex justify-center gap-4 mt-12 md:mt-3">
                                            {layouts.map((_, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => {
                                                        setDirection(idx > currentIndex ? 1 : -1);
                                                        setCurrentIndex(idx);
                                                    }}
                                                    className={`h-1.5 md:h-2 transition-all duration-500 rounded-full ${currentIndex === idx ? 'w-12 md:w-16 bg-secondary' : 'w-4 md:w-4 bg-slate-200'}`}
                                                />
                                            ))}
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-serif font-extrabold text-primary italic mb-3 mt-4">
                                            {layouts[currentIndex].title}
                                        </h3>
                                        <p className="text-slate-600 text-sm md:text-md font-medium leading-relaxed italic opacity-80">
                                            "{layouts[currentIndex].desc}"
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="absolute top-[25%] md:top-[30%] -left-4 md:-left-16 z-20">
                        <button
                            onClick={prevStep}
                            className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border border-slate-200 shadow-xl flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-all transform hover:scale-110 group"
                        >
                            <ChevronLeft size={32} className="group-active:scale-90 transition-transform" />
                        </button>
                    </div>
                    <div className="absolute top-[25%] md:top-[30%] -right-4 md:-right-16 z-20">
                        <button
                            onClick={nextStep}
                            className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border border-slate-200 shadow-xl flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-all transform hover:scale-110 group"
                        >
                            <ChevronRight size={32} className="group-active:scale-90 transition-transform" />
                        </button>
                    </div>

                    {/* Progress indicators */}

                </div>

                {/* Footer Feature */}
                {/* <motion.div
                    className="mt-32 md:mt-48 max-w-4xl mx-auto p-1px bg-linear-to-r from-transparent via-white/20 to-transparent"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    <div className="bg-[#020c1b]/80 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] border border-white/5 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                        <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20 shadow-2xl shadow-secondary/10 shrink-0">
                            <Map size={48} />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-white text-2xl md:text-3xl font-serif font-bold italic mb-2 tracking-wide">Premium RERA Certified Layouts</h4>
                            <p className="text-textMuted text-sm md:text-base leading-relaxed">Every blueprint is optimized for luxury, community living, and high-value returns. Download the full architectural technical specifications below.</p>
                        </div>
                        <button className="btn-primary px-10 py-5 text-sm font-black uppercase tracking-widest whitespace-nowrap shadow-inner">
                            Get Tech Specs
                        </button>
                    </div>
                </motion.div> */}
            </div>
        </section>
    );
};

export default ThreeDLayouts;
