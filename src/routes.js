import React from "react"



const mainContent = React.lazy(() => import("./componens/MainContent"))
const Login = React.lazy(() => import("./componens/auth/login/Login"))
const Register = React.lazy(() => import("./componens/auth/register/Register"))
const Cart = React.lazy(() => import("./componens/cart/Cart"))
const AdminDashboard = React.lazy(() => import("./componens/admin/dashboard/AdminDashboard"))
const AdminFileList = React.lazy(() => import("./componens/admin/files/AdminFileList"))
const AdminCategories = React.lazy(() => import("./componens/admin/CategoryAndSubCategoryContainer.js"))

const routes = [
  { path: "/", exact: true, name: "Home", component: mainContent },
  { path: "/login", exact: true, name: "Login", component: Login },
  { path: "/register", exact: true, name: "Register", component: Register },
  { path: "/cart", exact: true, name: "Cart", component: Cart },
  { path: "/admin", exact: true, name: "Cart", component: AdminDashboard },
  { path: "/admin/files", exact: true, name: "Cart", component: AdminFileList },
  { path: "/admin/categories", exact: true, name: "Categories", component:AdminCategories }
];

export default routes;
