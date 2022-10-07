import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="min-w-screen">
      <Header />
      <div className="min-w-screen fiexd top-0">{children}</div>
      <Footer />
    </div>
  );
}
