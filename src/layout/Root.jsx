import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { ToastContainer } from 'react-toastify';
import Spinner from '../components/common/SpinnerMain';

const Root = () => {
  const navigation = useNavigation();
  return (
    <>
      <Navbar />
      <div className="max-w-[1920px] mx-auto">
        {navigation.state === 'loading' ? <Spinner /> : <Outlet />}
      </div>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
};

export default Root;
