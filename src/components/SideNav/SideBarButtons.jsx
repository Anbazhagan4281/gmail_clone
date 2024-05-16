/* eslint-disable react/prop-types */

const SideBarButtons = ({ title, icons, index, handelSelected, selected}) => {
  return (
    <div className="my-2">
      <button
        className={`rounded-full w-12 h-7 bg-[#ecf1f9] cursor-pointer border-0 ${selected ? 'bg-gray-200' : ''}`}
        onClick={() => {
          handelSelected(index)
        }}
      >
        {selected ? icons[1] : icons[0]}
      </button>
      <p className="title text-xs">{title}</p>
    </div>
  );
};

export default SideBarButtons;
