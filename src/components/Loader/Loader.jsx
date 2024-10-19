// import loaderCss from './Loader.module.css';
import PropagateLoader from 'react-spinners/PropagateLoader';

const Loader = () => {
  return (
    <PropagateLoader
      color={'#6f4e37'}
      size={15}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loader;
