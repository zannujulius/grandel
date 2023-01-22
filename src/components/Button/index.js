const Button = ({ text, bg, border, color, height }) => {
  return (
    <div
      className={`rounded-md px-4 py-2 border-2 ${bg ? bg : "bg-primary"}  ${
        border ? border : "border-primary"
      } font-normal text-center ${
        height ? height : "h-[45px]"
      } cursor-pointer flex flex-row items-center justify-center  text-md`}
    >
      <div className={`text-sm ${color ? color : "text-white "} font-light`}>
        {text}
      </div>
    </div>
  );
};

export default Button;
