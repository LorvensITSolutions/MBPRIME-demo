import React from 'react';
import { X, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const EnquiryForm = ({ isModal = false, onClose, className = "" }) => {
    return (
        <motion.div
            className={`w-full ${isModal ? 'max-w-[500px]' : 'max-w-full'} bg-white border border-secondary/10 rounded-2xl shadow-xl overflow-hidden p-6 md:p-8 flex flex-col relative ${className}`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
        >
            {isModal && (
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-secondary transition-colors"
                >
                    <X size={20} />
                </button>
            )}

            <div className="text-center mb-6 md:mb-8">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary tracking-wide">Enquire Now</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-secondary to-yellow-600 mx-auto mt-2 rounded-full"></div>
            </div>

            <form className="space-y-4 md:space-y-5">
                <div>
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full px-4 py-3 text-sm md:text-base rounded-lg border border-slate-200 bg-slate-50 text-primary placeholder:text-slate-400 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all shadow-sm focus:bg-white"
                    />
                </div>

                <div className="relative">
                    <select className="w-full px-4 py-3 text-sm md:text-base rounded-lg border border-slate-200 bg-slate-50 text-primary focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none appearance-none cursor-pointer shadow-sm focus:bg-white">
                        <option value="+91">IN - India (+91)</option>
                        <option value="+1">US - USA (+1)</option>
                        <option value="+44">UK - United Kingdom (+44)</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                </div>

                <div>
                    <input
                        type="tel"
                        placeholder="Mobile no without country code*"
                        className="w-full px-4 py-3 text-sm md:text-base rounded-lg border border-slate-200 bg-slate-50 text-primary placeholder:text-slate-400 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all shadow-sm focus:bg-white"
                    />
                </div>

                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-3 text-sm md:text-base rounded-lg border border-slate-200 bg-slate-50 text-primary placeholder:text-slate-400 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all shadow-sm focus:bg-white"
                    />
                </div>

                <div>
                    <textarea
                        placeholder="Message"
                        rows="5"
                        className="w-full px-4 py-3 text-sm md:text-base rounded-lg border border-slate-200 bg-slate-50 text-primary placeholder:text-slate-400 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all resize-none shadow-sm focus:bg-white"
                    ></textarea>
                </div>

                <div className="pt-2 md:pt-4 flex justify-center">
                    <button
                        type="submit"
                        className="w-full py-3 md:py-4 bg-gradient-to-r from-secondary to-yellow-600 text-white font-bold tracking-[0.15em] rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 shadow-md uppercase text-sm md:text-base"
                    >
                        Submit Enquiry
                    </button>
                </div>
            </form>
        </motion.div>
    );
};

export default EnquiryForm;
