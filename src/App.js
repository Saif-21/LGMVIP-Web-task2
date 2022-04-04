import UserDataState from './context/UserDataState';
import './App.css';

import Home from './components/pages/Home';

const App = () => {
  return (
    <>
      <UserDataState>
        <Home />
      </UserDataState>
    </>
  );
}

export default App;
