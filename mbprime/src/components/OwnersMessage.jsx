import React from 'react';
import { motion } from 'framer-motion';

const OwnersMessage = () => {
    return (
        <section className="bg-bg-light py-16 md:py-24 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="bg-white border border-secondary/20 shadow-xl rounded-2xl p-10 relative overflow-hidden group">
                        {/* Decorative Line */}
                        <div className="absolute top-0 left-0 w-1 h-full bg-secondary"></div>

                        <h4 className="text-secondary text-xl md:text-2xl font-serif font-bold mb-6 tracking-wide">
                            A Message from the Owners
                        </h4>

                        <p className="italic text-slate-700 leading-relaxed text-lg md:text-xl font-serif">
                            "At MB Prime, we don't just sell plots; we build foundations for your future. Peace and grandeur are at the heart of our vision."
                        </p>

                        {/* Subtle Quote Symbol */}
                        <div className="absolute -bottom-4 -right-2 text-secondary/5 text-8xl font-serif pointer-events-none">
                            "
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default OwnersMessage;
