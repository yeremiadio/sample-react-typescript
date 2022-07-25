import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
