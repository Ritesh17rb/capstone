import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
// import { Toaster } from 'react-hot-toast';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children, title, description, keywords, author }) => {
    return (
        <div>

            <Helmet>
                <meta charSet="utf-8" />

                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />


                <title>{title}</title>
            </Helmet>

            <Header />
            <main style={{ minHeight: "70vh" }}>
                {/* <Toaster /> */}
                <ToastContainer />
                {children}</main>
            <Footer />
        </div>
    );
};

Layout.defaultProps = {
    title: 'Grievance Management',
    description: 'A platform to manage your day to day problems and simplify the cumbersome process',
    keywords: 'students,college',
    author: 'Ritesh Kumar'
}

export default Layout;