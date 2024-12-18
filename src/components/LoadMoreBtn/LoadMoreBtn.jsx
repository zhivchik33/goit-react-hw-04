import style from './LoadMoreBtn.module.css';
const LoadMoreBtn = ({ onClick }) => {
  return (
    <button type="button" className={style.loadBtn} onClick={onClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
