import { Inter } from "next/font/google";
import StyledComponentsRegistry from '@/lib/registry'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stitchack",
  description: "The stitchack app",
};
 
export default function RootLayout({ children }) {
  return (
    <html>
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}