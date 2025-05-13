import { Link, useParams } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Leaf, Calendar, User, Tag, ArrowLeft, Share2, Bookmark, MessageSquare, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

// Blog posts data - would typically come from an API or database
const blogPosts = [
  {
    id: "regenerative-agriculture",
    title: "Regenerative Agriculture: Beyond Sustainability",
    excerpt: "Exploring how regenerative practices can actually improve ecosystems while producing food.",
    content: `
      <p class="mb-4">Regenerative agriculture is a conservation and rehabilitation approach to food and farming systems. It focuses on topsoil regeneration, increasing biodiversity, improving the water cycle, enhancing ecosystem services, supporting biosequestration, increasing resilience to climate change, and strengthening the health and vitality of farm soil.</p>
      
      <p class="mb-4">Unlike conventional agriculture, which often depletes soil and requires increasing amounts of inputs, regenerative agriculture actually improves the resources it uses. It's based on the principle that the health of soil, plants, animals, and humans are interconnected.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Key Principles of Regenerative Agriculture</h2>
      
      <ol class="list-decimal pl-6 mb-6 space-y-2">
        <li>Minimize soil disturbance (no-till or reduced tillage)</li>
        <li>Keep soil covered (cover crops, mulch)</li>
        <li>Maintain living roots in the soil</li>
        <li>Integrate livestock</li>
        <li>Maximize biodiversity</li>
      </ol>
      
      <p class="mb-4">These practices lead to increased soil organic matter, more resilient crops, reduced need for external inputs, and ultimately, more profit for farmers.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Environmental Benefits</h2>
      
      <p class="mb-4">Perhaps the most exciting aspect of regenerative agriculture is its potential to sequester carbon from the atmosphere. Healthy soil acts as a carbon sink, pulling carbon dioxide from the air and storing it underground. This not only helps mitigate climate change but also improves soil health and productivity.</p>
      
      <p class="mb-4">According to research, regenerative agriculture practices can sequester 5-10 tons of carbon dioxide per hectare per year. If applied globally, this approach could potentially reverse climate change while simultaneously increasing food production and improving farm profitability.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Economic Benefits for Farmers</h2>
      
      <p class="mb-4">While the transition to regenerative practices may require initial investment and learning, the long-term economic benefits are significant. Farmers practicing regenerative agriculture typically see:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Reduced input costs (less fertilizer, pesticides, fuel)</li>
        <li>Improved yield stability, especially during extreme weather events</li>
        <li>Premium prices for regeneratively grown products</li>
        <li>New revenue streams through carbon credits and ecosystem services payments</li>
      </ul>
      
      <p class="mb-4">As consumer demand for sustainably produced food continues to grow, regenerative agriculture offers farmers a way to meet this demand while improving their bottom line.</p>
    `,
    author: {
      name: "Dr. Emma Johnson",
      role: "Soil Scientist",
      avatar: "/placeholder.svg?height=100&width=100"
    },
    date: "April 15, 2024",
    category: "Sustainable Farming",
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=2070&auto=format&fit=crop",
    readTime: "8 min read"
  },
  {
    id: "carbon-farming",
    title: "Carbon Farming: A New Revenue Stream",
    excerpt: "How farmers are getting paid for sequestering carbon through improved agricultural practices.",
    content: `
      <p class="mb-4">Carbon farming is revolutionizing how we think about agriculture's role in addressing climate change. By implementing specific farming practices that sequester carbon in the soil, farmers are not only helping the environment but also opening up new revenue streams through carbon credit markets.</p>
      
      <p class="mb-4">The concept is simple: plants absorb carbon dioxide from the atmosphere through photosynthesis and store some of that carbon in the soil. By adopting practices that enhance this natural process, farmers can significantly increase the amount of carbon sequestered while improving soil health.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">How Carbon Credits Work for Farmers</h2>
      
      <p class="mb-4">Carbon credits are generated when farmers implement practices that demonstrably sequester carbon or reduce greenhouse gas emissions. These credits can then be sold to companies looking to offset their carbon footprint, creating a new revenue stream for farmers.</p>
      
      <p class="mb-4">The process typically involves:</p>
      
      <ol class="list-decimal pl-6 mb-6 space-y-2">
        <li>Establishing a baseline measurement of soil carbon</li>
        <li>Implementing carbon-sequestering practices</li>
        <li>Monitoring and verifying carbon sequestration</li>
        <li>Registering and selling carbon credits</li>
      </ol>
      
      <p class="mb-4">Depending on the program and region, farmers can earn anywhere from $10 to $50 per ton of CO2 equivalent sequestered.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Carbon-Sequestering Practices</h2>
      
      <p class="mb-4">Several agricultural practices have been proven effective at sequestering carbon:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>No-till or reduced tillage farming</li>
        <li>Cover cropping</li>
        <li>Crop rotation</li>
        <li>Agroforestry</li>
        <li>Managed grazing</li>
        <li>Application of compost or biochar</li>
      </ul>
      
      <p class="mb-4">These practices not only sequester carbon but also improve soil health, water retention, and biodiversity, creating a win-win for farmers and the environment.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">The Future of Carbon Farming</h2>
      
      <p class="mb-4">As carbon markets mature and measurement technologies improve, carbon farming is expected to become an increasingly important part of agricultural economics. Forward-thinking farmers who adopt these practices early stand to benefit the most, positioning themselves as leaders in climate-smart agriculture.</p>
      
      <p class="mb-4">With major corporations pledging to become carbon neutral or even carbon negative in the coming decades, the demand for agricultural carbon credits is projected to grow significantly, providing a stable additional revenue stream for farmers who embrace carbon farming practices.</p>
    `,
    author: {
      name: "Thomas Miller",
      role: "Agricultural Economist",
      avatar: "/placeholder.svg?height=100&width=100"
    },
    date: "April 10, 2024",
    category: "Climate Smart Agriculture",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2070&auto=format&fit=crop",
    readTime: "6 min read"
  },
  {
    id: "water-smart-agriculture",
    title: "Water-Smart Agriculture in Drought Conditions",
    excerpt: "Innovative approaches to water conservation that maintain productivity during dry periods.",
    content: `
      <p class="mb-4">As climate change intensifies drought conditions in many agricultural regions, water-smart farming practices are becoming essential for maintaining productivity while conserving this precious resource. These innovative approaches help farmers produce more with less water, ensuring food security in challenging conditions.</p>
      
      <p class="mb-4">Water-smart agriculture combines traditional knowledge with modern technology to optimize water use efficiency throughout the farming system. By implementing these practices, farmers can reduce water consumption by 20-50% while maintaining or even improving yields.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Innovative Irrigation Technologies</h2>
      
      <p class="mb-4">Modern irrigation technologies have revolutionized water management in agriculture:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Drip irrigation delivers water directly to plant roots, reducing evaporation losses</li>
        <li>Precision sprinklers apply water only where needed</li>
        <li>Soil moisture sensors enable irrigation scheduling based on actual plant needs</li>
        <li>Automated systems adjust watering based on weather forecasts and soil conditions</li>
      </ul>
      
      <p class="mb-4">These technologies not only save water but also reduce energy costs and labor requirements, making them economically attractive despite initial investment costs.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Drought-Tolerant Crops and Varieties</h2>
      
      <p class="mb-4">Plant breeding and biotechnology have developed crops that thrive with less water:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Drought-tolerant varieties of staple crops like corn, wheat, and rice</li>
        <li>Alternative crops like sorghum, millet, and quinoa that naturally require less water</li>
        <li>Deep-rooted perennials that access water from lower soil layers</li>
      </ul>
      
      <p class="mb-4">Selecting appropriate crops and varieties for local conditions can dramatically reduce irrigation requirements while providing resilience against drought.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Soil Management for Water Conservation</h2>
      
      <p class="mb-4">Healthy soils act as a sponge, capturing and storing rainfall for plant use:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Cover crops prevent erosion and add organic matter</li>
        <li>No-till farming maintains soil structure and increases water infiltration</li>
        <li>Mulching reduces evaporation and suppresses water-competing weeds</li>
        <li>Compost and other organic amendments improve water holding capacity</li>
      </ul>
      
      <p class="mb-4">For every 1% increase in soil organic matter, soils can hold approximately 20,000 more gallons of water per acre.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Water Harvesting and Recycling</h2>
      
      <p class="mb-4">Capturing and reusing water can significantly extend limited supplies:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Contour bunds and swales slow water movement across landscapes</li>
        <li>Farm ponds collect rainfall for later use</li>
        <li>Treated wastewater provides reliable irrigation</li>
        <li>Tailwater recovery systems recycle runoff from fields</li>
      </ul>
      
      <p class="mb-4">These systems require careful planning but can provide critical water reserves during drought periods.</p>
      
      <p class="mb-4">As water scarcity becomes more common, these water-smart practices will be essential for agricultural sustainability. Farmers who adopt them now will be better positioned to thrive in challenging conditions while conserving our most precious resource.</p>
    `,
    author: {
      name: "Dr. Amina Hassan",
      role: "Water Resource Specialist",
      avatar: "/placeholder.svg?height=100&width=100"
    },
    date: "April 5, 2024",
    category: "Water Conservation",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=2070&auto=format&fit=crop",
    readTime: "7 min read"
  }
];

export default function BlogDetailPage() {
  const { id } = useParams();
  
  // Find the blog post with the matching ID
  const post = blogPosts.find(post => post.id === id) || blogPosts[0];

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
    <div className="flex min-h-screen flex-col ">
      {/* Hero Section */}
      <div className="relative h-[70vh] flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${post.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.7)",
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-800/75 z-10"></div>
        
        {/* Content */}
        <div className="relative z-20 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-2 text-sm font-medium mb-4">
              <Link to="/" className="text-white hover:text-green-300 transition-colors">
                Home
              </Link>
              <ChevronRight className="h-4 w-4 text-green-300" />
              <Link to="/blog" className="text-white hover:text-green-300 transition-colors">
                Blog
              </Link>
              <ChevronRight className="h-4 w-4 text-green-300" />
              <span className="text-green-300 font-semibold">{post.title}</span>
            </div>
            
            <div className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full mb-4">
              {post.category}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-6 text-white">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="text-sm">{post.author.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="h-4 w-4" />
                <span className="text-sm">{post.readTime}</span>
              </div>
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
      
      {/* Article Content */}
      <motion.article 
        className="max-w-7xl mx-auto px-4 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto">
          {/* Article Actions */}
          <div className="flex justify-between items-center mb-8">
            <Link to="/BlogPage" className="inline-flex items-center text-green-700 hover:text-green-800 font-medium">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
            
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="rounded-full hover:bg-green-50 hover:text-green-700 transition-colors">
                <Share2 className="h-4 w-4 mr-1" /> Share
              </Button>
              <Button variant="outline" size="sm" className="rounded-full hover:bg-green-50 hover:text-green-700 transition-colors">
                <Bookmark className="h-4 w-4 mr-1" /> Save
              </Button>
            </div>
          </div>
          
          {/* Main Content */}
          <motion.div 
            variants={itemVariants}
            className="prose prose-green max-w-none prose-headings:text-green-800 prose-img:rounded-xl prose-img:shadow-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Author Box */}
          <motion.div 
            variants={itemVariants}
            className="flex gap-6 p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl mt-12 border border-green-100 shadow-sm"
          >
            <img 
              src={post.author.avatar} 
              alt={post.author.name} 
              className="h-20 w-20 rounded-full object-cover border-4 border-white shadow-md"
            />
            <div>
              <h3 className="font-bold text-xl text-green-800">{post.author.name}</h3>
              <p className="text-green-700 mb-3 font-medium">{post.author.role}</p>
              <p className="text-gray-600">
                Passionate agricultural expert dedicated to promoting sustainable farming practices that benefit both farmers and the environment.
              </p>
            </div>
          </motion.div>
          
          {/* Comments Section */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-green-800">Comments (3)</h3>
            <div className="space-y-6">
              <div className="p-6 border rounded-xl bg-white shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-start gap-4">
                  <img
                    src="/placeholder.svg?height=50&width=50"
                    alt="User avatar"
                    className="rounded-full w-12 h-12 object-cover border-2 border-green-100"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-bold text-green-800">John Farmer</p>
                      <p className="text-xs text-gray-500">2 days ago</p>
                    </div>
                    <p className="text-gray-600 mb-3 leading-relaxed">
                      Great article! I've been implementing these practices on my farm for the past three years and
                      have seen significant improvements. The initial transition was challenging, but the
                      long-term benefits have been worth it.
                    </p>
                    <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700 hover:bg-green-50 rounded-full">
                      <MessageSquare className="h-4 w-4 mr-1" /> Reply
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-6 border rounded-xl bg-white shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-start gap-4">
                  <img
                    src="/placeholder.svg?height=50&width=50"
                    alt="User avatar"
                    className="rounded-full w-12 h-12 object-cover border-2 border-green-100"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-bold text-green-800">Maria Rodriguez</p>
                      <p className="text-xs text-gray-500">3 days ago</p>
                    </div>
                    <p className="text-gray-600 mb-3 leading-relaxed">
                      I'd love to see more specific examples of implementation. Many of these concepts seem geared toward larger operations with significant capital.
                    </p>
                    <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700 hover:bg-green-50 rounded-full">
                      <MessageSquare className="h-4 w-4 mr-1" /> Reply
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 p-6 border rounded-xl bg-white shadow-sm">
              <h4 className="font-bold text-green-800 mb-4">Leave a Comment</h4>
              <form className="space-y-4">
                <textarea
                  className="w-full p-4 border border-gray-200 rounded-lg min-h-[120px] focus:border-green-300 focus:ring focus:ring-green-100 focus:outline-none"
                  placeholder="Share your thoughts..."
                ></textarea>
                <Button className="bg-green-600 hover:bg-green-700 rounded-full px-6">Post Comment</Button>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.article>
      
      {/* Related Articles */}
      <motion.div 
        className="bg-gradient-to-b from-white to-green-50 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-green-800">Related Articles</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts
              .filter(relatedPost => relatedPost.id !== post.id)
              .slice(0, 3)
              .map(relatedPost => (
                <div key={relatedPost.id} className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="p-5">
                    <div className="flex gap-2 text-xs text-gray-500 mb-2">
                      <span>{relatedPost.date}</span>
                      <span>•</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                    <h4 className="font-bold mb-2 text-gray-800 group-hover:text-green-700 transition-colors">{relatedPost.title}</h4>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <Link
                      to={`/blog/${relatedPost.id}`}
                      className="text-green-600 hover:text-green-700 text-sm font-medium inline-flex items-center group-hover:translate-x-1 transition-transform"
                    >
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1 h-3 w-3"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
