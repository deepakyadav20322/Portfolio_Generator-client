'use client'

import { useAuth } from "@/app/context/authContect";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from 'lucide-react'
import { SetStateAction, Dispatch, useState } from "react";
import Link from "next/link";

type FormState = 'step1' | 'step2' | 'completed';

interface RouteCheckerProps {
  setPortfolioURL: Dispatch<SetStateAction<string>>;
  portfolioURL: string;
  setCurrentStep: Dispatch<SetStateAction<FormState>>; // Add this line to include setCurrentStep
}

export default function RouteChecker({ setPortfolioURL, portfolioURL, setCurrentStep}: RouteCheckerProps) {

  const [availability, setAvailability] = useState<string | null>(null);
 const {user,setUser} = useAuth()

  const checkRouteAvailability = async (url: string) => {
  
    try {
    //   const response = await fetch(url, { method: 'GET' });
      console.log('Available');
      setAvailability('Available');
      setCurrentStep('step2');
        return;
    //   setAvailability(response.ok ? 'Available' : 'Not Available');
    } catch (error) {
      console.error('Error checking URL availability:', error);
      setAvailability('Not Available');
    }
  };

  return (
    <>

      <Link href={'/'} className="inline-flex h-9 items-center justify-center rounded-md bg-background border-s-gray-300 border-[2px] px-4 text-sm transition-colors hover:bg-accent hover:text-accent-foreground font-semibold text-black mx-6 my-6"
        >
          Home
        </Link>
          
  
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      
      <div className="w-full max-w-xl space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-medium">Route Name</h1>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">
              [https://portly.dev/portfolio-name]
            </span>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="flex-1">
            <Input
              placeholder="your-unique-route"
              className="h-11"
             
              onChange={(e) => setPortfolioURL(e.target.value)}
            />
          </div>
          <Button
            variant="secondary"
            onClick={() => checkRouteAvailability(portfolioURL)}
            size="lg"
            className="min-w-[160px] bg-zinc-600 text-white hover:bg-zinc-700"
          >
            Check Availability
          </Button>
        </div>

        {availability && (
          <div className="text-sm text-muted-foreground">
            Route is {availability}.
          </div>
        )}
      </div>
    </div>
    </>
  );
}
