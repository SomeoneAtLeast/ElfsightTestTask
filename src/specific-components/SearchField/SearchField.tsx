import InputWithLabel from '../../сommon-сomponents/InputWithLabel';
import styles from './SearchField.module.scss';

export const SearchField = () => {
  return (
    <div className={styles.searchField}>
      <InputWithLabel
        placeholderText={'Enter character name'}
        labelText={'Enter character name'}
      />
    </div>
  );
};
