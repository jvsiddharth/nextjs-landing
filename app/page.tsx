'use client';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Form Schemas
const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

const quoteSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^[0-9]{10}$/, 'Phone number must be 10 digits'),
  productName: z.string().min(1, 'Product name is required'),
  state: z.string().min(1, 'Please select a state'),
  quantity: z.string().min(1, 'Please select a quantity'),
  project: z.string().min(10, 'Project description must be at least 10 characters'),
});

export default function Home() {
  // Loading State
  const [loading, setLoading] = useState(true);
  
  // FAQ State
  const [openFaq, setOpenFaq] = useState(0);
  
  // Testimonial Carousel State
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  // Tab State
  type TabKey = 'research' | 'plan' | 'design';
  const [activeTab, setActiveTab] = useState<TabKey>('research');

  // Success Messages
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [quoteSuccess, setQuoteSuccess] = useState(false);

  // Newsletter Form
  const { register: registerNewsletter, handleSubmit: handleSubmitNewsletter, formState: { errors: newsletterErrors }, reset: resetNewsletter } = useForm({
    resolver: zodResolver(newsletterSchema),
  });

  // Quote Form
  const { register: registerQuote, handleSubmit: handleSubmitQuote, formState: { errors: quoteErrors }, reset: resetQuote } = useForm({
    resolver: zodResolver(quoteSchema),
  });

  // Loading Effect
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Form Handlers
  const onNewsletterSubmit = (data: any) => {
    console.log('Newsletter:', data);
    setNewsletterSuccess(true);
    resetNewsletter();
    setTimeout(() => setNewsletterSuccess(false), 3000);
  };

  const onQuoteSubmit = (data: any) => {
    console.log('Quote Request:', data);
    setQuoteSuccess(true);
    resetQuote();
    setTimeout(() => setQuoteSuccess(false), 5000);
  };

  // Tab content data
    const tabContent = {
    research: {
      content: "Research details…",
      link: "Learn more"
    },
    plan: {
      content: "Planning details…",
      link: "View plan"
    },
    design: {
      content: "Design details…",
      link: "See designs"
    }
  } as const;


  // FAQ Data
  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: "Lorem ipsum dolor sit amet consectetur. Vulputate amet atport molestie sagittis donec leo arcu donec vitae fusce felis nulla pellentesque. Pellentesque ultricies lorem."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Vestibulum ornare?",
      answer: "Lorem ipsum dolor sit amet consectetur. Vulputate amet atport molestie sagittis donec leo arcu donec vitae fusce felis nulla pellentesque."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Dictum at ac?",
      answer: "Lorem ipsum dolor sit amet consectetur. Vulputate amet atport molestie sagittis donec leo arcu donec vitae fusce felis nulla pellentesque."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Vestibulum nisi?",
      answer: "Lorem ipsum dolor sit amet consectetur. Vulputate amet atport molestie sagittis donec leo arcu donec vitae fusce felis nulla pellentesque."
    }
  ];

  // Testimonials Data
  const testimonials = [
    {
      icon: "🌤️",
      text: "Para monacena quis elit vitae eu. Semper pharetra natoque amet dolor. Praesent morbi sit hendrerit neque semper urna est ultricies neque.",
      avatar: "/avatar-1.jpg",
      name: "Jake Cooper"
    },
    {
      icon: "⚡",
      text: "Veliscia sit sit pellentesque bibendum at. Quis at elementum feugiat mauris egestas arcu pellentesque. Vitae elit purus mi venenatis arcu.",
      avatar: "/avatar-2.jpg",
      name: "Ralph Edwards"
    },
    {
      icon: "💡",
      text: "Viverra lacus suspendisse nisl. Magna euismod feugiat id sapien vitae. Massa dictumst auctor feugiat vitae interdum sed.",
      avatar: "/avatar-3.jpg",
      name: "Courtney Henry"
    },
    {
      icon: "🔥",
      text: "Hendrerit sagis et volutpat feugiat. Cursus bibendum quam risus tellus. At id elementum aenean dictum aliquet gravida pellentesque.",
      avatar: "/avatar-4.jpg",
      name: "Cameron Diaz"
    }
  ];

  // Carousel Handlers
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // FAQ Handler
  const toggleFaq = (index: any) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  // Loading Screen
  if (loading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-white mx-auto"></div>
          <p className="text-white text-xl font-semibold mt-6">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative text-black flex flex-col md:flex-row overflow-hidden min-h-screen"
      >
        {/* Navbar */}
        <header className="absolute top-0 left-0 right-0 z-20 flex text-blue-600 items-center justify-between px-10 py-6">
          <div className="text-xl font-bold bg-gray-200 px-4 py-2 rounded">LOGO</div>
          <nav className="hidden md:flex items-center space-x-10 text-sm font-medium">
            <a href="#" className="flex items-center space-x-1 hover:text-blue-800 transition">
              <span>Lorem Ipsum</span>
              <span>▼</span>
            </a>
            <a href="#" className="flex items-center space-x-1 hover:text-blue-800 transition">
              <span>Lorem Ipsum</span>
              <span>▼</span>
            </a>
            <a href="#" className="flex items-center space-x-1 hover:text-blue-800 transition">
              <span>Lorem Ipsum</span>
              <span>▼</span>
            </a>
            <a href="#" className="hover:text-blue-800 transition">Lorem Ipsum</a>
          </nav>
          <button className="px-4 py-2 border rounded-md bg-white hover:bg-blue-50 transition">Sign In</button>
        </header>

        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 px-10 py-20 z-10 flex flex-col justify-center min-h-screen"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Lorem ipsum dolor<br />sit amet
          </h1>

          <p className="text-gray-600 mt-5 max-w-md leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis elit
            sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea morbi libero
            imperdiet neque. Justo suspendisse tristique posuere quis eget viverra.
            Nunc euismod ultricies etiam nulla habitasse.
          </p>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmitNewsletter(onNewsletterSubmit)} className="mt-8">
            <div className="flex items-center space-x-3">
              <div className="flex-1">
                <input
                  {...registerNewsletter('email')}
                  type="text"
                  placeholder="Enter your email"
                  className="px-4 py-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button 
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-md flex items-center space-x-2 hover:bg-blue-700 transition"
              >
                <span>Submit</span>
                <span>→</span>
              </button>
            </div>
            {newsletterErrors.email && (
              <p className="text-red-500 text-sm mt-2">{newsletterErrors.email.message}</p>
            )}
            {newsletterSuccess && (
              <p className="text-green-600 text-sm mt-2">✓ Thank you for subscribing!</p>
            )}
          </form>

          <div className="mt-4 flex items-center space-x-2 text-sm text-gray-600">
            <div className="flex items-center justify-center w-5 h-5 bg-blue-600 rounded-full">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span>No credit card required!</span>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute right-0 top-0 w-full md:w-1/2 h-full"
        >
          <div 
            className="w-full h-full"
            style={{
              clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)',
              WebkitClipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)'
            }}
          >
            <img
              src="/motorcycle.png"
              className="w-full h-full object-cover"
              alt="Hero"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Second Content Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="w-full bg-gray-50 px-10 py-20 relative overflow-hidden"
      >
        <div className="max-w-7xl text-black mx-auto bg-white rounded-lg shadow-md p-10 md:p-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="flex flex-col space-y-6">
              <p className="text-blue-600 font-medium text-sm uppercase">
                Lorem ipsum dolor sit
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight uppercase">
                LOREM IPSUM <br /> DOLOR SIT AMET
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis
                donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in
                nam. Non nisi iaculis at felis aliquet. Hendrerit tellus at purus lectus.
              </p>

              <div className="space-y-6 pt-4">
                {[1, 2, 3].map((num) => (
                  <motion.div 
                    key={num}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: num * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <img
                      src={`/section1-${num}.png`}
                      className="w-20 h-16 rounded object-cover flex-shrink-0"
                      alt=""
                    />
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center space-x-6 pt-6">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-md flex items-center space-x-2 hover:bg-blue-700 transition">
                  <span>Lorem Ipsum</span>
                  <span>→</span>
                </button>
                <div className="flex items-center space-x-2 text-blue-600">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011-.25 11.72 11.72 0 003.68.59 1 1 0 011 1V21a1 1 0 01-1 1A19 19 0 015 3a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.25 1z"/>
                  </svg>
                  <span className="font-medium">123456789</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/section-large.png"
                className="w-full h-full min-h-[500px] rounded-lg object-cover shadow-lg"
                alt="Section"
              />
            </div>
          </div>

          <div className="mt-12 h-2 w-full bg-gradient-to-r from-blue-500 via-teal-500 via-green-500 to-purple-900 rounded-full"></div>
        </div>
      </motion.section>

      {/* Third Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="w-full bg-white px-10 py-20"
      >
        <div className="max-w-7xl text-black mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6">
            <p className="text-blue-600 font-medium text-sm">
              Lorem ipsum dolor sit amet
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight uppercase">
              LOREM IPSUM DOLOR SIT <br />
              AMET CONSECTETUR. EU <br />
              ELIT.
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo eleifend
              condimentum in vitae faucibus. Amet massa malesuada sit pretium. Donec
              posuere velit eu lacus suspendisse ornare.
            </p>

            <div className="space-y-4 pt-2">
              {[1, 2, 3].map((num) => (
                <motion.div 
                  key={num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: num * 0.15 }}
                  className="flex items-start space-x-3"
                >
                  <img
                    src="/icon-red.png"
                    className="w-8 h-8 object-contain flex-shrink-0 mt-1"
                    alt="icon"
                  />
                  <div>
                    <p className="text-gray-800 font-semibold text-sm">
                      Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.
                    </p>
                    <p className="text-gray-600 text-sm mt-1">
                      Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non
                      viverra. Risus quam mattis senectus vitae interdum odio ornare gravida
                      vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <img
              src="/section-3.png"
              className="w-full h-auto rounded-lg object-cover shadow-sm"
              alt=""
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16">
          <div className="h-2 w-full bg-gradient-to-r from-blue-600 via-teal-500 via-green-500 to-purple-900 rounded-full"></div>
        </div>
      </motion.section>

      {/* Fourth Section - Full Width Hero */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="relative w-full h-[600px] flex items-center justify-center text-center"
      >
        <img
          src="/section-4-bg.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl px-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            LOREM IPSUM DOLOR SIT AMET CONSECTETUR. QUIS <br />
            ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA MI.
          </h2>
          <p className="text-white/90 mt-6 text-base md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum
            nisi at ac risus amet. Mi accumsan sagittis justo pellentesque id sed. Id tellus
            id luctus id. At quis nunc libero urna arcu vulputate sed et. Nisi porta massa diam
            condimentum nulla quam.
          </p>
          <button className="mt-8 bg-white text-black px-6 py-2 rounded-md font-medium flex items-center mx-auto space-x-2 hover:bg-gray-100 transition">
            <span>Lorem Ipsum</span>
            <span>→</span>
          </button>
        </motion.div>
      </motion.section>

      {/* Brand Logos Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="w-full bg-white py-20 px-6"
      >
        <div className="max-w-6xl text-black mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-12">
            LOREM IPSUM DOLOR SIT AMET <br />
            CONSECTETUR. COMMODO LEO AMET.
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 place-items-center">
            {['hero', 'honda', 'bajaj', 'tvs', 'royal', 'yamaha', 'ktm', 'ather', 'ola', 'revolt', 'ultra', 'tork'].map((logo, idx) => (
              <motion.img 
                key={logo}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                src={`/logo-${logo}.png`} 
                className="h-10 object-contain hover:scale-110 transition-transform" 
                alt="" 
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Fifth Section - Card Grid */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="w-full bg-white py-20 px-10 relative"
      >
        <div className="max-w-4xl text-black mx-auto text-left mb-14">
          <p className="text-blue-600 font-medium text-sm">
            Lorem ipsum dolor sit amet
          </p>
          <h2 className="text-4xl font-extrabold mt-3">
            LOREM IPSUM DOLOR SIT
          </h2>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui.
            Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisi iaculis at felis aliquet.
            Hendrerit tellus at purus lectus.
          </p>
        </div>

        <div className="max-w-7xl mx-auto text-black grid  md:grid-cols-2 gap-10">
          {[1, 2, 3, 4].map((num) => (
            <motion.div 
              key={num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: num * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="border rounded-xl shadow-sm overflow-hidden bg-white hover:shadow-lg transition-shadow"
            >
              <img
                src={`/card-${num}.png`}
                alt=""
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-lg">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>
                <p className="text-gray-600 text-sm mt-3">
                  Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi.
                  Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus
                  nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.
                </p>
                <a className="text-blue-600 font-medium text-sm mt-4 inline-block hover:underline" href="#">
                  Learn More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Sixth Section - Quote Form */}
      <section className="w-full">
        <div className="relative w-full h-[350px] flex items-center justify-center text-center">
          <img
            src="/section-6-bg.png"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-4xl px-4"
          >
            <h2 className="text-3xl md:text-4xl text-black font-extrabold text-white leading-tight">
              DOLOR SIT AMET CONSECTETUR. QUIS  
              ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA  
              MI. DOLOR SIT AMET CONSECTETUR. QUIS  
              ADIPISCING
            </h2>
          </motion.div>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="max-w-5xl mx-auto py-20 px-6"
        >
          <h3 className="text-2xl md:text-3xl text-black font-extrabold text-center mb-12">
            REQUEST A QUOTE
          </h3>

          {quoteSuccess && (
            <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-md mb-6 text-center">
              ✓ Thank you! Your quote request has been submitted successfully.
            </div>
          )}

          <form onSubmit={handleSubmitQuote(onQuoteSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 text-black md:grid-cols-2 gap-6">
              <div>
                <input
                  {...registerQuote('name')}
                  type="text"
                  placeholder="Name"
                  className="border rounded-md px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                {quoteErrors.name && (
                  <p className="text-red-500 text-sm mt-1">{quoteErrors.name.message}</p>
                )}
              </div>
              <div>
                <input
                  {...registerQuote('email')}
                  type="email"
                  placeholder="E-mail"
                  className="border text-black rounded-md px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                {quoteErrors.email && (
                  <p className="text-red-500 text-sm mt-1">{quoteErrors.email.message}</p>
                )}
              </div>
            </div>

            <div className="grid text-black grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  {...registerQuote('phone')}
                  type="text"
                  placeholder="Phone Number"
                  className="border rounded-md px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                {quoteErrors.phone && (
                  <p className="text-red-500 text-sm mt-1">{quoteErrors.phone.message}</p>
                )}
              </div>
              <div>
                <input
                  {...registerQuote('productName')}
                  type="text"
                  placeholder="Product Name"
                  className="border  text-black rounded-md px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                {quoteErrors.productName && (
                  <p className="text-red-500 text-sm mt-1">{quoteErrors.productName.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <select 
                  {...registerQuote('state')}
                  className="border  text-black rounded-md px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="">State</option>
                  <option value="maharashtra">Maharashtra</option>
                  <option value="delhi">Delhi</option>
                  <option value="karnataka">Karnataka</option>
                </select>
                {quoteErrors.state && (
                  <p className="text-red-500 text-sm mt-1">{quoteErrors.state.message}</p>
                )}
              </div>
              <div>
                <select 
                  {...registerQuote('quantity')}
                  className="border text-black rounded-md px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="">Quantity</option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51+">51+</option>
                </select>
                {quoteErrors.quantity && (
                  <p className="text-red-500 text-sm mt-1">{quoteErrors.quantity.message}</p>
                )}
              </div>
            </div>

            <div>
              <textarea
                {...registerQuote('project')}
                rows={5}
                placeholder="Please share the User Project"
                className="border text-black rounded-md px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {quoteErrors.project && (
                <p className="text-red-500 text-sm mt-1">{quoteErrors.project.message}</p>
              )}
            </div>

            <p className="text-center text-sm text-gray-600">
              By submitting this form you agree to our{" "}
              <a href="#" className="text-blue-600 underline">Terms of Service</a> and{" "}
              <a href="#" className="text-blue-600 underline">Privacy Policy</a>.
            </p>

            <div className="flex justify-center">
              <button 
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition"
              >
                Lorem Ipsum →
              </button>
            </div>
          </form>
        </motion.div>
      </section>

      {/* Mobile App Promo Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="w-full bg-white py-20 px-10"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <p className="text-blue-600 font-medium text-sm">Lorem Ipsum</p>
            <h2 className="text-3xl font-extrabold text-black leading-tight">
              Lorem Ipsum Dolor <br /> Sit Amet
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
              Lorem ipsum dolor sit amet consectetur. Vulputate amet
              aliquet morbi suspendisse convallis. Urna a urna lectus
              donec felis risus dui pellentesque. Pellentesque ultricies ipsum.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <img src="/google-play.png" alt="Google Play" className="h-10 hover:scale-105 transition-transform cursor-pointer" />
              <img src="/app-store.png" alt="App Store" className="h-10 hover:scale-105 transition-transform cursor-pointer" />
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/mobile-hand.png"
              alt="Phone"
              className="max-w-md w-full object-contain"
            />
          </div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="w-full bg-[#f3f7fc] py-20 px-10"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase">No Limits</p>
            <h2 className="text-3xl font-extrabold text-black leading-tight">
              Lorem Ipsum Dolor Sit <br /> Amet
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed max-w-sm">
              Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra
              tempor quis arcu. Ipsum nullam.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium w-max hover:bg-blue-700 transition">
              Lorem Ipsum →
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <motion.img 
                key={num}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: num * 0.05 }}
                whileHover={{ scale: 1.05 }}
                src={`/gallery-${num}.png`} 
                className="w-full h-28 object-cover rounded-md cursor-pointer" 
              />
            ))}
            <motion.img 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              whileHover={{ scale: 1.02 }}
              src="/gallery-7.png" 
              className="w-full h-28 object-cover rounded-md col-span-3 cursor-pointer" 
            />
          </div>
        </div>
      </motion.section>

      {/* Seventh Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="w-full bg-white py-20 px-10 relative"
      >
        <div className="max-w-7xl text-black mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white rounded-xl shadow-sm p-10">
          <img
            src="/next-lower-hero.png"
            alt="Hero"
            className="w-full h-[380px] object-cover rounded-lg"
          />
          <div className="flex flex-col space-y-5">
            <p className="text-blue-600 text-sm font-medium">Lorem Ipsum</p>
            <h2 className="text-3xl font-extrabold leading-tight">
              LOREM IPSUM DOLOR SIT <br />
              AMET CONSECTETUR. ENIM <br />
              DONEC.
            </h2>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio amet
              enim amet est.
            </p>
            <div className="grid grid-cols-2 gap-y-2 text-gray-700 text-sm">
              {['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum'].map((item, idx) => (
                <div key={idx}>{item}</div>
              ))}
            </div>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-medium w-max mt-4 hover:bg-blue-700 transition">
              Lorem Ipsum →
            </button>
          </div>
        </div>
        <div className="w-full h-2 mt-10 bg-gradient-to-r from-blue-600 via-green-500 to-purple-700 rounded-full" />
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="w-full bg-blue-600 py-20 px-10 text-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start justify-between flex-wrap gap-6">
            <div>
              <p className="text-sm">Join other Sun harvesters</p>
              <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
                Lorem Ipsum Dolor Sit Amet
              </h2>
              <p className="text-white/80 mt-3 max-w-xl text-sm leading-relaxed">
                Duis neiland lacus libero, placerat pharetra elementum porttitor.
                Bolifend mi tristique condimentum consequat fusce risus, ultrices aliquet commodo.
              </p>
            </div>
            <button className="bg-white text-blue-600 px-6 py-2 rounded-md font-medium h-max hover:bg-gray-100 transition">
              Lorem Ipsum →
            </button>
          </div>

          <div className="relative overflow-hidden mt-14">
            <motion.div 
              animate={{ x: -currentTestimonial * 100 + '%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="flex gap-6"
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-white text-black rounded-xl p-6 shadow-sm flex-shrink-0"
                  style={{ width: 'calc(25% - 18px)', minWidth: '280px' }}
                >
                  <div className="text-blue-600 text-3xl mb-3">{testimonial.icon}</div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center gap-3 mt-5">
                    <img src={testimonial.avatar} className="w-10 h-10 rounded-full" alt="" />
                    <p className="text-sm font-medium">{testimonial.name}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex items-center gap-4 mt-10">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-blue-600 transition"
            >
              ‹
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-blue-600 transition"
            >
              ›
            </button>
          </div>
        </div>
      </motion.section>

      {/* Ninth Section - Tabs */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="w-full bg-white py-20 px-10"
      >
        <div className="max-w-7xl mx-auto text-black grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col space-y-6">
            <h2 className="text-3xl font-extrabold">
              LOREM IPSUM DOLOR SIT AMET
            </h2>
            
            {/* Tabs */}
            <div className="flex items-center gap-8 text-sm font-medium border-b border-gray-200">
              {['research', 'plan', 'design'].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab as TabKey)}
                  className={`pb-3 px-2 border-b-2 transition-all duration-300 relative ${
                    activeTab === tab 
                      ? 'text-blue-600 border-blue-600 font-semibold' 
                      : 'text-gray-500 border-transparent hover:text-black'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Tab Content with Animation */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                {tabContent[activeTab].content}
              </p>

              <a
                href="#"
                className="text-blue-600 font-medium text-sm hover:underline inline-flex items-center gap-2 mt-4"
              >
                {tabContent[activeTab].link} →
              </a>
            </motion.div>
          </div>
          
          <img
            src="/handshake.png"
            alt="Handshake"
            className="w-full h-[350px] rounded-lg object-cover shadow"
          />
        </div>
      </motion.section>

      {/* Tenth Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="w-full bg-white py-20 px-10 relative"
      >
        <div className="max-w-7xl mx-auto text-black grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold leading-tight">
              LOREM IPSUM DOLOR SIT <br />
              AMET CONSECTETUR. <br />
              DIGNISSIM TELLUS.
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
              Lorem ipsum dolor sit amet consectetur. In malesuada morbi et lobortis 
              amet laoreet sapien ipsum eget. Adipiscing id odio in libero nisl tortor 
              tincidunt ultricies fringilla mauris. Aenean egestas turpis porta pulvinar.
              Nisi in facilisis augue fermentum eget egestas sociis faucibus faucibus.
              Tempor fusce.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium text-sm w-max hover:bg-blue-700 transition">
              Lorem Ipsum →
            </button>
          </div>
          <div className="relative">
            <img
              src="/service-meeting.png"
              alt="Service Meeting"
              className="w-full h-[380px] rounded-lg object-cover shadow-md"
            />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-16 -left-10 bg-white rounded-xl shadow-lg p-6 w-[320px]"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-gray-800">Lorem ipsum dolor sit</h4>
                <span className="text-red-500 text-xl">📌</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Habitant volutpat ultrices nisi 
                donec in odio tempor sit feugiat quis. Nisl convallis cursus et lectus 
                tortor at ornare ullamcorper orci.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="w-full h-[4px] mt-24 bg-gradient-to-r from-blue-600 via-green-500 to-purple-700" />
      </motion.section>

      {/* Twelfth Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="w-full bg-white py-20 px-10"
      >
        <div className="max-w-3xl mx-auto text-black text-center">
          <h2 className="text-3xl font-extrabold">
            LOREM IPSUM DOLOR SIT AMET
          </h2>
          <p className="text-gray-600 text-sm mt-4 leading-relaxed">
            Aliquet sed nulla tincidunt pulvinar nec non felis et facilisis dictumst. 
            Ornare rhoncus quis velit massa feugiat ultricies. Malesuada et aliquet 
            mi ac est quis nisl, auctor amet dignissim. Sed orci vestibulum egestas 
            quis euismod magna egestas vitae. Nisl eu fringilla habitant ac facilisi.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mt-14 relative flex flex-col md:flex-row gap-8 items-start justify-center">
          <img
            src="/story-hero.png"
            alt="Story Hero"
            className="w-full md:w-1/2 h-[350px] object-cover rounded-lg shadow-sm"
          />
          <div className="bg-white rounded-xl shadow-md p-6 w-full md:w-[380px] relative md:-ml-10">
            <h4 className="text-lg text-black font-semibold">Artist & Investor</h4>
            <p className="text-gray-600 text-sm mt-3 leading-relaxed">
              Eirmod sagittis, at porttitor morbi libero vitae amet, libero adipiscing 
              auctor. Malesuada eros tortor id faucibus a fermentum. Vitae ultricies 
              blandit. Egestas eu auctor tristique gravida sed at.
            </p>
            <a href="#" className="text-blue-600 text-sm font-medium mt-4 inline-block hover:underline">
              Read Full Story →
            </a>
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-10">
          {[0, 1, 2].map((dot) => (
            <div key={dot} className={`w-3 h-3 rounded-full ${dot === 0 ? 'bg-blue-400' : 'bg-gray-300'}`}></div>
          ))}
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="w-full bg-white py-20 px-10"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl text-black font-extrabold mb-10">
            FREQUENTLY ASKED QUESTIONS (FAQS)
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border rounded-lg p-5"
              >
                <div 
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFaq(index)}
                >
                  <h4 className="font-semibold text-gray-800">
                    {faq.question}
                  </h4>
                  <span className="text-xl text-gray-700 transition-transform duration-200" style={{ transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0)' }}>
                    {openFaq === index ? '−' : '+'}
                  </span>
                </div>

                <motion.div
                  initial={false}
                  animate={{ height: openFaq === index ? 'auto' : 0, opacity: openFaq === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: 'hidden' }}
                >
                  <p className="text-gray-600 text-sm mt-3">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      

        {/* CTA Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 flex flex-col items-center text-center"
        >
          <div className="bg-gray-200 text-black px-4 py-1 rounded font-bold">LOGO</div>
          <h3 className="text-3xl text-black font-extrabold mt-6">
            LOREM IPSUM DOLOR SIT AMET <br />
            CONSECTETUR. DUI.
          </h3>
          <p className="text-gray-600 text-black max-w-md mt-4 text-sm">
            Lorem ipsum dolor sit amet consectetur. Nisi faucibus vitae porttitor proinert
            fringilla nisl. Aen bazbi rutrum nunc.
          </p>
          <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition">
            Lorem Ipsum →
          </button>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <footer className="w-full bg-[#0d1224] text-white py-20 px-10 mt-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10">
          <div>
            <div className="bg-gray-200 text-black font-bold px-4 py-1 rounded inline-block">LOGO</div>
          </div>
          {[1, 2, 3, 4].map((col) => (
            <div key={col} className="space-y-2 text-sm">
              <p className="font-medium text-white/80">Lorem Ipsum</p>
              {[1, 2, 3, 4].map((item) => (
                <p key={item} className="text-white/60 hover:text-white cursor-pointer transition">Lorem Ipsum</p>
              ))}
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}
