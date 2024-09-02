
import styles from "./page.module.css";
import Header from "../Components/Navbar.js"
import Mainpage from "../Components/Homepage.js"


import Videopage from "../Components/Videopage.js"

export default function Home() {
  return (
  
  <div className={styles.main}>
<Header /> 
<Mainpage />
<Videopage/>

 </div>
  );
}
