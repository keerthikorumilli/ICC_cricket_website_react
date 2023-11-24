import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import AboutCricket from '../components/Dashboard/Dashboard';
import AboutICC from '../components/Cards/Cards'; 
import AboutPlayers from '../components/PieCharts/PieCharts';
import AboutWinners from '../components/Table/Table';
import Audienceform from '../components/Form/Form';
import Footer from '../components/Footer/Footer';

function HomePage() {
  return (
    <div>
      <Navbar />
      <Sidebar>
        <Routes>
           <Route path="/AboutCricket" element={<AboutCricket />} /> 
           <Route path="/AboutICC" element={<AboutICC/>} /> 
          <Route path="/AboutPlayers" element={<AboutPlayers/>} />
          <Route path="/AboutWinners" element={<AboutWinners />} />
          <Route path="/Audienceform" element={<Audienceform/>} />
        </Routes>
      </Sidebar>
      <Footer />
    </div>
  );
}
export default HomePage;
