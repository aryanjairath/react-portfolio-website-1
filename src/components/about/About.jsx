import React from 'react'
import './about.css'
import ME from '../../assets/about-me.jpg'
import {FaGraduationCap} from 'react-icons/fa'
import {HiOutlineDesktopComputer} from 'react-icons/hi'
import {SiCrowdsource} from 'react-icons/si'
import {BsArrowRightCircleFill} from 'react-icons/bs'
import Popup from 'reactjs-popup'
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css';
const About = () => {
  return (
    <section id = 'about'>
        <ScrollAnimation animateIn="animate__animated animate__fadeInRight" duration={3} animateOnce={true}>
            <h5> Get To Know Me</h5>
            <h2>About Me</h2>
        </ScrollAnimation>
        <div className="container about_container">
            <div className = 'about_me'>
                <div className='about_me-image'>
                    <img src = {ME} alt ="About Image"/>
                </div>
            </div>
            <div className = "about_content">
                <div className = "about_cards">
                    <article className ='about_card'>
                        <FaGraduationCap className = 'about_icon' />
                        <h5>Education</h5>
                        <small>BS Computer Science</small>
                        <small>@ Rutgers University</small>
                    </article>

                    <article className ='about_card'>
                        <SiCrowdsource className = 'about_icon' />
                        <h5>Leadership</h5>
                        <small>Executive mangagement positions</small>
                    </article>

                    <article className ='about_card'>
                        <HiOutlineDesktopComputer className = 'about_icon' />
                        <h5>Projects</h5>
                        <small>10+ Personal Projects</small>
                    </article>
                    <article className ='about_details'>
                        <div>
                            <BsArrowRightCircleFill className = 'bullet' />
                            <small>GPA: 3.92</small>
                        </div>
                        <div>
                            <BsArrowRightCircleFill className = 'bullet' />
                            <small>Innovation Fellowship</small>
                        </div>
                        <div>
                            <BsArrowRightCircleFill className = 'bullet' />
                            <small>RU Security  Club</small>
                        </div>
                    </article>

                    <article className ='about_details'>
                        <div>
                            <BsArrowRightCircleFill className = 'bullet' />
                            <small>Biomed Officer </small>
                        </div>
                        <div>
                            <BsArrowRightCircleFill className = 'bullet' />
                            <small>STEM HS Coach</small>
                        </div>
                        <div>
                            <BsArrowRightCircleFill className = 'bullet' />
                            <small>Community Service</small>
                        </div>
                    </article>

                    <article className ='about_details'>
                        <div>
                            <BsArrowRightCircleFill className = 'bullet' />
                            <small>OOP</small>
                        </div>
                        <div>
                            <BsArrowRightCircleFill className = 'bullet' />
                            <small>JavaFX Library</small>
                        </div>
                        <div>
                            <BsArrowRightCircleFill className = 'bullet' />
                            <small>Databases</small>
                        </div>
                        <div>
                            <BsArrowRightCircleFill className = 'bullet' />
                            <small>Android Applications</small>
                        </div>
                    </article>
                </div>
            </div>
            <Popup trigger=
                {<button className='btn btn-primary'> Learn More About Me </button>}
                modal nested>
                {close => (
                    <div className='modal'>

                        <div className="pop_up_window animate__animated animate__zoomIn">
                            <p>I am currenty a second year student at Rutgers</p>
                            <p>University with both Front-End and Back-End experience in programming.</p>
                            <p>I have a 3.92 GPA and have surrounded myself in an environment to further</p> 
                            <p>my computer science arsenal in any way possible. I currently am involved in the</p>                                <p>Rutgers Security Club.</p>
                            <p>In my free time, I enjoy doing algorithmic style coding problems, making mobile</p>
                            <p>applications particularly on the Android side. I also have a multitude of hobbies: a big Brooklyn Nets and Roger </p>
                            <p>Federer fan and watch sports almost every day and also just hanging out with friends and family whenver I can. </p>                            
                            </div>
                        <div>
                            <button className = 'btn btn-primary'onClick=
                                {() => close()}>
                                    Close                                
                                </button>
                    </div>
                    </div>
                    )
                }
            </Popup>        </div>
    </section>
  )
}

export default About