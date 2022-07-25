import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

type Props = {};

const Page0 = (props: Props) => {
  const navigate = useNavigate();

  const handleClickPuntenBro = () => {
    navigate("/blog");
    localStorage.setItem("namaku", "firda");
  };

  return (
    <MainLayout>
      <Link to={"/blog"}>
        <button style={{ background: "blue", border: "none", color: "white" }}>
          Punten bro
        </button>
      </Link>
      <button
        style={{ background: "red", border: "none", color: "white" }}
        onClick={handleClickPuntenBro}
      >
        Punten bro tanpa link
      </button>
    </MainLayout>
  );
};

export default Page0;
