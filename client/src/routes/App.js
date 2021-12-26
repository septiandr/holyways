import Landing from '../pages/landing/landing'
import Profile from '../pages/profile/profile';
import DetailDonate from '../pages/detail-donate/detail-donate';
import MyRaiseFund from '../pages/my-raise-fund/my-raiseFund';
import ViewFunds from '../pages/view-funds/view-funds';
import FormFund from '../pages/form-fund/form-fund';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import { UserContext } from "../context/userContext";
import { useContext } from 'react';
import PrivateRoute from '../components/privateroute/PrivateRoute';

function App() {
  const [state, dispatch] = useContext(UserContext);
  console.log(state)
  sessionStorage.setItem('user',JSON.stringify(state.user))
  sessionStorage.setItem('isLogin',JSON.stringify(state.isLogin))
  return (
    <Switch>
        <Route exact path ="/" component={Landing} />
        <PrivateRoute exact path  ="/profile" component={Profile}/>
        <PrivateRoute exact path  ="/detail-donate/:id" component={DetailDonate}/>
        <PrivateRoute exact path  ="/my-raise-fund" component={MyRaiseFund}/>
        <PrivateRoute exact path  ="/view-funds/:id" component={ViewFunds}/>
        <PrivateRoute exact path  ="/form-fund" component={FormFund}/>
    </Switch>
  );
}

export default App;
