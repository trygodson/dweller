import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { authOverlay, logo, logowhite } from '../../../Entryfile/imagepath';
import { Input } from '../../../shared/components/formInputs';
import Button from '../../../shared/components/button';

const getFormProps = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  return {
    initialValues,
    validationSchema,
  };
};

const Register = (props) => {
  const [act, setAccount] = useState('');
  const { push } = useHistory();
  const handleSubmit = async (values) => {
    const { email, password } = values;
    const payload = {
      username: email,
      password,
    };
    // console.log(payload)
    // push('/dashboard')
    // try {
    //   const response = await registerUser(payload);
    //   if (response.isConfirmed != true) {
    //     props.history.push({
    //       pathname: '/verify-otp',
    //       state: { email: response.email },
    //     });
    //   } else {
    //     return;
    //     //props.history.push("/app/dashboard");
    //   }
    // } catch (error) {
    //   setAccount(error.message);
    //   console.log(error.message);
    // }
  };

  return (
    <>
      <div className="flex w-full h-screen">
        <div className="flex relative justify-center items-center w-2/6 bg-appcolor-900">
          <div
            className={`absolute w-full h-full bg-no-repeat bg-cover`}
            style={{
              background: `url(${authOverlay})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              opacity: 0.4,
            }}
          ></div>
          <div className=" w-3/6 h-5/6 " style={{ width: '70%' }}>
            <div className="w-full flex justify-center items-center">
              <img src={logowhite} className="w-52" />
            </div>

            <div className="w-4/6 mt-9 mx-auto">
              <p className="text-xl text-white font-bold text-center">
                Work Full Time With Top US Companies
              </p>
            </div>

            <div className="w-5/6 mt-10 mx-auto">
              <p className="text-base text-slate-400 font-semibold text-center">
                We are backed by engineering executives and investors of
              </p>
            </div>
          </div>
        </div>
        <div className="w-4/6 flex flex-col justify-center items-center">
          <div className="w-2/5 h-full flex flex-col justify-between">
            <div className="" style={{ marginTop: '60px' }}>
              <p className="text-5xl mb-2 font-bold">Sign Up</p>
              <Link to="/" className="text-md text-blue-800 font-semibold hover:text-black">
                or Login to your Account
              </Link>
            </div>
            <div style={{ marginBottom: '110px' }}>
              <Formik
                onSubmit={handleSubmit}
                validateOnMount={true}
                initialValues={getFormProps().initialValues}
                validationSchema={getFormProps().validationSchema}
              >
                {({ isSubmitting, isValid }) => (
                  <>
                    <div className="text-center">
                      <div>
                        <div className="flex justify-center"></div>

                        <div>
                          {/* <p className="text-4xl font-extrabold">Welcome to Dweller</p> */}
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <Form style={{ width: '100%' }}>
                      <Input>
                        <Input.InputField
                          type="text"
                          name="username"
                          className="input"
                          placeholder="johndoe"
                        ></Input.InputField>
                        <ErrorMessage
                          className="text-xs text-center text-red-600"
                          component="div"
                          name="username"
                        />
                        <Input.InputField
                          type="email"
                          name="email"
                          className="input"
                          placeholder="email@email.com"
                        ></Input.InputField>
                        <ErrorMessage
                          className="text-xs text-center text-red-600"
                          component="div"
                          name="email"
                        />
                        <Input.InputField
                          type="password"
                          name="password"
                          className="input"
                          placeholder="*******"
                        ></Input.InputField>
                        <ErrorMessage
                          className="text-xs text-center text-red-600"
                          component="div"
                          name="password"
                        />
                        {/* <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center justify-content-center">
                      <Input.CheckBox type="checkbox" name="remember-me"></Input.CheckBox>
                      <span className="mb-0">Remeber Me</span>
                    </div>
                    <div>
                      <span style={{ color: '#2c91f7' }}>Forgot Password</span>
                    </div>
                  </div> */}
                        <div>
                          <Button
                            type="submit"
                            disabled={isSubmitting || !isValid}
                            isLoading={isSubmitting}
                            style={{ width: '100%' }}
                          >
                            Sign Up
                          </Button>
                        </div>
                      </Input>
                      <div style={{ height: '0.5px' }}></div>
                    </Form>
                  </>
                )}
              </Formik>
              <div className="w-full my-2 text-center flex justify-center items-center">
                {' '}
                <span className="text-sm text-grey-200">---------------</span>{' '}
                <span className="text-lg mx-2 font-bold">or</span>
                <span className="text-sm text-grey-200">---------------</span>{' '}
              </div>
              <div className="flex flex-col justify-around">
                <div className="border-solid p-3 my-2 border-2 rounded shadow-md flex items-center justify-center ">
                  <FcGoogle size={24} />
                  <span className="ml-2 text-base font-semibold">Sign up with Google</span>
                </div>
                <div className="border-solid p-3 my-2 border-2 rounded shadow-md flex  items-center justify-center ">
                  <BsFacebook size={24} color="#1a2b46" />
                  <span className="ml-2 text-base font-semibold">Sign up with Facebook</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{' '}
    </>
  );
};

export default Register;
