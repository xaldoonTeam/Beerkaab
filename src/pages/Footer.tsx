import {Link} from 'react-router-dom'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react'

 function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Company</h2>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Services</h2>
            <ul className="space-y-2">
              <li><Link to="/services/web-development" className="hover:text-white transition-colors"></Link></li>
              <li><Link to="/services/mobile-apps" className="hover:text-white transition-colors"></Link></li>
              <li><Link to="/services/consulting" className="hover:text-white transition-colors"></Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Legal</h2>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Ha Seegin Wararkii Ugu Dambeeyay</h2>
            <p className="mb-4">Ku biir liiska wararka si aad ula socoto dhammaan cusboonaysiinta iyo wararka muhiimka ah</p>
            <form onSubmit={(e) => { e.preventDefault(); console.log('Newsletter form submitted'); }} className="space-y-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button type="submit" className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* Social Links and Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link to="#" className="text-gray-400 hover:text-white"><Facebook size={24} /></Link>
            <Link to="#" className="text-gray-400 hover:text-white"><Twitter size={24} /></Link>
            <Link to="#" className="text-gray-400 hover:text-white"><Instagram size={24} /></Link>
            <Link to="#" className="text-gray-400 hover:text-white"><Linkedin size={24} /></Link>
            <Link to="#" className="text-gray-400 hover:text-white"><Github size={24} /></Link>
          </div>
          <div className="text-sm">
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}


export default Footer