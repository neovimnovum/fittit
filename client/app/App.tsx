import { Routes, Route } from 'react-router-dom';
import StartPage from '../features/startPage/StartPage';
import LoginContainer from '../features/users/LoginContainer';
import Programs from '../features/programs/Programs';
import Session from '../features/session/Session';

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/login" element={<LoginContainer />} />
      <Route path="/workout" element={<Session />} />
      <Route path="/history" element={<Programs />} />
    </Routes>
  );
}

export default App;
