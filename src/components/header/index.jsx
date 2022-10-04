import { useAppContext } from "../../context/AppContext";
import InputSearcher from "../inputSearcher";

export default function Header() {
  const {
    searchTerm,
    setIsSearching,
    setResults,
    setSearchTerm,
    isSearching,
    results,
    authenticated,
  } = useAppContext();
  return (
    <header>
      <div
        className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{
          minHeight: "40vh",
        }}
      >
        <div
          className="absolute top-0 w-full h-full bg-cover"
          style={{
            backgroundImage:
              "url('https://a.ltrbxd.com/resized/sm/upload/ho/1t/6w/vl/back-to-the-future-2-1200-1200-675-675-crop-000000.jpg')",
          }}
        ></div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">
                  Movie Searcher.
                </h1>
                {authenticated && (
                  <div>
                    <InputSearcher
                      searchTerm={searchTerm}
                      setIsSearching={setIsSearching}
                      setResults={setResults}
                      setSearchTerm={setSearchTerm}
                      isSearching={isSearching}
                      results={results}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
