import { useDispatch, useSelector } from "react-redux";
import { selectCurrentPage, selectTotalPages } from "../../model/selectors";
import { pageChanged } from "../../model/filterSlice";
import { Pagination } from "src/shared/ui";

export const PaginateMovies = () => {
  const totalPages = useSelector(selectTotalPages);
  const currentPage = useSelector(selectCurrentPage);
  const dispatch = useDispatch();

  function handleNext() {
    dispatch(pageChanged(currentPage + 1));
  }

  function handlePrev() {
    dispatch(pageChanged(currentPage - 1));
  }

  if (totalPages) {
    return (
      <Pagination
        onNext={handleNext}
        onPrev={handlePrev}
        currentPage={currentPage}
        totalPages={totalPages}
      ></Pagination>
    );
  }
};
