import React from 'react';
import {useSelector} from 'react-redux';
import {ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import Header from '../parts/Header';

const Root = ({children}) => {

  const state = useSelector(state => state.app);
  const {userTeam} = state;



  return (
    <div style={{minHeight: '100vh'}}>
      <Header userTeam={userTeam} />
      <ToastContainer />
      {children}
    </div>
  );
};

export default Root;