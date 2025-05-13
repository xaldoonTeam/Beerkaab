"use client"

import { useState, useEffect } from "react"
import {Link} from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronRight,
  Leaf,
  Droplets,
  SproutIcon as Seedling,
  FlaskRoundIcon as Flask,
  Shovel,
  Wheat,
  Tractor,
  Waves,
  ArrowRight,
  Star,
} from "lucide-react"

const categories = [
  {
    id: "plowing",
    title: "Berr Qodid (Plowing)",
    description: "Professional plowing services for all types of farmland",
    image: "https://blog.sathguru.com/wp-content/uploads/2020/07/Farming-as-a-Service-A-promising-model-to-explore.jpg",
    icon: <Tractor className="w-8 h-8" />,
    // color: "from-green-500 to-green-700",
    textColor: "text-green-900",
    accentColor: "bg-green-600",
  },
  {
    id: "irrigation",
    title: "Waraabinta (Irrigation)",
    description: "Modern irrigation systems for efficient water management",
    image: "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?q=80&w=2070&auto=format&fit=crop",
    icon: <Droplets className="w-8 h-8" />,
    // color: "from-green-500 to-green-700",
    textColor: "text-green-900",
    accentColor: "bg-green-600",
  },
  {
    id: "seeding",
    title: "Abuurka (Seeding)",
    description: "Precision seeding services for optimal crop growth",
    image: "https://www.shutterstock.com/image-photo/clipboard-nature-scientist-woman-agriculture-600nw-2291907943.jpg",
    icon: <Seedling className="w-8 h-8" />,
    // color: "from-green-500 to-green-700",
    textColor: "text-green-900",
    accentColor: "bg-green-600",
  },
  {
    id: "fertilizers",
    title: "Fertiliyoonka (Fertilizers)",
    description: "High-quality fertilizers for enhanced soil fertility",
    image: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?q=80&w=2071&auto=format&fit=crop",
    icon: <Flask className="w-8 h-8" />,
    // color: "from-green-500 to-green-700",
    textColor: "text-green-900",
    accentColor: "bg-green-600",
  },
  {
    id: "garden-tools",
    title: "Alaabta Beerta (Garden Tools)",
    description: "Essential tools for efficient garden maintenance",
    image: "https://images.unsplash.com/photo-1617576683096-00fc8eecb3af?q=80&w=2070&auto=format&fit=crop",
    icon: <Shovel className="w-8 h-8" />,
    // color: "from-green-500 to-green-700",
    textColor: "text-green-900",
    accentColor: "bg-green-600",
  },
  {
    id: "livestock-feed",
    title: "Khadamka Xoolaha (Livestock Feed)",
    description: "Nutritious feed options for healthy livestock",
    image: "https://biz-file.com/c/2304/695310-700x467.jpg",
    icon: <Wheat className="w-8 h-8" />,
    // color: "from-green-500 to-green-700",
    textColor: "text-green-900",
    accentColor: "bg-green-600",
  },
  {
    id: "farm-machinery",
    title: "Mashiinnada Beerta (Farm Machinery)",
    description: "Advanced machinery for modern farming operations",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPrXpdyNhVck2OnaIj_1025xXAzTFDSH16lw&s",
    icon: <Tractor className="w-8 h-8" />,
    // color: "from-green-500 to-green-700",
    textColor: "text-green-900",
    accentColor: "bg-green-600",
  },
  {
    id: "water-systems",
    title: "Nidaamyada Biyaha (Water Systems)",
    description: "Comprehensive water management solutions for farms",
    image: "https://images.unsplash.com/photo-1468421870903-4df1664ac249?q=80&w=2069&auto=format&fit=crop",
    icon: <Waves className="w-8 h-8" />,
    // color: "from-green-500 to-green-700",
    textColor: "text-green-900",
    accentColor: "bg-green-600",
  },
]

export default function CategoriesGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [scrollY, setScrollY] = useState(0)
  const [activeCategory, setActiveCategory] = useState<number | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  // Parallax effect for hero section
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Set loaded state after component mounts
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const heroTextVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50">
      {/* Hero Section with Parallax */}
      <div className="relative overflow-hidden h-[80vh] flex items-center">
        {/* Background Image with Parallax */}
        <div
          className="absolute inset-0 z-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            backgroundImage: `url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.7)",
          }}
        />

        {/* Animated Gradient Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-emerald-800/80 to-green-800/75 z-10"
        ></motion.div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 z-10 overflow-hidden">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            className="absolute top-20 left-[10%] w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          ></motion.div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.5 }}
            className="absolute top-40 right-[10%] w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          ></motion.div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1 }}
            className="absolute bottom-20 left-[30%] w-80 h-80 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          ></motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          {isLoaded && (
            <>
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: [0, -20, 0], opacity: 0.6 }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
                className="absolute top-[20%] left-[15%] w-8 h-8 text-yellow-300"
              >
                <Seedling className="w-full h-full" />
              </motion.div>
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: [0, -30, 0], opacity: 0.6 }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
                className="absolute top-[30%] right-[20%] w-10 h-10 text-emerald-300"
              >
                <Droplets className="w-full h-full" />
              </motion.div>
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: [0, -25, 0], opacity: 0.6 }}
                transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, delay: 0.8 }}
                className="absolute top-[60%] left-[25%] w-6 h-6 text-green-300"
              >
                <Wheat className="w-full h-full" />
              </motion.div>
            </>
          )}
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={heroTextVariants} className="max-w-4xl mx-auto">
            <motion.div
              className="flex justify-center mb-6"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
            >
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 shadow-lg shadow-emerald-500/30">
                <Leaf className="h-12 w-12 text-white" />
              </div>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white drop-shadow-lg">
              Adeegyada{" "}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent"
              >
                (Services)
              </motion.span>
            </h1>
            <p className="text-xl text-green-50 mb-10 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of agricultural services designed to enhance your farming experience and
              maximize productivity
            </p>
            <motion.div
              className="flex justify-center items-center gap-2 text-lg font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Link to="/" className="text-white hover:text-green-300 transition-colors">
                Home
              </Link>
              <ChevronRight className="h-5 w-5 text-green-300" />
              <span className="text-green-300 font-semibold">Adeegyada</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-10"
            >
              <Link
                to="#services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 border border-white/20 group"
              >
                Explore Services
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Categories Grid Section */}
      <div id="services" className="py-20 relative">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="absolute -top-40 -right-40 w-80 h-80 rounded-full border-[30px] border-green-100 opacity-50"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.4, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full border-[20px] border-green-100 opacity-40"
          ></motion.div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.div
              variants={itemVariants}
              className="inline-block rounded-full bg-gradient-to-r from-emerald-500 to-green-500 px-4 py-1.5 text-sm text-white font-medium mb-4 shadow-lg shadow-emerald-500/20"
            >
              Our Expertise
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-emerald-800 to-green-700 bg-clip-text text-transparent"
            >
              Comprehensive Agricultural Services
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our wide range of specialized agricultural services designed to support farmers and enhance
              productivity
            </motion.p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                <Link
                  to={`/ServiceDetails`}
                  className="group block"
                  onMouseEnter={() => {
                    setHoveredIndex(index)
                    setActiveCategory(index)
                  }}
                  onMouseLeave={() => {
                    setHoveredIndex(null)
                    setTimeout(() => setActiveCategory(null), 300)
                  }}
                >
                  <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-xl transition-all duration-500 transform group-hover:shadow-2xl group-hover:-translate-y-2 border border-white/20 backdrop-blur-sm">
                    {/* Card Background with Layered Design */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                      {/* Base Image */}
                      <div className="absolute inset-0 z-0">
                        <img
                          src={category.image || "/placeholder.svg?height=600&width=400"}
                          alt={category.title}
                          
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 filter brightness-75 w-full h-full"
                        />
                      </div>

                      {/* Gradient Overlay with Pattern */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-90 z-10 transition-opacity duration-500 group-hover:opacity-95 mix-blend-multiply`}
                      ></div>

                      {/* Pattern Overlay */}
                      <div className="absolute inset-0 z-20 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJ3aGl0ZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoLTJ2NGgyek0yNCAzNGgydi00aC0ydjR6bTAtNnYtNGgtMnY0aDJ6Ii8+PC9nPjwvc3ZnPg==')]"></div>
                    </div>

                    {/* Animated Particles */}
                    <AnimatePresence>
                      {activeCategory === index && (
                        <div className="absolute inset-0 z-30 overflow-hidden pointer-events-none">
                          {[...Array(8)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{
                                opacity: 0,
                                scale: 0,
                                x: Math.random() * 100 - 50,
                                y: Math.random() * 100 + 100,
                              }}
                              animate={{
                                opacity: [0, 0.7, 0],
                                scale: [0, 1, 0.5],
                                y: [100, -100],
                                x: Math.random() * 200 - 100,
                              }}
                              exit={{ opacity: 0, scale: 0 }}
                              transition={{
                                duration: 2 + Math.random() * 2,
                                ease: "easeOut",
                              }}
                              className={`absolute ${category.accentColor} w-2 h-2 rounded-full`}
                              style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </AnimatePresence>

                    {/* Card Content */}
                    <div className="absolute inset-0 z-40 flex flex-col p-8">
                      {/* Top Section with Icon */}
                      <div className="flex justify-between items-start mb-auto">
                        {/* Icon Circle with Glow Effect */}
                        <motion.div
                          className={`${category.accentColor} rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 relative`}
                          whileHover={{
                            rotate: 12,
                            scale: 1.1,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="absolute inset-0 rounded-2xl bg-white/20 blur-md -z-10"></div>
                          {category.icon}
                        </motion.div>

                        {/* Featured Badge (random) */}
                        {index === 2 && (
                          <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg flex items-center gap-1">
                            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                            <span className="text-xs font-bold text-gray-800">Featured</span>
                          </div>
                        )}
                      </div>

                      {/* Bottom Content Section */}
                      <div className="mt-auto">
                        {/* Decorative Line */}
                        <div
                          className={`w-16 h-1 ${category.accentColor} rounded-full mb-4 group-hover:w-24 transition-all duration-300`}
                        ></div>

                        {/* Title with Animated Underline */}
                        <h3 className="text-3xl font-bold mb-3 text-white relative inline-block">
                          {category.title}
                          <motion.div
                            className={`absolute bottom-0 left-0 h-[2px] ${category.accentColor} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: hoveredIndex === index ? "100%" : "30%" }}
                            transition={{ duration: 0.5 }}
                          />
                        </h3>

                        {/* Description with Fade-in Effect */}
                        <motion.p
                          className={`text-base ${category.textColor} max-w-md mb-6 backdrop-blur-sm bg-white/80 p-3 rounded-xl border border-black/10`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{
                            opacity: hoveredIndex === index ? 1 : 0,
                            y: hoveredIndex === index ? 0 : 10,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {category.description}
                        </motion.p>

                        {/* Action Button with Animation */}
                        <motion.div
                          className={`inline-flex items-center text-sm font-medium ${category.accentColor} text-gray-900 rounded-full px-5 py-2.5 transform transition-all duration-300 shadow-lg group-hover:shadow-xl`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Explore Service
                          <motion.span
                            animate={hoveredIndex === index ? { x: [0, 5, 0] } : {}}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                          >
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </motion.span>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="relative overflow-hidden">
        {/* Curved Divider */}
        <div className="absolute top-0 left-0 right-0 h-16">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path
              fill="#065f46"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,165.3C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className="bg-emerald-50 text-white py-20 pt-32 relative overflow-hidden ">
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-300 via-green-400 to-emerald-300"></div> */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.5, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-emerald-700/50"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.5, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-emerald-700/50"
            ></motion.div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="w-20 h-20 mx-auto mb-8 rounded-full bg-white/10 flex items-center justify-center"
              >
                <Leaf className="w-10 h-10 text-emerald-700" />
              </motion.div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-black">
                Ready to Transform Your
                <span className="bg-gradient-to-r from-emerald-700 to-green-700 bg-clip-text text-transparent ml-2">
                  Agricultural Operations?
                </span>
              </h2>
              <p className="text-xl text-black mb-10">
                Contact our team of experts today to discuss how our services can help you achieve better results and
                maximize your farm's potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-emerald-900 bg-white rounded-full hover:bg-emerald-50 transition-colors duration-300 shadow-lg shadow-emerald-900/20"
                  >
                    Contact Us
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/services/pricing"
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-emerald-700 rounded-full hover:bg-emerald-600 transition-colors duration-300 border border-emerald-600 shadow-lg shadow-emerald-900/20"
                  >
                    View Pricing
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Add custom animation styles */}
      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);  scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}
