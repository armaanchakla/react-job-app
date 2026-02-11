import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={true}
        theme="dark"
      />
    </>
  );
};

export default MainLayout;
