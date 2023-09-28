import React from 'react'
import './style.css'
import Banner_Vector from '../../../../../Animation/Banner_Vector'

const BannerDivider = () => {
  return (
    <>
    <div className="hero">
        <div className="content">
          <div className='title'>
            <center>
            <h2>GET STARTED ON THE PATH TO HEALTH !</h2>
            <h2>LIVING YOUR BEST LIFE</h2>
            </center>
          </div>
          <div>
            <Banner_Vector />
          </div>
            
        </div>
        <div class="custom-shape-divider-bottom-1695933838">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
        </div>
    </div>
        
    </>
    
  )
}

export default BannerDivider