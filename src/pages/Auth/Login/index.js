import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, Formik, ErrorMessage } from 'formik';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import * as Yup from 'yup';
import { AuthJumbotron } from '../../../shared/components/authJumbotron';
import {
  bgAuthImage,
  logo,
  collage1,
  collage2,
  authOverlay,
  logowhite,
} from '../../../Entryfile/imagepath';
import { Input } from '../../../shared/components/formInputs';
// import useAuthService from '../../../shared/hooks/api/useAuthService';
import Button from '../../../shared/components/button';
// import { toast, ToastContainer } from 'react-toastify';
// import { useAuthState } from '../../../context/useAuthContext';
// import { AuthActionSuccess } from '../../../context/reducers/authActions';

const getFormProps = () => {
  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  return {
    initialValues,
    validationSchema,
  };
};

const Login = (props) => {
  const [act, setAccount] = useState('');
  const { push } = useHistory();

  // const { mutateAsync: Login, isLoading } = useAuthService.useLoginService();
  // const { dispatch } = useAuthState();
  async function handleSubmit(values) {
    const { username, password } = values;
    const payload = {
      username,
      password,
    };
    push('/app/profile-form');

    //   try {
    //     const response = await Login(payload);
    //     if (response.isSuccess === true) {
    //       dispatch(
    //         AuthActionSuccess({
    //           token: response.token,
    //           currentUser: {
    //             name: response.firstName + ' ' + response.lastName,
    //             id: response.id,
    //             email: response.email,
    //           },
    //           permission: response.role,
    //         }),
    //       );
    //       push('/dashboard');
    //     } else {
    //       toast('Unsatisfied Credentials!');
    //     }
    //   } catch (error) {
    //     // return Swal.fire({
    //     //   title: 'Login Failed',
    //     //   text: error.message,
    //     //   icon: 'error',
    //     //   confirmButtonText: 'Cool',
    //     // });
    //     toast(`${error.message}, please try again`);
    //   }
    // }

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
    // }
  }
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
                Manage and Get Real Estate Services Easily
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
            <div className="" style={{ marginTop: '100px' }}>
              <p className="text-5xl mb-2 font-bold">Sign in</p>
              <Link to="/signup" className="text-md text-gray-600 font-semibold hover:text-black">
                or Create an Account
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
                      <div className="">
                        <div className="flex justify-center"></div>
                        <div>
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <Form style={{ width: '100%' }}>
                      <Input>
                        <Input.InputField
                          type="text"
                          name="username"
                          className=""
                          placeholder="username"
                        ></Input.InputField>
                        <ErrorMessage
                          className="text-xs text-center text-red-600"
                          component="div"
                          name="username"
                        />
                        <Input.InputField
                          type="password"
                          name="password"
                          className=""
                          placeholder="*******"
                        ></Input.InputField>
                        <ErrorMessage
                          className="text-xs text-center text-red-600"
                          component="div"
                          name="password"
                        />
                        <div className="flex justify-between">
                          <div className="flex items-center justify-center">
                            <Input.CheckBox type="checkbox" name="remember-me"></Input.CheckBox>
                            <span className="mb-0 text-xs font-semibold">Remeber Me</span>
                          </div>
                          <div>
                            <span className="font-bold text-sm" style={{ color: '#2c91f7' }}>
                              Forgot Password
                            </span>
                          </div>
                        </div>
                        <div>
                          <Button
                            type="submit"
                            disabled={isSubmitting || !isValid}
                            isLoading={isSubmitting}
                            style={{ width: '100%' }}
                          >
                            Login
                          </Button>
                        </div>
                      </Input>
                    </Form>
                  </>
                )}
              </Formik>
              <div className="my-2 w-full text-center">
                <span className="text-appcolor-700 font-bold ">Forgot password?</span>
              </div>
              <div className="w-full my-2 text-center flex justify-center items-center">
                {' '}
                <span className="text-sm text-grey-200">---------------</span>{' '}
                <span className="text-lg mx-2 font-bold">or</span>
                <span className="text-sm text-grey-200">---------------</span>{' '}
              </div>
              <div className="flex flex-col justify-around">
                <div className="border-solid p-3 my-2 border-2 rounded shadow-md flex items-center justify-center ">
                  <FcGoogle size={24} />
                  <span className="ml-2 text-base font-semibold">Sign in with Google</span>
                </div>
                <div className="border-solid p-3 my-2 border-2 rounded shadow-md flex  items-center justify-center ">
                  <BsFacebook size={24} color="#1a2b46" />
                  <span className="ml-2 text-base font-semibold">Sign in with Facebook</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{' '}
      {/* <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
        /> */}
    </>
  );
};

export default Login;
