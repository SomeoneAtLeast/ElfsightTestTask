import { FC } from 'react';
import styles from './InputWithLabel.module.scss';

interface IInputWithLabel {
  uniqueIdForInput: string;
  labelText: string;
  value: string;
  onGetInputValue: (value: string) => void;
}

export const InputWithLabel: FC<IInputWithLabel> = ({
  onGetInputValue,
  uniqueIdForInput,
  labelText,
  value,
}) => {
  return (
    <>
      <input
        className={styles.inputWithLabel__input}
        type="text"
        maxLength={50}
        value={value}
        onChange={(e) => onGetInputValue(e.target.value)}
        id={uniqueIdForInput}
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
