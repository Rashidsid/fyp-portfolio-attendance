import { motion } from 'motion/react';
import { Scan, Menu } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg shadow-sm z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Scan className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl text-gray-900">Insight Attendance</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('tech-stack')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Tech Stack
            </button>
            <button
              onClick={() => scrollToSection('admin')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Admin Panel
            </button>
            <button
              onClick={() => scrollToSection('workflow')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              How It Works
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 hover:text-blue-600"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 space-y-4"
          >
            <button
              onClick={() => scrollToSection('features')}
              className="block w-full text-left text-gray-600 hover:text-blue-600 transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('tech-stack')}
              className="block w-full text-left text-gray-600 hover:text-blue-600 transition-colors"
            >
              Tech Stack
            </button>
            <button
              onClick={() => scrollToSection('admin')}
              className="block w-full text-left text-gray-600 hover:text-blue-600 transition-colors"
            >
              Admin Panel
            </button>
            <button
              onClick={() => scrollToSection('workflow')}
              className="block w-full text-left text-gray-600 hover:text-blue-600 transition-colors"
            >
              How It Works
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
// Updated
