import { MutableRefObject, useEffect, useRef, ReactNode } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }: { children: ReactNode }) => {
  const elRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
    elRef.current.setAttribute("id", "modal");
  }

  useEffect(() => {
    const body = document.querySelector("body");
    if (!body || !elRef.current) return;
    body.appendChild(elRef.current);

    return () => {
      if (elRef.current) body.removeChild(elRef.current);
    };
  }, []);

  return createPortal(children, elRef.current);
};

export default Modal;
