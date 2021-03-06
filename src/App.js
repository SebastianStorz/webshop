import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/signin';
import Layout from './components/layout';
import Main from './components/main';
import House from './components/house';
import { AuthProvider } from './contexts/authcontext';
import SignUp from './components/signup';
import RequireAuth from './components/requireauth';
import Account from './components/account';
import Rent from './components/rent';
import About from './components/about';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<SignIn />}></Route>
            <Route path="signup" element={<SignUp />}></Route>
            <Route path="home" element={<RequireAuth><Layout /></RequireAuth>}>
              <Route index element={<Main />}></Route>
              <Route path="account" element={<Account />}></Route>
              <Route path="about" element={<About />}></Route>
              <Route path="rent/:houseId" element={<Rent />}></Route>
              <Route path=":houseId" element={<House />}></Route>
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}


export default App;
