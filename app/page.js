
import styles from "./page.module.css";
import Header from "../Components/Navbar.js"
import Mainpage from "../Components/Homepage.js"

import Appdes from "../Components/Apppage.js"
import Videopage from "../Components/Videopage.js"
import Cardpage1 from "../Components/Cardpage.js"
import Review from "../Components/Review.js"
import ComplianceSection from "@/Components/Security";
import Platform from "../Components/Platform.js"
import Chat from "../Components/Formpage"
import Footer from "../Components/Footerpage"
export default function Home() {
  return (
  
  <div className={styles.main}>
<Header /> 
<Mainpage />
<Videopage/>

 </div>
  );
}
