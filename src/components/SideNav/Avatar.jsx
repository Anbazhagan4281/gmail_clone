/* eslint-disable react/prop-types */
const Avatar = ({ img }) => {
  return (
    <div className="p-1">
      <img src={img} className="rounded-full" alt="Avatar" width={28} height={28} />
    </div>
  );
};

export default Avatar;
