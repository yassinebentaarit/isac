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
    <div>
      <form onSubmit={loginUser}>
      <label>Email</label>
        <input type='email' placeholder='enter your email...' value={data.email} onChange={(e) => setData({...data,email: e.target.value})}/>
        <label>Name</label>
        <input type='password' placeholder='enter your password...' value={data.password} onChange={(e) => setData({...data,password: e.target.value})}/>
        <button type='submit'> Submit</button>
      </form>
    </div>
  )
}

export default Login