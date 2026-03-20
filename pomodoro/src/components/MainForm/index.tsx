import { DefaultInput } from "../DefaultInput"  
import { DefaultButton } from "../DefaultButton"
import { Cycles } from "../Cycles"
import { PlayCircleIcon } from "lucide-react"

export function MainForm(){
    return(
    <>   
          < form className='form' action=''>
                        <div className='formRow'>
                            <DefaultInput labelText= 'Tarefa' id='input' type='text' placeholder='Digite Algo'/>
                        </div>
        
                        <div className='formRow'>
                           <p>Lorem ipsum dolor sit amet.</p>
                        </div>
        
                        <div className='formRow'>
                          <Cycles />
                        </div>
        
                        <div className='formRow'>
                           <DefaultButton icon={<PlayCircleIcon />} />
                        </div>
                    </form>
    </>                
    )
}