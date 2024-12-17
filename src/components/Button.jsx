import styles from '../styles/AsyncButton.module.css';
import { useState } from 'react';


const Button = ({ children, getRecipe }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = async () => {
        setIsLoading(true);
        try {
        await getRecipe();
        } finally {
        setIsLoading(false);
        }
    };

    return (
        <button 
          className={`${styles.button} ${isLoading ? styles.loading : ''}`} 
          onClick={handleClick}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className={styles.spinner}>
              <div className={styles.bounce1}></div>
              <div className={styles.bounce2}></div>
              <div className={styles.bounce3}></div>
            </div>
          ) : children}
        </button>
      );



}

export default Button;