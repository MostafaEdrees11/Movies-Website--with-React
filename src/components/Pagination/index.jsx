function Pagination({ currentPage, totalPages, changePage }) {
  return (
    <>
      <div className="join">
        <button
          className="join-item btn"
          onClick={() => {
            if (currentPage === 1) return;
            changePage(currentPage - 1);
          }}
        >
          «
        </button>
        <button className="join-item btn">Page {currentPage}</button>
        <button
          className="join-item btn"
          onClick={() => {
            if (currentPage === totalPages) return;
            changePage(currentPage + 1);
          }}
        >
          »
        </button>
      </div>
    </>
  );
}

export default Pagination;
