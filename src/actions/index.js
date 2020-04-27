export const increment = (nr = 1) => {
  return { type: "INCREMENT", payload: nr };
};

export const decrement = () => {
  return { type: "DECREMENT" };
};
