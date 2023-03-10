import React from "react";

const Contact = () => {
  return (
    <section className="bg-secondery px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">
          Contact Me
        </h2>
        <p>
          H guys! Am Emmanuel, a Student of the University of Management and Technology
          we are currently learning on how to clone an existing Portfolio from the remote 
          repository to our local repository. Thank you
        </p>
        <p>
          I am currently open for a fulltime Frontend Developer role. If you need help or may
          want to discuss please feel free to email me or call me on:
        </p>

        <p className="py-2">
          <span className="font-bold">Email:</span> emmanabdulkamara001@gmail.com
        </p>
        <p className="py-2">
          <span className="font-bold">Phone:</span> +23233487119
      </div>
    </section>
  );
};

export default Contact;
