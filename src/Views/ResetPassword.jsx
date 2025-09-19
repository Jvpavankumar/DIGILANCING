import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import loginImage from '../assets/login.svg';
import { ArrowRight } from 'lucide-react';

const ResetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || '';

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (newPassword.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    // Submit new password logic here
    console.log("Password reset for:", email);
    console.log("New Password:", newPassword);

    // Navigate to login or success page
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#003B73] p-4">
      <div className="flex flex-col md:flex-row max-w-4xl w-full rounded-3xl overflow-hidden mt-15 shadow-lg">
        {/* Left side - Image */}
        <div className="flex-1">
          <img
            src={loginImage}
            alt="Reset Password Illustration"
            className="w-full h-full object-cover rounded-t-3xl md:rounded-tl-3xl sm:rounded-bl-none md:rounded-tr-none"
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
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Reset Your Password</h2>
          {/* <p className="mb-6 text-[#FDDB5D] text-lg max-w-lg">
            Set a new password for your account associated with <span className="font-semibold">{email}</span>.
          </p> */}

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label className="block mb-1 text-sm">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
                className="w-full px-4 py-3 rounded-lg text-black focus:outline-none bg-white"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm">Confirm New Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter new password"
                className="w-full px-4 py-3 rounded-lg text-black focus:outline-none bg-white"
                required
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition"
                 onClick={() => navigate('/login')}
              >
                Reset Password <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
