import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <Link to='/'>
      <img
        src='/public/logo.png'
        alt='WorldWise logo'
        className={styles.logo}
      />
    </Link>
  );
};

export default Logo;
