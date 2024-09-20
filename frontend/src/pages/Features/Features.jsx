import React from "react";
import Robot from "../../assets/robot-solid.svg";
import Book from "../../assets/book-solid.svg";
import Download from "../../assets/download-solid.svg";
import language from "../../assets/language-solid.svg";
import "./Features.css";
const feature = [
  {
    logo: Robot,
    heading: "AI-Powered Writing",
    text: "Generate high-quality content with advanced AI technology.",
  },
  {
    logo: Book,
    heading: "Custom Genres",
    text: "Create stories in any genre or blend multiple styles.",
  },
  {
    logo: Download,
    heading: "Instant Download",
    text: "Get your completed book in various formats instantly.",
  },
  {
    logo: language,
    heading: "Multilingual",
    text: "Generate content in multiple languages effortlessly.",
  },
];

function Features() {
  return (
    <section id="features" className="features mx-4 sm:mx-8 md:mx-12 lg:mx-16 mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {feature.map((item, index) => (
          <div key={index} className="feature m-1 flex flex-col items-center">
            <div className="flex justify-center items-center bg-gradient2 rounded-full p-4 mb-4">
              <img
                src={item.logo}
                alt="Feature icon"
                width={24}
                height={30}
                className="aspect-square"
              />
            </div>
            <div className="text-center mx-2">
              <h3 className="text-lg font-bold p-1 min-h-14">{item.heading}</h3>
              <p className="p-1">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
