import './Card.css';
import DP from "../assets/DP.png";
export default function About() {
  return (
    <div id='about' style={{backgroundImage:`url(${"https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-031.jpg"})`}}>
      <div><img src={DP} alt="img" /></div>
      <div id='aboutText'>
        <h1 style={{fontSize:"40px", textDecoration:"underline",textDecorationColor:"blue"}}> About</h1>
        <p>Hi, I'm Himanshu Garg. I'm a passionate Front-End web developer and I'm always seeking new and exciting challenges to work on. I'm currently learning back-end.</p>
      </div>
    </div>
  )
}
