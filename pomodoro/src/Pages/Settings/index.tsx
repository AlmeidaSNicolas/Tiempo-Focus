import { SaveIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { DefaultInput } from '../../components/DefaultInput';
import  Heading  from '../../components/Heading'
import MainTemplate from '../../Templates/MainTemplate'
import { useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { showmessage } from '../../adappters/showMessage'
import { TaskActionsType } from '../../contexts/TaskContext/taskActions';



export function Settings() {
     const { state, dispatch } = useTaskContext();
     const workTimeInput = useRef<HTMLInputElement>(null);
     const shortBreakTimeInput = useRef<HTMLInputElement>(null);
     const longBreakTimeInput = useRef<HTMLInputElement>(null);

     function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
     e.preventDefault();
    
        const formError = []

        const workTime = Number(workTimeInput.current?.value);
        const shortBreakTime = Number(shortBreakTimeInput.current?.value);
        const longBreakTime = Number(longBreakTimeInput.current?.value);

   if(isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)){
    formError.push('Defina apenas numeros em TODOS os campos')
   }

     if(workTime < 1 || workTime > 99){
     formError.push('Digite um numero de 1 a 99 para foco')
   }

   if(shortBreakTime < 1 || shortBreakTime > 30){
    formError.push('Digite um numero de 1 a 30 para descanço curto')
   }

   if(longBreakTime <1 || longBreakTime > 60){
    formError.push('Digite um numero de 1 a 60 para descanço longo')
   }


   if(formError.length > 0 ){
    formError.forEach(error => {
        showmessage.error(error)
    });
    return;
   }


   dispatch({type: TaskActionsType.CHANGE_SETTINGS, payload: {
    workTime,
    shortBreakTime,
    longBreakTime,
   }});
   showmessage.succes('Configurações salvas')
   
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>Configurações</Heading>
      </Container>

      <Container>
        <p style={{ textAlign: 'center' }}>
          Modifique as configurações para tempo de foco, descanso curso e
          descanso longo.
        </p>
      </Container>

      <Container>
        <form onSubmit={handleSaveSettings}  action='' className='form'>
          <div className='formRow'>
            <DefaultInput id='workTime'
             labelText='Foco'
             ref={workTimeInput}
             defaultValue={state.config.workTime}
             type='number'
              />
          </div>
          <div className='formRow'>
            <DefaultInput id='shortBreakTime'
             labelText='Descanso curto' 
             ref={shortBreakTimeInput}
             defaultValue={state.config.shortBreakTime}
             type='number'
             />
          </div>
          <div className='formRow'>
            <DefaultInput id='longBreakTime'
             labelText='Descanso longo'
             ref={longBreakTimeInput}
             defaultValue={state.config.longBreakTime}
             type='number'
              />
          </div>
          <div className='formRow'>
            <DefaultButton
              icon={<SaveIcon />}
              aria-label='Salvar configurações'
              title='Salvar configurações'
            />
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}