import React from "react";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";

type ToggleIconProps = {
  isMenuOpen: boolean;
};

const ToggleIcon: React.FC<ToggleIconProps> = ({ isMenuOpen }) => {
  return (
    <>{isMenuOpen ? <SlArrowUp size={16} /> : <SlArrowDown size={16} />}</>
  );
};

export default ToggleIcon;
