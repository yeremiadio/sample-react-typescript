import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const Page1 = (props: Props) => {
  const navigate = useNavigate();
  const [dataDariBackend, setDatadariBackend] = useState<[]>([]);
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

  return <div>{JSON.stringify(dataDariBackend)}</div>;
};

export default Page1;
