import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const Page2 = (props: Props) => {
  const [titleInput, setTitleInput] = useState<string>("");
  const [contentInput, setContentInput] = useState<string>("");
  const navigate = useNavigate();
  const savedLocalStorageTokenku = localStorage.getItem("tokenku");
  useEffect(() => {
    if (!savedLocalStorageTokenku) {
      navigate("/blog");
    }
  }, [savedLocalStorageTokenku]);
  const handleSubmitCreateBlog = useCallback(() => {
    if (!savedLocalStorageTokenku) return;
    if (!titleInput && !contentInput) return;
    axios
      .post(
        "https://sistech-api.vercel.app/blog",
        {
          title: titleInput,
          content: contentInput,
        },
        {
          headers: {
            Authorization: `Bearer ${savedLocalStorageTokenku}`,
          },
        }
      )
      .then(() => {
        alert("sukses boss");
        navigate("page1");
      })
      .catch(() => {
        alert("error");
      });
  }, [titleInput, contentInput, savedLocalStorageTokenku]);

  return (
    <div>
      <input
        type={"text"}
        value={titleInput}
        placeholder="Title..."
        onChange={(event) => setTitleInput(event.target.value)}
      />
      <input
        type={"text"}
        value={contentInput}
        placeholder="Content..."
        onChange={(event) => setContentInput(event.target.value)}
      />
      <button
        style={{ background: "blue", border: "none", color: "white" }}
        onClick={handleSubmitCreateBlog}
      >
        Create Blog
      </button>
    </div>
  );
};

export default Page2;
