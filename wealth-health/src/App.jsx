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
import UserAuth from './pages/viewCurrentEmployees/userAuth/UserAuth'
import SignInAuth from './pages/createEmployee/signinAuth/SignInAuth'

export default function App() {

  // rendering router component
  return (
    <Router>
      <Header />
      <Routes>
        <Route 
          path="/create-employee" 
          element={
            <SignInAuth>
              <CreateEmployee/>
            </SignInAuth>
          }
        />
        <Route 
          path="/current-employees" 
          element={
            <UserAuth>
              <ViewCurrentEmployees/>
            </UserAuth>
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