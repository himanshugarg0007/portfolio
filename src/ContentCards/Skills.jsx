import './Card.css';
import js from '../assets/js.png';
import react from '../assets/react.png';
import git from '../assets/git.png'
export default function Skills() {
  return (
    <div id="skills-section">
      <h1 style={{ textDecoration:"underline",textDecorationColor:"blue"}}>Techstack</h1>

      <div id="skills-list">
        <div className="skill">
          
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="240" height="240" viewBox="0 0 48 48">
            <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
          </svg>
          <h3>HTML 5</h3>
          <p>I have a strong understanding of HTML5 and I am able to create clean, semantic, and accessible HTML markup.</p>
        </div>

        <div className="skill">
          
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="240" height="240" viewBox="0 0 48 48">
            <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
          </svg>
          <h3>CSS</h3>
          <p>I am proficient in CSS3 and I am able to write well-structured, maintainable, and responsive CSS code.</p>
        </div>

        <div className="skill">
          <img src={js} alt="javascript logo" />
          <h3>JavaScript</h3>
          <p style={{marginTop:"45px"}}>I am a skilled JavaScript developer and I am able to write clean, modular, and maintainable JavaScript code.</p>
        </div>

        <div className="skill">
          <img src={react} alt="react logo" />
          <h3>React</h3>
          <p>I am a proficient React developer and I am able to build complex and performant React applications.</p>
        </div>

        <div className="skill">
          <img src={git} alt="git logo" />
          <h3>Git</h3>
          <p>I am proficient in Git and I am able to use it to version control code.</p>
        </div>
        <div>
          <img style={{width:"250px"}} src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/visual-studio-code-icon.png" alt="" />
          <h3>Visual Studio</h3>
          <p>I am a skilled Visual Studio developer and I am able to use it to build and debug code.</p>
        </div>
      </div>
    </div>
  );
}

