'use client';
import Navbar from '@/components/navbar/Navbar';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from './theme-provider'; 

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <Toaster />
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  );
}

