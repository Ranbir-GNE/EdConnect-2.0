import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Explore from "./(screens)/dashboard/explore/page";
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS

export default function Home() {
  return (
    <>
      <Explore />
    </>
  );
}
