import React from "react";

interface ConditionalRenderProps {
  isLoading: boolean;
  isSuccess: boolean;
  isFailed: boolean;
  renderOnSuccess: () => React.ReactNode;
  renderOnFailed: () => React.ReactNode;
  renderOnLoading: () => React.ReactNode;
}

export const ConditionalRender = ({
  isLoading,
  isSuccess,
  isFailed,
  renderOnFailed,
  renderOnLoading,
  renderOnSuccess,
}: ConditionalRenderProps) => {
  if (isLoading) {
    return renderOnLoading();
  } else if (isFailed) {
    return renderOnFailed();
  } else if (isSuccess) {
    return renderOnSuccess();
  }

  return;
};
