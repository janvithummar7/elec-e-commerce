import { useState } from "react";
import about from "../assets/about.jpeg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { stats, teamMembers } from "../data/about";
import Service from "../components/Service";

const About = () => {
  const [hoveredStateIndex, setHoveredStateIndex] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="flex flex-col items-center px-20 py-10">
      <div className="text-gray-500 items-left w-full mt-10">Home / About</div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-25">
        <div className="md:w-1/2 space-y-10">
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className="text-gray-700">
            Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace...
          </p>
          <p className="text-gray-700">
            Exclusive has more than 1 Million products to offer, growing at a very fast pace...
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore mollitia dolorum tempora nobis, maiores velit fugit eius provident reiciendis eum aspernatur nisi ipsum. Harum perspiciatis vero minima incidunt, totam cum!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus in, nisi voluptatibus doloribus, et, corporis saepe nobis sit rerum sint quasi repellendus eligendi laudantium deserunt natus doloremque veritatis! Consequuntur, accusamus?
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center mt-6">
          <img src={about} alt="Shopping" className="rounded-lg shadow-lg w-full" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full text-center py-20">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`p-10 border rounded-lg flex flex-col items-center shadow-lg transition duration-300 ${ hoveredStateIndex === index ? "bg-red-500 text-white" : "" }`}
            onMouseEnter={() => setHoveredStateIndex(index)}
            onMouseLeave={() => setHoveredStateIndex(null)}
          >
            <div className={`p-4 rounded-full ${ hoveredStateIndex === index ? "bg-red-300" : "bg-gray-300" }`}>
              <stat.Icon className={`text-8xl p-6 rounded-full ${ hoveredStateIndex === index ? "bg-white text-black" : "text-white bg-black" }`} />
            </div>
            <p className="text-4xl font-bold mt-8">{stat.value}</p>
            <p className="text-xl mt-3">{stat.label}</p>
          </div>
        ))}
      </div>

      <Slider {...settings} className="w-full mb-20">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center p-4">
            <img
                src={member.image}
                alt={member.name}
                className="rounded-lg shadow-lg w-full h-[550px] px-10 mx-auto"
            />
            <h3 className="text-xl font-bold mt-4">{member.name}</h3>
            <p>{member.role}</p>
            <div className="flex justify-center space-x-3 mt-2 text-gray-600">
              <FaTwitter className="text-xl cursor-pointer hover:text-blue-500" />
              <FaInstagram className="text-xl cursor-pointer hover:text-pink-500" />
              <FaLinkedin className="text-xl cursor-pointer hover:text-blue-700" />
            </div>
          </div>
        ))}
      </Slider>

      <div className="mt-10">
        <Service />
      </div>
      
    </div>
  );
};

export default About;
