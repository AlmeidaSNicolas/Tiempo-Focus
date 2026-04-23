import styles from './styles.module.css';

export default function Footer(){
    return(
        <footer className={styles.footer} >
            <a href='AboutPomodoro'>Entenda como Funciona a tecnica Pomodoro</a>
            <a href='https://github.com/AlmeidaSNicolas' target='_blank' rel='noopener noreferrer' > Feito por Nicolas &copy; {new Date().getFullYear()} </a>
        </footer>
    )
}