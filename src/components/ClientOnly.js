import React, { useEffect, useState } from "react";
import RegisterModal from "./models/RegisterModal";
import Navbar from "./navbar/Navbar";

export default function ClientOnly(props) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      {/* <Model title='hello' actionLabel='Submit' isOpen={true} /> */}
      <RegisterModal />
      <Navbar />
    </>
  );
}
