import './Card.css';
export default function Contact() {
  return (
    <div id='contact'>
      <h1 style={{fontSize:"30px", textDecoration:"underline",textDecorationColor:"blue"}}>Contact Me</h1>
      <div> 
        
        <h2 style={{fontWeight:"bold", textDecoration:"underline"}}>Get in touch</h2>
        <button style={{display:"flex",alignItems:"center",gap:"20px"}} onClick={() => window.location.href = 'mailto:himanshugarg.official007@gmail.com'}><img style={{width:"30px"}} src="https://img.icons8.com/ios-filled/50/000000/gmail.png" alt="gmail"/> himanshugarg.official007@gmail.com</button>
        <button style={{display:"flex",alignItems:"center",gap:"20px"}} onClick={() => window.location.href = 'tel:+919718020335'}><img style={{width:"30px"}} src="https://img.icons8.com/ios-filled/50/000000/phone.png" alt="phone"/> +91 9718020335</button>
        <button style={{display:"flex",alignItems:"center",gap:"20px"}} onClick={() => window.open('https://www.linkedin.com/in/himanshu-garg-68a972281/')}><img style={{width:"30px"}} src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="linkedin"/> Himanshu Garg</button>
        <button style={{display:"flex",alignItems:"center",gap:"20px"}} onClick={() => window.open('https://github.com/himanshugarg0007')}><img style={{width:"30px"}} src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="github"/> himanshugarg0007</button>
      </div>
    </div>
  )
}
