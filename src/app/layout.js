import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Scroll Driven Animations",
  description: "Generated by create next app"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/" class="nav-link">
                <span class="link-text">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/scroll-indicator" class="nav-link">
                <span class="link-text">Scroll Indicator</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#" className="nav-link">
                <span className="link-text">Demo 2</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#" className="nav-link">
                <span className="link-text">Demo 3</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#" className="nav-link">
                <span className="link-text">Demo 4</span>
              </Link>
            </li>
          </ul>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
