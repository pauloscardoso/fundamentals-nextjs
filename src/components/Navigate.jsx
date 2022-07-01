import Link from 'next/link'
import styles from '../styles/navigate.module.css';

export default function Navigate(props) {
  return (
    <Link href={props.destiny}>
      <div className={styles.navigate} style={{
        backgroundColor: props.cor ?? 'dodgerblue'
      }}>
      {props.text}
      </div>
    </Link>
  )
}
