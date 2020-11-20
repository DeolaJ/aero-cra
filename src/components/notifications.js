import React from 'react';
import { ToastContainer, Slide } from 'react-toastify';
import '../styles/toast.css';

const Notifications = () => <ToastContainer autoClose={2000} transition={Slide} />;

export default Notifications;
