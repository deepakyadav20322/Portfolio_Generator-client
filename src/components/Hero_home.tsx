import React from 'react'
import { Button } from './ui/button'

const HeroSection = () => {
  return (
    <section className="container py-24 sm:py-32">
          <div className="mx-auto max-w-[980px] text-center">
            <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
              Build Your Portfolio
              <span className="block text-blue-600">Effortlessly</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
              Create stunning portfolios in minutes with portfolio dev. Stand out from
              the crowd and land your dream opportunities.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg">Create Your Portfolio</Button>
              <Button size="lg" variant="outline">
                View Demo Portfolio →
              </Button>
            </div>
          </div>
        </section>

  )
}

export default HeroSection