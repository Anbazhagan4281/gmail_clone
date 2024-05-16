/* eslint-disable react/jsx-key */
import SideBarButtons from "./SideBarButtons";
import Avatar from "./Avatar";
import { useState } from "react";
import {
  IconMenu2,
  IconMail,
  IconMailFilled,
  IconMessage,
  IconMessageFilled,
  IconUsersGroup,
  IconVideo,
} from "@tabler/icons-react";

const menus = [
  { title: "Mail", icons: [<IconMail size={18} color="#031e47" />, <IconMailFilled size={18} color="#031e47" />] },
  { title: "Chat", icons: [<IconMessage size={18} color="#031e47" />, <IconMessageFilled size={18} color="#031e47" />] },
  { title: "Speces", icons: [<IconUsersGroup size={18} color="#031e47" />, <IconUsersGroup size={18} color="#031e47" />] },
  { title: "Meet", icons: [<IconVideo size={18} color="#031e47" />, <IconVideo size={18} color="#031e47" />] },
];

const images = ['src/assets/image_1.jpeg', 'src/assets/image_2.jpeg', 'src/assets/image_3.jpeg']

const SideBar = () => {
  const [isSelected, setSelected] = useState(null)
  const handelSelect = (item) => setSelected(item)
  return (
    <div className="h-screen bg-[#ecf1f9] flex flex-col items-center text-center justify-between">
      <div className="p-2">
        <IconMenu2 size={22} color="#031e47"/>
        <div className="mt-4">
          {menus.map((el, index) => (
            <SideBarButtons key={index} title={el.title} icons={el.icons} index={index} handelSelected={handelSelect} selected={isSelected===index} />
          ))}
        </div>
      </div>
      <div className="space-y-4">
        {images.map((el, index) => (
          <Avatar key={index} img={el}/>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
