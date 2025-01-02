'use client'

import dynamic from 'next/dynamic';
//import { Skeleton } from '@/components/ui/skeleton';
//import loading from '@/app/properties/loading';
//import { any } from 'zod';

//type Skeleton: any;

// Jan 1st - Adding Booking Construct 
export const DynamicBookingWrapper = dynamic(
  () => import('@/components/booking/BookingWrapper'),
  {
    ssr: false,
    //loading: () => <Skeleton className='h-[200px] w-full' />
  }
);

export const DynamicMap = dynamic(
  () => import('@/components/properties/PropertyMap'),
  {
    ssr: false
  }
);
