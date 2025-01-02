export type actionFunction = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>;

// Dec.28th ... added followings:
export type PropertyCardProps = {
  image: string;
  id: string;
  name: string;
  tagline: string;
  country: string;
  price: number;
};

// Jan 1st - Added two types for booking module
export type DateRangeSelect = {
  startDate: Date;
  endDate: Date;
  key: string;
};

export type Booking = {
  checkIn: Date;
  checkOut: Date;
};

