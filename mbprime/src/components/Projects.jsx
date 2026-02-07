import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Trees, Waves, Trophy, UserCheck, Bike, Home,
    Train, Plane, Navigation, Hospital, School,
    CheckCircle2, MapPin, Download, Layout as LayoutIcon,
    ArrowLeft, Compass, TrendingUp
} from 'lucide-react';
import sklmLayout from '../assets/sklmlayout.png';
import villa from '../assets/villa_sklm.png';
import brochurePdf from '../assets/MB-Prime-Villas-Plots-Srikakulam.pdf';

const ProjectDetailView = ({ onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const specialFeatures = [
        { icon: <Trees size={24} />, text: "Children's Park" },
        { icon: <Waves size={24} />, text: "Water Theme Park" },
        { icon: <Trophy size={24} />, text: "Cricket Court" },
        { icon: <UserCheck size={24} />, text: "Adults Park & Yoga Lawn" },
        { icon: <Bike size={24} />, text: "Jogging Track" },
        { icon: <Home size={24} />, text: "Modern Clubhouse with Pool" },
        { icon: <Trees size={24} />, text: "Landscaped Gardens & Outdoor Seating" },
    ];

    const projectHighlights = [
        { icon: <Train size={24} />, text: "10 mins to Srikakulam Railway Station & RTC Complex" },
        { icon: <Plane size={24} />, text: "60 mins to Bhogapuram International Airport" },
        { icon: <Navigation size={24} />, text: "Easy access to Palakonda Road & NH-16" },
        { icon: <Hospital size={24} />, text: "Just 5 mins to GEMS Hospital" },
        { icon: <School size={24} />, text: "Near top schools like Gayatri Educational Society" },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="fixed inset-0 z-[2000] bg-primary overflow-y-auto hide-scrollbar"
        >
            {/* 1. Header with Back Button */}
            <div className="sticky top-0 z-[2100]  backdrop-blur-xl border-b border-[#ff6600]/10 px-6 py-4 flex justify-between items-center">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-secondary font-bold hover:text-white transition-colors uppercase tracking-[0.2em] text-[8px] md:text-sm"
                >
                    <ArrowLeft size={16} /> Back to Projects
                </button>
                <div className="text-secondary/50 font-serif font-bold italic text-sm">MB Prime Srikakulam</div>
            </div>

            {/* 2. Detail Content Intro */}
            <div className="relative py-32 bg-primary">
                <div className="absolute inset-0">
                    <img
                        src={villa}
                        alt="Hero background"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0  from-black/20 via-primary/20 to-primary"></div>
                </div>
                <div className="container relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-8xl font-serif font-extrabold text-white mb-6 tracking-tight">
                            MB Prime <span className="text-secondary italic">Villas & Plots</span>
                        </h1>
                        <p className="text-secondary/60 font-bold tracking-[0.5em] uppercase text-[0.6rem] md:text-xs">Srikakulam, Andhra Pradesh</p>
                    </motion.div>
                </div>
            </div>

            {/* 3. Main Details Area */}
            <div className="py-32 border-t border-white/5 bg-[#0a192f]">
                <div className="container">
                    <div className="text-center max-w-5xl mx-auto mb-16 md:mb-24">
                        <h2 className="text-3xl md:text-7xl font-serif font-extrabold text-white mb-8 md:mb-10 leading-tight">
                            Your Future Starts Here. <br />
                            <span className="text-secondary italic">Premium Living in Srikakulam</span>
                        </h2>
                        <div className="w-32 h-1 bg-secondary mx-auto mb-12"></div>
                        <p className="text-xl md:text-2xl text-textMuted leading-relaxed font-sans font-medium italic">
                            "Live where lifestyle meets nature at MB Prime Projects, a RERA-approved gated
                            community with top-class amenities, excellent connectivity, and unmatched value."
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Special Features Card */}
                        <div className="bg-[#112240] border border-secondary/20 p-6 md:p-12 rounded-3xl hover:border-secondary/50 transition-all duration-500 group shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-secondary/10"></div>

                            <h3 className="text-xl md:text-3xl font-serif font-bold text-white mb-6 md:mb-12 flex items-center gap-4 md:gap-6">
                                <div className="w-1.5 h-8 md:w-2 md:h-12 bg-secondary rounded-full"></div>
                                Special Features
                            </h3>
                            <div className="space-y-4 md:space-y-6">
                                {specialFeatures.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 md:gap-6 p-3 md:p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                                        <div className="w-8 h-8 md:w-14 md:h-14 shrink-0 rounded-full bg-secondary text-primary flex items-center justify-center shadow-lg shadow-secondary/20">
                                            {React.cloneElement(item.icon, { size: 18, className: "md:w-6 md:h-6" })}
                                        </div>
                                        <span className="font-bold text-white text-[10px] md:text-base tracking-wide uppercase">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Project Highlights Card */}
                        <div className="bg-[#112240] border border-secondary/20 p-6 md:p-12 rounded-3xl hover:border-secondary/50 transition-all duration-500 group shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-secondary/10"></div>

                            <h3 className="text-xl md:text-3xl font-serif font-bold text-white mb-6 md:mb-12 flex items-center gap-4 md:gap-6">
                                <div className="w-1.5 h-8 md:w-2 md:h-12 bg-secondary rounded-full"></div>
                                Project Highlights
                            </h3>
                            <div className="space-y-4 md:space-y-6">
                                {projectHighlights.map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4 md:gap-6 p-3 md:p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                                        <div className="w-8 h-8 md:w-14 md:h-14 shrink-0 rounded-xl bg-secondary text-primary flex items-center justify-center shadow-lg shadow-secondary/20">
                                            {React.cloneElement(item.icon, { size: 18, className: "md:w-6 md:h-6" })}
                                        </div>
                                        <span className="font-bold text-white text-[10px] md:text-lg leading-snug pt-1 md:pt-2">
                                            {item.text}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. Location Details */}
            <div className="py-24 md:py-32 bg-white border-y border-gray-100">
                <div className="container">
                    <div className="bg-white rounded-[24px] md:rounded-[40px] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
                        <div className="lg:w-1/2 p-6 md:p-20 space-y-6 md:space-y-12 bg-white">
                            <h2 className="text-2xl md:text-5xl font-serif font-extrabold text-primary">Location Map</h2>
                            <div className="space-y-4 md:space-y-8">
                                {projectHighlights.slice(0, 3).map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 md:gap-6 group">
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary/10 border border-secondary/30 text-secondary flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-primary transition-all">
                                            {React.cloneElement(item.icon, { size: 18, className: "md:w-6 md:h-6" })}
                                        </div>
                                        <span className="font-bold text-sm md:text-base text-primary/80 group-hover:text-primary transition-colors leading-tight">
                                            {item.text}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <a href={brochurePdf} download className="btn-primary w-full py-3 md:py-6 rounded-full flex items-center justify-center gap-3 md:gap-4 text-[9px] md:text-lg font-black mt-6 md:mt-10 shadow-lg shadow-secondary/20 cursor-pointer">
                                <Download size={16} className="md:w-6 md:h-6" /> Download Project PDF
                            </a>
                        </div>
                        <div className="lg:w-1/2 h-[300px] lg:h-auto min-h-[300px] lg:min-h-[500px]">
                            <iframe
                                src="https://maps.google.com/maps?q=Srikakulam&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(0%)' }}
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. Master Plan */}
            <div className="py-24 md:py-38">
                <div className="container text-center">
                    <h4 className="uppercase tracking-[0.6em] text-secondary/40 font-bold text-[0.6rem] mb-6">Expert Blueprint</h4>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-16 italic">Architectural Master Plan</h2>
                    <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(182,145,33,0.1)] border border-white/10 group bg-white/5 p-4">
                        <div className="rounded-2xl overflow-hidden">
                            <img
                                src={sklmLayout}
                                alt="Master Plan"
                                className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-1000"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer space */}
            <div className=" py-16 md:py-32 text-center">
                <div className="container">
                    <div className="w-16 h-[1px] bg-secondary/30 mx-auto mb-10"></div>
                    <p className="text-white/20 uppercase tracking-[0.5em] font-sans font-bold text-[0.6rem]">MB Prime Projects • Official Presentation</p>
                    <p className="text-secondary/20 mt-4 font-serif italic">We Create Landmarks</p>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const [isExploring, setIsExploring] = useState(false);



    const projectsList = [
        {
            name: 'MB Prime Villas & Plots @ Srikakulam',
            location: 'Srikakulam, Andhra Pradesh',
            desc: 'Live where lifestyle meets nature. A RERA-approved gated community starting at ₹50 Lakhs.',
            isPremier: true
        },

    ];

    return (
        <section id="projects" className="py-32 bg-[#020c1b]">
            <div className="container">
                <div className="text-center mb-16 md:mb-24">
                    <h4 className="uppercase tracking-[0.4em] text-secondary mb-4 font-sans font-bold text-xs md:text-sm">Our Signature Projects</h4>
                    <h2 className="text-3xl md:text-7xl text-white font-serif font-extrabold max-w-4xl mx-auto leading-tight">
                        Legacy Investments in <span className="text-secondary italic">Srikakulam</span>
                    </h2>
                </div>

                <div className={`flex flex-wrap justify-center gap-8 mt-12 px-4 ${projectsList.length === 1 ? 'items-center' : ''}`}>
                    {projectsList.map((project, index) => (
                        <motion.div
                            key={index}
                            className={`glass-card p-0 overflow-hidden border border-white/10 flex flex-col ${projectsList.length === 1 ? 'lg:flex-row w-full max-w-6xl' : 'w-full md:max-w-[48%]'} group shadow-2xl shadow-black/50`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className={`relative w-full ${projectsList.length === 1 ? 'lg:w-3/5 h-[250px] lg:h-auto' : 'h-[250px]'} overflow-hidden`}>
                                <img
                                    src={villa}
                                    alt={project.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                />
                                {project.isPremier && (
                                    <div className="absolute top-6 left-6 bg-secondary text-primary px-5 py-2 font-black text-xs uppercase rounded-sm shadow-2xl tracking-widest">
                                        Premier Flagship
                                    </div>
                                )}
                            </div>

                            <div className={`w-full ${projectsList.length === 1 ? 'lg:w-2/5 p-6 md:p-14' : 'p-6 md:p-10'} flex flex-col justify-center bg-[#0a192f] border-l border-white/5`}>
                                <h3 className={`text-xl ${projectsList.length === 1 ? 'md:text-3xl' : 'md:text-2xl'} font-serif font-extrabold text-white mb-4 md:mb-6 leading-tight`}>
                                    {project.name}
                                </h3>
                                <div className="flex items-center gap-2 text-secondary/60 mb-6 md:mb-8 font-sans font-bold tracking-widest text-[10px] md:text-xs uppercase">
                                    <MapPin size={14} className="md:w-4 md:h-4" /> {project.location}
                                </div>
                                <p className="text-textMuted text-sm md:text-base leading-relaxed mb-6 md:mb-10 italic">
                                    "{project.desc}"
                                </p>

                                <div className="grid grid-cols-2 gap-4 md:gap-8 py-6 md:py-8 border-y border-white/5 mb-6 md:mb-10">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2 text-secondary">
                                            <Compass size={14} className="md:w-4 md:h-4" />
                                            <span className="text-[0.5rem] md:text-[0.6rem] uppercase font-bold tracking-widest">Design</span>
                                        </div>
                                        <p className="text-white text-xs md:text-sm font-bold">Vastu Perfect</p>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2 text-secondary">
                                            <TrendingUp size={14} className="md:w-4 md:h-4" />
                                            <span className="text-[0.5rem] md:text-[0.6rem] uppercase font-bold tracking-widest">Returns</span>
                                        </div>
                                        <p className="text-white text-xs md:text-sm font-bold">High ROI</p>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setIsExploring(true)}
                                    className="btn-primary w-full py-3 md:py-5 text-[10px] md:text-lg font-black shadow-inner"
                                >
                                    EXPLORE PROJECT
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {isExploring && (
                    <ProjectDetailView onBack={() => setIsExploring(false)} />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
