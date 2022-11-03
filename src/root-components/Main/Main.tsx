import FindAndViewCharacters from '../../specific-components/FindAndViewCharacters';
import styles from './Main.module.scss';

export const Main = () => {
  return (
    <main className={styles.main}>
      <FindAndViewCharacters />
    </main>
  );
};
