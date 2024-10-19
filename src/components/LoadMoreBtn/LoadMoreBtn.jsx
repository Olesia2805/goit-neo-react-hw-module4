import btnCss from './LoadMoreBtn.module.css';

const LoadMoreBtn = () => {
  return (
    <>
      <button type="submit" className={btnCss.submitButton}>
        Load More
      </button>
    </>
  );
};

export default LoadMoreBtn;
