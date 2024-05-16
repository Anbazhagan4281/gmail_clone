import { IconChevronDown, IconPlus } from "@tabler/icons-react";
import LableItem from "./LableItem";

const lables = [
	{title: "Clients", color: "#a3c6f9"},
	{title: "Personal", color: "#a17cbd"},
	{title: "Project Clover", color: "#facfa7"},
	{title: "Clients", color: "#e37993"},
	{title: "Personal", color: "#a6c7fa"}
]
const Lables = () => {
  return <div>
	<div className="flex justify-between items-center">
		<div className="text-sm font-semibold">Lables</div>
		<div className="px-4"><IconPlus size={18}/></div>
	</div>
	{
		lables.map((el, index)=>(
			<LableItem key={index} title={el.title} color={el.color}/>
		))
	}
	<div className="text-xs flex py-2">
		<IconChevronDown size={18}/>
		<div className="px-2">More</div>
		</div>
  </div>;
};

export default Lables;
