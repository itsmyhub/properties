 import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

import Link from 'next/link';
import UserIcon from './UserIcon';
import SignOutLink from './SignOutLink';

import { LuAlignLeft } from 'react-icons/lu';
import { Button } from '../ui/button';
import { links } from '@/utils/links';
import { SignedOut, SignedIn } from '@clerk/nextjs';
import { SignInButton, SignOutButton, SignUpButton } from '@clerk/nextjs'

//Added new route on Jan 31st 2025
import {auth} from '@clerk/nextjs/server'

export default  function LinksDropdown() {

  //Added new route on Jan 31st 2025
  const { userId } = auth();
  const isAdminUser = userId === process.env.ADMIN_USER_ID;
  //
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' className='flex gap-4 max-w-[100px]'>
          <LuAlignLeft className='w-6 h-6' />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-52' align='start' sideOffset={10}>
        
        <SignedOut>
          <DropdownMenuItem>
            <SignInButton mode='modal'>
              <button className='w-full text-left'>Login</button>
            </SignInButton>

          </DropdownMenuItem>
          <DropdownMenuSeparator/>
          <DropdownMenuItem>
            <SignUpButton mode='modal'>
              <button className='w-full text-left'>Register</button>
            </SignUpButton>

          </DropdownMenuItem>
        </SignedOut>
        
        <SignedIn>

          {links.map((link) => {
              //Added new route on Jan 31st 2025
              if (link.label === 'admin' && !isAdminUser) return null;
              return (
                <DropdownMenuItem key={link.href}>
                  <Link href={link.href} className='capitalize w-full'>
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              );
            })}
            
          <DropdownMenuSeparator/>
            <DropdownMenuItem>
              <SignOutLink/>
            </DropdownMenuItem>
          </SignedIn>

      </DropdownMenuContent>
    </DropdownMenu>
  );
}
