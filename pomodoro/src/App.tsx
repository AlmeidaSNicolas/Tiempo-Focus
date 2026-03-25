import  Home  from './Pages/Home';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';

import './styles/global.css';
import './styles/theme.css';


export default function App() {
    return (
      <TaskContextProvider>
        <Home  />
      </TaskContextProvider>
    )
}