import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Trophy, Target, Lightbulb, UserCheck } from 'lucide-react';
import villa from '../assets/about.png';

const About = () => {
    const stats = [
        { number: "15+", label: "Years Experience" },
        { number: "50+", label: "Projects Completed" },
        { number: "2000+", label: "Happy Families" },
        { number: "100%", label: "Legal Clarity" }
    ];

    const values = [
        {
            icon: <Shield size={32} />,
            title: "Transparency",
            desc: "We believe in 100% clear documentation and honest dealings. No hidden clauses, just trust."
        },
        {
            icon: <Trophy size={32} />,
            title: "Quality",
            desc: "From material selection to finishing touches, we adhere to the highest standards of construction."
        },
        {
            icon: <Users size={32} />,
            title: "Customer First",
            desc: "Your satisfaction is our priority. We are with you at every step of your home-buying journey."
        }
    ];

    return (
        <section id="about" className="py-32 bg-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-5">
                <div className="absolute -top-[500px] -right-[500px] w-[1000px] h-[1000px] rounded-full border-[100px] border-primary"></div>
            </div>

            <div className="container relative z-10">
                {/* 1. Header centered */}
                <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
                    <h4 className="text-secondary font-bold tracking-[0.3em] uppercase mb-4 text-xs md:text-sm">Since 2010</h4>
                    <h2 className="text-4xl md:text-7xl font-serif font-extrabold text-primary mb-8 md:mb-10 leading-tight">
                        Building Legacies, <br />
                        <span className="text-secondary italic">Delivering Trust.</span>
                    </h2>
                    <div className="w-16 md:w-24 h-1 bg-secondary mx-auto mb-10"></div>
                </div>

                {/* 2. Story Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative pl-4 md:pl-8 pb-4 md:pb-8" // Added padding for badge space
                    >
                        {/* Image Container - Removed overflow hidden from parent to allow badge */}
                        <div className="relative z-10 rounded-tl-[40px] rounded-br-[40px] md:rounded-tl-[80px] md:rounded-br-[80px] overflow-hidden border-4 border-white shadow-2xl">
                            <img src={villa} alt="MB Prime Office" className="w-full h-[350px] md:h-[600px] object-cover hover:scale-105 transition-transform duration-700" />
                        </div>

                        {/* Gold Border Frame - Keeping it subtle */}

                        {/* Floating Experience Badge - Repositioned to ensure visibility */}
                        <div className="absolute -bottom-4 -left-2 md:-bottom-6 md:-left-6 bg-primary p-4 md:p-8 rounded-full shadow-2xl border-4 border-white z-20 flex flex-col items-center justify-center w-28 h-28 md:w-40 md:h-40">
                            <div className="text-2xl md:text-4xl font-black text-secondary">15+</div>
                            <div className="text-white/60 text-[0.5rem] md:text-[0.6rem] font-bold uppercase tracking-widest mt-1 text-center leading-tight">Years of<br />Excellence</div>
                        </div>
                    </motion.div>

                    <div className="space-y-10">
                        <h3 className="text-3xl font-serif font-bold text-primary">Our Story</h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            <strong className="text-primary">MB Prime Projects</strong> started with a simple yet powerful vision: to redefine the real estate landscape of Andhra Pradesh by offering premium, legally clear, and high-quality living spaces.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Over the last decade, we have grown from a small consultancy to one of Srikakulam's most trusted developers. Our passion lies not just in constructing buildings, but in creating sustainable communities where families can thrive for generations.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-gray-100">
                            {/* Styled Vision/Mission Cards */}
                            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-secondary">
                                <h4 className="flex items-center gap-3 text-lg font-bold text-primary mb-3">
                                    <Target className="text-secondary shrink-0" size={20} /> Our Mission
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed">To deliver 1000+ premium homes by 2030 emphasizing quality and innovation.</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary">
                                <h4 className="flex items-center gap-3 text-lg font-bold text-primary mb-3">
                                    <Lightbulb className="text-primary shrink-0" size={20} /> Our Vision
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed">To be the industry standard for integrity and customer satisfaction.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 md:mb-32 bg-primary p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-20"></div> {/* Added texture */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>

                    {stats.map((stat, idx) => (
                        <div key={idx} className="text-center relative z-10 group">
                            <h3 className="text-3xl md:text-5xl font-black text-white mb-2 group-hover:text-secondary transition-colors duration-300">{stat.number}</h3>
                            <p className="text-white/50 uppercase tracking-[0.2em] text-xs font-bold">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* 4. Why Choose Us */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h3 className="text-3xl font-serif font-bold text-primary mb-6">Why Choose MB Prime?</h3>
                    <p className="text-gray-500">We don't just sell plots; we build relationships based on trust.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((item, idx) => (
                        <div key={idx} className="bg-white p-10 rounded-2xl border border-gray-100 hover:border-secondary shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                            <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center text-primary border border-primary/10 mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                {item.icon}
                            </div>
                            <h4 className="text-xl font-bold text-primary mb-4">{item.title}</h4>
                            <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
