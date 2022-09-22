import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../state/types";
import { useToast } from "../../hooks/useToast";
import { Toast, ToastContainer } from "../../widgets/Toast";

const ToastListener = () => {
  const toasts: Toast[] = useSelector((state: State) => state.toasts.data);
  const { remove } = useToast();

  const handleRemove = (id: string) => remove(id);

  return <ToastContainer toasts={toasts} onRemove={handleRemove} />;
};

export default ToastListener;
