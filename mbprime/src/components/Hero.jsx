import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section className="relative min-h-screen w-full flex items-center bg-hero-pattern bg-cover bg-center overflow-hidden">
            {/* Grain Overlay */}
            <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none z-1"></div>

            {/* Ambient Light Effect */}
            <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container relative z-10">
                <motion.div
                    className="max-w-[900px]"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
                        <span className="w-5 h-[0.5px] bg-secondary"></span>
                        <h4 className="text-secondary uppercase tracking-[0.4em] text-[8px] md:text-sm font-sans font-bold">
                            Elevating Srikakulam Real Estate
                        </h4>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl sm:text-5xl md:text-7xl leading-[1.1] mb-6 md:mb-8 font-serif font-extrabold tracking-tight text-white"
                    >
                        Pure <span className="text-secondary italic font-serif font-light">Grandeur</span> <br />
                        In Every Detail.
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-[12px] sm:text-md md:text-xl text-textMuted mb-8 md:mb-12 max-w-[600px] leading-relaxed font-sans"
                    >
                        Premium villa plots curated for those who seek luxury, safety, and a lifetime of peace.
                        Invest in a legacy designed by visionaries.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
                        <a href="#projects" className="btn-primary group flex items-center gap-2 px-5 py-2 text-sm sm:text-base sm:px-8 sm:py-3">
                            Explore Projects
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform sm:w-5 sm:h-5" />
                        </a>
                        <button className="flex items-center gap-3 text-white hover:text-secondary transition-all group py-2 sm:py-3">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-secondary transition-colors">
                                <Play size={14} fill="white" className="ml-1 group-hover:fill-secondary sm:w-4 sm:h-4" />
                            </div>
                            <span className="font-semibold uppercase tracking-[0.2em] text-xs sm:text-sm">Our Vision</span>
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Floating Luxury Elements */}
            <motion.div
                className="absolute right-[10%] top-[50%] hidden xl:block z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                    opacity: 1,
                    y: [0, -15, 0],
                }}
                transition={{
                    opacity: { duration: 1, delay: 1.2 },
                    y: {
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }}
            >
                <div className="relative group">
                    {/* Ring glow */}
                    <div className="absolute inset-0 bg-secondary/20 rounded-full blur-2xl group-hover:bg-secondary/30 transition-all duration-700"></div>

                    {/* Circle Content */}
                    <div className="w-48 h-48 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl flex flex-col items-center justify-center p-6 text-center shadow-2xl relative overflow-hidden group-hover:border-secondary/30 transition-colors">
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                        <div className="relative">
                            <h3 className="text-secondary font-serif text-5xl font-extrabold mb-1 tracking-tighter">100+</h3>
                            <div className="w-8 h-[1px] bg-white/20 mx-auto mb-2"></div>
                            <p className="text-[0.65rem] leading-tight uppercase tracking-[0.2em] font-sans text-white/70 font-bold px-2">
                                Trusted by <br /> Elite Families
                            </p>
                        </div>

                        {/* Decorative circle */}
                        <div className="absolute -bottom-2 -right-2 w-12 h-12 border border-secondary/20 rounded-full"></div>
                    </div>
                </div>
            </motion.div>

            {/* Bottom Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
            >
                <span className="text-[0.6rem] uppercase tracking-[0.5em] text-white/30 vertical-text">Scroll</span>
                <div className="w-[1px] h-16 bg-linear-to-b from-secondary to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
