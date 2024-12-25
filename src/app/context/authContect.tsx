// path/to/file
'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface User {
    googleId: string; // Required field
    displayName?: string; // Optional field
    email?: string; // Optional field
    profilePhoto?: string; // Optional field
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    setUser: (user: User | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [count,setcount] = useState(0);
    
  
    useEffect(() => {
        async function fetchUser() {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/current-user`, {
                    credentials: 'include', // Include cookies for session validation
                });
                if (!res.ok) {
                   console.log('unauthorized')
                }
                const data = await res.json();
                setUser(data.user);
                console.log(data.user)
                setcount(pre=>pre+1);
                console.log(count);
            } catch (error) {
                console.error('Failed to fetch user:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchUser();
    },[]);

    return (
        <AuthContext.Provider value={{ user, loading, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};