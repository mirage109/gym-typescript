import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@assets/Logo.png";

type Props = {};

const Navbar = (props: Props) => {
  const flexBetween = "flex justify-between items-center";
  return <nav>
    <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>

    </div>
  </nav>;
};

export default Navbar;
