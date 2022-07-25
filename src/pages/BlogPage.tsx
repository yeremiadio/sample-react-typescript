import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

type Props = {};

const BlogPage = (props: Props) => {
  const navigate = useNavigate();
  const savedLocalStorage = localStorage.getItem("namaku");
  const [namaInput, setNamaInput] = useState<string>("");
  useEffect(() => {
    if (!savedLocalStorage) {
      navigate("/");
    }
  }, [savedLocalStorage]);
  useEffect(() => {
    if (namaInput.length > 16) {
      alert("Kelebihan bos namamu");
    }
  }, [namaInput]);

  const handleClickPostDataToken = useCallback(() => {
    if (!namaInput) return;
    axios
      .post("https://sistech-api.vercel.app/token", {
        name: namaInput,
      })
      .then((response) => {
        localStorage.setItem("tokenku", response.data.token);
        localStorage.setItem("namaku", namaInput);
        navigate("/page1");
      })
      .catch(() => {
        alert("Error bos");
      });
  }, [namaInput]);

  return (
    <div>
      <input
        type={"text"}
        value={namaInput}
        onChange={(event) => setNamaInput(event.target.value)}
      />
      {namaInput.length <= 3 ? (
        <div>Namamu kurang dari tiga</div>
      ) : (
        <div>Namamu bener bos</div>
      )}
      <button
        style={{ background: "blue", border: "none", color: "white" }}
        onClick={handleClickPostDataToken}
      >
        Page ke 1
      </button>
    </div>
  );
};

export default BlogPage;
