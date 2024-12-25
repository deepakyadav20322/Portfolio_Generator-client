'use client'

import { Mail, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 ">
      <div className="grid gap-8 lg:grid-cols-2 justify-center items-center">
        {/* Left Column */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Get In Touch</h1>
            <p className="text-lg text-muted-foreground">
              Have questions about Portfolio.dev? We&apos;re here to help! Whether you need assistance with
              your portfolio or want to learn more about our features, don&apos;t hesitate to reach out.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 ">
            <Card className="p-6">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-gray-100 p-3">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <p className="text-sm text-muted-foreground">Portfolio.dev@gmail.com</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-gray-100 p-3">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Response Time</h3>
                  <p className="text-sm text-muted-foreground">Within 24 hours</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Right Column */}
        <div className="rounded-lg bg-[rgba(244,244,245)] p-8">
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input
                id="name"
                placeholder="Your full name"
                className="w-full bg-white"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Your email address"
                className="w-full bg-white"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your message here..."
                className="min-h-[150px] w-full resize-none bg-white"
              />
            </div>

            <Button className="w-full">
              Send Message
              <span className="ml-2">→</span>
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

