import TextField from "../components/TextField";
import { BsSearch } from "react-icons/bs";
import SelectSmall from "../components/SelectSmall";
import index from "../styles/index.module.scss";

export default function Search() {
    return (
        <>
            <div className={index.search}>
                <TextField />
                <button className={index.icon}>
                    <BsSearch size={20}></BsSearch>
                </button>
            </div>
            <SelectSmall />
        </>
    )
}