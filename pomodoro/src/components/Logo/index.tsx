import { TimerIcon } from 'lucide-react';
import styles from'./styles.module.css';


export default function Logo(){
    return(
       <div className={styles.logo}>

        <a className={styles.logoLink} href=''>
            <TimerIcon  />
            <span>PomoNs</span>
        </a>

       </div>
    )
}