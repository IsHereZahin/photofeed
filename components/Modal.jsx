"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import Image from "next/image";

const Modal = ({ children }) => {
  const modalRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
  }, []);

  function onHide() {
    router.back();
  }

  return createPortal(
    <dialog
      ref={modalRef}
      onClose={onHide}
      className="shadow-gary-500 shadow-2xl border border-gray-400 flex flex-col px-5 py-6 rounded-md"
    >
      {/* Close Icon */}
      <span
        onClick={onHide}
        className="absolute top-1 right-1 cursor-pointer"
      >
        <Image
          src="/assets/icons/xmark.svg"
          alt="close"
          width={24}
          height={24}
        />
      </span>

      {children}
    </dialog>
    ,
    document.getElementById("modal-root-content")
  );
};

export default Modal;