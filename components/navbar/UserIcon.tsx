import { LuUserRound } from 'react-icons/lu';
import { fetchProfileImage } from '@/utils/actions';

export default async function UserIcon() {
  const profileImage = await fetchProfileImage();

  if (profileImage)
    return (
      <img src={profileImage} className='w-6 h-6 rounded-full object-cover' />
    );
  return <LuUserRound className='w-6 h-6 bg-primary rounded-full text-white' />;

}


