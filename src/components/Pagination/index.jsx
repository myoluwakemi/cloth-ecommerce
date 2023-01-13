import "./styles.scss"
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li  onClick={() => paginate(number)}  key={number} className="page-item">
            <a onClick={e => e.preventDefault()} href="#" className="page-link">{number}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Pagination;
