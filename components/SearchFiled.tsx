import React from "react";
import { BiSearchAlt } from "react-icons/bi";

interface SearchFieldProps {
  className?: string;
  searchQuery?: string;
  handleSearchQueryChange?: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  placeholder?: string;
}

const SearchField: React.FC<SearchFieldProps> = (props) => {
  return (
    <div className={`relative w-full md:w-[500px]`}>
      <input
        className={`bg-white w-full rounded-full focus:border-3 focus:border-solid focus:outline-none focus:border-primary text-fontPrimary border pr-4 pl-4 py-2`}
        type="search"
        value={props.searchQuery}
        onChange={props.handleSearchQueryChange}
        placeholder={`Search for`}
      />
      {/* <div className="relative h-6 overflow-hidden">
        <div className="absolute w-full animate-scroll">
          <span className="block text-base font-medium text-gray-400">
            Amul Milk
          </span>
          <span className="block text-base font-medium text-gray-400">
            Amul Doodh
          </span>
          <span className="block text-base font-medium text-gray-400">
            Sagar Milk
          </span>
          <span className="block text-base font-medium text-gray-400">
            Amul Icecream
          </span>
          <span className="block text-base font-medium text-gray-400">
            Amul Dahi
          </span>
        </div>
      </div> */}

      <BiSearchAlt className="text-xl text-fontPrimary absolute right-4 top-1/2 transform -translate-y-1/2" />
    </div>
  );
};

export default SearchField;
