/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../../../rtk/slices/cartSlice";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 250,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  display: "flex",
};

export default function ProductDetail({ open, handleClose, formState }) {
  const [qt, setQt] = useState(1);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    if (!token) {
      navigate("/login");
    } else {
      dispatch(addCart(item));
      handleClose();
      setQt(1)
    }
  };

  const handleIncrease = () => {
    setQt(qt + 1);
  };

  const handleDecrease = () => {
    if ( qt <= 1) {
      setQt(1)
    } else {
      setQt(qt - 1);
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => {
          handleClose();
          setQt(1)
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img className="w-[40%] h-full" src={formState.img} alt="not found" />
          <div className="w-[60%] h-full">
            <div className="h-[75%] border-b border-gray-300">
              <div className="flex justify-between">
                <p className="pt-2 pl-5 text-xl font-semibold text-[#087CB1]">
                  {formState.name}
                </p>
                <CloseIcon
                  onClick={() => {
                    handleClose();
                    setQt(1)
                  }}
                  style={{
                    fontSize: "40px",
                    color: "white",
                    backgroundColor: "#E31837",
                    cursor: "pointer",
                  }}
                />
              </div>
              <div className="mt-5 px-5 font-semibold text-sm text-gray-500">
                <p>{formState.description}</p>
              </div>
            </div>
            <div className="h-[25%] flex justify-between items-center  px-5">
              <div className="flex">
                <RemoveIcon
                onClick={handleDecrease}
                  style={{
                    fontSize: "30px",
                    backgroundColor: "#E9ECEF",
                    cursor: "pointer",
                  }}
                />
                <div className="text-[20px] bg-[#E9ECEF] font-bold w-10 text-center">
                  {qt}
                </div>
                <AddIcon
                  onClick={handleIncrease}
                  style={{
                    fontSize: "30px",
                    backgroundColor: "#E9ECEF",
                    cursor: "pointer",
                  }}
                />
              </div>
              <div>
                <button
                  onClick={() => handleAdd({ ...formState, quantity: qt })}
                  className="bg-[#E31837] text-white h-12 w-60 rounded-md font-semibold"
                >
                  Add to Cart ${formState.price * qt}
                </button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
