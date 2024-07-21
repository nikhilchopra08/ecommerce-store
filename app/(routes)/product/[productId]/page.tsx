import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products"
import Gallery from "@/Components/gallery";
import Info from "@/Components/info";
import ProductList from "@/Components/product-list";
import Container from "@/Components/ui/container";

interface ProductPageProps {
    params: {
        productId: string
    }
}

const ProductPage : React.FC<ProductPageProps> = async ({ params }) => {
    const product = await getProduct(params.productId);
    const suggestProducts = await getProducts({ categoryId: product?.category?.id })
    return(
        <div>
            <Container>
                <div className="px-4 py-10 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        {/* Gallery */}
                        <Gallery images={product.images} />
                        <div className="px-4 mt-0 sm:mt-16 sm:px-0 lg:mt-0">
                            {/* Info */}
                            <Info data={product} />
                        </div>
                    </div>
                    <hr className="my-10"/>
                    <ProductList title="Related Items" items={suggestProducts} />
                </div>
            </Container>
        </div>
    )
}

export default ProductPage