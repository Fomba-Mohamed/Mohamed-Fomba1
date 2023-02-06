import React from "react";
import AboutImg from "../assets/about-img.png";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Emmanuel started his academic carrer or journey in the two most prominent primary schools in Bo which are SLUM MANJAMA PRI_SCHOOL from Grade 1-4  and 5-6 at NEW LIFE PRE PRI_SCHOOL.
      He attended CHRIST THE KING COLLEGE (CKC) the best Secondry School in BO city in 2011, where he sat to BECE Exam in 2014 and was awarded beautiful result.
      He relocated to Freetown, the capital of Sierra Leone where he continued his academic struggle at ALBERT ACADEMY for short (A.A) in 2014 and took his West African Senior Sec_school (WASSCE) Exam and got requirement to University in 2018.
      He enrolled into The Univercity Of Management  Technology (UNIMTECH).
      Manuel is a man of excellent understanding, brave, generous and handsome in his own Way.
        He's sometimes Bashful and a reserved fellow.
        Modesty seldom reside in him.
      To crown it all, He's a loving and a caring guy.
          </p>
          <p className="pb-5">
            I am proficient in Back-end skills like WebDesign, React.js, Redux Tool
            Kit, Axios, Tailwind CSS, SaSS, Css3 and many more.
          </p>

          <p>In backend I know how to create Website, Express.js, an AI Architexturer, and many more</p>

          <p>
            In my lesure time I take some nap and check my social media handles.
            Where I talk about programming theory and build various projects.
          </p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
