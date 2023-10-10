import { useDispatch, useSelector } from "react-redux";
import MenuLayout from "../MenuLayout/MenuLayout";
import { useEffect } from "react";
import { getListProduct } from "../../../rtk/slices/productSlice";

function Dessert() {
  const { dessert } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListProduct());
  }, []);

  return (
    <div>
      <MenuLayout name="DESSERT" data={dessert} />
    </div>
  );
}

export default Dessert