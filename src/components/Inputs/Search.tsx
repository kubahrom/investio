import React from 'react';

const Search = () => {
  return (
    <div className="form-control">
      <label className="label" htmlFor="filter-search">
        <span className="label-text text-base font-semibold">Hledat</span>
      </label>
      <label className="input-group">
        <span className="bg-primary-content text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </span>
        <input
          type="text"
          id="filter-search"
          name="search"
          className="input input-bordered input-primary w-full"
        />
      </label>
    </div>
  );
};

export default Search;
