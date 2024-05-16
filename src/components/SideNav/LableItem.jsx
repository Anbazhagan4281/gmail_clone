/* eslint-disable react/prop-types */
import { IconArrowBadgeRightFilled } from "@tabler/icons-react";
const LableItem = ({title, color}) => {
  return <div className="flex items-center py-2">
	<IconArrowBadgeRightFilled color={color} size={18}/>
	<div className="px-2 text-xs">{title}</div>
  </div>;
};

export default LableItem;
