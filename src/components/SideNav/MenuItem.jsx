/* eslint-disable react/prop-types */
const MenuItem = ({title, icon, count, index, handelSelect, select}) => {
  return <div className={`flex justify-between p-2 my-2 rounded-full cursor-pointer ${select ? 'bg-hawkesblue' : null}`} onClick={()=>handelSelect(index)}>
	<div className="flex justify-center items-center">
		{icon}
		<div className={`px-4 text-xs text-bluezodiac ${select ? 'font-semibold': null}`}>{title}</div>
	</div>
	<div className="px-4 text-xs">{count ?? null}</div>
  </div>;
};

export default MenuItem;
