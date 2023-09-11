import React from 'react'
import { Link } from "react-router-dom";

import '../App.css'
import AppForm from '../Components/AppForm';

const CreateProfile = () => {
  return (
    <div className='app'>
        <div className='create-profile'>
            <span className='create-profile-button'>
                <Link to={`/`}>
                <p className='create-profile-text'>Back</p>
                </Link>
            </span>
        </div>
        <div>
            <AppForm/>
        </div>
    </div>
  )
}

export default CreateProfile

