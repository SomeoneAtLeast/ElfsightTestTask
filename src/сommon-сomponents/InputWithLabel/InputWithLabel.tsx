import { FC } from 'react';
import styles from './InputWithLabel.module.scss';

interface IInputWithLabel {
  uniqueIdForInput: string;
  labelText: string;
}

export const InputWithLabel: FC<IInputWithLabel> = ({
  uniqueIdForInput,
  labelText,
}) => {
  return (
    <>
      <input
        className={styles.inputWithLabel__input}
        id={uniqueIdForInput}
        type="input"
        placeholder={labelText}
      />
      <label
        className={styles.inputWithLabel__label}
        htmlFor={uniqueIdForInput}
      >
        {labelText}
      </label>
    </>
  );
};
