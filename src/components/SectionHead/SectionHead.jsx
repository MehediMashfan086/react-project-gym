import React from 'react'

const SectionHead = ({icon, title, className}) => {
  return (
    <section className={`section-head ${className}`}>
        <span>{icon}</span>
        <h2>{title}</h2>
    </section>
  )
}

export default SectionHead
