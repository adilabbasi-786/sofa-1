"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const Header = ({ data }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState(""); // State to track active section

  // Function to handle link clicks
  const handleNavigation = (e, id) => {
    e.preventDefault(); // Prevent default anchor behavior
    setActiveSection(id); // Set the clicked section as active

    if (pathname === "/") {
      // If on the home page, scroll to the section
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // If not on the home page, navigate to home with the id as a query parameter
      router.push(`/?scrollTo=${id}`);
    }
  };

  // Effect to handle scrolling when coming from another page
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const scrollToId = urlParams.get("scrollTo");

    if (scrollToId) {
      const element = document.getElementById(scrollToId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveSection(scrollToId); // Set the section as active after scrolling
      }
    }
  }, []);

  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <a href="/" className="logo d-flex align-items-center me-auto">
          <h1 className="sitename">{data?.logo_name}</h1>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a
                href="/"
                className={pathname === "/" && !activeSection ? "active" : ""}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleNavigation(e, "contact")}
                className={activeSection === "contact" ? "active" : ""}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/allproducts"
                className={pathname === "/allproducts" ? "active" : ""}
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#best"
                onClick={(e) => handleNavigation(e, "best")}
                className={activeSection === "best" ? "active" : ""}
              >
                Best Selling
              </a>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;
