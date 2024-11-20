import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './SignIn';
import ForgotPassword from './ForgotPassword';
import SavePassword from "./SavePassword"
import ChooseRole from "./ChooseRole"
import CreateAccount from "./CreateAccount"
import Bd from "./BusinessDeatils"
import Payment1 from "./PaymentBusiness"
import InviteEmploye from "./InviteEmployee"
import AddProducts from "./AddProducts"
import Review1 from  "./BusinessReviewandConfirm"
import BusinessDashboard from  "./BusinessDashboard"
import UserDash from  "./UserDashboard"
import ProfilePage from './ProfilePage';
import BusinessDetail from './BusinessDetail';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path ="/SavePassword" element ={<SavePassword/>} />
        <Route path ="/ChooseRole" element ={<ChooseRole/>} />
        <Route path ="/CreateAccount" element ={<CreateAccount/>} />
        <Route path ="/BusinessDetails" element ={<Bd/>} />
        <Route path ="/PaymentBusiness" element ={<Payment1/>} />
        <Route path ="/InviteEmployee" element ={<InviteEmploye/>} />
        <Route path ="/AddProducts" element ={<AddProducts/>} />
        <Route path ="/BusinessReviewandConfirm" element ={<Review1/>} />
        <Route path ="/BusinessDashboard" element ={<BusinessDashboard/>} />
        <Route path ="/UserDashboard" element ={<UserDash/>} />
        <Route path ="/ProfilePage" element ={<ProfilePage/>} />
        <Route path ="/BusinessDetail" element ={<BusinessDetail/>} />
      </Routes>
    </Router>
  );
}

export default App;
