import gavitational from '../assets/audio/gravitational_beep_fixed.mp3';

export function loadBeep() {
  const audio = new Audio(gavitational);
  audio.load();

  return () => {
    audio.currentTime = 0;
    audio.play().catch(error => console.log('Erro ao tocar áudio', error));
  };
}