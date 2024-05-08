import React from 'react'
import './home.css'
import Frame3 from '../../assets/Frame1.svg'
import Frame2 from '../../assets/Frame2.svg'
import Frame1 from '../../assets/Frame3.svg'
import Frame4 from '../../assets/Frame4.svg'
import { RadarChartOutlined } from '@ant-design/icons'


function Home() {
  return (
    <section className="h-wraper">
        <div className="flexCenter h-wrap">
            <div className="flexColStart h-left">
                <span className="primaryText">
                Unlock Your Potential <br />
                with Asset-Ace <br />
                <p className="secondaryText">Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we're here to guide you on your journey to success. Whether you're a student, professional, or lifelong learner, our cutting-edge Learning Management System is designed to elevate your learning experience.</p>
                </span>
                <button className='button btn'>Get started</button>
            </div>
            <div className=" h-right">
                <div id="frame6"><img src="./Frame6.svg" alt="" /></div>
                <div id="img"><img src="./Frame5-rep.svg" alt="" /></div>
                <div id="img2"><img src="./image9.svg" alt="" /></div>
                <div id="dots"><img src="./Group.svg" alt="" /></div>

                {/* <div id='circle1'><img src={Frame1} alt="" width={196}/></div>
                <RadarChartOutlined size={100}/>
                <div id='circle2'><img src={Frame2} alt="" width={196}/></div>
                <div id='circle3'><img src={Frame3} alt="" width={196}/></div>
                <div id="box"><img src={Frame4} alt="" /></div> */}
            </div>
        </div>
    </section>
  )
}

export default Home