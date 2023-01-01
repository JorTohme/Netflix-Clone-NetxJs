import styles from '../styles/Browse.module.css'

export default function Slider ({ children, title }) {
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderTitle}>{title}</div>
      <div className={styles.slider}>
        {children}
      </div>
    </div>
  )
}
