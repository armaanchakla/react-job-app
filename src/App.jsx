import MainLayout from './layouts/MainLayout';

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import JobPage, { JobLoader } from './pages/JobPage';
import NotFoundPage from './pages/NotFoundPage';
import Error from './components/Error';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="jobs" element={<JobsPage />} />
        <Route
          path="jobs/:id"
          element={<JobPage />}
          loader={JobLoader}
          errorElement={<Error />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
