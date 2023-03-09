import Link from "next/link";
import React from "react";
  
const Header = () => {
  return (
    <div>
      <h1 className='text-2xl'><Link href="/">DJØF BLOGGERS</Link></h1>
    </div>
  )
};
  
const Footer = () => {
  return (
    <div>
      <p className="text-base">ALL RIGTHS RESERVED</p>
    </div>
  )
};
  
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
  
export default Layout;