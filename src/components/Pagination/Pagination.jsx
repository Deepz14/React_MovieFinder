import React from 'react'
import './style.css';

export const Pagination = ({pages, currentPage, nextPage}) => {
    let pageLinks = [];

    for(let i = 1 ; i <= pages; i++){
        let active = currentPage === i ? 'active' : '';
        pageLinks.push(
          <li
            className={`page-item ${active}`}
            key={i}
            onClick={() => nextPage(i)}
          >
            <p className="page-link">{i}</p>
          </li>
        );
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <ul className="pagination">
              <li
                className="page-item"
                onClick={() => nextPage(currentPage - 1)}
              >
                <p className="page-link">Prev</p>
              </li>
              {pageLinks}
              <li
                className="page-item"
                onClick = {() => nextPage(currentPage + 1)}
              >
                <p className="page-link">Next</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}
