import React, {useContext} from 'react'
import img from '../Food App/image.jpg'
import ImageContext from './Context'
const Gallery = () => {

    const {images, removeImage, addImage} = useContext(ImageContext)
  return (
    <div className='gallery'>
      {images.map((item, index) => (
      <div key={index}>
        <img src={item.img} alt="" />
        <h1>Click ME</h1>
        <b>jsddpoijdfjpodjpof</b>
        <button onClick={()=> addImage(item)}>Add Image</button>
        <button onClick={()=> removeImage(index)}>Remove Image</button>
      </div>
      ))}
    </div>
  )
}

export default Gallery
