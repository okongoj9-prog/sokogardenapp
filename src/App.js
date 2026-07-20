
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Getproducts from './Components/Getproducts';
import Addproducts from './Components/Addproducts';
import Notfound from './Components/Notfound';
import 'bootstrap/dist/css/bootstrap.min.css';
import Makepayment from './Components/Makepayment';
function App() {
  return(
    <Router>
      <div className='App'>
        <header className='App-header'>Sokogarden Buy & Sell Products</header>


        <nav>
          <Link to='/' className='links'>Getproduct</Link>
          <Link to='/Signup' className='links'>Signup</Link>
          <Link to='/Signin' className='links'>Signin</Link>
          <Link to='/Addproducts' className='links'>Addproduct</Link>
        </nav>

        <Routes>
          <Route path='/Signup' element={(<Signup />)} />
          <Route path='/Signin' element={(<Signin />)} />
          <Route path='/' element={(<Getproducts />)} />
          <Route path='/Addproducts' element={(<Addproducts />)} />
          <Route path='/makepayment' element={(<Makepayment />)} />
          <Route path='*' element={(<Notfound />)} />
        </Routes>
      </div>
    </Router>
  )
}
export default App;
