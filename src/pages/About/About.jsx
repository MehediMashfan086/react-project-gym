import React from 'react'
import "./About.css"
import Header from '../../components/Header'
import HeaderImage from "../../images/header_bg_1.jpg"
import StoryImage from "../../images/about1.jpg"
import VisionImage from "../../images/about2.jpg"
import MissionImage from "../../images/about3.jpg"

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Suscipit, alias sed dolor 
        accusamus explicabo ea laboriosam aut tempore 
        omnis mollitia!
      </Header>

      <section className="about-story">
        <div className="container about-story-container">
          <div className="about-section-image">
            <img src={StoryImage} alt="About Pic 1" />
          </div>
          <div className="about-section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Quaerat assumenda veniam itaque architecto, 
              quis ipsa ratione consectetur eveniet obcaecati 
              dignissimos voluptatibus saepe aliquam quisquam 
              nostrum mollitia velit sint quas alias asperiores 
              cumque laborum animi! Hic dolor architecto iusto 
              quasi alias quibusdam sequi ad, accusantium ut ex 
              consectetur commodi fuga, soluta cupiditate maiores
              dolore voluptas quo repellendus quisquam voluptatibus
              recusandae explicabo. Ullam rem veritatis, consectetur,
              eaque ipsam necessitatibus tempora ratione deserunt aut
              illum iusto ex fugiat!
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Quaerat assumenda veniam itaque architecto, 
              quis ipsa ratione consectetur eveniet obcaecati 
              dignissimos voluptatibus saepe aliquam quisquam 
              nostrum mollitia velit sint quas alias asperiores 
              cumque laborum animi! Hic dolor architecto iusto 
              quasi alias quibusdam sequi ad, accusantium ut ex 
              consectetur commodi fuga, soluta cupiditate maiores
              dolore voluptas quo repellendus quisquam voluptatibus
              recusandae explicabo. Ullam rem veritatis, consectetur,
              eaque ipsam necessitatibus tempora ratione deserunt aut
              illum iusto ex fugiat!
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Quaerat assumenda veniam itaque architecto, 
              quis ipsa ratione consectetur eveniet obcaecati 
              dignissimos voluptatibus saepe aliquam quisquam 
              nostrum mollitia velit sint quas alias asperiores 
              cumque laborum animi! Hic dolor architecto iusto 
              quasi alias quibusdam sequi ad, accusantium ut ex 
              consectetur commodi fuga, soluta cupiditate maiores
              dolore voluptas quo repellendus quisquam voluptatibus
              recusandae explicabo. Ullam rem veritatis, consectetur,
              eaque ipsam necessitatibus tempora ratione deserunt aut
              illum iusto ex fugiat!
            </p>
          </div>
        </div>
      </section>

      <section className="about-vision">
        <div className="container about-vision-container">
          <div className="vision-section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Quaerat assumenda veniam itaque architecto, 
              quis ipsa ratione consectetur eveniet obcaecati 
              dignissimos voluptatibus saepe aliquam quisquam 
              nostrum mollitia velit sint quas alias asperiores 
              cumque laborum animi! Hic dolor architecto iusto 
              <br />
              <br />
              quasi alias quibusdam sequi ad, accusantium ut ex 
              consectetur commodi fuga, soluta cupiditate maiores
              dolore voluptas quo repellendus quisquam voluptatibus
              recusandae explicabo. Ullam rem veritatis, consectetur,
              eaque ipsam necessitatibus tempora ratione deserunt aut
              illum iusto ex fugiat!
            </p>
          </div>
          <div className="about-section-image">
            <img src={VisionImage} alt="About Pic 2" />
          </div>
        </div>
      </section>

      <section className="about-mission">
        <div className="container about-mision-container">
          <div className="about-section-image">
            <img src={MissionImage} alt="About Pic 3" />
          </div>
          <div className="about-section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Quaerat assumenda veniam itaque architecto, 
              quis ipsa ratione consectetur eveniet obcaecati 
              dignissimos voluptatibus saepe aliquam quisquam 
              nostrum mollitia velit sint quas alias asperiores 
              cumque laborum animi! Hic dolor architecto iusto 
              quasi alias quibusdam sequi ad, accusantium ut ex 
              consectetur commodi fuga, soluta cupiditate maiores
              dolore voluptas quo repellendus quisquam voluptatibus
              recusandae explicabo. Ullam rem veritatis, consectetur,
              eaque ipsam necessitatibus tempora ratione deserunt aut
              illum iusto ex fugiat!
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Quaerat assumenda veniam itaque architecto, 
              quis ipsa ratione consectetur eveniet obcaecati 
              dignissimos voluptatibus saepe aliquam quisquam 
              nostrum mollitia velit sint quas alias asperiores 
              cumque laborum animi! Hic dolor architecto iusto 
              quasi alias quibusdam sequi ad, accusantium ut ex 
              consectetur commodi fuga, soluta cupiditate maiores
              dolore voluptas quo repellendus quisquam voluptatibus
              recusandae explicabo. Ullam rem veritatis, consectetur,
              eaque ipsam necessitatibus tempora ratione deserunt aut
              illum iusto ex fugiat!
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
