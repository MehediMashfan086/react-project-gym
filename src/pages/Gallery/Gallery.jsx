import React from 'react'
import "./Gallery.css"
import Header from '../../components/Header'
import HeaderImage from "../../images/header_bg_3.jpg"

const Gallery = () => {
  const galleryLength= 15;
  const images = []

  for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`))
  }

  console.log(images)

  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit. Tenetur, excepturi? 
        Pariatur molestias veniam quis, ipsam 
        natus dolores quam ducimus veritatis?
      </Header>

      <section className="gallery">
        <div className="container gallery-container">
          {
            images.map((image, index) => {
              return <article key={index}>
                <img src={image} alt={`Gallery Pic ${index + 1}`} />
              </article>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Gallery
