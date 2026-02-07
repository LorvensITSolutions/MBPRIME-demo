import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Calendar, MapPin, X } from 'lucide-react';

const ProjectProgress = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const progressUpdates = [
        {
            id: 1,
            title: "Foundation Work Completed",
            date: "Jan 15, 2024",
            location: "MB Prime Villas, Srikakulam",
            // Using Cloudinary .jpg for thumbnail
            thumbnail: "https://res.cloudinary.com/durbtkhbz/video/upload/v1770462979/vedio2-mb_fw0hfh.jpg",
            video: "https://res.cloudinary.com/durbtkhbz/video/upload/v1770462979/vedio2-mb_fw0hfh.mp4",
            description: "Successfully completed the foundation laying for Phase 1 villas. Quality checks passed with flying colors."
        },
        {
            id: 2,
            title: "Park Landscaping Started",
            date: "Feb 01, 2024",
            location: "MB Prime Villas, Srikakulam",
            thumbnail: "https://res.cloudinary.com/durbtkhbz/video/upload/v1770462979/video1-mb_s9rlk5.jpg",
            video: "https://res.cloudinary.com/durbtkhbz/video/upload/v1770462979/video1-mb_s9rlk5.mp4",
            description: "Planting of avenue trees and layout of the central park walking track has begun."
        },
        {
            id: 3,
            title: "Main Road Construction",
            date: "Feb 10, 2024",
            location: "MB Prime Villas, Srikakulam",
            thumbnail: "https://res.cloudinary.com/durbtkhbz/video/upload/v1770463072/vedio3-mb_miveax.jpg",
            video: "https://res.cloudinary.com/durbtkhbz/video/upload/v1770463072/vedio3-mb_miveax.mp4",
            description: "Internal 40ft CC roads construction in full swing. Ensuring durable and wide connectivity paths."
        }
    ];

    return (
        <section className="py-32 bg-[#020c1b] min-h-screen">
            <div className="container">
                <div className="text-center mb-16 md:mb-24">
                    <h4 className="uppercase tracking-[0.4em] text-secondary mb-4 font-sans font-bold text-xs md:text-sm">Live Updates</h4>
                    <h2 className="text-3xl md:text-7xl text-white font-serif font-extrabold max-w-4xl mx-auto leading-tight">
                        Project <span className="text-secondary italic">Progress</span>
                    </h2>
                    <p className="max-w-2xl mx-auto mt-6 text-textMuted text-base md:text-lg">
                        Transparency is our core value. Watch the latest developments and construction milestones directly from the site.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {progressUpdates.map((update, index) => (
                        <motion.div
                            key={update.id}
                            className="bg-[#0a192f] border border-white/5 rounded-2xl overflow-hidden group hover:border-secondary/50 transition-all duration-300 cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedVideo(update)}
                        >
                            <div className="relative h-48 md:h-64 overflow-hidden bg-black">
                                <img
                                    src={update.thumbnail}
                                    alt={update.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-colors">
                                    <div className="w-12 h-12 md:w-16 md:h-16 bg-secondary/90 rounded-full flex items-center justify-center text-primary pl-1 shadow-lg shadow-black/50 group-hover:scale-110 transition-transform">
                                        <Play fill="currentColor" size={24} className="md:w-8 md:h-8" />
                                    </div>
                                </div>
                                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-md border border-white/10 text-white text-xs font-bold flex items-center gap-2">
                                    <Calendar size={12} className="text-secondary" /> {update.date}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                                    {update.title}
                                </h3>
                                <div className="flex items-center gap-2 text-textMuted text-xs mb-4">
                                    <MapPin size={14} className="text-secondary" /> {update.location}
                                </div>
                                <p className="text-textMuted text-sm leading-relaxed line-clamp-3">
                                    {update.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Coming Soon / Empty State if needed */}
                <div className="mt-20 text-center border border-dashed border-white/10 rounded-3xl p-12 bg-white/5">
                    <p className="text-white/40 font-serif italic text-xl">More updates coming soon...</p>
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
