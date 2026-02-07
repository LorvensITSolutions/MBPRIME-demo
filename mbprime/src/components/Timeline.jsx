import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
    const events = [
        { year: '2015', title: 'The Beginning', desc: 'MB Prime founded with a vision for premium urban living.' },
        { year: '2018', title: 'Grand Milestone', desc: 'Successfully delivered 50+ luxury villa plots in prime locations.' },
        { year: '2021', title: 'Innovation Era', desc: 'Integrated sustainable practices and environment-first designs.' },
        { year: '2024', title: 'Present Day', desc: 'Consistently serving customers with 100% satisfaction and grandeur.' },
    ];

    return (
        <section className="py-32 bg-primary">
            <div className="container">
                <div className="text-center mb-20">
                    <h4 className="uppercase tracking-[0.3em] text-secondary mb-4 font-sans font-medium">Our Journey</h4>
                    <h2 className="text-5xl md:text-6xl text-white">Preserving Excellence Through Time</h2>
                </div>

                <div className="relative max-w-[1000px] mx-auto before:content-[''] before:absolute before:left-1/2 before:top-0 before:w-0.5 before:h-full before:bg-white/10 before:-translate-x-1/2 max-md:before:left-[30px]">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            className={`flex mb-16 relative ${index % 2 === 0 ? 'justify-end pl-[50%] max-md:justify-start max-md:pl-20' : 'justify-start pr-[50%] text-right max-md:justify-start max-md:pl-20 max-md:text-left max-md:pr-0'}`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="absolute left-1/2 top-0 w-[60px] h-[60px] bg-secondary text-primary rounded-full flex items-center justify-center font-extrabold -translate-x-1/2 z-10 border-4 border-primary max-md:left-[30px]">
                                {event.year}
                            </div>
                            <div className="glass-card w-[90%]">
                                <h3 className="text-secondary text-2xl font-serif font-bold mb-4">{event.title}</h3>
                                <p className="text-textMuted leading-relaxed">{event.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
