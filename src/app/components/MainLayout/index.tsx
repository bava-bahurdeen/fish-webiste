import Header from "./Header";
import Footer from "./Footer";
export default function MainLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
      <Header/>
      {children}
      <Footer/>
      </>
    );
  }

  