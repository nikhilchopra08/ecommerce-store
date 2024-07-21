import getCategory from "@/actions/get-category";
import getColor from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSize from "@/actions/get-sizes";
import Billboard from "@/Components/BiilBoard";
import Container from "@/Components/ui/container";
import NoResults from "@/Components/ui/no-results";
import ProductCard from "@/Components/ui/product-card";
import Filter from "./components/filter";
import MobileFilters from "./components/mobile-filters";

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
},
searchParams: {
    colorId: string;
    sizeId: string;
}
}

const CategoryPage : React.FC<CategoryPageProps> = async ({ params , searchParams }) => {

  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId
  })

  const sizes = await getSize();
  const colors = await getColor();
  const category = await getCategory(params.categoryId)
  console.log(category);

  return (
    <Container>
                <Billboard data={category?.billboard} />
                <div className="px-4 pb-24 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                        {/*Add Mobile Filters*/}
                        <MobileFilters sizes={sizes} colors={colors} />
                        {/*Add Computer Filters*/}
                        <div className="hidden lg:block">
                            <Filter
                                valueKey="sizeId"
                                name="Sizes"
                                data={sizes}
                            />
                            <Filter
                                valueKey="colorId"
                                name="Colors"
                                data={colors}
                            />
                        </div>
                        <div className="mt-6 lg:col-span-4 lg:mt-0">
                            {products?.length === 0 && <NoResults /> }
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                                {products?.map(item => (
                                    <ProductCard key={item.id} data={item} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                </Container>
  )
}

export default CategoryPage