import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, ShieldCheck, TreePine, Footprints, Users, Dumbbell } from 'lucide-react';

const Amenities = () => {
    const amenities = [
        { icon: <HeartPulse />, title: 'Health Care', desc: 'Proximity to world-class hospitals and 24/7 medical access.' },
        { icon: <ShieldCheck />, title: 'Safety for Parents', desc: 'Secure community with elderly-friendly infrastructure.' },
        { icon: <TreePine />, title: 'Nature Connection', desc: 'Lush green landscapes and oxygen-rich environments.' },
        { icon: <Footprints />, title: 'Walking Track', desc: 'Dedicated tracks for your morning and evening walks.' },
        { icon: <Users />, title: 'Good Community', desc: 'Like-minded elite neighbors for a vibrant social life.' },
        { icon: <Dumbbell />, title: 'Exercise Hub', desc: 'Modern fitness centers and outdoor exercise zones.' },
    ];

    return (
        <section id="amenities" className="py-32 bg-primary">
            <div className="container">
                <div className="text-center mb-12 md:mb-16">
                    <h4 className="uppercase tracking-[0.3em] text-secondary mb-4 font-sans font-medium text-xs md:text-sm">Why MB Prime?</h4>
                    <h2 className="text-4xl md:text-6xl text-white">Grandeur Meets Well-being</h2>
                    <p className="max-w-[600px] mx-auto mt-6 text-textMuted text-base md:text-lg leading-relaxed">
                        We prioritize what matters most: your family's health, safety, and peace of mind.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    {amenities.map((item, index) => (
                        <motion.div
                            key={index}
                            className="glass-card text-center transition-all duration-300 hover:bg-secondary/10 hover:border-secondary"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="w-[60px] h-[60px] bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                                {React.cloneElement(item.icon, { size: 30 })}
                            </div>
                            <h3 className="text-white text-xl font-serif font-bold mb-4">{item.title}</h3>
                            <p className="text-textMuted text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Amenities;
