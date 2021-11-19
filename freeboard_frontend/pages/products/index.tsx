import { withAuth } from "../../src/components/commons/hocs/withAuth";

import ProductsListContainer from "../../src/components/units/product/list/ProductsList.container";

const ProductWritePage = () => {
  return <ProductsListContainer />;
};

export default withAuth(ProductWritePage);
