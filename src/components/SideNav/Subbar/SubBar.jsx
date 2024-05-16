import { IconArrowRightToArc, IconPlus, IconPuzzle } from "@tabler/icons-react";
const SubBar = () => {
  return <div className="px-2 h-[580px]">
	<div className="flex flex-col justify-center items-center gap-y-6 child:cursor-pointer">
		<img src="src/assets/calander.png" height={30} width={30} ></img>
		<img src="src/assets/task.png" height={30} width={30} ></img>
		<img src="src/assets/check.png" height={25} width={25} ></img>
		<img src="src/assets/contacts.png" height={25} width={25} ></img>
		<div className="text-gray-200">__</div>
		<IconPuzzle size={18}/>
		<IconPlus size={18}/>
		<div className="absolute bottom-2"><IconArrowRightToArc size={18}/></div>
	</div>
  </div>;
};

export default SubBar;
