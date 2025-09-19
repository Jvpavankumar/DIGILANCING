import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import loginImage from '../assets/login.svg'; // Your image
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

const Login = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        // stayLoggedIn: false,
    });

    const handleChange = (e) => {
        const { name, value, } = e.target;
        setFormData({
            ...formData,
            // [name]: type === 'checkbox' ? checked : value,
            [name]: value,
        });
    };

    useEffect(() => {
        const token = sessionStorage.getItem("authToken");
        if (token) {
            navigate("/DashBoard");
        }
    }, [navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true); // Start loading

        console.log("Login data:", formData);

        fetch("/api/users/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Login response:", data);
                sessionStorage.setItem("authToken", data.token);
                sessionStorage.setItem("user", JSON.stringify(data.user));
                sessionStorage.setItem("enrollment", JSON.stringify(data.enrollment));
                sessionStorage.setItem("packageId", data.enrollment.package_id);

                navigate("/DashBoard");
            })
            .catch((err) => console.error("Error:", err))
            .finally(() => setLoading(false));
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
                        No Account?{' '}
                        <a href="/Register" className="underline hover:text-[#FDDB5D]">
                            Sign up
                        </a>
                    </div>

                    {/* Heading */}
                    <h2 className="text-2xl sm:text-3xl font-semibold mb-8">
                        Log in to <br />
                        <span className="font-bold">your account</span>
                    </h2>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-grow">
                        <div>
                            <label className="block mb-1 text-sm">Enter your username or email address</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="@gmail.com"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg text-black focus:outline-none bg-white"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm">Enter your Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="••••••"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg text-black focus:outline-none bg-white"
                                required
                            />
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="stayLoggedIn"
                                    checked={formData.stayLoggedIn}
                                    onChange={handleChange}
                                    className="w-4 h-4"
                                />
                                Stay logged in
                            </label>

                            <a href="/ForgotPassword" className="hover:text-[#FDDB5D]">
                                Forgot Password?
                            </a>
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition"
                                disabled={loading}
                            >
                                Submit <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </form>
                </div>
            </motion.div>
            {loading && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-md bg-black/30">
                    <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}
        </div>
    );
};

export default Login;
