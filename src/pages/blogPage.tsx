import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Leaf, Calendar, User, Tag, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

// Blog posts data - would typically come from an API
const blogPosts = [
  {
    id: "regenerative-agriculture",
    title: "Regenerative Agriculture: Beyond Sustainability",
    excerpt: "Exploring how regenerative practices can actually improve ecosystems while producing food.",
    date: "April 15, 2024",
    author: "Dr. Emma Johnson",
    category: "Sustainable Farming",
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=2070&auto=format&fit=crop",
    readTime: "8 min read"
  },
  {
    id: "carbon-farming",
    title: "Carbon Farming: A New Revenue Stream",
    excerpt: "How farmers are getting paid for sequestering carbon through improved agricultural practices.",
    date: "April 10, 2024",
    author: "Thomas Miller",
    category: "Climate Smart Agriculture",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2070&auto=format&fit=crop",
    readTime: "6 min read"
  },
  {
    id: "water-smart-agriculture",
    title: "Water-Smart Agriculture in Drought Conditions",
    excerpt: "Innovative approaches to water conservation that maintain productivity during dry periods.",
    date: "April 5, 2024",
    author: "Dr. Amina Hassan",
    category: "Water Conservation",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=2070&auto=format&fit=crop",
    readTime: "7 min read"
  },
  {
    id: "precision-agriculture",
    title: "Precision Agriculture Technologies for Small Farms",
    excerpt: "Affordable smart farming solutions that can be implemented on farms of any size.",
    date: "March 28, 2024",
    author: "Michael Wong",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop",
    readTime: "5 min read"
  },
  {
    id: "soil-health",
    title: "Building Soil Health for Long-term Productivity",
    excerpt: "Strategies to improve soil biology, structure, and fertility for sustainable crop production.",
    date: "March 20, 2024",
    author: "Dr. Lisa Brown",
    category: "Soil Science",
    image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=2070&auto=format&fit=crop",
    readTime: "9 min read"
  },
  {
    id: "local-food-systems",
    title: "Building Resilient Local Food Systems",
    excerpt: "How communities are strengthening food security through local production and distribution networks.",
    date: "March 15, 2024",
    author: "Sarah Johnson",
    category: "Food Systems",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070&auto=format&fit=crop",
    readTime: "7 min read"
  }
];

export default function BlogListPage() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex min-h-screen flex-col mt-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden h-[60vh] flex items-center">
        {/* Background Image with Parallax */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.7)",
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-800/75 z-10"></div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 z-10 overflow-hidden">
          <div className="absolute top-20 left-[10%] w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-[10%] w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-[30%] w-80 h-80 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-4">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <Leaf className="h-10 w-10 text-green-300" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-white drop-shadow-lg">
              Agricultural Blog
            </h1>
            <p className="text-xl text-green-50 mb-10 max-w-3xl mx-auto leading-relaxed">
              Waxaan idinla wadaagnaa macluumaad muhiim ah oo ku saabsan beeraha iyo wax soo saarka
            </p>
            <div className="flex justify-center items-center gap-2 text-lg font-medium">
              <Link to="/" className="text-white hover:text-green-300 transition-colors">
                Home
              </Link>
              <ChevronRight className="h-5 w-5 text-green-300" />
              <span className="text-green-300 font-semibold">Blog</span>
            </div>
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

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {blogPosts.map((post) => (                <Link to={`/BolgDetails`}>

            <motion.div
              key={post.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              variants={itemVariants}
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <User className="h-3 w-3 mr-1" />
                    {post.author}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 line-clamp-2 text-gray-800 group-hover:text-green-700 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                  <Button className="w-full bg-green-600 hover:bg-green-700 group-hover:scale-105 transition-transform">
                    Read More
                  </Button>
              </div>
            </motion.div>                </Link>

          ))}
        </motion.div>

        {/* Pagination - Made more attractive */}
        <div className="flex justify-center mt-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-2 py-1 shadow-sm">
            <Button variant="ghost" size="sm" className="rounded-full h-10 w-10 p-0 text-gray-500">
              &laquo;
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full h-10 w-10 p-0 bg-green-50 text-green-700 font-medium border border-green-100">
              1
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full h-10 w-10 p-0 text-gray-700 hover:bg-green-50 transition-colors">
              2
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full h-10 w-10 p-0 text-gray-700 hover:bg-green-50 transition-colors">
              3
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full h-10 w-10 p-0 text-gray-500">
              &raquo;
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
