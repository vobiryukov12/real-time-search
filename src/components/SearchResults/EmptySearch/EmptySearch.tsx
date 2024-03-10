import "./EmptySearch.scss";

export function EmptySearch({ searchQuery }: { searchQuery: string }) {
  return (
    <div className="emptySearch">
      <p className="emptySearch__message">
        По вашему запросу{" "}
        <span className="emptySearch__query">«{searchQuery}»</span> ничего не
        найдено.
      </p>
      <img
        className="emptySearch__img"
        src="/empty-search.svg"
        alt="Empty Search"
      />
      <p className="emptySearch__message">Попробуйте изменить формулировку.</p>
    </div>
  );
}
