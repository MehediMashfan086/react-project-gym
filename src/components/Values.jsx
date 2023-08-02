import React from 'react'
import Image from "../images/values.jpg"
import SectionHead from './SectionHead'
import { GiCutDiamond } from "react-icons/gi"
import { values } from "../data"
import Card from "../UI/Card"

const Values = () => {
  return (
    <section className="values">
        <div className="container values-container">
            {/* Values Left */}
            <div className="values-left">
                <div className="values-image">
                    <img src={Image} alt="values-pic" />
                </div>
            </div>

            {/* Values Right */}
            <div className="values-right">
                <SectionHead icon={<GiCutDiamond />} title="Values" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Alias praesentium tempore qui, id accusantium ex 
                    ab fugiat a sed quis.
                </p>
                <div className="values-wrapper">
                    {
                        values.map(({id, icon, title, desc}) => {
                            return <Card key={id} className="values-value">
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{desc}</small>
                            </Card>
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values