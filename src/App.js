import InfoAboutUser from './components/InfoAboutUser';
import UserProjects from './components/UserProjects';
import Footer from './components/Footer'
function App() {
  return (
    <>
      <div className='user-cv'>
        <InfoAboutUser />
        <UserProjects />
      </div>
      <Footer />
    </>
  );
}

export default App;
