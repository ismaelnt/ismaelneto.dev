import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex container justify-center items-center px-4 h-16">
      <nav className="flex space-x-4">
        <Link
          className="text-muted-foreground hover:text-foreground transition-colors"
          target="_blank"
          href="https://www.linkedin.com/in/ismaelnt/"
          passHref
        >
          LinkedIn
        </Link>
        <Link
          className="text-muted-foreground hover:text-foreground transition-colors"
          target="_blank"
          href="https://github.com/ismaelnt"
          passHref
        >
          GitHub
        </Link>
        <Link
          className="text-muted-foreground hover:text-foreground transition-colors"
          target="_blank"
          href="https://www.instagram.com/ismaeto/"
          passHref
        >
          Instagram
        </Link>
      </nav>
    </footer>
  );
}
