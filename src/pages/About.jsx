import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className=" text-white p-8">
      {/* Header Section */}
     

      {/* Introduction Section */}
      <section className="flex flex-col md:flex-row gap-8 items-center justify-center mb-16">
        <div className="flex-1">
          {/* Image Placeholder or Relevant Graphic */}
          <img
            src={assets.imgbanner}
            alt="About Us"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
        <div className="flex-1 text-left">
          <h2 className="text-3xl text-black font-semibold mb-4">Welcome to Ilyass Clothing</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Founded at the end of 2024, Ilyass Clothing started with a vision to
            bring style, quality, and comfort to your wardrobe. Our mission is
            to offer you the best in clothing, blending timeless designs with
            modern trends.
          </p>
          <p className="text-gray-400 leading-relaxed mb-4">
            Whether you're looking for casual wear, formal attire, or something
            in between, our collection is curated to suit every occasion and
            style preference. As we grow, our commitment remains the same: to
            serve you with passion and innovation.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Thank you for choosing us and being a part of our journey.
          </p>
        </div>
      </section>

      {/* Community Section */}
      <section className="text-center mb-16">
        <h3 className="text-2xl text-black font-semibold">Join Our Community</h3>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Follow us on social media and stay updated with our latest arrivals
          and offers!
        </p>
      </section>

      {/* Vision Section */}
      <section className="mb-16">
        <h2 className="text-3xl text-black font-bold text-center">Our Vision</h2>
        <p className="text-gray-400 mt-4 text-center max-w-3xl mx-auto leading-relaxed">
          At Ilyass Clothing, we aim to redefine fashion by creating sustainable,
          affordable, and stylish options for everyone. Our vision is to inspire
          confidence and individuality through clothing.
        </p>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-3xl text-black font-bold text-center">Our Team</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center mt-8">
          {[
            { name: "Ilyass", role: "Founder & CEO", img: "https://via.placeholder.com/200" },
            { name: "John Doe", role: "Creative Director", img: "https://via.placeholder.com/200" },
          ].map((member, index) => (
            <div key={index} className="flex-1 text-center">
              <img
                src={member.img}
                alt={member.name}
                className="rounded-full  w-40 h-40 mx-auto shadow-lg"
              />
              <h3 className="text-xl text-black font-semibold mt-4">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-16">
        <h2 className="text-3xl text-black font-bold text-center">Our Values</h2>
        <ul className="text-gray-400 mt-4 space-y-4 list-disc list-inside max-w-2xl mx-auto">
          <li>Commitment to quality and excellence</li>
          <li>Passion for innovation and creativity</li>
          <li>Respect for individuality and diversity</li>
          <li>Dedication to sustainability and ethical practices</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="text-center">
        <h3 className="text-2xl text-black font-semibold">Contact Us</h3>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Have questions? Reach out to us at
          <a
            href="mailto:support@ilyassclothing.com"
            className="text-blue-400 underline ml-1"
          >
            support@ilyassclothing.com
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default About;
