import { useMachine } from "@xstate/react";

import Menu from "src/machines/Menu";

const useMenu = () => {
  const [current, send] = useMachine(Menu);

  const handleMenu = () => {
    if (current.matches("close")) {
      send("OPEN");
    } else {
      send("CLOSE");
    }
  };

  return { current, handleMenu };
};

export default useMenu;
