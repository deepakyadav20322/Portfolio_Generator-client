import React from 'react'

const PortfolioDirectory = () => {
  return (
    
    // Here we share some recent suscibe users---
    <section className="container py-12">
    <div className="rounded-lg border bg-card p-8">
      <h2 className="text-2xl font-bold">Portfolio Directory</h2>
      <p className="text-muted-foreground">Over 153 users who have created their professional portfolios</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex items-center gap-4 rounded-lg border p-4">
            <div className="h-10 w-10 rounded-full bg-muted" />
            <div>
              <div className="font-medium">John Smith</div>
              <div className="text-sm text-muted-foreground">Software Engineer</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default PortfolioDirectory