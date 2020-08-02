import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';

// import api from '../../services/api';

import { DashBoardStyle, SubTitle } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <DashBoardStyle>
        <Header />
        <SubTitle>
          <span className="title">Lorem Ipsum</span>
          <p>
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
          </p>
        </SubTitle>
      </DashBoardStyle>
    </>
  );
};

export default Dashboard;
