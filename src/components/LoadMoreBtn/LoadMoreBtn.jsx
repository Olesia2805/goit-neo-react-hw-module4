import btnCss from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick }) => {
  const handleLoadMore = e => {
    e.preventDefault();
  };

  return (
    <>
      <button
        type="submit"
        className={btnCss.submitButton}
        onClick={handleLoadMore}
      >
        Load More
      </button>
    </>
  );
};

export default LoadMoreBtn;
