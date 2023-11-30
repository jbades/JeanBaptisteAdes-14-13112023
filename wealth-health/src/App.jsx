import React from 'react'
import { 
    BrowserRouter as Router,
    Routes,
    Route, 
} from 'react-router-dom'
import Header from './layouts/header/Header'
import Error from './pages/404NotFound/404NotFound'
import Footer from './layouts/footer/Footer'
import ViewCurrentEmployees from './pages/viewCurrentEmployees/ViewCurrentEmployees'
import CreateEmployee from './pages/createEmployee/CreateEmployee'

export default function App() {

  // rendering router component
  return (
    <Router>
      <Header />
      <Routes>
        <Route 
          path="/create-employee" 
          element={
            <CreateEmployee/>
          }
        />
        <Route 
          path="/current-employees" 
          element={
            <ViewCurrentEmployees/>
          } 
        />
        <Route 
          path="*" 
          element={<Error/>} 
        />
      </Routes>
      <Footer />  
    </Router>
  );
}