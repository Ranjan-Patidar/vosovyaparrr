import React from "react";
import Dashboard from "../component/SideBar-options/Dashboard";
import Default from '../component/default/default'
import BusinessDetail from "../component/SideBar-options/BusinessDetail";
import SocialMedia from "../component/SideBar-options/SocialMedia";
import TemplateSettings from "../component/SideBar-options/TemplateSettings";
import ProductSettings from "../component/SideBar-options/ProductSettings";
import GallerySettings from "../component/SideBar-options/GallerySettings";
import SeoSettings from "../component/SideBar-options/SeoSettings";
import BlogSettings from "../component/SideBar-options/BlogSettings";
import ServiceSettings from "../component/SideBar-options/ServiceSettings";
import PageSettings from "../component/SideBar-options/PageSettings";
import BusinessHours from "../component/SideBar-options/BusinessHours";
import EnquiryList from "../component/SideBar-options/EnquiryList";
import AppointmentSettings from "../component/SideBar-options/AppointmentSettings";
import AppointmentList from "../component/SideBar-options/AppointmentList";
import TransactionList from "../component/SideBar-options/TransactionList";
import OrderList from "../component/SideBar-options/OrderList";

export const routes = [
    { path:`${process.env.PUBLIC_URL}/default/sample-page`, Component: <Default/> },    
    { path:`${process.env.PUBLIC_URL}/SideBar-options/dashboard`, Component: <Dashboard/> },    
    { path:`${process.env.PUBLIC_URL}/SideBar-options/business-deatil`, Component: <BusinessDetail/> },
    { path:`${process.env.PUBLIC_URL}/SideBar-options/socialMedia-settings`, Component: <SocialMedia/> }, 
    { path:`${process.env.PUBLIC_URL}/SideBar-options/template-settings`, Component: <TemplateSettings/> }, 
    { path:`${process.env.PUBLIC_URL}/SideBar-options/product-settings`, Component: <ProductSettings/> }, 
    { path:`${process.env.PUBLIC_URL}/SideBar-options/gallery-settings`, Component: <GallerySettings/> },
    { path:`${process.env.PUBLIC_URL}/SideBar-options/seo-settings`, Component: <SeoSettings/> },  
    { path:`${process.env.PUBLIC_URL}/SideBar-options/blogs-settings`, Component: <BlogSettings/> },    
    { path:`${process.env.PUBLIC_URL}/SideBar-options/service-settings`, Component: <ServiceSettings/> },  
    { path:`${process.env.PUBLIC_URL}/SideBar-options/page-settings`, Component: <PageSettings/> },  
    { path:`${process.env.PUBLIC_URL}/SideBar-options/businessHours-settings`, Component: <BusinessHours/> },  
    { path:`${process.env.PUBLIC_URL}/SideBar-options/enquiry-list`, Component: <EnquiryList/> },  
    { path:`${process.env.PUBLIC_URL}/SideBar-options/apppointment-settings`, Component: <AppointmentSettings/> },  
    { path:`${process.env.PUBLIC_URL}/SideBar-options/appointment-list`, Component: <AppointmentList/> }, 
    { path:`${process.env.PUBLIC_URL}/SideBar-options/transaction-list`, Component: <TransactionList/> },
    { path:`${process.env.PUBLIC_URL}/SideBar-options/order-list`, Component: <OrderList/> },
    
]

