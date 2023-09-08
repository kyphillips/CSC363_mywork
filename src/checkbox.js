import { useState } from "react";

export function Checkbox({
  type = "information",
  heading,
  children,
  closable,
  onClose
}) {
  const [visible, setVisible] = useState(true);
  if (!visible) {
    return null;
  }

  function handleCloseClick() {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  }