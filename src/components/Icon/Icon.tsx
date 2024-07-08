import React from "react";
import "./Icon.module.scss";

type Props = {
  width: number;
  height: number;
  icon: string;
  id: string;
  className?: string;
};

export const Icon: React.FC<Props> = ({
  width,
  height,
  icon,
  id,
  className = "",
}) => {
  return (
    <svg width={width} height={height} className={className}>
      <use href={`${icon}#${id}`} />
    </svg>
  );
};
