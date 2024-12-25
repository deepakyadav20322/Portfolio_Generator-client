import { Button } from "@/components/ui/button"

import { DiscIcon as Discord, CheckCircle, Globe, Search, Rocket, BarChart, Contact } from 'lucide-react'
import ContactPage from "@/components/Contact"
import HeroSection from "@/components/Hero_home"
import FAQ from '@/components/Faq'
import PortfolioDirectory from "@/components/PortfolioDirectory"
import Footer from "@/components/Footer"
import Pricing from "@/components/Pricing"
import Navbar from "@/components/Navbar"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
    
    <Navbar/> 
      <main className="flex-1 max-w-7xl w-full mx-auto">
        {/* Hero Section */}
       
       <HeroSection/>

        {/* Portfolio Directory */}
      <PortfolioDirectory/>

        {/* Benefits Section */}
       


        {/* Features Grid */}
        <section className="container py-24" id="features">
          <h2 className="text-center text-3xl font-bold">What Makes Us Different</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <div key={i} className="rounded-lg border p-6">
                <div className="mb-4 inline-block rounded-lg bg-blue-100 p-3 text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Community Section */}
        <section className="bg-slate-50 py-24">
          <div className="container">
            <div className="mx-auto max-w-[800px] text-center">
              <Discord className="mx-auto h-16 w-16 text-[#5865F2]" />
              <h2 className="mt-6 text-3xl font-bold">
                Ready to join this Community?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Join our Discord community to connect with other portfolio creators
                and get help when you need it.
              </p>
              <Button size="lg" className="mt-8">
                Join Discord
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        
        <Pricing/>

        {/* Contact Form */}
       <ContactPage/>

        {/* FAQ Section */}
      
       <FAQ/>
      </main>

    <Footer/>
    </div>
  )
}

const features = [
  {
    title: "Custom Subdomains",
    description: "Get your own custom subdomain for your portfolio.",
    icon: "🌐",
  },
  {
    title: "Mobile Friendly",
    description: "Your portfolio looks great on all devices.",
    icon: "📱",
  },
  {
    title: "Built-in SEO",
    description: "Optimize your portfolio for search engines.",
    icon: "🔍",
  },
  {
    title: "Analytics",
    description: "Track visitors and engagement on your portfolio.",
    icon: "📊",
  },
  {
    title: "Custom Themes",
    description: "Choose from multiple themes or create your own.",
    icon: "🎨",
  },
  {
    title: "Fast Loading",
    description: "Lightning fast loading times for better UX.",
    icon: "⚡",
  },
]



