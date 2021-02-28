import { useEffect } from 'react';
import Lottie from 'react-lottie';

import animationData from '../../public/alarm_clock_animate.json';
import styles from '../styles/components/AlarmClockModal.module.css';

interface AlarmClockModalProps {
  closeModal: () => void;
}

export function AlarmClockModal({ closeModal }: AlarmClockModalProps) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className={styles.alarmOverlay}>
      <div className={styles.alarmClockWrapper}>
        <div className={styles.alarmClockAnimate}>
          <Lottie options={defaultOptions} height={350} width={350} />
        </div>
        <h3>Chegou o momento de realizamos o nosso exercício.</h3>
        <button type="button" onClick={closeModal}>
          Iniciar
        </button>
      </div>
    </div>
  );
}
