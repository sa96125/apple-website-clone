"use client";

import React, { useState } from "react";
import Link from "next/link";
import AppleLogo from "@/components/nav-bar/AppleLogo";
import useBlurStore from "@/utils/store";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isBlurred, toggleBlur, disableBlur } = useBlurStore();

  function handleArrowButton() {
    setIsMenuOpen(!isMenuOpen);
    toggleBlur();
  }

  return (
    <>
      {/* HEADER : Global links + TODO: Menubar */}
      <header className="nav-blur nav-border">
        {/* gloval nav */}
        <nav className="global-nav">
          <div className="global-nav-links">
            <AppleLogo />
          </div>
        </nav>

        {/* local nav */}
        <nav
          className={`local-nav ${
            isMenuOpen ? "max-h-48" : "delay-200 max-h-[56px]"
          }`}
        >
          {/* (desktop) */}
          <div className="local-nav-links z-40">
            <Link className="product-name" href="/">
              AirPods Max
            </Link>
            <Link href="/">개요</Link>
            <Link href="/">제품 사양</Link>
            <Link href="/">비교하기</Link>
            <button
              className="mobile-toggle-button"
              onClick={handleArrowButton}
            >
              {isMenuOpen ? <SlArrowUp size={16} /> : <SlArrowDown size={16} />}{" "}
            </button>
            <button className="linked-button">구입하기</button>
          </div>

          {/* (mobile) */}
          <div
            className={`local-mobile-links ${
              isMenuOpen
                ? "delay-300 translate-y-0 opacity-100"
                : "-translate-y-2 opacity-0"
            }`}
          >
            <Link href="/">개요</Link>
            <Link href="/">제품 사양</Link>
            <Link href="/">비교하기</Link>
          </div>
        </nav>
      </header>
    </>
  );
}

export default HomePage;
