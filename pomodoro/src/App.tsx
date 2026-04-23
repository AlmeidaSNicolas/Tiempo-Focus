
import { RouterProvider } from 'react-router';

import { MessagesContainer } from './components/MessagesContainer';

import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';

import './styles/global.css';
import './styles/theme.css';
import { router } from './router';

export default function App() {
    return (
      <TaskContextProvider>
        <MessagesContainer>
          <RouterProvider router={router} />
          
        </MessagesContainer>        
      </TaskContextProvider>
    )
}