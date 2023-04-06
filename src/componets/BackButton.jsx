import React from 'react'
import {useNavigate} from 'react-router-dom';

function BackButton() {
    const navigate = useNavigate();
    
    const goHome = ()=> {
        const home = navigate('/');
        return home;
    }

  return (
    <button onClick={goHome} className="float-left mt-16 mb-16 ml-6 px-12 py-3 bg-green-900 text-white uppercase">Back</button>
  )
}

export default BackButton