import Image from "next/image";
import styles from "./page.module.css";
import Header from "../Components/Navbar.js"
import Mainpage from "../Components/Homepage.js"
export default function Comp() {
  return (
  
 <div>
 <Header /> 
  <Mainpage />
 </div>
  );
}
