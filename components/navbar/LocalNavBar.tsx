import Link from "next/link";
import React from "react";
import ToggleIcon from "./ToggleIcon";

function LocalNavBar() {
  const [isMobileOpen, setIsMenuOpen] = React.useState<boolean>(false);

  function handleArrowButton() {
    setIsMenuOpen(!isMobileOpen);
  }

  return (
    <nav className={`local-nav ${isMobileOpen ? "max-h-48" : "delay-200 max-h-[56px]"}`}>
      {/* desktop */}
      <div className="local-nav-links z-40">
        <Link className="product-name" href="/">AirPods Max</Link>
        <Link href="/">개요</Link>
        <Link href="/">제품 사양</Link>
        <Link href="/">비교하기</Link>
        <button className="mobile-toggle-button" onClick={handleArrowButton}>
          <ToggleIcon isMenuOpen={isMobileOpen} />
        </button>
        <button className="linked-button">구입하기</button>
      </div>

      {/* mobile */}
      <div className={`local-mobile-links ${isMobileOpen ? "delay-300 translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}`}>
        <Link href="/">개요</Link>
        <Link href="/">제품 사양</Link>
        <Link href="/">비교하기</Link>
      </div>
    </nav>
  );
}

export default LocalNavBar;
