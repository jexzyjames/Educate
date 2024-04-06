import { createContext, useState } from "react";
import img from '../Food App/image.jpg'

const ImageContext = createContext();

export const ImageProvider =({children}) => {
    const[images, setImages] = useState([
       {
        img: img,
       }
    ])

    const addImage = (image)=>{
        setImages([...images, image] )
    }

    const removeImage = (index)=>{
        const updated = images.filter((_, i) => i !== index )
        setImages(updated)
        };
    return(
        <ImageContext.Provider value={{images, addImage, removeImage}}>
            {children}
        </ImageContext.Provider>
    )

    }

    export default ImageContext;