import { useState } from 'react';
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

const Login = props => {
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
        <div className="flex relative justify-center items-center w-3/5 bg-blue-900">
          <div
            className={`absolute w-full h-full bg-no-repeat bg-cover`}
            style={{
              background: `url(${authOverlay})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              opacity: 0.4,
            }}
          ></div>
          <div className=" w-3/5 h-5/6 ">
            <div className="flex justify-between items-center">
              <div className="rounded-full w-16 h-16 bg-lime-600"></div>
            </div>
            <div>
              <span className="text-9xl font-extrabold text-white">Make a Dream.</span>
            </div>
            <div className=" flex justify-between">
              <div className="h-48 ml-10 bg-gray-300" style={{ width: '1px' }}></div>
              <div className="flex flex-col w-80 justify-center mr-10 ">
                <p className="text-base text-gray-300 ">
                  There is no hunting like the hunting of man, and those who have hunted armed men
                  long enough and liked it, never care for anything else thereafter.
                </p>
                <div className=" ">
                  <span className="italic block text-right  text-xs">Ernest Hemingway</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/5 flex flex-col justify-center items-center">
          <div className="w-4/5 h-full flex flex-col justify-between">
            <div className="mt-5">
              <p className="text-sm ml-2 text-gray-400">
                Dont have an account?{' '}
                <Link to="/signup" className="text-md text-black font-bold">
                  Sign Up
                </Link>
              </p>
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
                      <div className="mb-2">
                        <div className="flex justify-center">
                          <img src={logo} className="w-40" />
                        </div>
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
              <div className="w-full my-2 text-center"> or </div>
              <div className="flex justify-around">
                <div className="border-solid p-3 border-2 rounded border-gray-400">
                  <FcGoogle size={34} />
                </div>
                <div className="border-solid p-3 border-2 rounded border-gray-400">
                  <BsFacebook size={34} />
                </div>
                <div className="border-solid p-3 border-2 rounded border-gray-400">
                  <BsTwitter size={34} />
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
