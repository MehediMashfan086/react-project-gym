import React from 'react'
import Card from "../UI/Card"

const Trainer = ({id, image, name, job, socials}) => {
  return (
    <Card className="trainer">
        <div className="trainer-img">
            <img src={image} alt={name} />
        </div>
        <h3>{name}</h3>
        <p>{job}</p>
        <div className="trainer-socials">
            {
                socials.map(({icon, link}, index) => {
                    return <a key={index} href={link} target="_blank" 
                    rel="noopener noreferrer">
                        {icon}
                    </a>
                })
            }
        </div>
    </Card>
  )
}

export default Trainer