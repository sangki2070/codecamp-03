import { withAuth } from "../../../../src/components/commons/hocs/withAuth";

import ProductsWriteContainer from "../../../../src/components/units/product/write/ProductsWrite.container";

const ProductsEditPage = () => {
  return <ProductsWriteContainer isEdit={false} />;
};

export default withAuth(ProductsEditPage);
