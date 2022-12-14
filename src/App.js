import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { Footer, Possibility, Features, WhatGPT3, Header } from './containers';
// import { Contact, CTA, Navbar } from './components';
// import { CTA, Brand, Navbar } from './components';
import './App.css';
import Home from './router/home/home.components';
import Navigation from './router/navigation/navigation.components';
import { Contact, PageNotFound } from './components';
import { Policy, Terms } from './containers';
// const App = () => (
//   <div className="App">
//     <div className="gradient__bg">
//       <Navbar />
//       <Header />
//     </div>
//     <WhatGPT3 />
//     <Features />
//     <Possibility />
//     <CTA />
//     <Footer />
//     <Contact />
//   </div>
// );
const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Policy />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </div>
);
export default App;
