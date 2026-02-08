import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/mb.png';

const Footer = () => {
    return (
        <footer id="contact" className="pt-20 bg-primary border-t border-white/10">
            <div className="container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-16 pb-20">
                <div className="lg:col-span-2">
                    <Link to="/" className="cursor-pointer flex items-center gap-2 mb-6">
                        <img src={logo} alt="MB Prime Logo" className="h-16 w-auto object-contain" />
                    </Link>
                    <p className="text-textMuted max-w-[350px] mb-8 leading-relaxed">
                        Redefining luxury living through premium villa plots in urban hubs.
                        Grandeur, Peace, and Nature connected.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-textMuted hover:text-secondary transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="text-textMuted hover:text-secondary transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="text-textMuted hover:text-secondary transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="text-textMuted hover:text-secondary transition-colors"><Linkedin size={20} /></a>
                    </div>
                </div>

                <div>
                    <h4 className="text-secondary font-sans font-bold uppercase tracking-wider text-sm mb-6">Quick Links</h4>
                    <ul className="space-y-4">
                        <li><Link to="/projects" className="text-textMuted hover:text-secondary hover:pl-1 transition-all">Projects</Link></li>
                        <li><Link to="/#about" className="text-textMuted hover:text-secondary hover:pl-1 transition-all">About Us</Link></li>
                        <li><Link to="/#amenities" className="text-textMuted hover:text-secondary hover:pl-1 transition-all">Amenities</Link></li>
                        <li><Link to="/#contact" className="text-textMuted hover:text-secondary hover:pl-1 transition-all">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-secondary font-sans font-bold uppercase tracking-wider text-sm mb-6">Contact Us</h4>
                    <ul className="space-y-6">
                        <li className="flex items-center gap-4 text-textMuted">
                            <MapPin size={18} className="shrink-0" />
                            <span>Srikakulam, Andhra Pradesh</span>
                        </li>
                        <li className="flex items-center gap-4 text-textMuted">
                            <Phone size={18} className="shrink-0" />
                            <span>+91 98765 43210</span>
                        </li>
                        <li className="flex items-center gap-4 text-textMuted">
                            <Mail size={18} className="shrink-0" />
                            <span>info@mbprime.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="bg-black/30 py-6 text-center border-t border-white/10">
                <div className="container mx-auto px-8">
                    <p className="text-xs text-textMuted">&copy; 2024 MB Prime Villa Real Estate. All Rights Reserved. | <a href="/seo" className="hover:text-secondary transition-colors">SEO optimized by MB Prime</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
