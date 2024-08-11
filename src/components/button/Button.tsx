import styles from './Button.module.css'
type ButtonProps={
  title:string
}
export const Button = ({title}:ButtonProps) => {
 return <button className={styles.button} type={'button'}>{title}</button>
}