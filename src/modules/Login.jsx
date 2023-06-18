import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Global.css'

export default function Login() {
    const navigate = useNavigate();
    return (
        <div className='logDimns'>
            <form>
                <div className="form-outline mb-4">
                    <input placeholder='abc@gmail.com' type="email" id="form2Example1" className="form-control bordRad" />
                    <label className="form-label" for="form2Example1">Email address</label>
                </div>

                <div className="form-outline mb-4">
                    <input placeholder='password...' type="password" id="form2Example2" className="form-control bordRad" />
                    <label className="form-label" for="form2Example2">Password</label>
                </div>
                <div className="row mb-4">
                    <div className="col d-flex justify-content-center">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="form2Example31" />
                            <label className="form-check-label" for="form2Example31"> Remember me </label>
                        </div>
                    </div>
                    <div className="col" onClick={() => navigate('/dummy')}>
                        <a href=''>Forgot password?</a>
                    </div>
                </div>

                <button type="button" className="btn btn-primary btn-block mb-4 bordRad" onClick={() => navigate('/signin')}>Sign in</button>

                <div className="text-center">
                    <p>Not a member? <a href="/dummy">Register</a></p>
                </div>
            </form>
        </div>
    )
}
