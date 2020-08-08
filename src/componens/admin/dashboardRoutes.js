import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import AdminDashboard from './dashboard/AdminDashboard';



const dashboardRoutes = [
    {
        path: "/admin",
        component: AdminDashboard, // dashboard
        name: 'Dasboard',
        icon:<Icon>add_circle</Icon>,
        routes: []
    },
    {
        path: "/admin/files",
        component: FileList,
        name: 'Files',
        icon: <Icon>add_circle</Icon>,
        routes:[] 
    }
]





export const supportRoutes = [
    {
        path: "/admin/sales",
        component: AdminDashboard, // dashboard
        name: 'Sales Reports',
        icon:<Icon>add_circle</Icon>,
        routes: []
    },
    {
        path: "/admin/finance",
        component: FileList,
        name: 'Financial Reports',
        icon: <Icon>add_circle</Icon>,
        routes:[] 
    },
    {
        path: "/admin/market",
        component: FileList,
        name: 'Market Analysis',
        icon: <Icon>add_circle</Icon>,
        routes:[] 
    },

]

export default dashboardRoutes




