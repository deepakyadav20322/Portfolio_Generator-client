import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const FAQ = () => {
  return (
    <section className="container py-24" id="faq">
    <h2 className="text-center text-3xl font-bold">
      Frequently Asked Questions
    </h2>
    <div className="mx-auto mt-8 max-w-[700px]">
      <Accordion type="single" collapsible>
        {[
          {
            question: "How do I create a portfolio?",
            answer: "Creating a portfolio is simple. Just sign up, choose a template, and customize it with your content."
          },
          {
            question: "Is it free to use?",
            answer: "Yes, we offer a free plan with basic features. For advanced features, check out our Pro plan."
          },
          {
            question: "Can I use my own domain?",
            answer: "Pro users can use custom domains and subdomains for their portfolios."
          },
        ].map((item, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
  )
}

export default FAQ