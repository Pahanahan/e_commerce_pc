import { NewPage } from "../types/types";

const getPaginationRange = (
  currentPage: number,
  totalPages: number,
  maxVisible: number = 5
): (NewPage | number)[] => {
  const range = [];

  if (totalPages < maxVisible) {
    for (let i = 1; i <= totalPages; i++) {
      range.push(i);
    }
    return range;
  }

  if (currentPage === 1) {
    range.push(1, 2, NewPage.DOTS, totalPages);
  }
  if (currentPage === 2 && totalPages === 5) {
    range.push(1, 2, 3, 4, totalPages);
  }
  if (currentPage === 2 && totalPages > 5) {
    range.push(1, 2, 3, NewPage.DOTS, totalPages);
  }
  if (currentPage === 3 && totalPages === 5) {
    range.push(1, 2, 3, 4, totalPages);
  }
  if (currentPage === 3 && totalPages === 6) {
    range.push(1, 2, 3, 4, 5, totalPages);
  }
  if (currentPage === 3 && totalPages >= 7) {
    range.push(1, 2, 3, 4, NewPage.DOTS, totalPages);
  }
  if (currentPage === 4 && totalPages === 5) {
    range.push(1, 2, 3, 4, totalPages);
  }
  if (currentPage === 4 && totalPages === 6) {
    range.push(1, 2, 3, 4, 5, totalPages);
  }
  if (currentPage === 4 && totalPages === 7) {
    range.push(1, 2, 3, 4, 5, 6, totalPages);
  }
  if (currentPage === 4 && totalPages > 7) {
    range.push(1, 2, 3, 4, 5, NewPage.DOTS, totalPages);
  }
  if (currentPage === 5 && totalPages === 5) {
    range.push(1, NewPage.DOTS, 4, totalPages);
  }
  if (currentPage === 5 && totalPages === 6) {
    range.push(1, NewPage.DOTS, 4, 5, totalPages);
  }
  if (currentPage === 5 && totalPages === 7) {
    range.push(1, NewPage.DOTS, 4, 5, 6, totalPages);
  }
  if (currentPage === 5 && totalPages === 8) {
    range.push(1, NewPage.DOTS, 4, 5, 6, 7, totalPages);
  }
  if (currentPage === 5 && totalPages > 8) {
    range.push(1, NewPage.DOTS, 4, 5, 6, NewPage.DOTS, totalPages);
  }
  if (currentPage === 6 && totalPages === 6) {
    range.push(1, NewPage.DOTS, 5, totalPages);
  }
  if (currentPage === 6 && totalPages === 7) {
    range.push(1, NewPage.DOTS, 5, 6, totalPages);
  }
  if (currentPage === 6 && totalPages === 8) {
    range.push(1, NewPage.DOTS, 5, 6, 7, totalPages);
  }
  if (currentPage === 6 && totalPages === 9) {
    range.push(1, NewPage.DOTS, 5, 6, 7, 8, totalPages);
  }
  if (currentPage === 6 && totalPages > 9) {
    range.push(1, NewPage.DOTS, 5, 6, 7, NewPage.DOTS, totalPages);
  }
  if (currentPage === 7 && totalPages === 7) {
    range.push(1, NewPage.DOTS, 6, totalPages);
  }
  if (currentPage === 7 && totalPages === 8) {
    range.push(1, NewPage.DOTS, 6, 7, totalPages);
  }
  if (currentPage === 7 && totalPages === 9) {
    range.push(1, NewPage.DOTS, 6, 7, 8, totalPages);
  }
  if (currentPage === 7 && totalPages === 10) {
    range.push(1, NewPage.DOTS, 6, 7, 8, 9, totalPages);
  }
  if (currentPage === 7 && totalPages > 10) {
    range.push(1, NewPage.DOTS, 6, 7, 8, NewPage.DOTS, totalPages);
  }

  if (currentPage > 7) {
    console.log(currentPage, totalPages);
    const currentPageMinus1 = currentPage - 1;
    const currentPagePlus1 = currentPage + 1;
    const currentPagePlus2 = currentPage + 2;
    const currentPagePlus3 = currentPage + 3;

    if (totalPages === currentPage) {
      range.push(1, NewPage.DOTS, currentPageMinus1, totalPages);
    }
    if (totalPages === currentPagePlus1) {
      range.push(1, NewPage.DOTS, currentPageMinus1, currentPage, totalPages);
    }
    if (totalPages === currentPagePlus2) {
      range.push(
        1,
        NewPage.DOTS,
        currentPageMinus1,
        currentPage,
        currentPagePlus1,
        totalPages
      );
    }
    if (totalPages === currentPagePlus3) {
      range.push(
        1,
        NewPage.DOTS,
        currentPageMinus1,
        currentPage,
        currentPagePlus1,
        currentPagePlus2,
        totalPages
      );
    }
    if (totalPages > currentPagePlus3) {
      range.push(
        1,
        NewPage.DOTS,
        currentPageMinus1,
        currentPage,
        currentPagePlus1,
        NewPage.DOTS,
        totalPages
      );
    }
  }

  return range;
};

// console.log(1, getPaginationRange(1, 2, 5));
// console.log(1, getPaginationRange(1, 3, 5));
// console.log(1, getPaginationRange(1, 4, 5));
// console.log(1, getPaginationRange(1, 5, 5));
// console.log(1, getPaginationRange(1, 6, 5));
// console.log(1, getPaginationRange(1, 7, 5));
// console.log(1, getPaginationRange(1, 8, 5));
// console.log(1, getPaginationRange(1, 9, 5));
// console.log("-------------------------");
// console.log(2, getPaginationRange(2, 2, 5));
// console.log(2, getPaginationRange(2, 3, 5));
// console.log(2, getPaginationRange(2, 4, 5));
// console.log(2, getPaginationRange(2, 5, 5));
// console.log(2, getPaginationRange(2, 6, 5));
// console.log(2, getPaginationRange(2, 7, 5));
// console.log(2, getPaginationRange(2, 8, 5));
// console.log(2, getPaginationRange(2, 9, 5));
// console.log("-------------------------");
// console.log(3, getPaginationRange(3, 3, 5));
// console.log(3, getPaginationRange(3, 4, 5));
// console.log(3, getPaginationRange(3, 5, 5));
// console.log(3, getPaginationRange(3, 6, 5));
// console.log(3, getPaginationRange(3, 7, 5));
// console.log(3, getPaginationRange(3, 8, 5));
// console.log(3, getPaginationRange(3, 9, 5));
// console.log("-------------------------");
// console.log(4, getPaginationRange(4, 4, 5));
// console.log(4, getPaginationRange(4, 5, 5));
// console.log(4, getPaginationRange(4, 6, 5));
// console.log(4, getPaginationRange(4, 7, 5));
// console.log(4, getPaginationRange(4, 8, 5));
// console.log(4, getPaginationRange(4, 9, 5));
// console.log("-------------------------");
// console.log(5, getPaginationRange(5, 5, 5));
// console.log(5, getPaginationRange(5, 6, 5));
// console.log(5, getPaginationRange(5, 7, 5));
// console.log(5, getPaginationRange(5, 8, 5));
// console.log(5, getPaginationRange(5, 9, 5));
// console.log(5, getPaginationRange(5, 10, 5));
// console.log(5, getPaginationRange(5, 11, 5));
// console.log("-------------------------");
// console.log(6, getPaginationRange(6, 6, 5));
// console.log(6, getPaginationRange(6, 7, 5));
// console.log(6, getPaginationRange(6, 8, 5));
// console.log(6, getPaginationRange(6, 9, 5));
// console.log(6, getPaginationRange(6, 10, 5));
// console.log(6, getPaginationRange(6, 11, 5));
// console.log(6, getPaginationRange(6, 12, 5));
// console.log("-------------------------");
// console.log(7, getPaginationRange(7, 7, 5));
// console.log(7, getPaginationRange(7, 8, 5));
// console.log(7, getPaginationRange(7, 9, 5));
// console.log(7, getPaginationRange(7, 10, 5));
// console.log(7, getPaginationRange(7, 11, 5));
// console.log(7, getPaginationRange(7, 12, 5));
// console.log(7, getPaginationRange(7, 13, 5));
// console.log("-------------------------");
// console.log(8, getPaginationRange(8, 8, 5));
// console.log(8, getPaginationRange(8, 9, 5));
// console.log(8, getPaginationRange(8, 10, 5));
// console.log(8, getPaginationRange(8, 11, 5));
// console.log(8, getPaginationRange(8, 12, 5));
// console.log(8, getPaginationRange(8, 13, 5));
// console.log(8, getPaginationRange(8, 14, 5));
// console.log("-------------------------");
// console.log(9, getPaginationRange(9, 9, 5));
// console.log(9, getPaginationRange(9, 10, 5));
// console.log(9, getPaginationRange(9, 11, 5));
// console.log(9, getPaginationRange(9, 12, 5));
// console.log(9, getPaginationRange(9, 13, 5));
// console.log(9, getPaginationRange(9, 14, 5));
// console.log(9, getPaginationRange(9, 15, 5));
// console.log("-------------------------");

export default getPaginationRange;
