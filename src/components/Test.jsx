/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import YouTubeIcon from '@mui/icons-material/YouTube';

function Test() {
  const [userList, setUserlist] = useState([]);
  const [userData, setUserData] = useState({
    id : 0,
    fullname : '',
    email : '',
    phoneNumber : '',
    password : ''
  });

  useEffect(() => {
    axios
      .get("http://localhost:4000/users")
      .then((res) => setUserlist(res.data));
  }, []);

  const handleAdd = async () => {
    const newData = {
        id : userData.id,
        fullname : userData.fullname,
        email : userData.email,
        phoneNumber : userData.phoneNumber,
        password : userData.password,
        isAdmin : false
    }
    //Phương thức post có 2 tham số, một là api url, newData
    await axios.post("http://localhost:4000/users",newData);
    window.location.reload();
  }

  return (
    <div className="flex justify-center gap-10">
        <form onSubmit={(e)=> {
            e.preventDefault();
            handleAdd()
        }} className="border border-black w-52 h-40">
            <input type="text" placeholder="id" value={userData.id} onChange={(e) => setUserData({...userData,id : e.target.value})}/>
            <input type="text" placeholder="fullname" value={userData.fullname} onChange={(e) => setUserData({...userData,fullname : e.target.value})}/>
            <input type="email" placeholder="email" value={userData.email} onChange={(e) => setUserData({...userData,email : e.target.value})}/>
            <input type="password" placeholder="password" value={userData.password} onChange={(e) => setUserData({...userData,password : e.target.value})}/>
            <input type="phone" placeholder="phoneNumber" value={userData.phoneNumber} onChange={(e) => setUserData({...userData,phoneNumber : e.target.value})}/>
            <button className="w-20 h-10 bg-gradient-to-r from-red-700 to-blue-700 text-white" type="submit">Submit</button>
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
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Test;
