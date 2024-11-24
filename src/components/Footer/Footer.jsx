import React from 'react';
import './Footer.css';
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { AiOutlineTwitter, AiFillYoutube, AiFillInstagram } from "react-icons/ai";


const Footer = () => {
    return (
        <section className='Footer'>
            <div className="secContent container">
                <div className="contactDiv flex">
                    <div className="text">
                        <small>Let's stay in touch</small>
                        <h2>Discover new horizons together</h2>
                    </div>

                    <div className="inputDiv flex">
                        <div>
                        </div>
                        <input type="text" placeholder='Enter your email Address' />
                        <button className='btn flex' type='submit'>
                            SEND <FiSend className="icon" />
                        </button>
                    </div>
                </div>

                <div className="FooterCard flex">
                    <div className="FooterIntro flex">
                        <div className="logoDiv">
                            <a href="#" className='logo flex'>
                                <MdTravelExplore className="icon" /> WanderLuxe.
                            </a>
                        </div>

                        <div className="FooterParagraph">
                            “No one realizes how beautiful it is to travel until he comes home and rests his head on his old, familiar pillow.” – Lin Yutang
                        </div>

                        <div className="FooterSocials flex">
                            <a href="https://x.com/?lang=en" target="_blank" >
                                <AiOutlineTwitter className="icon" />
                            </a>
                            <a href="https://www.youtube.com/" target="_blank" >
                                <AiFillYoutube className="icon" />
                            </a>
                            <a href="https://www.instagram.com/accounts/login/" target="_blank">
                                <AiFillInstagram className="icon" />
                            </a>

                        </div>

                    </div>


                </div>
            </div>
        </section>
    );
};

export default Footer;
