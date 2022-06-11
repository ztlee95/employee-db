import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Routes} from 'react-router';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent/>
        <Routes> 
          <Route path="/" element={<ListEmployeeComponent/>}/>
          <Route path="/employees" element={<ListEmployeeComponent/>}/>
        </Routes>
        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
