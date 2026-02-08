import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const Testimonials = () => {
    const reviews = [
        { id: 1, name: 'Ravi Kumar', city: 'Srikakulam', videoThumb: 'https://res.cloudinary.com/durbtkhbz/video/upload/v1770462979/video1-mb_s9rlk5.jpg' },
        { id: 2, name: 'Anitha Reddy', city: 'USA NRI', videoThumb: 'https://res.cloudinary.com/durbtkhbz/video/upload/v1770463072/vedio3-mb_miveax.jpg' },
    ];

    return (
        <section className="py-24 bg-bg-light">
            <div className="container mx-auto px-8">
                <div className="text-center mb-12 md:mb-16">
                    <h4 className="uppercase tracking-[0.3em] text-secondary mb-4 font-sans font-medium text-xs md:text-sm">Customer Speak</h4>
                    <h2 className="text-3xl md:text-5xl text-primary font-serif font-extrabold">Consistently Delivering 100% Satisfaction</h2>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 mt-16 max-w-6xl mx-auto">
                    {reviews.map((rv) => (
                        <div key={rv.id} className="relative group cursor-pointer">
                            <motion.div
                                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-white/50"
                                whileHover={{ y: -10 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="relative h-[300px] overflow-hidden">
                                    <img src={rv.videoThumb} alt={rv.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>

                                    {/* Play Button */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-secondary">
                                        <Play className="text-secondary ml-1 group-hover:text-white transition-colors" fill="currentColor" size={28} />
                                    </div>
                                </div>

                                <div className="p-8 text-center bg-white relative z-10">
                                    <h3 className="text-primary text-2xl font-serif font-bold mb-2">{rv.name}</h3>
                                    <p className="text-slate-500 text-sm tracking-wide font-medium uppercase">{rv.city}</p>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
