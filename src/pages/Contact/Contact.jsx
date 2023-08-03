import React from 'react'
import "./Contact.css"
import Header from '../../components/Header'
import HeaderImage from "../../images/header_bg_2.jpg"
import { MdEmail } from "react-icons/md"
import { BsMessenger } from "react-icons/bs"
import { IoLogoWhatsapp } from "react-icons/io"

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit, amet consectetur adipisicing 
        elit. Quibusdam asperiores architecto ratione quis 
        itaque reprehenderit dolore nam! Corrupti, unde ullam.
      </Header>
      <section className="contact">
        <div className="container contact-container">
          <div className="contact-wrapper">
            <a href="mailto:mhmehedi375@gmail.com" target='_blank' rel='noreferrer noopener'>
              <MdEmail/>
            </a>

            <a href="http://m.me/mehedimashfan" target='_blank' rel='noreferrer noopener'>
              <BsMessenger/>
            </a>

            <a href="https://wa.me/+8801686667110" target='_blank' rel='noreferrer noopener'>
              <IoLogoWhatsapp/>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
