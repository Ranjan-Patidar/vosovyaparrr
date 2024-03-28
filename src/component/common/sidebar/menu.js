import React from "react";
export const MENUITEMS = [
  {
    title: "",
    icon: <i className="pe-7s-home pe-lg"></i>,
    path: "/poco/default/sample-page",
    type: "sub",
    active: true,
    bookmark: true,
    children: [
      { title: "", type: "sub" },
      { title: "Dashboard", type: "link", path: "/poco/SideBar-options/dashboard" },
      { title: "Business Detail", type: "link", path: "/poco/SideBar-options/business-deatil" },
      { title: "Social Media Settings", type: "link", path: "/poco/SideBar-options/socialMedia-settings" },
      { title: "Tempalate Settings", type: "link", path: "/poco/SideBar-options/template-settings" },
      { title: "Product Settings", type: "link", path: "/poco/SideBar-options/product-settings" },
      { title: "Gallery Settings", type: "link", path: "/poco/SideBar-options/gallery-settings" },
      { title: "Seo Settings", type: "link", path: "/poco/SideBar-options/seo-settings" },
      { title: "Blogs Settings", type: "link", path: "/poco/SideBar-options/blogs-settings" },
      { title: "Service Settings", type: "link", path: "/poco/SideBar-options/service-settings" },
      { title: "Pages Settings", type: "link", path: "/poco/SideBar-options/page-settings" },
      { title: "Business Hours Settings", type: "link", path: "/poco/SideBar-options/businessHours-settings"},
      { title: "Enquiry List", type: "link", path: "/poco/SideBar-options/enquiry-list" },
      { title: "Appointments Settings", type: "link", path: "/poco/SideBar-options/apppointment-settings" },
      { title: "Appointments", type: "link", path: "/poco/SideBar-options/appointment-list" },
      { title: "Transaction List", type: "link", path: "/poco/SideBar-options/transaction-list" },
      { title: "Order List", type: "link", path: "/poco/SideBar-options/order-list" },
    ],
  },
  
];
