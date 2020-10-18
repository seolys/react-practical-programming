import { useState, useEffect } from "react";

export default function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    mounted(true);
  }, []); // 빈배열을 넣어주면 처음 한번만 실행.
  return mounted;
}

