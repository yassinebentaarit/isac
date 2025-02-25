import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [emailError, setEmailError] = useState(false);

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setData({ ...data, email });
    if (email.endsWith('@vermeg.com')) {
      setEmailError(false);
    }
  };

  const registerUser = async (e) => {
    e.preventDefault();
    const { username, email, password } = data;

    if (!email.endsWith('@vermeg.com')) {
      setEmailError(true);
      return;
    }

    try {
      const { data: responseData } = await axios.post('/api/auth/register', {
        username,
        email,
        password
      });

      if (responseData.error) {
        toast.error(responseData.error);
      } else {
        setData({ username: '', email: '', password: '' });
        toast.success('Registration Successful, Welcome!');
        navigate('/dashboard');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="absolute inset-0 bg-[url('https://source.unsplash.com/random/1920x1080/?technology')] bg-cover bg-center opacity-30"></div>
      <form
        onSubmit={registerUser}
        className="relative bg-white bg-opacity-90 backdrop-blur-md p-10 rounded-2xl shadow-2xl w-full max-w-md transform transition duration-500 hover:scale-105"
      >
        <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
          Vermeg Register
        </h2>
        <div className="mb-6">
          <label htmlFor="username" className="block text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter your full name..."
            value={data.username}
            onChange={(e) => setData({ ...data, username: e.target.value })}
            required
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email..."
            value={data.email}
            onChange={handleEmailChange}
            required
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          {emailError && (
            <p className="mt-2 text-sm text-red-500">
              Email must be in the vermeg.com domain
            </p>
          )}
        </div>
        <div className="mb-8">
          <label htmlFor="password" className="block text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password..."
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            required
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Register
        </button>
        <p className="mt-6 text-center text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}

export default Register;
