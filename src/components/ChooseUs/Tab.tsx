const Tab = ({ label, isActive, onClick }:{label:string, isActive:boolean, onClick: () => void}) => {
  return (
    <p
      onClick={onClick}
      className={`${
        isActive ? "text-crypOrange" : "text-text"
      } border-t-4 transition-all duration-500 ${
        isActive ? "border-crypOrange" : "border-Choosebg"
      } h-12 text-md whitespace-nowrap font-medium p-3 hover:text-crypOrange flex items-center cursor-pointer`}
    >
      {label}
    </p>
  );
};
export default Tab;
