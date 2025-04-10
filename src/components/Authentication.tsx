
import React from 'react';
import { 
  SignInButton, 
  SignUpButton, 
  SignedIn, 
  SignedOut, 
  UserButton,
  useClerk
} from '@clerk/clerk-react';
import { Button } from "@/components/ui/button";

const Authentication: React.FC = () => {
  // Check if Clerk is available
  const isClerkAvailable = (() => {
    try {
      // This will throw an error if Clerk is not initialized
      useClerk();
      return true;
    } catch (e) {
      return false;
    }
  })();

  // Show placeholder buttons if Clerk is not properly initialized
  if (!isClerkAvailable) {
    return (
      <div className="flex items-center space-x-4">
        <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
          Log In
        </Button>
        <Button className="bg-orange-600 hover:bg-orange-700 text-white">
          Register
        </Button>
      </div>
    );
  }

  // Show Clerk authentication when properly initialized
  return (
    <>
      <SignedOut>
        <div className="flex items-center space-x-4">
          <SignInButton mode="modal">
            <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
              Log In
            </Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">
              Register
            </Button>
          </SignUpButton>
        </div>
      </SignedOut>
      
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </>
  );
};

export default Authentication;
