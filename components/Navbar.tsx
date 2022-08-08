import navbar from "../styles/navbar.module.scss";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className={navbar.nav}>
        <hr />
        <ul className={navbar.ul}>
          <li className={navbar.li}>
            <Link href={"/"}>
              <a>Início</a>
            </Link>
          </li>
          <li className={navbar.li}>
            <Link href={"/aulas"}>
              <a>Aulas</a>
            </Link>
          </li>
          <li className={navbar.li}>
            <Link href={"/questoes"}>
              <a>Questões</a>
            </Link>
          </li>
          <li className={navbar.li}>
            <Link href={"disciplinas"}>
              <a>Disciplinas</a>
            </Link>
          </li>
        </ul>
        <hr />
      </nav>
    </>
  );
}
