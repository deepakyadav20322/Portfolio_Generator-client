'use client'
import { useAuth } from "@/app/context/authContect";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const Logout = () => {
    const { setUser } = useAuth();
    const router = useRouter();

    const handleLogout = async () => {
        try {
            // Call your backend logout endpoint
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/logout`, {
                method: "GET",
                credentials: "include", // Include cookies for session validation
            });

            if (res.status==200) {
                // Clear user state on successful logout
                setUser(null);
                console.log("logout success")
                // Redirect to the login page or home page
                router.push("/signIn"); // Change this to your desired route
            } else {
                console.error("Failed to logout:", res.statusText);
            }
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };

    return (
        <Button onClick={handleLogout}>
            Logout
        </Button>
    );
};

export default Logout;