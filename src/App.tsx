import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header/Header';
import { Title } from './components/Title/Title';
import { EllipseButton } from './components/EllipseButton/EllipseButton';
import { What } from './components/What/What';
import { Where } from './components/Where/Where';
import { Who } from './components/Who/Who';
import { Marquee } from './components/Marquee/Marquee';
import { WhatPage } from './components/RoutePages/WhatPage';
import { WhoPage } from './components/RoutePages/WhoPage';
import { WherePage } from './components/RoutePages/WherePage';

export const App: React.FC = () => {
  const location = useLocation();

  return (
    <div
      className="App"
    >
      <div className="App__container">
        {location.pathname === '/' ? (
          <>
            <Header />
            <Title />
            <EllipseButton />
            <Where />
            <What />
            <Who />
            <Marquee />
          </>
        ) : (
          <Routes>
            <Route path="/what" element={<WhatPage />} />
            <Route path="/who" element={<WhoPage />} />
            <Route path="/where" element={<WherePage />} />
          </Routes>
        )}
      </div>
    </div>
  );
};
