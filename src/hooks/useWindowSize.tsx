import { useState, useEffect, useCallback } from "react";

interface IWindowSizeProps {
  width: number;
  height: number;
}

const initialState = {
  width: window.innerWidth,
  height: window.innerHeight,
};

export const useWindowSize = (): IWindowSizeProps => {
  const [{ width, height }, setWindowSize] =
    useState<IWindowSizeProps>(initialState);

  const handleWindowSize = useCallback(() => {
    setWindowSize((prev: IWindowSizeProps) => {
      return {
        ...prev,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSize);

    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, [handleWindowSize]);

  return { width, height };
};
