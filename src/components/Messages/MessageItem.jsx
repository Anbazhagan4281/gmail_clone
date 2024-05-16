/* eslint-disable react/prop-types */
import { IconStar, IconArrowBadgeRight } from "@tabler/icons-react";
import { useState } from 'react';
const MessageItem = ({ sender, subject, body, createdAt}) => {
	const [selected, setSelected] = useState(true)
  const truncatedBody =  body.length + subject.length > 30 ? body.substring(0, 50) + '...' : body;

  return (
    <div className="flex justify-between w-full py-2 cursor-pointer" onClick={()=>setSelected(false)}>
      <div className="flex justify-center items-center gap-2">
        <input type="checkbox" className="form-checkbox h-3 w-3"></input>
        <IconStar size={18} color="gray" />
        <IconArrowBadgeRight color="gray" />
        <div className="mx-5">
          <div className={`text-sm w-[150px] ${selected ? 'font-semibold' : null}`}>{sender}</div>
        </div>
      </div>
      <div className="flex items-center justify-start w-[600px]">
        <div className="flex items-center justify-start">
          <div className={`text-sm text-start ${selected ? 'font-semibold' : null}`}>{subject}</div>
          <div>-</div>
          <div className="text-sm text-start">{truncatedBody}</div>
        </div>
      </div>
      <div className="text-xs">{createdAt}</div>
    </div>
  );
};

export default MessageItem;
