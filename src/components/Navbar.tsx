import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header>
      <nav
        style={{
          color: "white",
          background: "black",
          textAlign: "center",
          padding: 16,
          height: 120,
        }}
      >
        Navigasi Punten
      </nav>
    </header>
  );
};

export default Navbar;
