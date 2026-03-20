import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from'./styles.module.css';
import { useState, useEffect } from 'react';


type AvailableThemes = 'dark' | 'light';

export default function Menu(){
    const [theme, setTheme] = useState<AvailableThemes>(() => {
        const storageTheme = localStorage.getItem('theme') as AvailableThemes || 'dark' ;
        return storageTheme
    });

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        event.preventDefault();

        setTheme(preveTheme =>{
            const nextTheme = preveTheme === 'dark' ? 'light' : 'dark';
            return nextTheme
        })
    }

    useEffect(() =>{
        console.log('theme mudou ', Date.now());
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme])    //executa apenas quando o valor de theme muda


    return(
       <nav className={styles.menu}>
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
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </a>
       </nav>
    )
}