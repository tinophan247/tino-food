import moment from "moment";
import { useParams } from "react-router-dom";
import Pagelayout from "../../components/Pagelayout";

function Invoice() {
  const { orderId } = useParams();
  const historyItem = JSON.parse(localStorage.getItem("history"));
  const filterItem = historyItem.filter((item) => item.id == orderId);

  return (
    <Pagelayout>
      {filterItem.length > 0 &&
        filterItem.map((item) => (
          <div
            key={item.id}
            className="bg-white border rounded-lg shadow-lg px-6 py-8 max-w-sm mx-auto mt-20"
          >
            <h1 className="font-bold text-2xl my-4 text-center text-red-600">
              Tino Food
            </h1>
            <hr className="mb-2" />
            <div className="flex justify-between mb-6">
              <h1 className="font-bold">Invoice</h1>
              <div className="text-gray-700 ">
                <div className="text-end">
                  Date: {moment(item.dateplaced).format("DD/MM/YYYY")}
                </div>
                <div className="text-end">Invoice #: {item.id}</div>
              </div>
            </div>
            <div className="mb-4 flex justify-between">
              <h2 className="font-bold mb-4">Bill To:</h2>
              <div>
                <div className="text-gray-700 text-end">
                  {item.firstname + " " + item.lastname}
                </div>
                <div className="text-gray-700 text-end">{item.email}</div>
              </div>
            </div>
            <div className="mb-4 flex justify-between">
              <h2 className="font-bold mb-4">Address:</h2>
              <div>
                <div className="text-gray-700 text-end">{item.address}</div>
                <div className="text-gray-700 text-end">{item.ward}</div>
                <div className="text-gray-700 text-end">{item.district}</div>
                <div className="text-gray-700 text-end">{item.province}</div>
              </div>
            </div>
            <table className="w-full mb-8">
              <thead>
                <tr>
                  <th className="text-left font-bold text-gray-700">
                    Description
                  </th>
                  <th className="text-right font-bold text-gray-700">Amount</th>
                </tr>
              </thead>
              <tbody>
                {item.cart.map((i) => (
                  <tr key={i.id}>
                    <td className="text-left text-gray-700">{i.name}</td>
                    <td className="text-right text-gray-700">${i.price}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td className="text-left font-bold text-gray-700">Total</td>
                  <td className="text-right font-bold text-gray-700">
                    ${item.totalPrice}
                  </td>
                </tr>
              </tfoot>
            </table>
            <div className="text-gray-700 mb-2 text-center">
              Thank you for your order
            </div>
          </div>
        ))}
    </Pagelayout>
  );
}

export default Invoice;
