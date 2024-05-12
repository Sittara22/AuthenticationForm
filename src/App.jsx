import React, { useContext } from 'react'; // Import useContext
import UserContextProvider from './components/Context/UserContextProvider';
import Profile from './components/Profile';
import UserContext from './components/Context/context';
import AuthForm from './components/authForm'; // Correct import statement

function App() {
  return (
    <UserContextProvider>
      <MainContent />
    </UserContextProvider>
  );
}
//Conditional Rendering 
function MainContent() {
  const { login,logOut } = useContext(UserContext);
  console.log(logOut);
  return login && !logOut ? <Profile /> : <AuthForm />;
}
export default App;
