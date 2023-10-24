import React from 'react'
import './Testimonials.module.scss'
import ReviewCard from '../../../../components/AllOtherCards/ReviewCard/ReviewCard'


const Testimonials = () => {
  return (
    <>
        <div style={{display:'flex', gap:'2rem', textAlign:'center', justifyContent:'center'}}>
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>

        </div>
    </>
    
  )
}

export default Testimonials