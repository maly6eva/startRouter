//Rus
// 01. Пропишите в URL путь /searchpage?q=hello-world!




import {useSearchParams} from "react-router-dom";

function SearchPage() {
    const [searchParams, setSearchParams] = useSearchParams()
    const searchTerm = searchParams.get('q') || '';

    function handleChange(e) {
        const value = e.target.value;
        setSearchParams({ q: value})
    }
  return (
    <div>
      <h1>Search Results</h1>
      <p>Search term: {searchTerm} </p>

      {/* Поле ввода для изменения строки запроса */}
      <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Type to search..."
      />
    </div>
  );
}

export default SearchPage;
