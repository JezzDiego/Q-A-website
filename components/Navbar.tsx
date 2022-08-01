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
              <a className={navbar.a}>Início</a>
            </Link>
          </li>
          <li className={navbar.li}>
            <Link href={"/aulas"}>
              <a className={navbar.a}>Aulas</a>
            </Link>
          </li>
          <li className={navbar.li}>
            <Link href={"/questoes"}>
              <a className={navbar.a}>Questões</a>
            </Link>
          </li>
          <li className={navbar.li}>
            <Link href={"#"}>
              <a className={navbar.a}>Disciplinas</a>
            </Link>
          </li>
        </ul>
        <hr />
      </nav>
    </>
  );
}
