import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import Login from './pages/Login';
import { Signup } from './pages/Signup';
import { AuthContext, AuthProvider } from './context/AuthContext';
import AppShell from './AppShell';
import { Dashboard } from './pages/Dashboard';
import { FetchProvider } from './context/FetchContext';
import AddPrescription from './pages/AddPrescription';

const AuthenticatedRoute = ({ children, ...rest }) => {
  const authContext = useContext(AuthContext)
  return (
    <Route {...rest} render={() =>
      authContext.isAuthenticated() ? (
        <AppShell>
          {children}
        </AppShell>
      ) : (
          <Redirect to="/" />
        )} />
  )
}
const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <AuthenticatedRoute path="/dashboard">
        <Dashboard />
      </AuthenticatedRoute>
      <AuthenticatedRoute path="/add-prescription">
        <AddPrescription />
      </AuthenticatedRoute>
    </Switch>
  )
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <FetchProvider>
          <div className="bg-gray-100">
            <AppRoutes />
          </div>
        </FetchProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
