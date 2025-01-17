'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github } from 'lucide-react';
import { useAuth } from "@/app/context/authContect";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Login() {
  const { user, setUser, loading } = useAuth();
  const router = useRouter();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true); // Track authentication check

  const handleGoogleSignIn = () => {
    window.location.href = 'http://localhost:3001/auth/google'; // Redirect to your backend
  };

  useEffect(() => {
    if (user) {
      router.push("/abc"); // Redirect if user is authenticated
    } else {
      setIsCheckingAuth(false); // Stop the authentication check once complete
    }
  }, [user, router]);

  if (loading || isCheckingAuth) {
    return <p></p>; // Show a loader while checking authentication
  }

  return (
    <div className="min-h-screen bg-background max-w-7xl w-full mx-auto">
      {/* Navigation */}
      <nav className="p-4">
        <Link 
          href="/" 
          className="inline-flex h-9 items-center justify-center rounded-md bg-background border-s-gray-300 border-[2px] px-4 text-sm transition-colors hover:bg-accent hover:text-accent-foreground font-semibold"
        >
          Home-{user?.email}
        </Link>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto flex flex-col items-center justify-center px-4 py-16 md:py-24">
        <div className="mx-auto w-full max-w-sm space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Sign In</h1>
            <p className="text-muted-foreground">
              Sign in to your account using one of the options below.
            </p>
          </div>

          <div className="space-y-4">
            <Button
              onClick={handleGoogleSignIn} 
              variant="default" 
              className="w-full bg-[#18181B] text-white hover:bg-[#18181B]/90"
            >
              <svg viewBox="0 0 24 24" className="mr-2 h-4 w-4">
                {/* Google Icon */}
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Sign in with Google
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <Button 
              variant="outline" 
              className="w-full"
            >
              <Github className="mr-2 h-4 w-4" />
              Sign in with GitHub
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
