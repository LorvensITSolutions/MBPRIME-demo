import React from 'react';
import { motion } from 'framer-motion';


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Amenities = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    const amenities = [
        { image: "https://res.cloudinary.com/durbtkhbz/image/upload/v1770550009/hospital1_p231xz.png", title: 'Health Care', desc: 'Proximity to world-class hospitals and 24/7 medical access.' },
        { image: "https://res.cloudinary.com/durbtkhbz/image/upload/v1770549780/anem2_zutygk.png", title: 'Safety for Parents', desc: 'Secure community with elderly-friendly infrastructure.' },
        { image: "https://res.cloudinary.com/durbtkhbz/image/upload/v1770550157/green_t5aixo.jpg", title: 'Nature Connection', desc: 'Lush green landscapes and oxygen-rich environments.' },
        { image: "https://res.cloudinary.com/durbtkhbz/image/upload/v1770550334/TUIG_01_vdmsss.jpg", title: 'Walking Track', desc: 'Dedicated tracks for your morning and evening walks.' },
        { image: "https://res.cloudinary.com/durbtkhbz/image/upload/v1770550463/n_n1fdz8.jpg", title: 'Good Community', desc: 'Like-minded elite neighbors for a vibrant social life.' },
        { image: "https://res.cloudinary.com/durbtkhbz/image/upload/v1770550579/gametime-outdoor-fitness-park-ca_l5jvhl.webp", title: 'Exercise Hub', desc: 'Modern fitness centers and outdoor exercise zones.' },
    ];

    return (
        <section id="amenities" className="py-5 md:py-4 bg-bg-light">
            <div className="container">
                <div className="text-center mb-12 md:mb-16">
                    <h4 className="uppercase tracking-[0.3em] text-secondary mb-4 font-sans font-medium text-xs md:text-sm">Why MB Prime?</h4>
                    <h2 className="text-4xl md:text-6xl text-primary">Grandeur Meets Well-being</h2>
                    <p className="max-w-[600px] mx-auto mt-6 text-slate-600 text-base md:text-lg leading-relaxed">
                        We prioritize what matters most: your family's health, safety, and peace of mind.
                    </p>
                </div>

                <div className="mt-16">
                    <Slider {...settings}>
                        {amenities.map((item, index) => (
                            <div key={index} className="px-4 pb-12 pt-4">
                                <motion.div
                                    className="bg-white border border-secondary/10 rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:border-secondary hover:shadow-2xl group h-full flex flex-row items-center"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {/* Image Section (Left) */}
                                    <div className="w-2/5 h-40 md:h-48 relative overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
                                    </div>

                                    {/* Content Section (Right) */}
                                    <div className="w-3/5 p-6 text-left">
                                        <h3 className="text-primary text-lg md:text-xl font-serif font-bold mb-3 group-hover:text-secondary transition-colors">{item.title}</h3>
                                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed line-clamp-3">{item.desc}</p>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Amenities;
