import ChartsContainer from '@/components/admin/ChartsContainer';
import StatsContainer from '@/components/admin/StatsContainer';
import { Suspense } from 'react';
import {
  ChartsLoadingContainer,
  StatsLoadingContainer,
} from '@/components/admin/Loading';


export default async function AdminPage() {
  return (
    <>
      <Suspense fallback={<StatsLoadingContainer />}>
        <StatsContainer />
      </Suspense>
      <Suspense fallback={<ChartsLoadingContainer />}>
        <ChartsContainer />
      </Suspense>
    </>
  );
}