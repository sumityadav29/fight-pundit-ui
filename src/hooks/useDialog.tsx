
import { useState } from "react";

export const useDialog = (initialState = false) => {
  const [open, setOpen] = useState(initialState);
  
  return {
    open,
    setOpen,
  };
};
