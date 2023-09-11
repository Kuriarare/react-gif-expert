
// import getGifs from "../helpers/getGifs";
import GifItem from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {

  const {images, isLoading} = useFetchGifs(category)

  return (
    <>
      <h3>{category}</h3>
      {isLoading ? (<h2>Cargando...</h2>): null}
      <div>
        {images.map(img =>(
          <GifItem 
          key={img.id}
          // title = {img.title}
          // URL = {img.url}
          { ...img}
           />
        ))}
      </div>

    </>
  );
};

export default GifGrid;
