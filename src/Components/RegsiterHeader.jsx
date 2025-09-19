import React from 'react';
import { FaCheck, FaGraduationCap, FaUserCircle, FaCreditCard } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const RegisterHeader = ({ step, setStep }) => {
const navigate = useNavigate();
    const handleStepClick = (targetStep) => {
        if (targetStep < step) {
            setStep(targetStep);
        }
    };

    return (
        <div className="mb-8 mt-5">
            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between items-center mb-6">
                {/* Left side */}
                <div className="text-center lg:text-left mb-4 lg:mb-0">
                    <h5 className="text-md font-bold text-white">Create Account</h5>
                    <h1 className="text-2xl sm:text-3xl font-bold text-white">
                        Welcome to DigiLancing!
                    </h1>
                </div>

                {/* Right side */}
                <div className="text-white text-sm text-center lg:text-right">
                    <div>Have an Account?</div>
                    <div className="font-semibold underline cursor-pointer"  onClick={() => navigate('/login')}>
                        SignIn
                    </div>
                </div>
            </div>


            {/* Step Progress */}
            <div className="flex justify-center lg:justify-start">
                <div className="flex items-center justify-between w-full max-w-4xl">

                    {/* Step 1 */}
                    <div className="flex flex-col items-center space-y-2 cursor-pointer" onClick={() => handleStepClick(1)}>
                        <div className={`w-10 h-10 flex items-center justify-center rounded-lg ${step > 1 ? "bg-white text-[#002B54]" : "bg-transparent border-2 border-white text-white"}`}>
                            {step > 1 ? <FaCheck className="text-[#002B54] text-xl" /> : <FaGraduationCap className="text-xl" />}
                        </div>
                        <div className="text-sm text-white">Course Selection</div>
                    </div>

                    <div className="flex-grow h-px bg-white mx-4 mb-6"></div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center space-y-2 cursor-pointer" onClick={() => handleStepClick(2)}>
                        <div className={`w-10 h-10 flex items-center justify-center rounded-lg ${step > 2 ? "bg-white text-[#002B54]" : step === 2 ? "bg-white text-[#002B54]" : "bg-transparent border-2 border-white text-white"}`}>
                            {step > 2 ? <FaCheck className="text-[#002B54] text-xl" /> : <FaUserCircle className="text-xl" />}
                        </div>
                        <div className="text-sm text-white">Sign up to Account</div>
                    </div>

                    <div className="flex-grow h-px bg-white mx-4 mb-6"></div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center space-y-2 cursor-pointer" onClick={() => handleStepClick(3)}>
                        <div className={`w-10 h-10 flex items-center justify-center rounded-lg ${step === 3 ? "bg-white text-[#002B54]" : "bg-transparent border-2 border-white text-white"}`}>
                            <FaCreditCard className="text-xl" />
                        </div>
                        <div className="text-sm text-white">Payment</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default RegisterHeader;
