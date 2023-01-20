import React from 'react';
import ReactDOM from 'react-dom/client';
import Profile from './components/profile/profile';
import EditProfile from './components/profile/editprofile';
import Changepass from './components/profile/changepass';
import SignIn from './components/sign_in/SignIn.jsx';
import SignUp from './components/sign_up/SignUp.jsx';
import History from './components/history/history.jsx';
import HistoryPay from './components/history/historyPayment.jsx';
import HistoryCancel from './components/history/historyCancel.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/dashboard' element={<LandingPage />} />
      <Route path='/profil' element={<Profile />} ></Route>
      <Route path='/editprofil' element={<EditProfile />} ></Route>
      <Route path='/gantipassword' element={<Changepass />} ></Route>
      <Route path='/login' element={<SignIn />} />
      <Route path='/register' element={<SignUp />} />
      <Route path='/history' element={<History />} />
      <Route path='/paymenthistory' element={<HistoryPay />} />
      <Route path='/cancellationhistory' element={<HistoryCancel />} />
    </Routes>
  </BrowserRouter>,
);

// tes webhook
