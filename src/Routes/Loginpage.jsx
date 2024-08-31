import React from 'react';
import { Button } from '@/components/ui/button';
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react';

const Loginpage = () => {

  return (
    <div>
    <SignedOut>
   <SignInButton>
    <Button>sign in</Button>
   </SignInButton>
    </SignedOut>
   
    </div>
  );
};

export default Loginpage;
