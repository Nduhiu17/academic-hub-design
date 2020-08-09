import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import CategoryIcon from "@material-ui/icons/Category";
import AccountDetails from "./AccountDetails";
import Purchased from "./Purchased";
import Saved from "./Saved";

const accountRoutes = [
  {
    path: "/account/details",
    component: AccountDetails,
    name: "Account Details",
    icon: <DashboardIcon color="action" fontSize="large" />,
    routes: [],
  },
  {
    path: "/account/purchased",
    component: Purchased,
    name: "Purchased items",
    icon: <LibraryBooksIcon color="action" fontSize="large" />,
    routes: [],
  },
  {
    path: "/account/saved",
    name: "Saved items",
    component: Saved,
    icon: <CategoryIcon color="action" fontSize="large" />,
    routes: [],
  },
];

export default accountRoutes;
