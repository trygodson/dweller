import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { authOverlay, logo } from '../../../Entryfile/imagepath';
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

const Register = props => {
  const [act, setAccount] = useState('');
  const { push } = useHistory();
  const handleSubmit = async values => {
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
                <span className="italic block text-right text-xs">Ernest Hemingway</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/5 flex flex-col justify-center items-center">
          <div className="w-4/5 h-full flex flex-col justify-between">
            <div className="mt-5">
              <p className="text-sm ml-2 text-gray-400">
                Already have an account?{' '}
                <Link to="/" className="text-md text-black font-bold">
                  Sign In
                </Link>
              </p>
            </div>
            <div style={{ marginBottom: '80px' }}>
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
                        <div className="flex justify-center">
                          <img src={logo} className="w-40" />
                        </div>

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
              <div className="w-full my-2 text-center"> or </div>
              <div className="flex justify-around">
                <div className="border-solid p-3 border-2 rounded border-gray-400">
                  <BsFacebook size={34} />
                </div>
                <div className="border-solid p-3 border-2 rounded border-gray-400">
                  <FcGoogle size={34} />
                </div>
                <div className="border-solid p-3 border-2 rounded border-gray-400">
                  <BsTwitter size={34} />
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
