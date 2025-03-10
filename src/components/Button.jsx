const Button = ({label,iconURL,backgroundColor,textColor,borderColor,fullWidth}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor} rounded-full`
          : `bg-coral-red rounded-full text-white border-coral-red hover:bg-transparent hover:text-coral-red hover:border-coral-red ${fullWidth && 'w-full'}`
      }`}
    >
      {label}
      {iconURL && <img src={iconURL} alt="icon" className="ml-2 rounded-full w-5 h-5 hover:bg-coral-red" />}
    </button>
  );
};

export default Button;
