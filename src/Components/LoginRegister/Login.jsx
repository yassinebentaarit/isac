import axios from 'axios';
import {useState} from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate()
  const [data,setData] = useState ({
    email:'',
    password:'',
  })

const loginUser = async(e) =>{
      e.preventDefault();
      const {email, password} = data
      try {
        const {data} = await axios.post('/api/auth/signin',{
          email,
          password
        });
        if (data.error) {
          toast.error(data.error)
        } else{
          console.log(data)
          setData({ email: '', password: '' }); //not setData({}) to ensure always defined and initialized to it initial value
          navigate('/dashboard')
        }
      } catch (error) {
        
      }
  }
  return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="absolute inset-0 bg-[url('https://source.unsplash.com/random/1920x1080/?technology')] bg-cover bg-center opacity-30"></div>
      <form
        onSubmit={loginUser}
        className="relative bg-white bg-opacity-90 backdrop-blur-md p-10 rounded-2xl shadow-2xl w-full max-w-md transform transition duration-500 hover:scale-105"
      >
        <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
          Vermeg Login
        </h2>
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={data.email} 
            onChange={(e) => setData({...data,email: e.target.value})}
            required
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>
        <div className="mb-8">
          <label htmlFor="password" className="block text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={data.password} 
            onChange={(e) => setData({...data,password: e.target.value})}
            required
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Login
        </button>
        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </form>
    </div>
  )
}

export default Login