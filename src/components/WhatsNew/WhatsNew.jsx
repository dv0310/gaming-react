import React from "react";
import { FaHeartbeat } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { IoLogoApple } from "react-icons/io";
import { IoLogoBuffer } from "react-icons/io";
import { IoLogoDribbble } from "react-icons/io";
import Game1 from "../../assets/game/game2.jpg";
import Game2 from "../../assets/game/game1.jpg";
import Game3 from "../../assets/game/game3.jpg";
import { FaWindows } from "react-icons/fa";
import WhatsNewCard from "./WhatsNewCard";

const WhatsNewData = [
  {
    image: Game1,
    title:
      "Resident EVil Exploration of the open-world design and its impact on gameplay",
    description:
      "Guide to surviving the game’s toughest bosses Exploration of the open-world design and its impact on gameplay Tips for leveling up and choosing the best weapons. Overview of the game’s lore and world-building",
    icon: <FaWindows />,
  },
  {
    image: Game2,
    title:
      "PUBG (PlayerUnknown's Battlegrounds)",
    description:
      "A comprehensive guide to PUBG, including its gameplay mechanics, battle royale format, and overall appeal.An introduction to the different game modes in PUBG: Classic, Arcade, EvoGround, and Payload.A history of PUBG's development and its impact on the battle royale genre.",
    icon: <FaWindows />,
  },
  {
    image: Game3,
    title:
      "Elden Ring",
    description:
      "An overview of the game's lore, setting, and the collaboration between Hidetaka Miyazaki and George R.R. Martin.A deep dive into the game’s open world, exploring the different regions, environments, and the unique art style.",
    icon: <FaWindows />,
  },
];

const WhatsNew = () => {
  return (
    <>
      <div className="py-10 bg-primary text-white">
        <div className="container">
          {/* Header section */}
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold">What's New</h1>
            <div className="flex gap-4 items-center">
              <div className="flex gap-4 items-center">
                <IoLogoAndroid className="text-xl cursor-pointer" />
                <IoLogoApple className="text-xl cursor-pointer" />
                <IoLogoBuffer className="text-xl cursor-pointer" />
                <IoLogoDribbble className="text-xl cursor-pointer" />
              </div>
              <button className="bg-gray-400/50 text-white rounded-xl px-4 py-2">
                Explore
              </button>
            </div>
          </div>

          {/* What's New Card section */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 my-8 ">
            {/* Card section */}
            <div className="col-span-3 grid grid-cols-1 gap-6">
              {WhatsNewData.map((data, index) => (
                <WhatsNewCard key={index} {...data} />
              ))}
            </div>
            {/* subsribe  newsletter section */}
            <div className="col-span-1">
              <div className="bg-gray-400/10 rounded-xl p-4 space-y-3">
                <FaHeartbeat className="bg-orange-400/30 p-2 rounded-lg inline-block h-[40px] w-[40px]" />
                <h1 className="text-2xl  font-semibold">
                  Subscribe To Our Newletter
                </h1>
                <p className="text-sm text-white/70 line-clamp-2">
                  Email
                </p>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-400/20 px-4 py-2 rounded-lg w-full"
                  placeholder="Enter Your Email"
                />
                <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-xl px-4 py-2">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsNew;
