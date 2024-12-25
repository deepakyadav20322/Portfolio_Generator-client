import React from 'react'
import { Button } from './ui/button'
import { CheckCircle } from 'lucide-react'

const Pricing = () => {
  return (
    <>
    <section className="container py-24" id="pricing">
          <h2 className="text-center text-3xl font-bold">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-center text-muted-foreground">
            Choose the plan that works best for you
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:max-w-4xl lg:mx-auto">
            <div className="rounded-lg border p-8">
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="text-lg font-bold">Free</h3>
                  <p className="text-sm text-muted-foreground">Perfect to get started</p>
                </div>
                <div className="text-3xl font-bold">$0</div>
              </div>
              <ul className="mt-8 space-y-4">
                {['Custom Page Path', 'Access to 3 Portfolio Sections', 'Basic Analytics'].map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-8 w-full bg-gray-200" variant="outline">
                Get started for free
              </Button>
            </div>
            <div className="rounded-lg border p-8 bg-blue-50 border-blue-200">
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="text-lg font-bold">Pro</h3>
                  <p className="text-sm text-muted-foreground">For serious creators</p>
                </div>
                <div className="text-3xl font-bold">$10</div>
              </div>
              <ul className="mt-8 space-y-4">
                {[
                  'Everything in Free',
                  'Custom Subdomains',
                  'Advanced Analytics',
                  'Priority Support',
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-8 w-full">
                Upgrade to Pro
              </Button>
            </div>
          </div>
        </section>
    </>
  )
}

export default Pricing