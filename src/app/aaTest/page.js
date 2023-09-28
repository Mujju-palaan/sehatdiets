import React from 'react'
import BannerDivider from '../aaContainer/HomePage/BannerDivider/BannerDivider'
import Girl_saying_Hi from '../../../Animation/Girl_saying_Hi'

const page = () => {
  return (
    <div style={{padding:'0', margin:'0'}}>
      <BannerDivider />
      <div style={{ height:'80vh'}}>
        
        <div style={{float:'right'}}>
          <h2 style={{margin:'0', textAlign:'center', zIndex:'-1', fontFamily:'fairytale'}}>Hi !</h2>
          <Girl_saying_Hi />
        </div>
        
        <div style={{textAlign:'center', padding:'4rem'}}>
          <h1>Title</h1>
          <p> Millions of companies of all sizes use Stripe online and in person to accept payments,
             send payouts, automate financial processes, and ultimately grow revenue.
          </p>
          <p> Millions of companies of all sizes use Stripe online and in person to accept payments,
             send payouts, automate financial processes, and ultimately grow revenue.
          </p>
          <p> Millions of companies of all sizes use Stripe online and in person to accept payments,
             send payouts, automate financial processes, and ultimately grow revenue.
          </p>
        </div>

      </div>

    </div>
  )
}

export default page