import HeroSection from "./components/home/hero";
import CategoriesSection from "./components/home/categories";
import ProductSection from "./components/home/product";
import { getAllCategories } from "../services/category.service";
import { getAllProducts } from "../services/product.services";

export default async function Home() {

  const [categories, products] = await Promise.all([
    getAllCategories(),
    getAllProducts()
  ])

  return (
  <main >
    <HeroSection />
    <CategoriesSection categories={categories}/>
    <ProductSection products={products} />
    </main>
    
  );

  

}
