import { FC } from 'react';
import InputWithLabel from '../../сommon-сomponents/InputWithLabel';
import styles from './SearchField.module.scss';

interface ISearchField {
  fieldValue: string;
  onGetFieldValue: (status: string) => void;
}

export const SearchField: FC<ISearchField> = ({
  onGetFieldValue,
  fieldValue,
}) => {
  return (
    <div className={styles.searchField}>
      <InputWithLabel
        value={fieldValue}
        uniqueIdForInput={'SearchField'}
        labelText={'Enter character name'}
        onGetInputValue={onGetFieldValue}
      />
    </div>
  );
};
