'use client'
import dynamic from 'next/dynamic';
import router from 'next/router';
import Step1Form from '@/components/Step1Form';
import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import Step2Form from '@/components/Step2Form';




type FormState = 'step1' | 'step2' | 'completed';

interface Step1FormProps {
    setPortfolioURL: Dispatch<SetStateAction<string>>;
    portfolioURL: string; 
    setCurrentStep: Dispatch<SetStateAction<FormState>>; // Add this line to include setCurrentStep
}



const page = () => {
    const [currentStep, setCurrentStep] = useState<FormState>('step1');
    const [portfolioURL, setPortfolioURL] = useState('');


    // useEffect(() => {
    // it use to check for already create portfolio--- then redirect to edit page
    //   }, []);

  return (
    <>
     {currentStep === 'step1' && <Step1Form  setPortfolioURL={setPortfolioURL} portfolioURL={portfolioURL} setCurrentStep={setCurrentStep} />}
     {currentStep === 'step2' && <Step2Form portfolioURL={portfolioURL} />}
    </>
  )
}

export default page