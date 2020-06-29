export type MenuContext = {};

export type MenuStateSchema = {
  states: {
    close: {};
    open: {};
  };
};

export type MenuEvent = { type: "OPEN" } | { type: "CLOSE" };
