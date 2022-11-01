import { FC } from 'react';
import styles from './Button.module.scss';

interface IButton {
  text: string;
  isClear?: boolean;
}

export const Button: FC<IButton> = ({ text, isClear = false }) => {
  return (
    <button className={`${styles.button} ${isClear ? styles.clear : ''}`}>
      {text}
    </button>
  );
};
