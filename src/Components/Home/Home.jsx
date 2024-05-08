import React from 'react'
import './home.css'
import { RadarChartOutlined } from '@ant-design/icons'


function Home() {
  return (
    <section className="h-wraper">
        <div className="paddings innerWidth flexCenter h-wrap">
            <div className="flexColStart h-left">
                <span className="primaryText">
                Unlock Your Potential <br />
                with Asset-Ace <br />
                <p className="secondaryText">Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we're here to guide you on your journey to success. Whether you're a student, professional, or lifelong learner, our cutting-edge Learning Management System is designed to elevate your learning experience.</p>
                </span>
                <button className='button btn'>Get started</button>
            </div>
            <div className="flexCenter h-right">
             <div className="image-container">
                <img src="./image9.svg" alt="" />
                <img src="./Group.svg" alt="" />
                <img src="./Group.svg" alt="" />
             </div>
            </div>
        </div>
    </section>
  )
}

export default Home