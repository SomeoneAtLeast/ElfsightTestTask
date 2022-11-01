import Button from '../../../сommon-сomponents/Button';
import styles from './ButtonsGroup.module.scss';

export const ButtonsGroup = () => {
  return (
    <fieldset className={styles.buttonsGroup}>
      <div className={styles.buttonsGroup__buttonsWrapper}>
        <Button text={'Clear'} isClear />
        <Button text={'Apply'} />
      </div>
    </fieldset>
  );
};
