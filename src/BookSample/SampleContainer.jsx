import React from "react";
import Paradox from "../assets/paradox.png";
import Echoes from "../assets/ecos.png";
import Mist from "../assets/mist.png";
import "./SampleContainer.css";

function SampleContainer() {
  const sample = [
    {
      imgSample: Paradox,
      heading: "Science Fiction",
      text: "As Dr. Elara stepped through the shimmering portal, she knew there was no turning back. The fate of two universes now rested in her hands...",
    },
    {
      imgSample: Mist,
      heading: "Mystery",
      text: "The old lighthouse stood silent, its beacon long extinguished. But on foggy nights, some swore they could still see its ghostly light...",
    },
    {
      imgSample: Echoes,
      heading: "Fantasy",
      text: "The ancient prophecy spoke of a child born with starlight in their eyes. As the comet blazed overhead, the kingdom held its breath...",
    },
  ];

  return (
    <div className="sample-container mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
      {sample.map((item, index) => (
        <div
          key={index}
          className={`book-sample text-center rounded-xl ${
            index === 2 && "md:col-span-2 lg:col-span-1"
          }`}
        >
          <div className="flex flex-col text-center items-center">
            <div className="rounded-full p-4 mb-4">
              <img
                src={item.imgSample}
                alt="Image Sample"
                width={200}
                height={300}
                className="aspect-auto rounded-xl"
              />
            </div>
            <div className="m-2 w-4/5">
              <h3 className="text-lg font-bold p-1">{item.heading}</h3>
              <q className="p-1 text-textSecondary block">{item.text}</q>
              <div className="mt-2">
                <a
                  href="#"
                  className="text-accentColor hover:text-textColor transition-colors duration-500 ease"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SampleContainer;
