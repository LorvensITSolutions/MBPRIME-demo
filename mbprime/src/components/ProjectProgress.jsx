import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Calendar, MapPin, X } from 'lucide-react';

const ProjectProgress = () => {
    const [activeProject, setActiveProject] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const projectsData = [
        {
            id: 1,
            name: "MB Prime Villas & Plots",
            location: "Srikakulam",
            updates: [
                {
                    id: 1,
                    title: "Site Overview (Before Construction)",
                    location: "MB Prime Villas, Srikakulam",
                    thumbnail: "https://res.cloudinary.com/durbtkhbz/video/upload/v1770462979/video1-mb_s9rlk5.jpg",
                    video: "https://res.cloudinary.com/durbtkhbz/video/upload/v1770462979/video1-mb_s9rlk5.mp4",
                },
                {
                    id: 2,
                    title: "Foundation Work Completed",
                    location: "MB Prime Villas, Srikakulam",
                    thumbnail: "https://res.cloudinary.com/durbtkhbz/video/upload/v1770462979/vedio2-mb_fw0hfh.jpg",
                    video: "https://res.cloudinary.com/durbtkhbz/video/upload/v1770462979/vedio2-mb_fw0hfh.mp4",
                },
                {
                    id: 3,
                    title: "Main Road Construction",
                    location: "MB Prime Villas, Srikakulam",
                    thumbnail: "https://res.cloudinary.com/durbtkhbz/video/upload/v1770463072/vedio3-mb_miveax.jpg",
                    video: "https://res.cloudinary.com/durbtkhbz/video/upload/v1770463072/vedio3-mb_miveax.mp4",
                },
                {
                    id: 4,
                    title: "Main Road Construction",
                    location: "MB Prime Villas, Srikakulam",
                    thumbnail: "https://res.cloudinary.com/durbtkhbz/video/upload/so_0/v1770537777/sundayv9_qgjag3.jpg",
                    video: "https://res.cloudinary.com/durbtkhbz/video/upload/v1770537777/sundayv9_qgjag3.mp4",
                },
                {
                    id: 5,
                    title: "Main Road Construction",
                    location: "MB Prime Villas, Srikakulam",
                    thumbnail: "https://res.cloudinary.com/durbtkhbz/video/upload/so_0/v1770537794/sundayv5_qyigr9.jpg",
                    video: "https://res.cloudinary.com/durbtkhbz/video/upload/v1770537794/sundayv5_qyigr9.mp4",
                },
                {
                    id: 6,
                    title: "Main Road Construction",
                    location: "MB Prime Villas, Srikakulam",
                    thumbnail: "https://res.cloudinary.com/durbtkhbz/video/upload/so_0/v1770537783/sundayv3_fuawmg.jpg",
                    video: "https://res.cloudinary.com/durbtkhbz/video/upload/v1770537783/sundayv3_fuawmg.mp4",
                },
                {
                    id: 7,
                    title: "Main Road Construction",
                    location: "MB Prime Villas, Srikakulam",
                    thumbnail: "https://res.cloudinary.com/durbtkhbz/video/upload/so_0/v1770537783/sundayv6_em2hyj.jpg",
                    video: "https://res.cloudinary.com/durbtkhbz/video/upload/v1770537783/sundayv6_em2hyj.mp4",
                },
                {
                    id: 8,
                    title: "Main Road Construction",
                    location: "MB Prime Villas, Srikakulam",
                    thumbnail: "https://res.cloudinary.com/durbtkhbz/video/upload/so_0/v1770537780/sundayv7_z2vwav.jpg",
                    video: "https://res.cloudinary.com/durbtkhbz/video/upload/v1770537780/sundayv7_z2vwav.mp4",
                },
                {
                    id: 9,
                    title: "Main Road Construction",
                    location: "MB Prime Villas, Srikakulam",
                    thumbnail: "https://res.cloudinary.com/durbtkhbz/video/upload/so_0/v1770537779/sundayv4_brvuw7.jpg",
                    video: "https://res.cloudinary.com/durbtkhbz/video/upload/v1770537779/sundayv4_brvuw7.mp4",
                },
                {
                    id: 10,
                    title: "Main Road Construction",
                    location: "MB Prime Villas, Srikakulam",
                    thumbnail: "https://res.cloudinary.com/durbtkhbz/video/upload/so_0/v1770537776/sunday_12_hfpg6o.jpg",
                    video: "https://res.cloudinary.com/durbtkhbz/video/upload/v1770537776/sunday_12_hfpg6o.mp4",
                },
                {
                    id: 11,
                    title: "Main Road Construction",
                    location: "MB Prime Villas, Srikakulam",
                    thumbnail: "https://res.cloudinary.com/durbtkhbz/video/upload/so_0/v1770555619/v1_bpbxaz.jpg",
                    video: "https://res.cloudinary.com/durbtkhbz/video/upload/v1770555619/v1_bpbxaz.mp4",
                },
                {
                    id: 12,
                    title: "Main Road Construction",
                    location: "MB Prime Villas, Srikakulam",
                    thumbnail: "https://res.cloudinary.com/durbtkhbz/video/upload/so_0/v1770555619/v3_cwmkt3.jpg",
                    video: "https://res.cloudinary.com/durbtkhbz/video/upload/v1770555619/v3_cwmkt3.mp4",
                },


            ]
        },
        {
            id: 2,
            name: "Project 2",
            location: "Visakhapatnam",
            updates: [] // Placeholder for now
        },
        {
            id: 3,
            name: "Project 3",
            location: "Vizianagaram",
            updates: [] // Placeholder
        }
    ];

    // Set default active project on mount
    React.useEffect(() => {
        if (!activeProject && projectsData.length > 0) {
            setActiveProject(projectsData[0]);
        }
    }, []);

    return (
        <section className="bg-bg-light min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[40vh] md:h-[60vh] min-h-[300px] md:min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                    <img
                        src="https://res.cloudinary.com/durbtkhbz/image/upload/v1770543371/progressq_tovnvq.png"
                        alt="Progress Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
                </div>

                <div className="container relative z-10 px-4 text-center pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h4 className="uppercase tracking-[0.4em] text-secondary mb-6 font-sans font-bold text-xs md:text-sm">Live Updates</h4>
                        <h2 className="text-3xl md:text-7xl text-white font-serif font-extrabold max-w-5xl mx-auto leading-tight mb-8">
                            Project <span className="text-secondary italic">Progress</span>
                        </h2>
                        <p className="max-w-2xl mx-auto text-white/90 text-[12px] md:text-xl font-medium leading-relaxed">
                            Transparency is our core value. Watch the latest developments and construction milestones directly from the site.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container py-12 md:py-20">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Sidebar Navigation */}
                    <div className="lg:w-1/4">
                        <div className="bg-white rounded-xl md:rounded-2xl p-3 md:p-6 shadow-xl border border-secondary/10 sticky top-20 md:top-24 z-30">
                            <h3 className="text-base md:text-xl font-serif font-bold text-primary mb-2 md:mb-6 flex items-center gap-2">
                                <span className="w-1 h-4 md:h-6 bg-secondary rounded-full"></span>
                                Select Project
                            </h3>
                            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-1 lg:pb-0 hide-scrollbar">
                                {projectsData.map((project) => (
                                    <button
                                        key={project.id}
                                        onClick={() => setActiveProject(project)}
                                        className={`shrink-0 w-auto lg:w-full text-left px-3 py-2 md:p-4 rounded-lg md:rounded-xl transition-all duration-300 flex items-center justify-between group border lg:border-none ${activeProject?.id === project.id
                                            ? 'bg-secondary text-primary font-bold shadow-md border-secondary'
                                            : 'bg-slate-50 lg:bg-transparent hover:bg-secondary/10 text-slate-600 hover:text-primary border-slate-100'
                                            }`}
                                    >
                                        <span className="font-sans text-[0.65rem] md:text-sm tracking-wide uppercase whitespace-nowrap lg:whitespace-normal">{project.name}</span>
                                        {activeProject?.id === project.id && (
                                            <Play size={16} className="fill-current hidden lg:block" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:w-3/4 min-h-[50vh]">
                        {activeProject && (
                            <motion.div
                                key={activeProject.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="mb-6 md:mb-8 flex flex-col md:flex-row md:items-end justify-between border-b border-secondary/20 pb-4 gap-4">
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-2">
                                            {activeProject.name}
                                        </h3>
                                        <div className="flex items-center gap-2 text-secondary text-xs md:text-sm font-bold uppercase tracking-widest">
                                            <MapPin size={16} /> {activeProject.location}
                                        </div>
                                    </div>

                                </div>

                                {activeProject.updates.length > 0 ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {activeProject.updates.map((update, index) => (
                                            <motion.div
                                                key={update.id}
                                                className="bg-white border border-secondary/10 rounded-2xl overflow-hidden group hover:border-secondary hover:shadow-2xl transition-all duration-300 cursor-pointer shadow-lg"
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 }}
                                                onClick={() => setSelectedVideo(update)}
                                            >
                                                <div className="relative h-48 overflow-hidden bg-black">
                                                    <img
                                                        src={update.thumbnail}
                                                        alt={update.title}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                                                    />
                                                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                                                        <div className="w-12 h-12 bg-secondary/90 rounded-full flex items-center justify-center text-primary pl-1 shadow-lg shadow-black/50 group-hover:scale-110 transition-transform">
                                                            <Play fill="currentColor" size={20} />
                                                        </div>
                                                    </div>

                                                </div>


                                            </motion.div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center border border-dashed border-secondary/20 rounded-3xl p-12 md:p-16 bg-white/50">
                                        <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-secondary">
                                            <Calendar size={32} />
                                        </div>
                                        <h4 className="text-xl font-serif font-bold text-primary mb-2">No Updates Yet</h4>
                                        <p className="text-slate-500 text-sm">Construction updates for <span className="font-bold">{activeProject.name}</span> will be posted here soon.</p>
                                    </div>
                                )}
                            </motion.div>
                        )}

                        {/* Bottom CTA */}
                        <div className="mt-20 text-center">
                            <p className="text-primary/40 font-serif italic text-lg">Stay tuned for more construction milestones.</p>
                        </div>
                    </div>
                </div>


            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[5000] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
                        onClick={() => setSelectedVideo(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedVideo(null)}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors"
                            >
                                <X size={24} />
                            </button>
                            <video
                                src={selectedVideo.video}
                                className="w-full h-full"
                                controls
                                autoPlay
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ProjectProgress;
