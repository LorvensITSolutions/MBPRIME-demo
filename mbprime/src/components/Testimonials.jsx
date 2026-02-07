import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const Testimonials = () => {
    const reviews = [
        { id: 1, name: 'Ravi Kumar', city: 'Srikakulam', videoThumb: 'https://images.unsplash.com/photo-1566121933407-3c7ccdd26763?q=80&w=2072&auto=format&fit=crop' },
        { id: 2, name: 'Anitha Reddy', city: 'USA NRI', videoThumb: 'https://images.unsplash.com/photo-1544161515-4af6b1d462c2?q=80&w=2070&auto=format&fit=crop' },
    ];

    return (
        <section className="py-32 bg-[#020c1b]">
            <div className="container mx-auto px-8">
                <div className="text-center mb-12 md:mb-16">
                    <h4 className="uppercase tracking-[0.3em] text-secondary mb-4 font-sans font-medium text-xs md:text-sm">Customer Speak</h4>
                    <h2 className="text-3xl md:text-6xl text-white">Consistently Delivering 100% Satisfaction</h2>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 mt-16">
                    {reviews.map((rv) => (
                        <motion.div
                            key={rv.id}
                            className="glass-card p-0 overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="relative h-[250px]">
                                <img src={rv.videoThumb} alt={rv.name} className="w-full h-full object-cover" />
                                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70px] h-[70px] bg-secondary text-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_#b69121]">
                                    <Play fill="currentColor" size={24} />
                                </button>
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-white text-2xl font-serif font-bold mb-2">{rv.name}</h3>
                                <p className="text-textMuted text-sm tracking-wide">{rv.city} - Satisfied Customer</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
