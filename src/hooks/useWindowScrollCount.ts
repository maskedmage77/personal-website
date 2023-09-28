import { useDebouncedValue, useWindowScroll } from "@mantine/hooks";
import { useEffect, useState } from "react";

export const useWindowScrollCount = () => {

  const [windowCount, setWindowCount] = useState(0);
  const [scroll, _] = useWindowScroll();
  const [debouncedScroll] = useDebouncedValue(scroll, 200);

  useEffect(() => {
    setWindowCount(Math.floor(debouncedScroll.y / window.innerHeight));
  }, [debouncedScroll.y, window.innerHeight]);

  return { windowCount };

};