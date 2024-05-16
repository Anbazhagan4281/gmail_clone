import { IconChevronDown, IconClock, IconFile, IconInbox, IconPencil, IconQuestionMark, IconSend, IconStar } from "@tabler/icons-react";
import MenuItem from "./MenuItem";
import { useState } from "react";
import Lables from "./Lables";
import { useCompose } from '../ComposeContext';
import { OPEN_COMPOSE } from "../../composeReducer";
const menu = [
	{title: "Inbox", icon: <IconInbox color="#102d53" stroke={3} size={16}/>, count: 4},
	{title: "Starred", icon: <IconStar color="#102d53" stroke={3} size={16}/>,},
	{title: "Snoozed", icon: <IconClock color="#102d53" stroke={3} size={16}/>},
	{title: "Important", icon: <IconQuestionMark color="#102d53" stroke={3} size={16}/>},
	{title: "Send", icon: <IconSend color="#102d53" stroke={3} size={16}/>},
	{title: "Draft", icon: <IconFile color="#102d53" stroke={3} size={16}/>},
	{title: "More", icon: <IconChevronDown color="#102d53" stroke={3} size={16}/>},
]
	// <IconArrowBadgeRightFilled/>
const SideNav = () => {
  const { dispatch } = useCompose();
  const [selcted, setSelected] = useState(null)
  const handelSelected = (index) => setSelected(index)
  const openCompose = () =>{
    dispatch({ type: OPEN_COMPOSE })
  }
  return <div className="px-4 py-2 w-[200px] bg-whitelilac">
	<img src="src/assets/gmail_remove.png" height={38} width={100}></img>
	<div className="cursor-pointer p-3 w-[100px] rounded-lg flex justify-center items-center bg-blue-200" onClick={openCompose}><IconPencil size={18}/><div className="mx-2 text-sm">Compose</div></div>
	<div className="mt-8">
		{
			menu.map((el, index)=>(
				<MenuItem key={index} index={index} title={el.title} icon={el.icon} count={el.count} handelSelect={handelSelected} select={index===selcted}/>
			))
		}
	</div>
	<Lables/>
  </div>;
};

export default SideNav;
