import axios from 'axios';
import {useState} from 'react'
import { toast } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [data,setData] = useState ({
    fullname:'',
    email:'',
    password:''
  });

  const registerUser = async (e) =>{
    e.preventDefault();
    const {fullname, email, password} = data;
    try{
      const {data} = await axios.post('/api/auth/register',{
        fullname,email,password
      })
      if(data.error) {
        toast.error(data.error)
      } else {
        setData({})
        toast.success('Login Successful, Welcome!')
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div>
      <form onSubmit={registerUser}>
        <label>fullname</label>
        <input type='text' placeholder='enter your fullname...' value={data.fullname} onChange={(e) => setData({...data,fullname: e.target.value})}/>
        <label>Email</label>
        <input type='email' placeholder='enter your email...' value={data.email} onChange={(e) => setData({...data,email: e.target.value})}/>
        <label>password</label>
        <input type='password' placeholder='enter your password...' value={data.password} onChange={(e) => setData({...data,password: e.target.value})}/>
        <button type='submit'> Submit</button>
      </form>
    </div>
  )
}

export default Register