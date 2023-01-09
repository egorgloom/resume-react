import InfoAboutUser from './components/InfoAboutUser';
import UserProjects from './components/UserProjects';
import Footer from './components/Footer'
import Fishing from './components/fishing';
function App() {
  return (
    <>
    
    <div className='user-cv'>
    <InfoAboutUser />
    <UserProjects />
    </div>
    <Footer />
    <Fishing />
    </>
  );
}

export default App;
