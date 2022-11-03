import { FC } from 'react';
import styles from './Button.module.scss';

interface IButton {
  text: string;
  onClick: (() => void) | ((e: React.MouseEvent<HTMLButtonElement>) => void);
  isClear?: boolean;
  isDisable?: boolean;
}

export const Button: FC<IButton> = ({
  text,
  onClick,
  isClear = false,
  isDisable = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisable}
      className={`
       ${styles.button}
       ${isClear ? styles.clear : ''}
       ${isDisable ? styles.disable : ''}`}
    >
      {text}
    </button>
  );
};
