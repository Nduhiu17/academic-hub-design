import React from "react"



const mainContent = React.lazy(() => import("./componens/MainContent"))
const Login = React.lazy(() => import("./componens/auth/login/Login"))
const Register = React.lazy(() => import("./componens/auth/register/Register"))
const Cart = React.lazy(() => import("./componens/cart/Cart"))
const AdminDashboard = React.lazy(() => import("./componens/admin/dashboard/AdminDashboard"))
const AdminFileList = React.lazy(() => import("./componens/admin/files/AdminFileList"))
const CategoryAndSubCategoryContainer =React.lazy(() => import("./componens/admin/categories/CategoryAndSubCategoryContainer"))
const AccountDetails = React.lazy(() => import('./componens/myaccount/AccountDetails'))
const Purchased = React.lazy(() => import('./componens/myaccount/Purchased'))
const Saved = React.lazy(() => import('./componens/myaccount/Saved'))


const routes = [
  { path: "/", exact: true, name: "Home", component: mainContent },
  { path: "/login", exact: true, name: "Login", component: Login },
  { path: "/register", exact: true, name: "Register", component: Register },
  { path: "/cart", exact: true, name: "Cart", component: Cart },
  { path: "/account/details", exact: true, name: "My Account", component: AccountDetails },
  { path: "/account/purchased", exact: true, name: "My Account", component: Purchased },
  { path: "/account/saved", exact: true, name: "My Account", component: Saved },
  { path: "/admin", exact: true, name: "Cart", component: AdminDashboard },
  { path: "/admin/files", exact: true, name: "Cart", component: AdminFileList },
  { path: "/admin/categories", exact: true, name: "Categories", component:CategoryAndSubCategoryContainer }
];

export default routes;
