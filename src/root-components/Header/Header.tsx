import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <span className={styles.header__tagline}>
        Find a character from Rick and Morty!
      </span>
    </header>
  );
};
