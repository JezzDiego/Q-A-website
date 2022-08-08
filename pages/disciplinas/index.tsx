import BasicTextFields from "../../components/TextField";
import index from '../../styles/index.module.scss'
import { BsSearch } from "react-icons/bs";
import BasicList from "../../components/List";

export default function Subjects() {
  return (
    <>
      <div>
        <div className={index.centerSearch}>
          <BasicTextFields />
          <button className={index.centeredIcon}>
            <BsSearch size={20}></BsSearch>
          </button>
        </div>

        <div className={index.center}>
            <BasicList />
        </div>
        
      </div>
    </>
  );
}
