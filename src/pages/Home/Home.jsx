import React from 'react'
import "./Home.css"
import MainHeader from '../../components/Header/MainHeader'
import Programs from '../../components/Programs/Programs'
import Values from '../../components/Values/Values'
import FAQs from '../../components/FAQs/FAQs'

const Home = () => {
  return (
    <>
      <MainHeader />
      <Programs />
      <Values />
      <FAQs />
    </>
  )
}

export default Home
