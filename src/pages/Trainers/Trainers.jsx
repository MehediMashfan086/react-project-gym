import React from 'react'
import "./Trainers.css"
import Header from '../../components/Header'
import Trainer from '../../components/Trainer'
import HeaderImage from "../../images/header_bg_5.jpg"
import {trainers} from "../../data"
import {BsInstagram} from "react-icons/bs"
import {AiOutlineTwitter} from "react-icons/ai"
import {FaFacebookSquare, FaLinkedinIn} from "react-icons/fa"


const Trainers = () => {
  return (
    <>
      <Header title="Our Tainers" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing
         elit. Culpa in ad unde sapiente neque aperiam, 
         dolor accusamus doloremque distinctio error?
      </Header>
      <section className="trainers">
        <div className="container trainers-container">
          {
            trainers.map(({id, image, name, job, socials}) => {
              return <Trainer key={id} image={image} name={name} job={job} socials={
                [
                  {icon: <BsInstagram />, link: socials[0]},
                  {icon: <AiOutlineTwitter />, link: socials[1]},
                  {icon: <FaFacebookSquare />, link: socials[2]},
                  {icon: <FaLinkedinIn />, link: socials[3]}
                ]
              } />
            })
          }
        </div>
      </section>
    </>
  )
}

export default Trainers
