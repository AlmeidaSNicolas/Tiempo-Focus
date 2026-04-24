import { Link } from 'react-router';
import styles from './styles.module.css';

export default function Footer(){
    return(
        <footer className={styles.footer} >
            <Link to='AboutPomodoro'>Entenda como Funciona a tecnica Pomodoro</Link>
            <Link to='https://github.com/AlmeidaSNicolas' target='_blank' rel='noopener noreferrer' > Feito por Nicolas &copy; {new Date().getFullYear()} </Link>
        </footer>
    )
}