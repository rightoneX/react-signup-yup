import logo from './logo.svg';
import './App.scss';
import LoginForm from './components/LoginForm';
import DropBox from './components/DropBox';
import LoginFormWithCheck from './components/LoginFormWithCheck';
import SignupForm from './components/SignupForm';

function App() {
  return (
    <div>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <SignupForm />
    </div>
  );
}

export default App;
