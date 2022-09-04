import { useEffect } from "react";
import { useDebounce } from "../../hooks/useDebounce";

// Usage
export default function InputSearcher({
  searchTerm,
  setIsSearching,
  setResults,
  setSearchTerm,
  isSearching,
}) {
  // Debounce search term so that it only gives us latest value ...
  // ... if searchTerm has not been updated within last 500ms.
  // The goal is to only have the API call fire when user stops typing ...
  // ... so that we aren't hitting our API rapidly.
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  // Effect for API call
  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setIsSearching(true);
        searchCharacters(debouncedSearchTerm).then((results) => {
          setIsSearching(false);
          setResults(results);
        });
      } else {
        setIsSearching(false);
      }
    },
    [debouncedSearchTerm] // Only call effect if debounced search term changes
  );
  return (
    <div>
      <input
        placeholder="Search Marvel Comics"
        className="block w-full h-10 m-10 rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {isSearching && <div>Searching ...</div>}
    </div>
  );
}
// API search function
function searchCharacters(search) {
  const apiKey = "12fe980d106ff5328e1ed3efd66102d5";
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&amp&language=en-US&amp&query=${search}`,
    {
      method: "GET",
    }
  )
    .then((r) => r.json())
    .then((r) => r.results)
    .catch((error) => {
      console.error(error);
      return [];
    });
}
// Hook
