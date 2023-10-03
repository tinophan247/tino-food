/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";

function Test() {
  const [userList, setUserlist] = useState([]);
  const [userData, setUserData] = useState({
    id : 0,
    fullname : '',
    email : '',
    phoneNumber : '',
    password : '',
    isAdmin :false
  });
  const [isEdit , setIsEdit] = useState(false);

  const randomId = () => {
    //Math.random trả về giá trị ngẫu nhiên từ 0->1
    //Math.floor làm tròn số 
    return Math.floor(Math.random() * 9999)
  }

  const fetchData = () => {
    axios
      .get("http://localhost:4000/users")
      .then((res) => setUserlist(res.data));
  }

  useEffect(() => {
    fetchData()
  }, []);

  const handleAdd = async () => {
    const newData = {
        id : randomId(),
        fullname : userData.fullname,
        email : userData.email,
        phoneNumber : userData.phoneNumber,
        password : userData.password,
        isAdmin : false
    }
    //Phương thức post có 2 tham số, một là api url, newData
    await axios.post("http://localhost:4000/users",newData);
    fetchData();
  }

  const handleDelete = async (item) => {
    //Phương thức delete bao gồm url và id
    await axios.delete(`http://localhost:4000/users/${item.id}`)
    fetchData();
  }

  const handleEdit = (item) => {
    //Bật chế độ edit
    setIsEdit(true);
    //đổ dữ liệu lên form
    setUserData(item);
  }

  const handleUpdate = async (item) => {
    //Phương thức put có 2 tham số, một là api url + id, newData
     await axios.put(`http://localhost:4000/users/${item.id}`,item);
    //Tắt chế độ edit
    setIsEdit(false);
    //Reset daTa
    setUserData({
      id : 0,
      fullname : '',
      email : '',
      phoneNumber : '',
      password : '',
      isAdmin : false
    });
    fetchData();
  }

  return (
    <div className="flex justify-center gap-10">
        <form onSubmit={(e)=> {
            e.preventDefault();
            isEdit ? handleUpdate(userData) : handleAdd();
        }} className="border border-black w-52 h-40">
            <input type="text" placeholder="fullname" value={userData.fullname} onChange={(e) => setUserData({...userData,fullname : e.target.value})}/>
            <input type="email" placeholder="email" value={userData.email} onChange={(e) => setUserData({...userData,email : e.target.value})}/>
            <input type="password" placeholder="password" value={userData.password} onChange={(e) => setUserData({...userData,password : e.target.value})}/>
            <input type="phone" placeholder="phoneNumber" value={userData.phoneNumber} onChange={(e) => setUserData({...userData,phoneNumber : e.target.value})}/>
            <button className="w-20 h-10 bg-gradient-to-r from-red-700 to-blue-700 text-white" type="submit">{isEdit ?  'Edit': ' Add'}</button>
        </form>
      <table className="border border-black">
        <thead>
          <tr className="border border-black">
            <th className="border border-black px-3">ID</th>
            <th className="border border-black px-3">Fullname</th>
            <th className="border border-black px-3">Email</th>
            <th className="border border-black px-3">Password</th>
            <th className="border border-black px-3">Phone</th>
            <th className="border border-black px-3">Admin</th>
            <th className="border border-black px-3">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {userList.length > 0 &&
            userList.map((item) => (
              <tr key={item.id} className="border border-black">
                <td className="border border-black px-3">{item.id}</td>
                <td className="border border-black px-3">{item.fullname}</td>
                <td className="border border-black px-3">{item.email}</td>
                <td className="border border-black px-3">{item.password}</td>
                <td className="border border-black px-3">{item.phoneNumber}</td>
                <td className="border border-black px-3">{item.isAdmin.toString()}</td>
                <td className="border border-black px-3">
                  <button onClick={() =>handleDelete(item)} className="bg-red-500 w-10 h-10 text-white">Xóa</button>
                  <button onClick={() =>handleEdit(item)} className="bg-green-500 w-10 h-10 text-white">Sửa</button>
                </td>
              </tr>
            ))}
        </tbody> 
      </table>
    </div>
  );
}

export default Test;
