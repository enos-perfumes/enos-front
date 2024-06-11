import { Suspense } from 'react';
import { AppRoutes } from './routes/app.routes';
import { AppLoader } from './components/skeleton';



export default function App() {

  return (
    <Suspense fallback={<AppLoader />}>
      <AppRoutes />
    </Suspense>
  );

}

