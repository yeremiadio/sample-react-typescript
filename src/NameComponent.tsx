import React from "react";

type Props = {
  name: string;
  nomorPunten: number;
};

const NameComponent = (props: Props) => {
  const { name, nomorPunten } = props;
  return <div>{name}{nomorPunten}</div>;
};

export default NameComponent;
