import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import EventManagement from './pages/EventManagement/EventManagement.jsx';
import CelebrityManagement from './pages/CelebrityManagement/CelebrityManagement.jsx';
import InfluencerManagement from './pages/InfluencerManagement/InfluencerManagement.jsx';
import PublicRelations from './pages/PublicRelations/PublicRelations.jsx';
import Contact from './pages/Contact/Contact.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/eventmanagement' element={<EventManagement />} />
      <Route path='/celebritymanagement' element={<CelebrityManagement />} />
      <Route path='/influencermanagement' element={<InfluencerManagement />} />
      <Route path='/publicrelations' element={<PublicRelations />} />
      <Route path='/contact' element={<Contact />} />

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
