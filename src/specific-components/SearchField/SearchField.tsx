import InputWithLabel from '../../сommon-сomponents/InputWithLabel';
import styles from './SearchField.module.scss';

export const SearchField = () => {
  return (
    <div className={styles.searchField}>
      <InputWithLabel
        uniqueIdForInput={'SearchField'}
        labelText={'Enter character name'}
      />
    </div>
  );
};
