import { TimerIcon } from 'lucide-react';
import styles from'./styles.module.css';
import { Link } from 'react-router';


export default function Logo(){
    return(
       <div className={styles.logo}>

        <Link className={styles.logoLink} to=''>
            <TimerIcon  />
            <span>Tiempo Focus</span>
        </Link>

       </div>
    )
}