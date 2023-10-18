import PageLayoutAdmin from "../PageLayoutAdmin/PageLayoutAdmin"
import UserTable from "./UserTable"

function UserManagement() {
  return (
    <PageLayoutAdmin>
      <div className="px-5">
        <div className="flex justify-between">
           <p className="font-bold text-2xl mb-5">User Management</p>
           <button className="w-32 h-10 bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold rounded mr-5">Add User</button>
        </div>
        <UserTable/>
      </div>
    </PageLayoutAdmin>
  )
}

export default UserManagement