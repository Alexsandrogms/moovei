import styles from '../styles/components/AlarmClockModal.module.css';

interface AlarmClockModalProps {
  closeModal: () => void;
}

export function AlarmClockModal({ closeModal }: AlarmClockModalProps) {
  return (
    <div className={styles.alarmOverlay}>
      <div className={styles.alarmClockWrapper}>
        <div className={styles.alarmClockAnimate}>
          <img src="/alarm_clock_animate.gif" alt="Despertador animação" />
        </div>
        <h3>Chegou o momento de realizamos o nosso exercício.</h3>
        <button type="button" onClick={closeModal}>
          Iniciar
        </button>
      </div>
    </div>
  );
}
