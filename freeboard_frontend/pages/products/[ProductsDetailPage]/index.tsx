import { withAuth } from "../../../src/components/commons/hocs/withAuth";

import ProductsReadContainer from "../../../src/components/units/product/read/ProductsRead.container";

const ProductsReadPage = () => {
  return <ProductsReadContainer />;
};

export default withAuth(ProductsReadPage);
