import { useEffect, useState, useRef } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone, Heart, Brain, Eye, Bone, ChevronFirst as FirstAid, Syringe, Microscope, User, Calendar, Droplet, FlaskRound, TestTube } from 'lucide-react';
import CountUp from 'react-countup';
import PatientLogin from './pages/PatientLogin';
import PatientRegister from './pages/PatientRegister';
import DoctorLogin from './pages/DoctorLogin';
import DoctorRegister from './pages/DoctorRegister';
import PatientDashboard from './pages/patient/Dashboard';
import DoctorDashboard from './pages/doctor/Dashboard';
import OrganDonators from './pages/services/OrganDonators';
import OrganRequests from './pages/services/OrganRequests';
import EmergencyServices from './pages/services/EmergencyServices';
import AwarenessPrograms from './pages/services/AwarenessPrograms';
import ResearchPrograms from './pages/services/ResearchPrograms';
import LabServices from './pages/services/LabServices';
import TissueBank from './pages/services/TissueBank';
import BloodBank from './pages/services/BloodBank';
import DoctorsList from './pages/services/DoctorsList';
import ServiceCard from './components/ServiceCard';
import Chatbot from './components/Chatbot';
import charan from './assets/charan.jpg';
import preethi from './assets/preethi.jpg';
import yamuna from './assets/yamuna.jpg';
import guna from './assets/guna.jpg';
import { Menu, X, } from 'lucide-react';





function App() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
 
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !(dropdownRef.current as any).contains(e.target)) {
        setDropdownOpen(false);
      }
    
    
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.target.id) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: entry.isIntersecting
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    { 
      icon: Heart, 
      title: 'Organ Donators', 
      description: 'View registered organ donors and their information',
      link: '/services/organ-donators'
    },
    { 
      icon: FirstAid, 
      title: 'Organ Requests', 
      description: 'Check current organ transplant requests',
      link: '/services/organ-requests'
    },
    { 
      icon: User, 
      title: 'Patient-Doctor Connection', 
      description: 'Connect with healthcare professionals',
      link: '/services/doctors'
    },
    { 
      icon: Phone, 
      title: 'Emergency Services', 
      description: '24/7 emergency support and contacts',
      link: '/services/emergency'
    },
    { 
      icon: Calendar, 
      title: 'Awareness Programs', 
      description: 'Healthcare events and awareness camps',
      link: '/services/awareness'
    },
    { 
      icon: Brain, 
      title: 'Research Programs', 
      description: 'Latest developments in organ transplantation',
      link: '/services/research'
    },
    { 
      icon: Microscope, 
      title: 'Lab Services', 
      description: 'Advanced medical testing facilities',
      link: '/services/lab'
    },
    { 
      icon: Eye, 
      title: 'Tissue Bank', 
      description: 'Specialized tissue preservation services',
      link: '/services/tissue-bank'
    },
    { 
      icon: Droplet, 
      title: 'Blood Bank', 
      description: 'Blood donation and storage facilities',
      link: '/services/blood-bank'
    }
  ];

  const team = [
    { name: 'M Yamuna', role: 'Frontend Developer', image: yamuna },
    { name: 'BLS Charan', role: 'Backend Engineer', image: charan },
    { name: 'P Sasi Preethi', role: 'AI/ML Engineer', image: preethi },
    { name: 'M Guna Sekhar', role: 'UI Designer', image: guna },
  ];
  

  const stats = [
    { title: 'Organ Donations', value: 1234, icon: Heart },
    { title: 'Organ Requests', value: 2567, icon: FirstAid },
    { title: 'Registered Doctors', value: 450, icon: User },
    { title: 'Registered Patients', value: 3890, icon: Syringe }
  ];

  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Responsive Navigation */}
      <nav className="fixed w-full bg-white shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-red-500 floating" />
              <span className="ml-2 text-2xl font-bold text-gray-800">OrganBank</span>
            </div>
            <div className="lg:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-700 focus:outline-none"
              >
                {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
            <div className={`flex-col lg:flex lg:flex-row lg:items-center lg:space-x-8 lg:ml-auto absolute lg:relative w-full lg:w-auto left-0 top-16 lg:top-auto px-4 lg:px-0 py-4 lg:py-0 bg-white shadow-lg lg:shadow-none transition-all duration-300 ${menuOpen ? 'flex' : 'hidden'}`}>
            <a href="#home" className="text-gray-700 hover:text-blue-600 block py-2 text-center w-full">Home</a>
<a href="#about" className="text-gray-700 hover:text-blue-600 block py-2 text-center w-full">About</a>
<a href="#services" className="text-gray-700 hover:text-blue-600 block py-2 text-center w-full">Services</a>
<button
  onClick={() => {
    setMenuOpen(false);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }}
  className="text-gray-700 hover:text-blue-600 block py-2 text-center w-full"
>
  Contact
</button>


<div className="relative" ref={dropdownRef}>
<button
  onClick={() => setDropdownOpen(!dropdownOpen)}
  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 py-2 focus:outline-none active:scale-95 transition-transform duration-150"
>
  <User className="h-5 w-5" />
  <span>Login</span>
</button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-50">
                    <Link to="/patient/login" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Patient Login</Link>
                    <Link to="/doctor/login" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Doctor Login</Link>
                  </div>
                )}
              </div>

  


              </div>
            </div>
          
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-[600px] pt-16">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=2070" 
            alt="Medical background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Saving Lives Through<br />Organ Donation</h1>
            <p className="text-xl mb-8">Connecting donors with recipients, preserving life.</p>
            <Link to="/patient/login">
  <button className="bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 transition transform hover:scale-105">
    Become a Donor
  </button>
</Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 bg-white fade-in ${isVisible['about'] ? 'visible' : ''}`}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070" 
                alt="Medical team" 
                className="rounded-lg shadow-xl h-[600px] w-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                OrganBank is a pioneering institution dedicated to saving lives through efficient organ donation and transplantation. 
                With state-of-the-art facilities and a team of expert medical professionals, we ensure the highest standards of care 
                and safety in organ preservation and transplantation procedures.
              </p>
              <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To bridge the gap between organ donors and recipients, providing hope and a second chance at life through innovative medical solutions and compassionate care.
              </p>
              <h3 className="text-2xl font-semibold text-gray-800">Why Choose Us?</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>24/7 Emergency Response Team</li>
                <li>State-of-the-art Organ Preservation Technology</li>
                <li>Experienced Medical Professionals</li>
                <li>Comprehensive Support System</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-20 bg-blue-50 fade-in ${isVisible['services'] ? 'visible' : ''}`}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="statistics" className={`py-16 bg-white fade-in ${isVisible['statistics'] ? 'visible' : ''}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg">
                <stat.icon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <CountUp
                  end={stat.value}
                  duration={2.5}
                  className="text-4xl font-bold text-gray-800"
                />
                <h3 className="text-lg text-gray-600 mt-2">{stat.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className={`py-16 bg-blue-50 fade-in ${isVisible['team'] ? 'visible' : ''}`}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Our Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer with Contact Form */}
      <footer id="contact" className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
              <form className="space-y-3">
                <div>
                  <input type="text" placeholder="Name" className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <input type="email" placeholder="Email" className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <textarea placeholder="Message" className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500" rows={3}></textarea>
                </div>
                <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
                  Send Message
                </button>
              </form>
            </div>

            {/* Quick Links and Contact Info */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
                <ul className="space-y-1">
                  <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
                  <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
                  <li><a href="#services" className="hover:text-blue-400 transition">Services</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Contact Info</h3>
                <div className="space-y-2">
                  <p className="flex items-center text-sm"><MapPin className="mr-2 h-4 w-4" /> BEHARA HOSPITAL</p>
                  <p className="flex items-center text-sm"><Phone className="mr-2 h-4 w-4" /> +91 8341950961</p>
                  <p className="flex items-center text-sm"><Mail className="mr-2 h-4 w-4" /> charanbehara2004@gmail.com</p>
                  <div className="flex space-x-4 mt-2">
                    <a href="#" className="hover:text-blue-400 transition"><Facebook className="h-5 w-5" /></a>
                    <a href="#" className="hover:text-blue-400 transition"><Twitter className="h-5 w-5" /></a>
                    <a href="#" className="hover:text-blue-400 transition"><Instagram className="h-5 w-5" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-6 pt-6 text-center text-sm">
            <p>&copy; 2025 OrganBank. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );

  return (
   
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/patient/login" element={<PatientLogin />} />
      <Route path="/patient/register" element={<PatientRegister />} />
      <Route path="/patient/dashboard" element={<PatientDashboard />} />
      <Route path="/doctor/login" element={<DoctorLogin />} />
      <Route path="/doctor/register" element={<DoctorRegister />} />
      <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
      <Route path="/services/organ-donators" element={<OrganDonators />} />
      <Route path="/services/organ-requests" element={<OrganRequests />} />
      <Route path="/services/emergency" element={<EmergencyServices />} />
      <Route path="/services/awareness" element={<AwarenessPrograms />} />
      <Route path="/services/research" element={<ResearchPrograms />} />
      <Route path="/services/lab" element={<LabServices />} />
      <Route path="/services/tissue-bank" element={<TissueBank />} />
      <Route path="/services/blood-bank" element={<BloodBank />} />
      <Route path="/services/doctors" element={<DoctorsList />} />
    </Routes>
   
  );
}

export default App;