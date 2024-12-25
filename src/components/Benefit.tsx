import { Search } from 'lucide-react';
import { Globe } from 'lucide-react';
import { BarChart, Rocket } from 'lucide-react';
import React from 'react'

const Benefit = () => {
  return (
    <section className="container py-24">
    <div className="space-y-16">
      <div className="max-w-[720px]">
        <h2 className="text-sm uppercase tracking-wide text-muted-foreground">Benefits</h2>
        <h3 className="mt-4 text-4xl font-bold tracking-tight lg:text-5xl">
          Your Shortcut to a Professional Portfolio
        </h3>
        <p className="mt-4 text-lg text-muted-foreground">
          Easily create a stunning portfolio with features designed to help you succeed and stand out in your professional journey.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="relative rounded-lg border bg-card p-8"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold">{benefit.title}</h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
              <span className="text-6xl font-thin text-muted-foreground/20">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Benefit;


const benefits = [
    {
      title: "Build Credibility with a Custom Subdomain",
      description: "Stand out with a personalized URL (e.g., username.Portfolio.dev) that builds trust and makes your portfolio memorable.",
      icon: <Globe className="h-5 w-5 text-blue-600" />,
    },
    {
      title: "Get Discovered with SEO Optimization",
      description: "Optimize your portfolio to rank higher in search results and attract more opportunities.",
      icon: <Search className="h-5 w-5 text-blue-600" />,
    },
    {
      title: "Streamline Updates with Unlimited Customization",
      description: "Update and personalize your portfolio anytime, including unlimited subdomain changes.",
      icon: <Rocket className="h-5 w-5 text-blue-600" />,
    },
    {
      title: "Gain Insights with Portfolio Analytics",
      description: "Understand your audience with detailed analytics to track visits and engagement.",
      icon: <BarChart className="h-5 w-5 text-blue-600" />,
    },
  ]     