import React from "react";

export default function Modal({
  showModal,
  setShowModal,
  movieSelected,
  genres,
}) {
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div
                className={`border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none`}
              >
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {movieSelected.title}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="flex flex-row justify-center gap-x-[10px] rounded-xl  border dark:border-zinc-600">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movieSelected.poster_path}`}
                    className="h-[444px] w-[328px]"
                    alt=""
                  />
                  <div className="flex flex-col  justify-start items-start">
                    <label>
                      Original title: {movieSelected.original_title}
                    </label>
                    <label>Lang: {movieSelected.original_language}</label>
                    <label>Released: {movieSelected.release_date}</label>
                    <label>Rating: {movieSelected.vote_average}</label>
                    <label>Votes Qty:{movieSelected.vote_count}</label>
                    <label>Genres:</label>
                    {movieSelected.genre_ids.map((genre) => (
                      <span className="bg-blue-500 text-black border-0 m-[5px] p-[5px] rounded-md">
                        {genres.find((g) => g.id === genre).name}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {movieSelected.overview}
                  </p>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
