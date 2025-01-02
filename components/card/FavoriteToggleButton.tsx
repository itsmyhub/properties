import { auth } from '@clerk/nextjs/server';
import { CardSignInButton } from '@/components/form/Buttons'; 
import { fetchFavoriteId } from '@/utils/actions';
import FavoriteToggleForm from './FavoriteToggleForm';

export default async function FavoriteToggleButton(
    { propertyId }: { propertyId: string }
  ) 
  {
    const { userId } = auth();
    if (!userId) return <CardSignInButton />;

    const favoriteId = await fetchFavoriteId({ propertyId });
  
    return <FavoriteToggleForm 
      favoriteId={favoriteId} 
      propertyId={propertyId} 
      />;
  
}