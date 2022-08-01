import Search from "../../components/Search";
import index from "../../styles/index.module.scss";

export default function Questions() {
    return (
        <>
            <div>
                <header className={index.header}>
                    <Search />
                </header>

                <main></main>
            </div>
        </>
    )
}