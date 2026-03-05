import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const schema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match').required(),
});

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // Simulate register (in real app, call API)
    const fakeToken = 'fake-jwt-token';
    login(fakeToken);
    navigate('/home');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow-md w-80">
      <h2 className="text-2xl mb-4">Register</h2>
      <input
        type="email"
        placeholder="Email"
        {...register('email')}
        className="border p-2 mb-2 w-full"
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      <input
        type="password"
        placeholder="Password"
        {...register('password')}
        className="border p-2 mb-2 w-full"
      />
      {errors.password && <p className="text-red-500">{errors.password.message}</p>}
      <input
        type="password"
        placeholder="Confirm Password"
        {...register('confirmPassword')}
        className="border p-2 mb-2 w-full"
      />
      {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
      <button type="submit" className="bg-green-500 text-white p-2 w-full">Register</button>
    </form>
  );
};

export default Register;