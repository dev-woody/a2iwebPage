import Lottie from "react-lottie-player";
import loading from "/public/loading.json";

export default function Loading() {
  return (
    <div className="w-screen h-screen fixed top-0 flex justify-center items-center bg-black z-50">
      <Lottie loop animationData={loading} play />
    </div>
  );
}
