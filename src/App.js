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
import ComingSoonPage from './CommingSoon';
import UserHome from './UserHome'; // Import the UserHome component
import { TermsAndConditions } from './TermsandConditions';
import QRCodePage from './Qrcode';
import WalletPage from './Wallet';
import NotificationScreen from './Notifications';
import HelpScreen from './Help';
import FeedbackScreen from './Feedback';
import FAQScreen from './FAQ';
import SettingsScreen from './Settings';
import WelcomePage from './Welcome';
import SplashScreen from './Splashscreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/SavePassword" element={<SavePassword/>} />
        <Route path="/ChooseRole" element={<ChooseRole/>} />
        <Route path="/CreateAccount" element={<CreateAccount/>} />
        <Route path="/BusinessDetails" element={<Bd/>} />
        <Route path="/PaymentBusiness" element={<Payment1/>} />
        <Route path="/InviteEmployee" element={<InviteEmploye/>} />
        <Route path="/AddProducts" element={<AddProducts/>} />
        <Route path="/BusinessReviewandConfirm" element={<Review1/>} />
        <Route path="/BusinessDashboard" element={<BusinessDashboard/>} />
        
        <Route path="/UserDashboard" element={<UserDash />}>
          <Route index element={<UserHome />} />
          <Route path="TermsandConditions" element={<TermsAndConditions />} />
          <Route path="QRCode" element={<QRCodePage />} />
          <Route path="wallet" element={<WalletPage />} />
          <Route path="notifications" element={<NotificationScreen />} />
          <Route path="help" element={<HelpScreen />} />
          <Route path="feedback" element={<FeedbackScreen />} />
          <Route path="faqs" element={<FAQScreen />} />
          <Route path="settings" element={<SettingsScreen />} />
        </Route>
        
        <Route path="/ProfilePage" element={<ProfilePage/>} />
        <Route path="/BusinessDetail" element={<BusinessDetail/>} />
        <Route path="/" element={<ComingSoonPage/>} />
        <Route path="/Welcome" element={<WelcomePage/>} />
        <Route path="/splashscreen" element={<SplashScreen/>} />


      </Routes>
    </Router>
  );
}

export default App;