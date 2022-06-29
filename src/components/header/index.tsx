import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';

const Header: FunctionalComponent = () => {
  return (
    <header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/profile">Me</Link>
        <Link href="/profile/john">John</Link>
      </nav>
    </header>
  );
};

export default Header;
