import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";
import { SearchFilters } from "./_components/search-filters";
import { getPayload } from "payload";
import configPromise from "@/payload.config";
import { Category } from "@/payload-types";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default async function HomeLayout({ children }: HomeLayoutProps) {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: "categories",
    depth: 1, // populate subcategories, subcategories.[0] will be a Category
    pagination: false,
    where: {
      parent: {
        exists: false,
      },
    },
  });

  const formattedCategories = data.docs.map((doc) => ({
    ...doc,
    subcategories: (doc.subcategories?.docs || []).map((doc) => ({
      // Because of depth: 1, we are confident that doc will be a Category
      ...(doc as Category),
    })),
  }));

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SearchFilters data={formattedCategories} />
      <main className="flex-1 bg-gradient-subtle">{children}</main>
      <Footer />
    </div>
  );
}
