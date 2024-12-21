import React, { useEffect } from "react";
import { navigate } from "gatsby";

const TempCard = () => {
  useEffect(() => {
    navigate("/", { replace: true });
  }, []);

  return null; // Render nothing while redirecting
};

export default TempCard;