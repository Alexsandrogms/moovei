import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/LevelUpModal.module.css';

interface LevelUpModalProps {
  closeModal: () => void;
}

export function LevelUpModal({ closeModal }: LevelUpModalProps) {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.confettis}>
        <div className={styles.confetti}></div>
        <div className={styles.confetti}></div>
        <div className={styles.confetti}></div>
        <div className={styles.confetti}></div>
        <div className={styles.confetti}></div>
        <div className={styles.confetti}></div>
        <div className={styles.confetti}></div>
        <div className={styles.confetti}></div>
        <div className={styles.confetti}></div>
        <div className={styles.confetti}></div>
        <div className={styles.confetti}></div>
        <div className={styles.confetti}></div>
        <div className={styles.confetti}></div>
      </div>
      <div className={styles.wrapper}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </div>
    </div>
  );
}
