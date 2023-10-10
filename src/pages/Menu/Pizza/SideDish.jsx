import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListProduct } from "../../../rtk/slices/productSlice";
import MenuLayout from "../MenuLayout/MenuLayout";

function SideDish() {
  const { chicken, pasta, sausage, bread, potato } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListProduct());
  }, []);

  return (
    <div>
      <MenuLayout name="CHICKEN" data={chicken} />
      <MenuLayout name="PASTA" data={pasta} />
      <MenuLayout name="SAUSAGE" data={sausage} />
      <MenuLayout name="BREAD" data={bread} />
      <MenuLayout name="POTATO" data={potato} />
    </div>
  );
}

export default SideDish;
