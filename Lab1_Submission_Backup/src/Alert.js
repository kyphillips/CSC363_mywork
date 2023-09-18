import { useState } from "react";

export function Alert({
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
  return (
    <div>
      <div>
        <span
          role="img"
          aria-label={type === "Warning" ? "Warning" : "Information"}
        >
          {type === "warning" ? "⚠" : "👍"}
        </span>
        <span>{heading}</span>
      </div>
      <br></br>
      {closable && (
        <button aria-label="Close" onClick={handleCloseClick}>
          <span role="img" aria-label="Close">
            {" "}
            Thumbs Down 👎{" "}
          </span>
        </button>
      )}
      <div>{children}</div>
    </div>
  );
}
