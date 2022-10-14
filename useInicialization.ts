import { useEffect, useState } from "react";
import { loadFirstStart, saveFirstStart } from "./src/generalLogic/storage";

const useInicialization = () => {
  const [isDownloaded, setDownloaded] = useState(false);

  const inicialization = async () => {
    const firstStart = await loadFirstStart();
    if (!firstStart) await saveFirstStart();

    setDownloaded(true);
  };

  useEffect(() => {
    inicialization();
  }, []);

  return { isDownloaded };
};

export default useInicialization;
