import { FC } from 'react';
import styles from './InputWithLabel.module.scss';

interface IInputWithLabel {
  placeholderText: string;
  labelText: string;
}

export const InputWithLabel: FC<IInputWithLabel> = ({
  placeholderText,
  labelText,
}) => {
  return (
    <div className={styles.searchField}>
      <input
        className={styles.input}
        id="input-with-label"
        type="input"
        placeholder={placeholderText}
      />
      <label className={styles.label} htmlFor="input-with-label">
        {labelText}
      </label>
    </div>
  );
};
