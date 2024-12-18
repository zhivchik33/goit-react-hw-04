import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css";

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={style.list}>
      {images.map(image => {
        return (
          <li key={image.id}>
            <ImageCard image={image} onClick={() => onClick(image)} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
