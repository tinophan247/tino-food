/* eslint-disable react/prop-types */
import { useState } from "react";
import ProductItem from "../../../components/ProductItem";
import ProductDetail from "../ProductDetail/ProductDetail"

function MenuLayout({ data, name }) {
    const [open, setOpen] = useState(false);
    const [formState ,setFormState] = useState({
      id : 0,
      img : '',
      name :'',
      price : 0,
      size : '',
      category : ''
    })

    const handleClose =() => {
      setOpen(false)
      setFormState({
        id : 0,
        img : '',
        name :'',
        price : 0,
        size : '',
        category : ''
      })
    }

    const handleOpen =(item) => {
      setOpen(true);
      setFormState(item)
    }
    

  return (
    <div className=" bg-gray-100">
      <p className="font-semibold text-4xl text-center mb-10 pt-5">{name}</p>
      <div className="bg-gray-100 pb-5">
        <div className="mx-auto max-w-2xl px-4  sm:px-6  lg:max-w-7xl lg:px-8">
          <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {data.length > 0 &&
              data.map((item) => <ProductItem key={item.id} item={item} handleOpen={() => handleOpen(item)} />)}
          </div>
        </div>
      </div>
      <ProductDetail open={open} handleClose={handleClose} formState={formState} />
    </div>
  );
}

export default MenuLayout;
