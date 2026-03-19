import { TimerIcon } from 'lucide-react';
import styles from'./styles.module.css';


export default function Logo(){
    return(
       <div className={styles.logo}>

        <a className={styles.logoLink} href=''>
            <TimerIcon  />
            <span>Tiempo Focus</span>
        </a>

       </div>
    )
}