import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from'./styles.module.css';
import { useState } from 'react';

type AvailableThemes = 'dark' | 'light';

export default function Menu(){

    const [theme, setTheme] = useState<AvailableThemes>('dark');

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        event.preventDefault();
        console.log('clicado')

        setTheme(preveTheme =>{
            const nextTheme = preveTheme === 'dark' ? 'light' : 'dark';
            return nextTheme
        })
    }

    return(
       <nav className={styles.menu}>
        <h1>{theme}</h1>
        <a className={styles.menuLink} href='' aria-label='Ir para a Home' title='Ir para a Home'>
            <HouseIcon  />
        </a>

        <a className={styles.menuLink} href='' aria-label='Ver Historico' title='Ver Historico'>
            <HistoryIcon  />
        </a>

        <a className={styles.menuLink} href='' aria-label='Ir para as Configurações' title='Ir para as Configurações'>
            <SettingsIcon  />
        </a>

        <a className={styles.menuLink} href='#' aria-label='Trocar Tema' title='Trocar Tema' onClick={handleThemeChange}>
            <SunIcon  />
        </a>

       </nav>
    )
}