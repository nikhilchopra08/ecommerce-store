import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/Components/BiilBoard";
import ProductList from "@/Components/product-list";
import Container from "@/Components/ui/container";

export const revalidate = 0;

const HomePage = async () => {

  const billboard = await getBillboard("4c9cb270-d3cf-49b6-a77a-033eaeb4b94b");
  const products = await getProducts({ isFeatured: true })

  return(
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard}/>
      </div>
      <div className="flex flex-col px-4 gap-y-8 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" items={products} />
      </div>
    </Container>
  );
}

export default HomePage