
function IntroPagination({ activePage, setActivePage, totalPageCount }) {
  const pages = [];

  for (let i = 1; i <= totalPageCount; i++) {
    pages.push(
      <li
        onClick={() => setActivePage(i)}
        className={i === activePage ? "activeIntro" : ""}
        key={i}
      >
        {/* {i} */}
      </li>
    );
  }

  return (
    <>
       <ul className="intro_pagination">
       {pages}
       </ul>
      
      
    </>
  );
}

export default IntroPagination;
