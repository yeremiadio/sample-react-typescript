import React, { ChangeEvent, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

type Props = {};

const Page0 = (props: Props) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const linkInputId = searchParams.get("linkInputId");
  const handleClickPuntenBro = () => {
    navigate("/blog");
    localStorage.setItem("namaku", "firda");
  };

  const handleSelectLink = (event: ChangeEvent<HTMLSelectElement>) => {
    searchParams.set("linkInputId", event.target.value);
    setSearchParams(searchParams);
  };

  return (
    <MainLayout>
      <select onChange={handleSelectLink}>
        <option value={"link blog"}>link blog</option>
        <option value={"punten bro tanpa link"}>punten bro tanpa link</option>
      </select>
      {linkInputId !== "" && linkInputId === "link blog" ? (
        <Link to={"/blog"}>
          <button
            style={{ background: "blue", border: "none", color: "white" }}
          >
            Punten bro
          </button>
        </Link>
      ) : (
        <button
          style={{ background: "red", border: "none", color: "white" }}
          onClick={handleClickPuntenBro}
        >
          Punten bro tanpa link
        </button>
      )}
    </MainLayout>
  );
};

export default Page0;
