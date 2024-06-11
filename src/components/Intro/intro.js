import React from 'react';
import './intro.css'
import profile from '../../assets/profile1.JPG'

const Intro = () => {
    return(
       <section id="intro">
        <div className='introContent'>
          <span className='hello'>Hello,</span>
          <span className='introText'>I'm <span className='introName'>THASNEEM SHYJU,</span><br/>Frontend Web Developer <br/>from Tracy,CA</span>
       <p className='introPara'>I am a skilled web developer with experience in creating <br/>visually appealing and user friendly websites.</p>
          <button className='btn' onClick={()=>{
                document.getElementById('contactMe').scrollIntoView({behaviour:'smooth'})}}>Hire Me</button>
      </div>
    <img src={profile} alt='' className='profilePic'/>
       </section>
       
    );
}

export default Intro
 