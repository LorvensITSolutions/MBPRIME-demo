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
        <section id="contact" className="py-24 md:py-20 bg-gradient-to-br from-bg-light to-white relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container relative z-10">
                <div className="text-center mb-16 md:mb-20">
                    <h4 className="uppercase tracking-[0.3em] text-secondary mb-3 font-sans font-bold text-xs md:text-sm">Prime Locations</h4>
                    <h2 className="text-4xl md:text-6xl text-primary font-serif font-extrabold leading-tight">Connected to<span className="text-secondary italic">Everything</span></h2>
                    <div className="w-24 h-1 bg-secondary mx-auto mt-6 mb-6"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    {/* Left Side: Map and Info */}
                    <div className="space-y-10 flex flex-col h-full">
                        <div className="h-[300px] md:h-[450px] bg-white border-2 border-white shadow-2xl overflow-hidden rounded-[2rem] relative group flex-shrink-0">
                            <iframe
                                src="https://maps.google.com/maps?q=Srikakulam&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Google Map"
                                className="grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                            ></iframe>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-grow">
                            {nearby.map((n, i) => (
                                <motion.div
                                    key={i}
                                    className="flex items-center gap-5 p-6 bg-gradient-to-r from-bg-light to-white border-l-4 border-secondary shadow-lg rounded-r-xl hover:shadow-2xl transition-all group h-full"
                                    whileHover={{ x: 5 }}
                                >
                                    <div className="text-secondary p-3 bg-white rounded-full shadow-md group-hover:bg-secondary group-hover:text-white transition-colors duration-300 flex-shrink-0">
                                        {React.cloneElement(n.icon, { size: 22 })}
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="font-serif font-bold text-primary text-lg leading-none mb-1 group-hover:text-secondary transition-colors">{n.name}</h4>
                                        <span className="text-xs uppercase tracking-wider text-slate-500 font-bold">{n.time} drive</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Themed Enquiry Form */}
                    <div className="pt-8 xl:pt-0 h-full">
                        <div className="relative h-full">
                            {/* decorative elements */}
                            <EnquiryForm className="h-full" />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Location;
