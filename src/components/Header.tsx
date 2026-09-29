import Link from "next/link";

// L'en-tête, présent sur toutes les pages (importé dans layout.tsx).
export default function Header() {
  return (
    <header className="top">
      <div className="wrap bar">
        <Link href="/" className="brand">
          <span className="logo">A</span>
          <span>Atlas Pro<small>Fournitures hôtellerie</small></span>
        </Link>
        <nav className="nav">
          <Link className="navlink" href="/catalogue">Catalogue</Link>
          <Link className="navlink" href="/espace">Espace client</Link>
          <Link href="/espace" className="btn primary">Espace pro</Link>
        </nav>
      </div>
    </header>
  );
}
