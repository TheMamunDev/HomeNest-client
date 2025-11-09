import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { ToastContainer } from 'react-toastify';
import Spinner from '../components/common/Spinner';

const Root = () => {
  const navigation = useNavigation();
  return (
    <div className="max-w-[1920px] mx-auto">
      <Navbar />
      {navigation.state === 'loading' ? <Spinner /> : <Outlet />}
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default Root;
