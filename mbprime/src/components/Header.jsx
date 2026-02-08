import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Download, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import brochurePdf from '../assets/MB-Prime-Villas-Plots-Srikakulam.pdf';
import logo from '../assets/mb.png'

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Projects', to: '/projects' },
    { name: 'Project Progress', to: '/progress' },
    { name: 'About Us', to: '/#about' },
    { name: 'Amenities', to: '/#amenities' },
    { name: 'Contact', to: '/#contact' },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-[1000] py-6 bg-transparent">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-4 md:gap-6">
          <Link to="/" className="cursor-pointer flex items-center">
            <img src={logo} alt="MB Prime Logo" className="md:h-18 h-12 w-auto object-contain" />
          </Link>

          <div className="h-8 md:h-12 w-[1px] bg-white/20"></div>

          <Link to="/projects" className="cursor-pointer flex items-center">
            <img
              src="https://res.cloudinary.com/durbtkhbz/image/upload/v1770526685/sklmlogo_c2trtg.png"
              alt="Srikakulam Project Logo"
              className="md:h-18 h-10 w-auto object-contain"
            />
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.to} className="text-sm font-medium tracking-wider text-textMuted hover:text-secondary transition-colors">
              {link.name}
            </Link>
          ))}
          <a href={brochurePdf} className="flex items-center gap-2 px-6 py-2 border border-secondary text-secondary rounded-sm text-sm font-semibold hover:bg-secondary/10 transition-colors" download>
            <Download size={18} /> Brochure
          </a>
        </nav>

        <div className="flex items-center gap-6">
          <a href="tel:+919876543210" className="hidden sm:flex items-center gap-2 text-secondary hover:text-white transition-colors">
            <Phone size={18} />
            <span className="text-sm font-bold font-sans">+91 1234567891</span>
          </a>
          <a href="tel:+919876543210" className="sm:hidden text-secondary">
            <Phone size={20} />
          </a>
          <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="lg:hidden bg-primary border-b border-white/10 flex flex-col py-4 overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="px-8 py-4 text-[1.1rem] border-b border-white/10 hover:text-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a href={brochurePdf} className="px-8 py-4 text-[1.1rem] text-secondary flex items-center gap-3" download>
              <Download size={18} /> Download Brochure
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
