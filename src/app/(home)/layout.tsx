import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-brand-radial">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
