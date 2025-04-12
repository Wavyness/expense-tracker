import { useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggle = () => {
    setIsLiked(!isLiked);
    onClick();
  };

  if (isLiked) return <GoHeartFill size={40} color="red" onClick={toggle} />;
  return <GoHeart size={40} onClick={toggle} />;
};

export default Like;
