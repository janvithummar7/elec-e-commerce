import person1 from "../assets/OurTeam/person1.png";
import person2 from "../assets/OurTeam/person2.png";
import person3 from "../assets/OurTeam/person3.png";
import { CiDollar, CiShop } from "react-icons/ci";
import { TbUsers } from "react-icons/tb";
import { FaSackDollar } from "react-icons/fa6";

export const teamMembers = [
    { name: "Tom Cruise", role: "Founder & Chairman", image: person1 },
    { name: "Emma Watson", role: "Managing Director", image: person2 },
    { name: "Will Smith", role: "Product Designer", image: person3 },
    { name: "Chris Evans", role: "Marketing Head", image: person1 },
    { name: "Scarlett Johansson", role: "HR Manager", image: person2 }
  ];

 export const stats = [
    { Icon: CiShop, value: "10.5k", label: "Sellers active on our site" },
    { Icon: CiDollar, value: "33k", label: "Monthly Product Sale" },
    { Icon: TbUsers, value: "45.5k", label: "Customers active on our site" },
    { Icon: FaSackDollar, value: "25k", label: "Annual gross sale on our site" },
  ];