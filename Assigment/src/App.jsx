import { useContext } from "react";
import UserDataContext from './Context/UserDataContext';
import LeftSidebar from "./LeftSideBar";
import MainContent from "./MainContent";
import styles from './App.module.css'

const App = () => {
  const { data } = useContext(UserDataContext);
  console.log(data)
  return (
    <div className={styles.container}>
      <LeftSidebar userName={data.user}/>
      <MainContent />
    </div>
  );
};

export default App;