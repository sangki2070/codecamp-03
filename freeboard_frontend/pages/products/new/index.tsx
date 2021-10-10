import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import ProductsWriteContainer from "../../../src/components/units/product/write/ProductsWrite.container";

const ProductWritePage = () => {
  return <ProductsWriteContainer isEdit={true} />;
};

export default withAuth(ProductWritePage);
