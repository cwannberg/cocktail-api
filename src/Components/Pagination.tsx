import { type ReactElement, useState } from "react";
import { Link } from "react-router-dom";
import type { ICocktail } from "./Cocktail";
import '../assets/Search.css'

type PaginationProps = {
  items: ICocktail[];
  itemsPerPage?: number;
};

export const Pagination = ({
  items,
  itemsPerPage = 10,
}: PaginationProps): ReactElement => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageItems = items.slice(start, end);

  return (
    <>
      <ul className="cocktail-ul">
        {pageItems.map((c) => (
          <li key={c.id}>
            <Link to={"/cocktailView"} state={{ cocktail: c }}>
              {c.name}
            </Link>
          </li>
        ))}
      </ul>

      <section className="pages-box">
        {Array.from({ length: totalPages }, (_, i) => {
          const page = i + 1;
          return (
            <button
              key={page}
              disabled={page === currentPage}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          );
        })}
      </section>
    </>
  );
};