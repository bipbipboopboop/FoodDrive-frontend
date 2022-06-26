import React from "react";
import { useState } from "react";

const useModal = () => {
  const [open, setOpen] = useState(false);
  const [secondaryOpen, setSecondaryOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenSecondary = () => {
    setSecondaryOpen(true);
  };
  const handleCloseSecondary = () => {
    setSecondaryOpen(false);
  };

  return {
    open,
    handleOpen,
    handleClose,
    secondaryOpen,
    handleOpenSecondary,
    handleCloseSecondary,
  };
};

export default useModal;
