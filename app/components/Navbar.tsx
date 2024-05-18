import Link from "next/link";
import { ThemeToggle } from "../../components/ThemeToggle";

export async function Navbar() {
  return (
    <nav className="border-b bg-background h-[10vh] flex items-center">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <h1 className="font-bold text-3xl">
            RIM <span className="text-primary">MUSIC</span>{" "}
          </h1>
        </Link>

        <div className="flex items-center gap-x-14">
          <ul className="flex items-center space-x-14">
            <li>
              <Link
                href="/"
                className="text-lg font-bold hover:text-gray-800 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/artists"
                className="text-lg font-bold hover:text-gray-800 transition-colors duration-300"
              >
                Artistes
              </Link>
            </li>
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
