import React from "react";

type Props = {
  id?: number;
  title: string;
  content: string;
};

const Card = (props: Props) => {
  const { title, content } = props;
  return (
    <div style={{ background: "blue", padding: 16, color: "white" }}>
      <h1>{title}</h1>
      <h4>{content}</h4>
    </div>
  );
};

export default Card;
