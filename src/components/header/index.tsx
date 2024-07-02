import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";

export function Header() {
  return (
    <header className="flex justify-between items-center px-4 h-16">
      <Button variant="ghost" className="font-black" asChild>
        <Link href="/">I</Link>
      </Button>
      <nav className="flex">
        <Button variant="ghost" asChild>
          <Link href="/">Sobre</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/">Artigos</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/">Setup</Link>
        </Button>
      </nav>
      <ModeToggle />
    </header>
  );
}
