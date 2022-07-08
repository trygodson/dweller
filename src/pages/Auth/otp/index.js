import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, Formik, ErrorMessage } from 'formik';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import * as Yup from 'yup';
import { AuthJumbotron } from '../../../shared/components/authJumbotron';
import { bgAuthImage, logo, collage1, collage2, authOverlay } from '../../../Entryfile/imagepath';
import { Input } from '../../../shared/components/formInputs';
// import useAuthService from '../../../shared/hooks/api/useAuthService';
import Button from '../../../shared/components/button';
// import { toast, ToastContainer } from 'react-toastify';
// import { useAuthState } from '../../../context/useAuthContext';
// import { AuthActionSuccess } from '../../../context/reducers/authActions';

const Otp = ({ delay, children }) => {
  return <div className="carousel"></div>;
};

export default Otp;
