
import React from 'react';
import { 
  SignInButton, 
  SignUpButton, 
  SignedIn, 
  SignedOut, 
  UserButton
} from '@clerk/clerk-react';
import { Button } from "@/components/ui/button";
import { Google } from 'lucide-react';

const Authentication: React.FC = () => {
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
