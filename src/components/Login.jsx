import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MdEmail } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import { IoMdKey } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import axios from 'axios';
import { toast } from 'sonner';

function Login({ setIsAuthenticated }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const [recoveryEmail, setRecoveryEmail] = useState('');
  const [showSignup, setShowSignup] = useState(false);
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate()
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const handleLogin = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await axios.post(
        `${BASE_URL}/admin/login`,
        {
          email,
          password
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json'
          }
        }
      )

      if (response.data.success) {
        localStorage.setItem('authToken', response.data.data.token)
        localStorage.setItem('isAuthenticated', 'true');
        setIsAuthenticated(true);
        navigate('/dashboard');
        toast.success("Logged in successfully!")
      } else {
        setError(response.data.message || 'Login failed')
      }
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred during login')
      console.error('Login error:', error)
      toast.error(error.response?.data?.message || 'Login failed')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSignup = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await axios.post(
        `${BASE_URL}/admin/register`,
        {
          email: signupEmail,
          password: signupPassword
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json'
          }
        }
      )

      if (response.data.success) {
        toast.success("Registration successful! Please login.")
        setShowSignup(false)
        setSignupEmail('')
        setSignupPassword('')
      } else {
        setError(response.data.message || 'Registration failed')
        toast.error(response.data.message || 'Registration failed')
      }
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred during registration')
      console.error('Registration error:', error)
      toast.error(error.response?.data?.message || 'Registration failed')
    } finally {
      setIsLoading(false)
    }
  }

  const handleRecovery = (e) => {
    e.preventDefault()
    setShowForgotPassword(false)
    toast.info("Recovery email sent if account exists")
  }

  return (
    <div className="h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full sm:w-[80%] md:w-[550px] bg-[#F7FAFC] p-10 rounded-2xl shadow-sm justify-between flex flex-col">
        <div className="mb-8 text-center">
        </div>
        <h2 className="text-xl font-bold text-center mb-4 text-primary">Hello admin 👋🏻</h2>
        <div className="flex items-center justify-between mb-6 w-full px-3">
          <div className="h-px bg-gray-300 w-1/4 sm:w-[32%] mr-4"></div>
          <p className="text-[#808080] text-center flex justify-center items-center font-medium text-xs">
            {!showSignup ? "Signin to your account" : "Create your account"}
          </p>
          <div className="h-px bg-gray-300 w-1/4 sm:w-[32%] ml-4"></div>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
            {error}
          </div>
        )}

        {!showSignup ? (
          <form onSubmit={handleLogin} className='px-3'>
            <div className="space-y-5 w-full">
              <div className="relative group">
                <div className="absolute -top-2.5 left-3 bg-[#F7FAFC] px-1 text-primary text-[11px]">
                  Email
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 text-sm rounded-[9px] bg-[#F7FAFC] pr-3 py-1.5 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                  placeholder=""
                />
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <MdEmail className='text-[#808080]' size={20} />
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -top-2.5 left-3 bg-[#F7FAFC] px-1 text-primary text-[11px]">
                  Password
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 text-sm rounded-[9px] bg-[#F7FAFC] pr-3 py-1.5 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                  placeholder=""
                />
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <MdOutlinePassword className='text-[#808080]' size={20} />
                </div>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                >
                  {showPassword ? (
                    <IoEye className='text-[#808080]' size={24} />
                  ) : (
                    <IoMdEyeOff className='text-[#808080]' size={24} />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full text-sm bg-primary-400 text-white mt-4 py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 flex items-center justify-center gap-2 ${isLoading ? 'opacity-75 cursor-not-allowed' : ''
                }`}
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  <IoMdKey className="text-white" size={24} />
                  Login
                </>
              )}
            </button>
          </form>
        ) : (
          <form onSubmit={handleSignup} className='px-3'>
            <div className="space-y-5 w-full">
              <div className="relative group">
                <div className="absolute -top-2.5 left-3 bg-[#F7FAFC] px-1 text-primary text-[11px]">
                  Email
                </div>
                <input
                  type="email"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  className="w-full pl-12 text-sm rounded-[9px] bg-[#F7FAFC] pr-3 py-1.5 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                  placeholder=""
                />
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <MdEmail className='text-[#808080]' size={20} />
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -top-2.5 left-3 bg-[#F7FAFC] px-1 text-primary text-[11px]">
                  Password
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  className="w-full pl-12 text-sm rounded-[9px] bg-[#F7FAFC] pr-3 py-1.5 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                  placeholder=""
                />
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <MdOutlinePassword className='text-[#808080]' size={20} />
                </div>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                >
                  {showPassword ? (
                    <IoEye className='text-[#808080]' size={24} />
                  ) : (
                    <IoMdEyeOff className='text-[#808080]' size={24} />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full text-sm bg-primary-400 text-white mt-4 py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 flex items-center justify-center gap-2 ${isLoading ? 'opacity-75 cursor-not-allowed' : ''
                }`}
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  <IoMdKey className='text-white' size={24} />
                  Signup
                </>
              )}
            </button>
          </form>
        )}

        {!showSignup && (
          <div className='w-full justify-end items-center flex px-3'>
            <button
              onClick={() => setShowForgotPassword(true)}
              className="text-center text-sm text-primary-400 hover:text-primary/80 mt-3"
            >
              Forgot password?
            </button>
          </div>
        )}

        <div className='w-full mt-4 justify-center text-sm items-center gap-2 flex text-accent'>
          {!showSignup ? "Don't have an account?" : "Already have an account?"}
          <p
            onClick={() => setShowSignup(!showSignup)}
            className="text-sm cursor-pointer text-primary-400 hover:text-primary/80"
          >
            {!showSignup ? "Signup" : "Login"}
          </p>
        </div>
      </div>

      {showForgotPassword && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            <button
              onClick={() => setShowForgotPassword(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="text-xl font-semibold mb-4">Send recovery link</h3>

            <form onSubmit={handleRecovery}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Enter your email
                </label>
                <input
                  type="email"
                  value={recoveryEmail}
                  onChange={(e) => setRecoveryEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  placeholder="Enter your email"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gray-100 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Login