import "./About.css";
import image from "../Images/program.jfif";
import { FaPlayCircle } from "react-icons/fa";
import {motion} from 'framer-motion'

const About = ({ setPlay }) => {
  return (
    <motion.div 
    initial={{opacity:0, translateY:-100}}
    whileInView={{opacity:1, translateY:0, transitionDelay:2}}
    whileFocus={{opacity:1, translateY:0, transitionDelay:2}}
    className="about">
      <motion.div 
       initial={{opacity:0, translateY:-100}}
       whileInView={{opacity:1, translateY:0, transitionDelay:2}}
       whileFocus={{opacity:1, translateY:0, transitionDelay:2}}
      className="about-left">
        <img src={image} alt="" />
        <FaPlayCircle onClick={()=>{
          setPlay(true)
        }} className='play'/>
      </motion.div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY </h3>
        <h2>Nurturing Tomorrow's Leader Today </h2>
        <motion.p
        initial={{opacity:0, translateY:-100}}
        whileInView={{opacity:1, translateY:0, transitionDelay:2}}
        whileFocus={{opacity:1, translateY:0, transitionDelay:2}}>
          Embark on a transformative educational jourmey with our university's
          comprehensive education programs. Our cutting-edge curriculum is
          designed to empower students with the knowledge, skills, and
          experiences needed to excel in the dynamic field of education.
        </motion.p>
        <motion.p
        initial={{opacity:0, translateY:-100}}
        whileInView={{opacity:1, translateY:0, transitionDelay:2}}
        whileFocus={{opacity:1, translateY:0, transitionDelay:2}}>
          With a focus on innovation, hands-on learning, and personalized
          mentorship, our programs prepare aspiring educators to make a
          meaningful impact in classrooms, schools, and communities.
        </motion.p>
        <motion.p
        initial={{opacity:0, y:-100}}
        whileInView={{opacity:1, y:0, transition:0.4}}
        whileFocus={{opacity:1, y:0, transition:0.4}}>
          Whether you aspire to become a teacher, administrator, counselor, or
          educational leader, our diverse range of programs offers the perfect
          pathway to achieve your goals and unlock your full potiental in
          shaping the future of education.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default About;
