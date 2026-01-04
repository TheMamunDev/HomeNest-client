import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { ToastContainer } from 'react-toastify';
import Spinner from '../components/common/SpinnerMain';

const Root = () => {
  const navigation = useNavigation();
  return (
<<<<<<< HEAD
    <>
      <Navbar />
      <div className="max-w-[1920px] mx-auto">
        {navigation.state === 'loading' ? <Spinner /> : <Outlet />}
      </div>
      <Footer></Footer>
      <ToastContainer />
    </>
=======
    <div className="max-w-[1920px] mx-auto">
      <Navbar />
      {navigation.state === 'loading' ? <Spinner /> : <Outlet />}
      <Footer></Footer>
      <ToastContainer />
    </div>
>>>>>>> 955378fc3f37df8fc63ad238e441a9b4bd82a9a2
  );
};

export default Root;
