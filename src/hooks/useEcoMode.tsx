import { useState, useEffect, useCallback } from "react";

function useEcoMode(): [boolean, React.Dispatch<React.SetStateAction<boolean>>] {
  const [ecoMode, setEcoMode] = useState(false);

  const useVisibility = () => {
    const [isVisible, setIsVisible] = useState(!document.hidden);

    const handleVisibility = useCallback(() => {
      setIsVisible(!document.hidden);
    }, []);

    useEffect(() => {
      document.addEventListener("visibilitychange", handleVisibility);

      return () => {
        document.removeEventListener("visibilitychange", handleVisibility);
      };
    }, [handleVisibility]);

    return isVisible; // returns boolean
  };

  const visibility = useVisibility();

  useEffect(() => {
    if (!visibility) {
      setEcoMode(true);
    }
  }, [visibility]);

  return [ecoMode, setEcoMode];
}

export default useEcoMode;
