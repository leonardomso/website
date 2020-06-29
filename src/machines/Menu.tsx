import { Machine } from "xstate";

import { MenuContext, MenuStateSchema, MenuEvent } from "./Menu.types";

const Menu = Machine<MenuContext, MenuStateSchema, MenuEvent>({
  id: "menu",
  initial: "close",
  states: {
    close: {
      on: {
        OPEN: "open",
      },
    },
    open: {
      on: {
        CLOSE: "close",
      },
    },
  },
});

export default Menu;
