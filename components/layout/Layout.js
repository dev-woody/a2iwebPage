import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div>
      <div className="min-w-screen">{children}</div>
    </div>
  );
}
