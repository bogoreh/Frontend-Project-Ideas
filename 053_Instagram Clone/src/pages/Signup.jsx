import React, { useState } from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { validateEmail, validatePassword, validateUsername } from '../utils/validation';

const Signup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: email, 2: details, 3: success
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    dateOfBirth: {
      month: '',
      day: '',
      year: ''
    }
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

  const validateEmailStep = () => {
    const newErrors = {};
    
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateDetailsStep = () => {
    const newErrors = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    // Username validation
    const usernameValidation = validateUsername(formData.username);
    if (!usernameValidation.isValid) {
      newErrors.username = usernameValidation.message;
    }

    // Password validation
    const passwordValidation = validatePassword(formData.password);
    if (!passwordValidation.isValid) {
      newErrors.password = passwordValidation.message;
    }

    // Confirm password
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // Date of birth validation
    if (!formData.dateOfBirth.month || !formData.dateOfBirth.day || !formData.dateOfBirth.year) {
      newErrors.dateOfBirth = 'Please enter your complete date of birth';
    } else {
      const dob = new Date(
        formData.dateOfBirth.year,
        months.indexOf(formData.dateOfBirth.month),
        formData.dateOfBirth.day
      );
      const today = new Date();
      const age = today.getFullYear() - dob.getFullYear();
      if (age < 13) {
        newErrors.dateOfBirth = 'You must be at least 13 years old';
      }
    }

    // Terms agreement
    if (!agreeTerms) {
      newErrors.terms = 'You must agree to the Terms of Use';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    
    if (step === 1 && validateEmailStep()) {
      setStep(2);
    } else if (step === 2 && validateDetailsStep()) {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        setLoading(false);
        setStep(3);
      }, 1500);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleDOBChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      dateOfBirth: {
        ...prev.dateOfBirth,
        [field]: value
      }
    }));
    if (errors.dateOfBirth) {
      setErrors(prev => ({ ...prev, dateOfBirth: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Step 1: Email Signup */}
        {step === 1 && (
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <FaInstagram className="text-5xl mx-auto mb-2" />
              <h1 className="text-2xl font-bold">Instagram</h1>
              <p className="text-gray-500 text-sm mt-2">
                Sign up to see photos and videos from your friends.
              </p>
            </div>

            {/* Facebook Signup */}
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold flex items-center justify-center space-x-2 mb-4">
              <FaFacebook className="text-xl" />
              <span>Continue with Facebook</span>
            </button>

            <div className="flex items-center my-4">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-4 text-gray-500 text-sm">OR</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            <form onSubmit={handleNextStep}>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Mobile number or email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-1 ${
                    errors.email ? 'border-red-500' : 'border-gray-300 focus:ring-gray-300'
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                Next
              </button>
            </form>

            <p className="text-center text-xs text-gray-500 mt-4">
              By continuing, you agree to Instagram's{' '}
              <a href="#" className="text-blue-500">Terms of Use</a> and{' '}
              <a href="#" className="text-blue-500">Privacy Policy</a>.
            </p>
          </div>
        )}

        {/* Step 2: Details */}
        {step === 2 && (
          <div className="bg-white border border-gray-200 rounded-lg p-8 max-h-[90vh] overflow-y-auto">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold">Complete your profile</h2>
              <p className="text-gray-500 text-sm mt-1">
                {formData.email}
              </p>
            </div>

            <form onSubmit={handleNextStep}>
              {/* Full Name */}
              <div className="mb-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-1 ${
                    errors.fullName ? 'border-red-500' : 'border-gray-300 focus:ring-gray-300'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Username */}
              <div className="mb-4">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-1 ${
                    errors.username ? 'border-red-500' : 'border-gray-300 focus:ring-gray-300'
                  }`}
                />
                {errors.username && (
                  <p className="text-red-500 text-xs mt-1">{errors.username}</p>
                )}
              </div>

              {/* Password */}
              <div className="mb-4 relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-1 ${
                    errors.password ? 'border-red-500' : 'border-gray-300 focus:ring-gray-300'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-500 text-sm"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password */}
              <div className="mb-4">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-1 ${
                    errors.confirmPassword ? 'border-red-500' : 'border-gray-300 focus:ring-gray-300'
                  }`}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
                )}
              </div>

              {/* Phone Number (Optional) */}
              <div className="mb-4">
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number (Optional)"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-300"
                />
              </div>

              {/* Date of Birth */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <select
                    value={formData.dateOfBirth.month}
                    onChange={(e) => handleDOBChange('month', e.target.value)}
                    className={`p-3 border rounded-lg focus:outline-none focus:ring-1 ${
                      errors.dateOfBirth ? 'border-red-500' : 'border-gray-300 focus:ring-gray-300'
                    }`}
                  >
                    <option value="">Month</option>
                    {months.map(month => (
                      <option key={month} value={month}>{month}</option>
                    ))}
                  </select>

                  <select
                    value={formData.dateOfBirth.day}
                    onChange={(e) => handleDOBChange('day', e.target.value)}
                    className={`p-3 border rounded-lg focus:outline-none focus:ring-1 ${
                      errors.dateOfBirth ? 'border-red-500' : 'border-gray-300 focus:ring-gray-300'
                    }`}
                  >
                    <option value="">Day</option>
                    {days.map(day => (
                      <option key={day} value={day}>{day}</option>
                    ))}
                  </select>

                  <select
                    value={formData.dateOfBirth.year}
                    onChange={(e) => handleDOBChange('year', e.target.value)}
                    className={`p-3 border rounded-lg focus:outline-none focus:ring-1 ${
                      errors.dateOfBirth ? 'border-red-500' : 'border-gray-300 focus:ring-gray-300'
                    }`}
                  >
                    <option value="">Year</option>
                    {years.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
                {errors.dateOfBirth && (
                  <p className="text-red-500 text-xs mt-1">{errors.dateOfBirth}</p>
                )}
              </div>

              {/* Terms Agreement */}
              <div className="mb-4">
                <label className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="mt-1"
                  />
                  <span className="text-xs text-gray-600">
                    By signing up, you agree to our{' '}
                    <a href="#" className="text-blue-500">Terms</a>,{' '}
                    <a href="#" className="text-blue-500">Privacy Policy</a> and{' '}
                    <a href="#" className="text-blue-500">Cookies Policy</a>.
                  </span>
                </label>
                {errors.terms && (
                  <p className="text-red-500 text-xs mt-1">{errors.terms}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors ${
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {loading ? 'Creating Account...' : 'Sign Up'}
              </button>
            </form>
          </div>
        )}

        {/* Step 3: Success */}
        {step === 3 && (
          <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            
            <h2 className="text-2xl font-bold mb-2">Welcome to Instagram!</h2>
            <p className="text-gray-600 mb-6">
              Your account has been created successfully. You can now start exploring and connecting with friends.
            </p>

            <button
              onClick={() => navigate('/')}
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors mb-3"
            >
              Go to Home
            </button>

            <button
              onClick={() => navigate('/profile')}
              className="w-full bg-gray-100 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Complete Your Profile
            </button>
          </div>
        )}

        {/* Login Link (shown on steps 1 and 2) */}
        {(step === 1 || step === 2) && (
          <div className="bg-white border border-gray-200 rounded-lg p-4 mt-4 text-center">
            <p className="text-sm">
              Already have an account?{' '}
              <button
                onClick={() => navigate('/login')}
                className="text-blue-500 font-semibold"
              >
                Log In
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;