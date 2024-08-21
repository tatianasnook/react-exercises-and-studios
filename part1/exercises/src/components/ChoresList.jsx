import styles from './ChoresList.module.css';

export default function ChoresList() {
   return (
      <div className={styles.choresList}>
         <h3 className={styles.choresHeading}>My chores list</h3>
         <ul>
            <li className={styles.choresText}>Task 1</li>
            <li className={styles.choresText}>Task 2</li>
            <li className={styles.choresText}>Task 3</li>
         </ul>
      </div>
   )
}