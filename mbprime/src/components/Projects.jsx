import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Trees, Waves, Trophy, UserCheck, Bike, Home,
    Train, Plane, Navigation, Hospital, School,
    CheckCircle2, MapPin, Download, Layout as LayoutIcon,
    ArrowLeft, Compass, TrendingUp, ChevronDown, ChevronUp
} from 'lucide-react';
import sklmLayout from '../assets/sklmlayout.png';


const ProjectDetailView = ({ project, onBack }) => {
    const [showVillaPlans, setShowVillaPlans] = useState(false);

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
            <div className="absolute top-0 left-0 right-0 z-[2100] px-6 py-6 flex justify-between items-center">
                <button
                    onClick={onBack}
                    className="flex items-center gap-1 md:gap-2 text-secondary font-bold hover:text-white transition-colors text-[6px] md:text-sm uppercase tracking-wider"
                >
                    <ArrowLeft size={18} className="w-3 h-4 md:w-5 md:h-5" /> Back to Projects
                </button>
                <div className="text-secondary font-serif font-bold italic text-[10px] md:text-base">{project.name}</div>
            </div>

            {/* 2. Detail Content Intro */}
            <div className="relative py-16 md:py-26 bg-primary min-h-[50vh] flex items-center">
                <div className="absolute inset-0">
                    <img
                        src={project.image}
                        alt="Hero background"
                        className="w-full h-full object-cover opacity-30"
                    />
                    {/* <div className="absolute inset-0 bg-linear-to-b from-primary/10 via-primary/10 to-primary"></div> */}
                </div>
                <div className="container relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {project.logo && (
                            <motion.img
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                src={project.logo}
                                alt="Project Logo"
                                className="h-16 md:h-24 mx-auto mb-8 drop-shadow-[0_0_30px_rgba(182,145,33,0.3)]"
                            />
                        )}
                        <h1 className="text-2xl md:text-6xl font-serif font-extrabold text-white mb-4 tracking-tight">
                            MB Prime <span className="text-secondary italic">Villas & Plots</span>
                        </h1>
                        <p className="text-secondary/60 font-bold tracking-[0.5em] uppercase text-[0.6rem] md:text-xs mb-8">{project.location}</p>

                        <div className="flex items-center justify-center gap-1 md:gap-3 text-[8px] md:text-[10px]  md:text-xs font-sans font-medium tracking-widest uppercase text-white/50">
                            <Link to="/" className="hover:text-secondary transition-colors duration-300">Home</Link>
                            <span className="text-secondary/30">•</span>
                            <button onClick={onBack} className="hover:text-secondary transition-colors duration-300 uppercase">Projects</button>
                            <span className="text-secondary/30">•</span>
                            <Link to="/progress" className="hover:text-secondary transition-colors duration-300">Project Progress</Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* 3. Main Details Area */}
            <div className="py-16 md:py-20 border-t border-secondary/10 bg-bg-light">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
                        <h2 className="text-xl md:text-4xl font-serif font-extrabold text-primary mb-4 md:mb-6 leading-tight">
                            Your Future Starts Here. <br />
                            <span className="text-secondary italic">Premium Living in Srikakulam</span>
                        </h2>
                        <div className="w-20 h-0.5 bg-secondary mx-auto mb-6"></div>
                        <p className="text-sm md:text-base text-slate-600 leading-relaxed font-sans font-medium italic">
                            "Live where lifestyle meets nature at MB Prime Projects, a RERA-approved gated
                            community with top-class amenities, excellent connectivity, and unmatched value."
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
                        {/* Special Features Card */}
                        <div className="bg-white border border-secondary/10 p-3 md:p-6 rounded-xl hover:border-secondary transition-all duration-500 group shadow-lg relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-secondary/10"></div>

                            <h3 className="text-base md:text-xl font-serif font-bold text-primary mb-3 md:mb-4 flex items-center gap-2 md:gap-3">
                                <div className="w-0.5 h-5 md:w-1 md:h-6 bg-secondary rounded-full"></div>
                                Special Features
                            </h3>
                            <div className="space-y-2 md:space-y-3">
                                {specialFeatures.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-2 md:gap-3 p-1.5 md:p-2 rounded-lg hover:bg-secondary/5 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:shadow-md cursor-pointer">
                                        <div className="w-6 h-6 md:w-8 md:h-8 shrink-0 rounded-full bg-secondary text-primary flex items-center justify-center shadow-md shadow-secondary/20 transition-transform duration-300 group-hover:rotate-12">
                                            {React.cloneElement(item.icon, { size: 12, className: "md:w-4 md:h-4" })}
                                        </div>
                                        <span className="font-bold text-primary text-[8px] md:text-xs tracking-wide uppercase">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Project Highlights Card */}
                        <div className="bg-white border border-secondary/10 p-3 md:p-6 rounded-xl hover:border-secondary transition-all duration-500 group shadow-lg relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-secondary/10"></div>

                            <h3 className="text-base md:text-xl font-serif font-bold text-primary mb-3 md:mb-4 flex items-center gap-2 md:gap-3">
                                <div className="w-0.5 h-5 md:w-1 md:h-6 bg-secondary rounded-full"></div>
                                Project Highlights
                            </h3>
                            <div className="space-y-2 md:space-y-3">
                                {projectHighlights.map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-2 md:gap-3 p-1.5 md:p-2 rounded-lg hover:bg-secondary/5 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:shadow-md cursor-pointer">
                                        <div className="w-6 h-6 md:w-8 md:h-8 shrink-0 rounded-xl bg-secondary text-primary flex items-center justify-center shadow-md shadow-secondary/20 transition-transform duration-300 group-hover:rotate-6">
                                            {React.cloneElement(item.icon, { size: 12, className: "md:w-4 md:h-4" })}
                                        </div>
                                        <span className="font-bold text-primary text-[8px] md:text-sm leading-snug pt-0.5">
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
            <div className="py-24 md:py-24 bg-bg-light ">
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
            {/* 5. Master Plan */}
            <div className="py-16 md:py-24 bg-bg-light">
                <div className="container">
                    <div className="text-center mb-10 md:mb-12">
                        <h4 className="uppercase tracking-[0.6em] md:text-xl text-secondary font-bold text-[0.6rem] mb-4">Expert Blueprint</h4>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary italic">Architectural Master Plan</h2>
                    </div>

                    <div className="flex flex-col items-center gap-8 max-w-7xl mx-auto px-4">
                        {/* Main Site Layout - Large */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="w-full max-w-5xl h-[250px] md:h-[450px] group relative overflow-hidden rounded-[24px] md:rounded-[32px] shadow-2xl border border-secondary/10 bg-white"
                        >
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
                            <img
                                src="https://res.cloudinary.com/durbtkhbz/image/upload/v1770525312/sklmlayout_apnxnc.png"
                                alt="Master Site Layout"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/80 to-transparent z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-white font-serif text-xl md:text-2xl font-bold">Site Layout</h3>
                                <p className="text-secondary text-xs md:text-sm font-sans tracking-widest uppercase">Comprehensive Master Plan</p>
                            </div>
                        </motion.div>

                        {/* Toggle Button */}
                        <motion.button
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            onClick={() => setShowVillaPlans(!showVillaPlans)}
                            className="flex items-center gap-2 px-6 py-3 bg-white border border-secondary/20 rounded-full shadow-lg hover:shadow-xl hover:border-secondary text-primary font-serif font-bold transition-all duration-300 group z-10"
                        >
                            {showVillaPlans ? "Hide Villa Layouts" : "View Villa Layouts"}
                            {showVillaPlans ? (
                                <ChevronUp size={20} className="text-secondary group-hover:-translate-y-1 transition-transform" />
                            ) : (
                                <ChevronDown size={20} className="text-secondary group-hover:translate-y-1 transition-transform" />
                            )}
                        </motion.button>

                        {/* Villa Plans - Expandable */}
                        <AnimatePresence>
                            {showVillaPlans && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="w-full max-w-5xl"
                                >
                                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 pt-4">
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 }}
                                            className="h-[250px] md:h-[300px] flex-1 group relative overflow-hidden rounded-[24px] md:rounded-[32px] shadow-xl border border-secondary/10 bg-white"
                                        >
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
                                            <img
                                                src="https://res.cloudinary.com/durbtkhbz/image/upload/v1770525074/mb-villa2_hmgskh.png"
                                                alt="Villa Layout East Facing"
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                                            />
                                            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 bg-gradient-to-t from-black/80 to-transparent z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                                <h3 className="text-white font-serif text-lg md:text-xl font-bold">East Facing Villa</h3>
                                                <p className="text-secondary text-[0.6rem] md:text-xs font-sans tracking-widest uppercase">Floor Plan A</p>
                                            </div>
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2 }}
                                            className="h-[250px] md:h-[300px] flex-1 group relative overflow-hidden rounded-[24px] md:rounded-[32px] shadow-xl border border-secondary/10 bg-white"
                                        >
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
                                            <img
                                                src="https://res.cloudinary.com/durbtkhbz/image/upload/v1770525074/mb-vill1_a2frsm.png"
                                                alt="Villa Layout West Facing"
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                                            />
                                            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 bg-gradient-to-t from-black/80 to-transparent z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                                <h3 className="text-white font-serif text-lg md:text-xl font-bold">West Facing Villa</h3>
                                                <p className="text-secondary text-[0.6rem] md:text-xs font-sans tracking-widest uppercase">Floor Plan B</p>
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Footer space */}
            <div className=" py-16 md:py-16 text-center bg-bg-light">
                <div className="container">
                    <div className="w-10 md:w-16 h-[1px] md:h-[1px] bg-secondary/30 mx-auto mb-10"></div>
                    <p className="text-primary/40 uppercase tracking-[0.5em] font-sans font-bold text-[0.4rem] md:text-[0.6rem]">MB Prime Projects • Official Presentation</p>
                    <p className="text-secondary/60 mt-4 font-serif italic">We Create Landmarks</p>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);



    const projectsList = [
        {
            name: 'MB Prime Villas & Plots @ Srikakulam',
            location: 'Srikakulam, Andhra Pradesh',
            logo: 'https://res.cloudinary.com/durbtkhbz/image/upload/v1770532608/Screenshot_2026-02-08_120623_ybe93p.png',
            image: 'https://res.cloudinary.com/durbtkhbz/image/upload/v1770534278/sklmproject_iknotx.jpg',
            desc: 'Live where lifestyle meets nature. A RERA-approved gated community starting at ₹50 Lakhs.',
            isPremier: true
        },


    ];

    return (
        <section id="projects" className="bg-bg-light pb-32">
            {/* Header with Background Image */}
            <div className="relative py-24 md:py-48 mb-16 md:mb-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://res.cloudinary.com/durbtkhbz/image/upload/v1770533075/project_villa_cvevxy.png"
                        alt="Projects Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]"></div>
                    <div className="absolute inset-0 bg-linear-to-b from-primary/10 via-transparent to-primary"></div>
                </div>

                <div className="container relative z-10">
                    <div className="text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="uppercase tracking-[0.4em] text-secondary mb-4 font-sans font-bold text-xs md:text-sm">Our Signature Projects</h4>
                            <h2 className="text-3xl md:text-7xl text-white font-serif font-extrabold max-w-4xl mx-auto leading-tight">
                                Legacy Investments in <span className="text-secondary italic">Srikakulam</span>
                            </h2>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="container">

                <div className={`flex flex-wrap justify-center gap-4 md:gap-6 mt-8 px-4 ${projectsList.length === 1 ? 'items-center' : ''}`}>
                    {projectsList.map((project, index) => (
                        <motion.div
                            key={index}
                            className={`bg-white p-0 overflow-hidden border border-secondary/10 rounded-lg flex flex-col ${projectsList.length === 1 ? 'lg:flex-row w-full max-w-5xl' : 'w-full md:max-w-[45%]'} group shadow-2xl`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className={`relative w-full ${projectsList.length === 1 ? 'lg:w-1/2 h-[220px] lg:h-auto' : 'h-[220px]'} overflow-hidden`}>
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                />
                                {project.logo && (
                                    <div className="absolute top-2 left-6 z-10 w-16 h-16 md:w-20 md:h-20  flex items-center justify-center p-2">
                                        <img src={project.logo} alt="Project Logo" className="w-full h-full object-contain rounded-lg" />
                                    </div>
                                )}

                            </div>

                            <div className={`w-full ${projectsList.length === 1 ? 'lg:w-1/2 p-4 md:p-10' : 'p-4 md:p-6'} flex flex-col justify-center bg-white border-l border-secondary/5`}>
                                <h3 className={`text-xl ${projectsList.length === 1 ? 'md:text-3xl' : 'md:text-2xl'} font-serif font-extrabold text-primary mb-3 md:mb-4 leading-tight`}>
                                    {project.name}
                                </h3>
                                <div className="flex items-center gap-2 text-secondary mb-4 md:mb-5 font-sans font-bold tracking-widest text-[10px] md:text-xs uppercase">
                                    <MapPin size={14} className="md:w-4 md:h-4" /> {project.location}
                                </div>
                                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4 md:mb-6 italic">
                                    "{project.desc}"
                                </p>

                                <div className="grid grid-cols-2 gap-3 md:gap-6 py-4 md:py-5 border-y border-secondary/10 mb-4 md:mb-6">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2 text-secondary">
                                            <Compass size={14} className="md:w-4 md:h-4" />
                                            <span className="text-[0.5rem] md:text-[0.6rem] uppercase font-bold tracking-widest">Design</span>
                                        </div>
                                        <p className="text-primary text-xs md:text-sm font-bold">Vastu Perfect</p>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2 text-secondary">
                                            <TrendingUp size={14} className="md:w-4 md:h-4" />
                                            <span className="text-[0.5rem] md:text-[0.6rem] uppercase font-bold tracking-widest">Returns</span>
                                        </div>
                                        <p className="text-primary text-xs md:text-sm font-bold">High ROI</p>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setSelectedProject(project)}
                                    className="btn-primary w-full py-3 md:py-5 text-[10px] md:text-md font-black shadow-inner"
                                >
                                    EXPLORE PROJECT
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>



            </div>

            <AnimatePresence>
                {selectedProject && (
                    <ProjectDetailView project={selectedProject} onBack={() => setSelectedProject(null)} />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
