import {useParams} from "react-router-dom";

function ProductDetails() {
    const {productId} = useParams()
  return (
    <div>
      <p>ProductDetails Page</p>

      <p>Product param: <strong>{productId}</strong></p>
    </div>
  );
}

export default ProductDetails;
