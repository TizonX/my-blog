import { Inter } from "next/font/google";
import "../styles/home-blog.css";
import Nav from "../components/Nav";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Kunjan Shah",
//   description: "Generated by create next app",
// };

export default function HomeLayout({ children }) {
  return (
    <>
      <Nav />
      {/* <body className={inter.className}>{children}</body> */}
      {children}
    </>
  );
}