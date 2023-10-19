import Link from "next/link"

const Navigation = () => {
    return (
      <nav>
        <ul>
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/catfacts">Animals</Link>
          </li>
        </ul>
      </nav>
    );
  };

export default Navigation
