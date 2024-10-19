import styles from './ErrorMessage.module.css'; // Import the CSS module

const ErrorMessage = () => {
  return (
    <div className={styles.errorMessage}>
      <img
        src="../../../error.png"
        alt="Not Found"
        className={styles.errorImage}
      />
      <h2 className={styles.errorTitle}>No Results Found</h2>
      <p className={styles.errorDescription}>
        We could not find anything with your search. Try something else!
      </p>
    </div>
  );
};

export default ErrorMessage;
