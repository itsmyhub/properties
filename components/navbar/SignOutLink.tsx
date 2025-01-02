'use client';

import { SignOutButton } from '@clerk/nextjs';
import { useToast } from "@/hooks/use-toast"

//import { Button } from '@/components/ui/button';

export default function SignOutLink() {
  const { toast } = useToast();
  const handleLogout = () => {
    toast({ description: 'You have been signed out.' });
  };

  return (
    <SignOutButton redirectUrl='/'>
      <button className='w-full text-left' onClick={handleLogout}>
        Logout
      </button>
    </SignOutButton>
    /*
      <Button className='w-full text-left' onClick={handleLogout}>
        Logout
      </Button>
    */
  );
}

