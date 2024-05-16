import { IconCircleFilled, IconCaretDownFilled, IconHelpOctagon, IconSettings, IconGridDots } from "@tabler/icons-react";
import { useState } from "react";
import Avatar from "../SideNav/Avatar";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="p-2 px-4 flex justify-between relative h-[40px]">
      <div className="relative min-w-[60%]">
        <input
          type="text"
          className="p-3 w-full rounded-full border-none bg-porcelain relative"
          placeholder="Search mail and Chat"
        />
      </div>
      <div className="flex items-center gap-3">
        <button className="cursor-pointer px-5 rounded-full flex justify-end items-center border border-solid border-1 border-gray-200 py-2" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <IconCircleFilled
            className="inline-block mr-2"
            size={10}
            color="green"
          />
          Active
          <IconCaretDownFilled
            className="inline-block ml-2"
            size={10}
          />
        </button>
        <IconHelpOctagon className="ml-4 cursor-pointer" size={24} color="gray" />
        <IconSettings className="ml-4 cursor-pointer" size={24} color="gray" />
        <IconGridDots className="ml-4 cursor-pointer" size={24} color="gray" />
        <div className="relative">
          <button className="px-4 w-[150px] rounded-lg flex justify-between items-center">
            <img src="src/assets/gmail_remove.png" height={25}></img>
            <Avatar img={'src/assets/image_1.jpeg'}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
