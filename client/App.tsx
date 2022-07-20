import { Routes, Route } from 'react-router-dom';
import MainContainer from './containers/MainContainer';
import SessionContainer from './containers/SessionContainer';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainContainer />} />
      <Route path="/login" element={<LoginContainer />} />
      <Route path="/workout" element={<SessionContainer />} />
      <Route path="/history" element={<HistoryContainer />} />
    </Routes>
  );
}

export default App;
