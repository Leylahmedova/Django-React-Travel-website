import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
function Pagination({ activePage, setActivePage, totalPageCount }) {
  const pages = [];
 
  for (let i = 1; i <= totalPageCount; i++) {
    pages.push(
      <li
        onClick={() => setActivePage(i)}
        className={i === activePage ? "active" : ""}
        key={i}
      >
        {i}
      </li>
    );
  }

  return (
    <>
      <ul className="pagination">
        <IoIosArrowBack
          onClick={() =>
            activePage != 1 ? setActivePage(activePage - 1) : setActivePage(1)
          }
        />

        {pages}
        <IoIosArrowForward onClick={() => setActivePage(activePage + 1)} />
      </ul>
    </>
  );
}

export default Pagination;
