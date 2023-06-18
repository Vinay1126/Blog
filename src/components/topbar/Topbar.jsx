import React from 'react'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { TopbarDetails } from "./TopbarDetails";
import { useNavigate } from 'react-router-dom'
import './topbar.css'

export default function Topbar() {
    const navigate = useNavigate();
    return (
        <div className='topbody'>
            <div className='topbar head' onClick={() => {
                navigate('/login');
            }}>
                <h4>Write your own blog</h4>
                <AccountCircleRoundedIcon className='userLogo' />
            </div>
            <div className='topbar'>
                {
                    TopbarDetails.map((val, key) => {
                        return (
                            <div
                                key={key}
                                onClick={() => {
                                    const path = val.link;
                                    navigate('/' + path);
                                }}
                            >
                                <h5>{val.name}</h5>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
