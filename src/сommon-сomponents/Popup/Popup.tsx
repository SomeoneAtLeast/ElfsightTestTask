import { FC, ReactNode, useEffect } from 'react';
import ExitCross from '../ExitCross';
import styles from './Popup.module.scss';

interface IPopup {
  children: ReactNode;
  onClosePopup: () => void;
}

export const Popup: FC<IPopup> = ({ children, onClosePopup }) => {
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClosePopup();
      }
    };

    window.addEventListener('keydown', onEsc);

    return () => {
      window.removeEventListener('keydown', onEsc);
    };
  }, []);

  return (
    <>
      <div className={styles.popupWrapper} onClick={onClosePopup}></div>
      <div className={styles.popup}>
        <ExitCross onExitCb={onClosePopup} />
        {children}
      </div>
    </>
  );
};
