import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

type Props = {};

const Page1 = (props: Props) => {
  const navigate = useNavigate();
  const [dataDariBackend, setDatadariBackend] = useState<
    Array<{ id: number; title: string; content: string }>
  >([]);
  const savedLocalStorageTokenku = localStorage.getItem("tokenku");
  useEffect(() => {
    if (!savedLocalStorageTokenku) {
      navigate("/blog");
    } else {
      const getDataDariBackend = () => {
        axios
          .get("https://sistech-api.vercel.app/blog", {
            headers: {
              Authorization: `Bearer ${savedLocalStorageTokenku}`,
            },
          })
          .then((response) => {
            setDatadariBackend(response.data);
          })
          .catch(() => {
            console.log("error boss");
          });
      };
      getDataDariBackend();
    }
  }, [savedLocalStorageTokenku]);

  return (
    <div>
      {dataDariBackend.length === 0 ? (
        <div>Data kosong</div>
      ) : (
        dataDariBackend.map((item) => (
          <Card key={item.id} title={item.title} content={item.content} />
        ))
      )}
    </div>
  );
};

export default Page1;
