import React from 'react'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'
import { Input } from './ui/input'

const ContactForm = () => {
  return (
    <section className="container py-24 ">
    <div className="mx-auto max-w-[600px]">
      <h2 className="text-3xl font-bold">Get in Touch</h2>
      <p className="mt-2 text-muted-foreground">
        Have questions about Portfolio? Fill in the form below and we'll get back to you.
      </p>
      <form className="mt-8 space-y-6 ]">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <Input id="name" placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <Textarea id="message" placeholder="Your message" rows={4} />
        </div>
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </div>
  </section>
  )
}

export default ContactForm