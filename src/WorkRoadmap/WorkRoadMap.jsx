import React from "react";
import Wand from "../assets/wand-magic-sparkles-solid.svg";
import Pencil from "../assets/pencil-solid.svg";
import Gear from "../assets/gears-solid.svg";
import Check from "../assets/circle-check-solid.svg";
import User from "../assets/circle-user-solid.svg";
import Store from "../assets/store-solid.svg";
import Users from "../assets/users-solid.svg";
import Brush from "../assets/paintbrush-solid.svg";
import "./WorkRoadMap.css";
function WorkRoadMap(props) {
  const work = [
    {
      logo: Wand,
      heading: "Choose Your Genre",
      text: "Select from a wide range of genres or create a custom blend.",
    },
    {
      logo: Pencil,
      heading: "Provide Key Details",
      text: "Input main characters, plot points, or themes to guide the AI.",
    },
    {
      logo: Gear,
      heading: "AI Generation",
      text: "Our advanced AI creates your book based on your inputs.",
    },
    {
      logo: Check,
      heading: "Review and Download",
      text: "Review your generated book and download in your preferred format.",
    },
  ];
  const roadmap = [
    {
      logo: User,
      heading: "Advanced Character Development",
      text: "AI-powered tool for creating deep, complex characters.",
    },
    {
      logo: Store,
      heading: "E-book Platform Integration",
      text: "Seamless publishing to popular e-book platforms.",
    },
    {
      logo: Users,
      heading: "Collaborative Writing",
      text: "Co-create stories with other authors or AI assistants.",
    },
    {
      logo: Brush,
      heading: "AI Cover Art Generation",
      text: "Create stunning book covers with AI-generated art.",
    },
  ];
  return (
    <section className="section mt-40 rounded-xl p-5 mx-20">
      <h3 className="text-textColor text-center text-3xl font-bold">
        {props.heading}
      </h3>
      <div className="mt-10 grid gap-5 grid-cols-1 md:grid-cols-2 items-center">
      {props.heading === "How It Works" &&
          work.map((item, index) => (
            <div key={index} className="flex items-center">
              <div className=" bg-gradient1  rounded-full p-4 mb-4">
                <img
                  src={item.logo}
                  alt="icon"
                  width={24}
                  height={24}
                  className="aspect-square"
                />
              </div>
              <div className="text-start m-2">
                <h3 className="text-lg font-bold p-1">{item.heading}</h3>
                <p className="p-1">{item.text}</p>
              </div>
            </div>
          ))}
          {props.heading === "Roadmap" &&
          roadmap.map((item, index) => (
            <div key={index} className="flex items-center">
              <div className=" bg-gradient1  rounded-full p-4 mb-4">
                <img
                  src={item.logo}
                  alt="icon"
                  width={24}
                  height={24}
                  className="aspect-square"
                />
              </div>
              <div className="text-start m-2">
                <h3 className="text-lg font-bold p-1">{item.heading}</h3>
                <p className="p-1">{item.text}</p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default WorkRoadMap;
