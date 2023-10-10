import { useDispatch, useSelector } from "react-redux";
import MenuLayout from "../MenuLayout/MenuLayout"
import { useEffect } from "react";
import { getListProduct } from "../../../rtk/slices/productSlice";

function Pizza() {
  const {favor , seafood, kid, traditional} = useSelector(state => state.product);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getListProduct())
  },[])

  return (
    <div>
      <MenuLayout name='FLAVORS OF THE WORLD' data={favor}/>
      <MenuLayout name='SEAFOOD CRAVERS' data={seafood}/>
      <MenuLayout name='KID FAVORS' data={kid}/>
      <MenuLayout name='TRADITIONAL & MEAT LOVERS' data={traditional}/>
    </div>
  )
}

export default Pizza;