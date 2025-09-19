import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import {
  setStep,
  setReferral,
  setSelectedCard,
  setFormData,
  setDefaultPackages,
  verifyReferral,
  registerAndPay,
} from "../redux/slices/registerSlice";

import Card from "../Components/Card";
import RegisterHeader from "../Components/RegsiterHeader";

import TickBlue from "../assets/Tick_2.svg";
import TickPurple from "../assets/Tick_3.svg";
import TickRed from "../assets/Tick_4.svg";
import TickGreen from "../assets/Tick_1.svg";

import Card1 from "../assets/Card1.svg";
import Card2 from "../assets/Card2.svg";
import Card3 from "../assets/Card3.svg";
import Card4 from "../assets/Card4.svg";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    referral,
    selectedCard,
    packages,
    formData,
    paymentData,

  } = useSelector((state) => state.register);
  const step = useSelector((state) => state.register.step);
  const loading = useSelector((state) => state.register.loading);
  const [showPopup, setShowPopup] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  // Set default packages once
  useEffect(() => {
    const defaults = [
      {
        icon: Card1,
        title: "Basic Package",
        description: "Ideal for freelancers ready to expand their skills",
        price: "5,999",
        features: [
          "10+ Hours of Content",
          "Basic Project Templates",
          "Community Access",
          "Email Support",
          "3 Practice Projects",
        ],
        id: "DIGI0001",
        iconImage: TickGreen,
        buttonGradient: "linear-gradient(135deg, #10B682 0%, #0D9887 100%)",
      },
      {
        icon: Card2,
        title: "Standard Package",
        description: "Perfect for advanced learners looking to specialize",
        price: "9,999",
        features: [
          "25+ Hours of Content",
          "Premium Project Templates",
          "1-on-1 Mentorship",
          "Priority Support",
          "5 Real-World Projects",
        ],
        id: "DIGI0002",
        iconImage: TickBlue,
        buttonGradient: "linear-gradient(135deg, #3384EC 0%, #108FBD 100%)",
      },
      {
        icon: Card3,
        title: "Advanced Package",
        description: "For freelancers scaling their business",
        price: "16,999",
        features: [
          "50+ Hours of Content",
          "Automation Tools",
          "Advanced Challenges",
          "Dedicated Community Group",
          "10 Live Projects",
        ],
        id: "DIGI0003",
        iconImage: TickPurple,
        buttonGradient: "linear-gradient(135deg, #A054F5 0%, #5E49E8 100%)",
      },
      {
        icon: Card4,
        title: "Premium Package",
        description: "Become a top-tier freelancer with premium training",
        price: "21,999",
        features: [
          "100+ Hours of Content",
          "Lifetime Access",
          "Exclusive Webinars",
          "Direct Client Leads",
          "Unlimited Projects",
        ],
        id: "DIGI0004",
        iconImage: TickRed,
        buttonGradient: "linear-gradient(135deg, #F03B63 0%, #DD2975 100%)",
      },
      {
        icon: Card4,
        title: "Ultimate Package",
        description: "Become a top-tier freelancer with premium training",
        price: "29,999",
        features: [
          "100+ Hours of Content",
          "Lifetime Access",
          "Exclusive Webinars",
          "Direct Client Leads",
          "Unlimited Projects",
        ],
        id: "DIGI0005",
        iconImage: TickRed,
        buttonGradient: "linear-gradient(135deg, #F03B63 0%, #DD2975 100%)",
      },
    ];
    dispatch(setDefaultPackages(defaults));
  }, [dispatch]);

  const handleCardClick = (pkg) => {
    dispatch(setSelectedCard(pkg));
    if (!referral) {
      setShowPopup(true);
    } else {
      dispatch(setStep(2));
    }
  };

  const handleSubmit = () => {
    if (formData.email !== formData.confirmEmail) {
      alert("Emails do not match.");
      return;
    }
    dispatch(
      registerAndPay({
        full_name: formData.full_name,
        state: formData.state,
        phone: formData.phone,
        email: formData.email,
        password: formData.password,
        referred_by: referral || null,
        package_id: selectedCard.id,
      })
    );
  };
  const verifyPayment = async ({ razorpay_order_id, status }) => {
    try {
      const res = await fetch("/api/payment/Verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          razorpay_order_id,
          status,
        }),
      });

      return res;
    } catch (err) {
      console.error("Error in verifyPayment API:", err);
      throw err;
    }
  };
  const startRazorpayPayment = (resultdata) => {
    if (!resultdata) return alert("No payment data available");
    setIsProcessing(true);
    const options = {
      key: "rzp_test_RHsIWDG0e3uqin",
      amount: resultdata.amount,
      currency: "INR",
      name: "DIGILANCING Private Limited",
      description: `${selectedCard.title} Package Transaction`,
      image: "https://storage.googleapis.com/digitalbillionaire-learning-videos/CompanyLogo.jpg",
      order_id: resultdata.razorpayOrderId || resultdata.order_id,

      handler: function (response) {
        alert("Payment Success: " + response.razorpay_payment_id);

        verifyPayment({
          razorpay_order_id: resultdata.razorpayOrderId || resultdata.order_id,
          status: "completed",
        })
          .then((res) => {
            if (res.status === 200) {
              const userString = sessionStorage.getItem("user");
              const user = userString ? JSON.parse(userString) : null;

              if (user) {
                dispatch(updateHasPurchased(true));
                user.hasPurchased = true;
                sessionStorage.setItem("user", JSON.stringify(user));
              }

              navigate("/DashBoard");
            } else {
              alert("Payment verification failed.");
            }
          })
          .catch((err) => {
            console.error("Verification error:", err);
            console.log(err)
            alert("Something went wrong.");
          })
          .finally(() => {
            setIsProcessing(false);
          });
      },

      modal: {
        ondismiss: () => {
          (async () => {
            try {
              await verifyPayment({
                razorpay_order_id: resultdata.razorpayOrderId || resultdata.order_id,
                status: "failed",
              });
            } catch (err) {
              console.error("Failed to mark payment as failed:", err);
            }

            setIsProcessing(false);
            alert("Payment not completed. You can try again.");
          })();
        },
      },

      prefill: {
        name: formData.full_name,
        email: formData.email,
        contact: formData.phone,
      },

      theme: { color: "#3399cc" },
    };

    const rzp1 = new window.Razorpay(options);

    rzp1.on("payment.failed", function () {
      alert("Payment Failed");
    });

    rzp1.open();
  };


  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-32 pt-16 lg:pt-20 gap-10 bg-[#002B54] min-h-screen">
      <RegisterHeader step={step} setStep={(s) => dispatch(setStep(s))} />

      <AnimatePresence mode="wait">
        {/* Step 1 */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Referral Code
              </h3>
              <div className="flex gap-2 items-center">
                <input
                  type="text"
                  placeholder="Enter referral code"
                  value={referral}
                  onChange={(e) => dispatch(setReferral(e.target.value))}
                  className="w-full max-w-sm px-3 py-2 rounded-lg border border-gray-300 bg-white text-black"
                />
                <button
                  onClick={() => dispatch(verifyReferral(referral))}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  disabled={loading}
                >
                  {loading ? "Verifying..." : "Verify"}
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {packages.map((pkg, i) => (
                <motion.div
                  key={i}
                  onClick={() => handleCardClick(pkg)}
                  animate={{
                    scale: selectedCard === pkg ? 1.05 : 1,
                    boxShadow:
                      selectedCard === pkg
                        ? "0 0 20px rgba(0, 198, 255, 0.6)"
                        : "0 0 10px rgba(0,0,0,0.1)",
                    border:
                      selectedCard === pkg
                        ? "2px solid #00C6FF"
                        : "2px solid transparent",
                  }}
                  transition={{ duration: 0.3 }}
                  className="cursor-pointer relative rounded-2xl"
                >
                  <Card {...pkg} />
                  {selectedCard === pkg && (
                    <span className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 text-xs rounded-full z-10">
                      Selected
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 2 */}
        {step === 2 && selectedCard && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col lg:flex-row gap-6 items-start"
          >
            {/* Form */}
            <div className="bg-[#003B73] p-6 rounded-xl space-y-4 w-full sm:w-11/12 md:w-3/4 lg:w-2/3 max-w-3xl mx-auto lg:mx-0">
              <div className="flex flex-col">
                <label className="text-gray-200 mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white"
                  value={formData.full_name}
                  onChange={(e) =>
                    dispatch(setFormData({ full_name: e.target.value }))
                  }
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col flex-1">
                  <label className="text-gray-200 mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter Email Address"
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 bg-white"
                    value={formData.email}
                    onChange={(e) =>
                      dispatch(setFormData({ email: e.target.value }))
                    }
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label className="text-gray-200 mb-1">
                    Confirm Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Confirm Email Address"
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 bg-white"
                    value={formData.confirmEmail}
                    onChange={(e) =>
                      dispatch(setFormData({ confirmEmail: e.target.value }))
                    }
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col flex-1">
                  <label className="text-gray-200 mb-1">Mobile Number</label>
                  <input
                    type="text"
                    placeholder="Enter Mobile Number"
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 bg-white"
                    value={formData.phone}
                    onChange={(e) =>
                      dispatch(setFormData({ phone: e.target.value }))
                    }
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label className="text-gray-200 mb-1">Password</label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 bg-white"
                    value={formData.password}
                    onChange={(e) =>
                      dispatch(setFormData({ password: e.target.value }))
                    }
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col flex-1">
                  <label className="text-gray-200 mb-1">State</label>
                  <input
                    type="text"
                    placeholder="Enter your State"
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 bg-white"
                    value={formData.state}
                    onChange={(e) =>
                      dispatch(setFormData({ state: e.target.value }))
                    }
                  />
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-96 bg-white p-6 rounded-xl shadow-lg border border-gray-300 mx-auto lg:mx-0">
              <h3 className="text-lg font-semibold mb-4">Your Order</h3>
              <div className="flex items-center gap-3 mb-4 p-4 border border-gray-300 rounded-lg">
                <img
                  src={selectedCard.icon}
                  alt={selectedCard.title}
                  className="w-10 h-10"
                />
                <div>
                  <p className="font-semibold">{selectedCard.title}</p>
                  <p className="text-gray-500 text-sm">
                    {selectedCard.description}
                  </p>
                </div>
              </div>
              <div className="mb-2 flex justify-between text-gray-600">
                <span>Product Price:</span>
                <span>₹{selectedCard.price.replace(",", "")}</span>
              </div>
              <div className="mb-2 flex justify-between text-gray-600">
                <span>GST (18%):</span>
                <span>
                  ₹
                  {Math.round(
                    (parseInt(selectedCard.price.replace(",", "")) * 18) / 100
                  )}
                </span>
              </div>
              <div className="mb-4 flex justify-between font-bold">
                <span>Total:</span>
                <span>
                  ₹
                  {parseInt(selectedCard.price.replace(",", "")) +
                    Math.round(
                      (parseInt(selectedCard.price.replace(",", "")) * 18) / 100
                    )}
                </span>
              </div>
              <button
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? "Processing..." : "Place an Order"}
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white p-6 rounded-xl shadow text-center max-w-md mx-auto"
          >
            <h3 className="text-xl font-semibold mb-4">Payment</h3>
            <p className="text-gray-600 mb-6">
              Proceed with payment for <strong>{selectedCard.title}</strong>.
            </p>
            <button
              onClick={() => startRazorpayPayment(paymentData)}
              className="px-6 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700"
            >
              Confirm Payment
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Popup if no referral */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4"
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full text-center relative"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-semibold mb-4">
                No Offer Applicable
              </h2>
              <p className="text-gray-600 mb-6">
                No referral code entered. Do you want to proceed anyway?
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <button
                  className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
                  onClick={() => setShowPopup(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                  onClick={() => {
                    setShowPopup(false);
                    dispatch(setStep(2));
                  }}
                >
                  Proceed
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {loading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-md bg-black/30">
          {/* Spinner */}
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      {isProcessing && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-md bg-black/30">
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default Register;
