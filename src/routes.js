import { BrowserRouter, Route, Routes } from "react-router-dom"
import UserDetails from "./pages/UserDetails"
import UserList from "./pages/UserList"

const ManyUserList = () => (
  <>
    <UserList />
    <UserList />
    <UserList />
  </>
)

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ManyUserList />}/>
        <Route path='/users/:id' element={<UserDetails />}/>
      </Routes>
    </BrowserRouter>
  )
}