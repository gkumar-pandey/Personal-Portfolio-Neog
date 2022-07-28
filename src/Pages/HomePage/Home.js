import React from "react";
import Header from "../../Components/Header/Header";
import img1 from "../../Assets/img1.svg";
import Aboutcard from "../../Components/AboutCard/Aboutcard";
import CardWithBtn from "../../Components/CardwithBtn/CardWithBtn";

function Home() {
  const name = "<Gautam Kumar Pandey/>";
  const bolgDis = "I also like to write blogs. Check out here 👇";
  const discription = `I'm Gautam a EEE undergrad who is interested in Web development and Competetive Programming. i have a passion for creating beautiful web application. i like to code and learn new tech`;
  const techDis =
    "I'm familiar with HTML5, CSS, JavaScript, ReactJs, C++, Python, Bootstrap, MaterialUI, Git,Github ";
  const projDis =
    "I'm still learning MERN Stack but on the basis of my learning i made some projects. Check Out 👇 My Projects";
  return (
    <div>
      <Header img={img1} />
      <div className="name">
        <h2>👋 Hii i'm {name} </h2>
        <p>Frontend Developer | Competerive Programmer</p>
      </div>
      <Aboutcard title="About" discription={discription} />
      <Aboutcard title="Technologies" discription={techDis} />
      <CardWithBtn
        title="Projects"
        discription={projDis}
        query="/project"
        qName="Projects"
      />
      <CardWithBtn
        title={"Blogs"}
        query="/blog"
        qName="Blogs"
        discription={bolgDis}
      />
    </div>
  );
}

export default Home;
