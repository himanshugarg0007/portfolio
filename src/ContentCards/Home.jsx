import './Card.css';
import { TypeAnimation } from 'react-type-animation';
import { Button } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HStack } from '@chakra-ui/react';
import { useState, useEffect } from 'react'
export default function Home() {
  window.__EMBEDDED_DATA__ = {
      client: {
        contextId: "f3790ea1-3fdc-4f5e-b291-d3c8a68648bb",
        authKey: "c0faJM9u"
      },
      customData: {
        botName: `Himanshu Garg's Agent`,
      },
      containerDiv: 'megachatbot',
    };

  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    if (document.querySelector('#root') !== null) {
      setIsRendered(true);
    }
    if (isRendered) {
    const script = document.createElement("script");

    script.src = "https://embeddable-chatbot.s3.ap-south-1.amazonaws.com/index.js";
    script.async = true;

    document.body.appendChild(script);
  }
    return () => {
      setIsRendered(false);
    };
  }, [isRendered]);

  
  return (
    <div id='home-main'>
      <div id='home-text'>
        <h1>Hi, My Name is Himanshu Garg And I am a</h1>
        <TypeAnimation
          sequence={[
            'Web Developer',
            1000,
            'Front-end Developer',
            1000,
            'Problem Solver',
            1000,
            'Full-stack Developer',
            1000
          ]}
          wrapper="span"
          speed={5}
          className='type-animation'
          repeat={Infinity}
        />
        <Button onClick={() => window.open('https://drive.google.com/file/d/112Q8OKj61G9IpcLvhKuKZkAlrny-wZFr/view?usp=drive_link')} style={{ marginTop: "20px", backgroundColor: "#6495ED", color: "white", marginBottom: "20px" }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = "blue"} onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#6495ED"}>Resume</Button>
        <HStack id='social' spacing={4} >
          <Button onClick={() => window.open('https://www.linkedin.com/in/himanshu-garg-68a972281/')} colorScheme='linkedin' leftIcon={<FaLinkedin />}>
            Linkdin
          </Button>
          <Button onClick={() => window.open('https://github.com/himanshugarg0007')} colorScheme='whatsapp' leftIcon={<FaGithub />}>
            Github
          </Button>
          <Button onClick={() => window.open('mailto:himanshugarg.official007@gmail.com')} colorScheme='blue' leftIcon={<img width="20" height="20" src="https://img.icons8.com/stickers/100/gmail-new.png" alt="gmail-new" />}>
            Gmail
          </Button>
        </HStack>
      </div>
      <div id="megachatbot"></div>
    </div>

  )
}
