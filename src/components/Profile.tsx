import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/matheusobarboza.png" alt="Matheus Barboza" />
      <div>
          <strong>Matheus Barboza</strong>
          <p>
            <img src="icons/level.svg" alt="level" />
            Level 1</p>
      </div>
    </div>
  );
}