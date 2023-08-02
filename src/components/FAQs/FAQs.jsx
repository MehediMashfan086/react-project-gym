import React from 'react'
import SectionHead from '../SectionHead/SectionHead'
import { faqs } from "../../data"
import { FaQuestion } from "react-icons/fa"
import FAQ from './FAQ'
// import Card from "../../UI/Card"

const FAQs = () => {
  return (
    <section className="faqs">
        <div className="container faqs-container">
            <SectionHead icon={<FaQuestion />} title="FAQs" />
            <div className="faqs-wrapper">
                    {
                        faqs.map(({id, question, answer}) => {
                            return <FAQ key={id} question={question} answer={answer}/>
                        })
                    }
                </div>
        </div>
    </section>
  )
}

export default FAQs