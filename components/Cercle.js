import React from "react";
import Lottie from "react-lottie-player";

import GradationSmall from "/public/image/gradation-small.json";

export default function Cercle() {
  return <Lottie loop animationData={GradationSmall} play />;
}
