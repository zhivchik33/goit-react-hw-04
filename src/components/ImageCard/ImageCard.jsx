import style from "./ImageCard.module.css";
const ImageCard = ({ image, onClick }) => {
  return (
    <div>
      <img
        className={style.card}
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => onClick(image.urls.regular)}
      />
    </div>
  );
};

export default ImageCard;
