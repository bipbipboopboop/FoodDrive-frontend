import React, { useEffect } from "react";
import { useState } from "react";

const useModal = () => {
  const [data, setData] = useState();
  const [open, setOpen] = useState(false);
  const [secondaryOpen, setSecondaryOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleOpenWithProps = ({ data }) => {
    setData(data);
  };

  useEffect(() => {
    data && handleOpen();
  }, [data]);

  const handleClose = () => {
    setOpen(false);
    setData();
  };

  const handleOpenSecondary = () => {
    setSecondaryOpen(true);
  };
  const handleCloseSecondary = () => {
    setSecondaryOpen(false);
  };

  return {
    open,
    data,
    handleOpen,
    handleOpenWithProps,
    handleClose,
    secondaryOpen,
    handleOpenSecondary,
    handleCloseSecondary,
  };
};

export default useModal;
