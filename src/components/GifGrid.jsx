import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

   const {images, isLoading} = useFetchGifs (category);

   return (
      <>
         <h3>{category}</h3>
         {
            isLoading && ( <h2>Loading...</h2> )
         }

         <div className="card-grid">
            {
               images.map( (image) =>(
                  <GifItem 
                  key={ image.id }
                  { ...image }
                  // lo de arriba sirve para esparcir las propiedades de la imagen y asi enviarlas todas como props
                  />
               ))
            }
         </div>
      </>
   )
}
