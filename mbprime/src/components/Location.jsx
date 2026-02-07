import React from 'react';
import { motion } from 'framer-motion';
import { Map, Plane, Store, Hospital } from 'lucide-react';
import EnquiryForm from './EnquiryForm';

const Location = () => {
    const nearby = [
        { icon: <Store />, name: 'Shopping Malls', time: '10 Mins' },
        { icon: <Hospital />, name: 'Hospitals', time: '5 Mins' },
        { icon: <Plane />, name: 'Airport', time: '25 Mins' },
        { icon: <Map />, name: 'ORR Exit', time: '2 Mins' },
    ];

    return (
        <section id="contact" className="py-32 bg-primary">
            <div className="container">
                <div className="text-center mb-12 md:mb-16">
                    <h4 className="uppercase tracking-[0.3em] text-secondary mb-4 font-sans font-medium text-xs md:text-base">Prime Locations</h4>
                    <h2 className="text-3xl md:text-6xl text-white font-serif leading-tight">Connected to Everything</h2>
                    <p className="text-textMuted mt-4 max-w-[700px] mx-auto text-sm md:text-lg">Our projects are situated in rapid-growth urban corridors, ensuring your investment is never dead.</p>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-16 items-start">
                    {/* Left Side: Map and Info */}
                    <div className="space-y-8 md:space-y-12">
                        <div className="h-[300px] md:h-[500px] glass-card p-0 overflow-hidden ring-1 ring-white/10 shadow-2xl">
                            <iframe
                                src="https://maps.google.com/maps?q=Srikakulam&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Google Map"
                                className="grayscale hover:grayscale-0 transition-all duration-700"
                            ></iframe>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {nearby.map((n, i) => (
                                <motion.div
                                    key={i}
                                    className="flex items-center gap-4 p-5 glass-card hover:border-secondary/50 group transition-all"
                                    whileHover={{ x: 10 }}
                                >
                                    <div className="text-secondary group-hover:scale-110 transition-transform">{React.cloneElement(n.icon, { size: 24 })}</div>
                                    <div className="flex flex-col">
                                        <h4 className="font-sans font-bold text-white text-base leading-none mb-1">{n.name}</h4>
                                        <span className="text-sm text-textMuted">{n.time} drive</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Themed Enquiry Form */}
                    <div className="pt-8 xl:pt-0">


                        <div className="relative">
                            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-secondary/20 rounded-tr-3xl pointer-events-none"></div>
                            <EnquiryForm />
                            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-secondary/20 rounded-bl-3xl pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
