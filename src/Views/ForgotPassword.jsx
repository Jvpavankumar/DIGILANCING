import React, { useState } from 'react';
import { motion } from 'framer-motion';
import loginImage from '../assets/login.svg';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const wrapperVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Forgot Password email:', email);
    navigate('/VerifyOtp', { state: { email } });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#003B73] p-4">
      <motion.div
        className="flex flex-col md:flex-row max-w-4xl w-full rounded-3xl overflow-hidden mt-15 shadow-lg"
        initial="hidden"
        animate="show"
        variants={wrapperVariants}
      >
        {/* Left side - Image */}
        <div className="flex-1">
          <img
            src={loginImage}
            alt="Login Illustration"
            className="
              w-full h-full object-cover
              rounded-t-3xl md:rounded-tl-3xl sm:rounded-bl-none md:rounded-tr-none
            "
          />
        </div>

        {/* Right side - Form */}
        <div
          className="
            flex-1 bg-[#003B73] text-white p-10 flex flex-col relative
            md:border md:border-[#1C7BD5]
            rounded-b-3xl md:rounded-tr-3xl md:rounded-br-3xl md:rounded-tl-none md:rounded-bl-none
          "
        >
          {/* Sign up link */}
          <div className="absolute top-6 right-6 text-sm">
            Having Account?{' '}
            <a href="/login" className="underline hover:text-[#FDDB5D]">
              Sign In
            </a>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-semibold mb-8">
            Forgot Password?
          
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label className="block mb-1 text-sm">Enter your email address</label>
              <input
                type="email"
                name="email"
                placeholder="@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg text-black focus:outline-none bg-white"
                required
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition"
              >
                Submit <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
