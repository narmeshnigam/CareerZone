import React, { useState } from 'react'
import './AdminLogin.css'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Loading from '../Loading/Loading';
//admin@career123

const auth = getAuth();

const AdminLogin = () => {
    const[password, setPassword] = useState();
    const[email, setEmail] = useState();
    const[loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const signIn = () => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            navigate('/admin')
        })
        .catch((error) => {
            alert(error);
            setLoading(false)
        });
    }

  return (
    <div className='login__page__container'>
      <div style={{position:'absolute', backgroundColor:'#00000021'}}>{loading === true ? <Loading/>: ''}</div>
      <div className='login__form'>
        <div className='login__form__logo'><img src='https://thecareerzone.co.in/img/logo-wide.png'></img></div>
        <div>
            <div className='login__form__input'>
                <div>Email: </div>
                <input type='email' placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} value={email} ></input>
            </div>
            <div className='login__form__input'>
                <div>Password:</div>
                <input type='password' placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} value={password}></input>
            </div>
            <div className='login__form__logo'><button onClick={() => signIn()}>Sign in</button></div>
        </div>
        <div className='login__form__bottom'>Welcome to Career Zone</div>
      </div>
    </div>
  )
}

export default AdminLogin
