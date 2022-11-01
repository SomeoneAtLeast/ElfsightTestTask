import Filter from '../../specific-components/Filter';
import ListOfCharacters from '../../specific-components/ListOfCharacters';
import SearchField from '../../specific-components/SearchField';
import styles from './Main.module.scss';

export const Main = () => {
  return (
    <main className={styles.main}>
      <section className={styles.main__findCharacters}>
        <SearchField />
        <Filter />
      </section>
      <section className={styles.main__seeCharacters}>
        <ListOfCharacters />
      </section>
    </main>
  );
};
