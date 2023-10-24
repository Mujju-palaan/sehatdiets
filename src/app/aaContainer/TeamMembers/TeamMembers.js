import React from 'react'
import TeamCard from '../../../../components/TeamCard/TeamCard';
import styles from '../../../../components/TeamCard/TeamCard.module.css'

const TeamMembers = (props) => {
  return (
    <>
      <div className={styles.section_title}>
        <h1>Our Team Page</h1>
        
        <div style={{display:'flex', padding:'4rem', flexWrap:'wrap'}}>
        <TeamCard
          image="./mujju.jpeg"
          name={`Mujju`}
          designation={`CEO & Founder`}
          text={`Some text goes here that describes about team members`}
          email={`mujju@gmail.com`}
          fblink='fb.com'
        ></TeamCard>
        <TeamCard></TeamCard>
        <TeamCard></TeamCard>
        <TeamCard></TeamCard>
        
        </div>
      </div>
     
    </>
  )
}

export default TeamMembers