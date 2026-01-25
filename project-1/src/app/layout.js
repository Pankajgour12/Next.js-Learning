import { Raleway } from "next/font/google";
import "./globals.css";
import Nav from "@/component/Nav";

 const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400"]
});





export const metadata = {
  title: "Practice-project",
  description: "Create by Pnkj gour",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={raleway.className}
         cz-shortcut-listen="true"
        
      >
       <Nav/>
        {children}
      </body>
    </html>
  );
}
