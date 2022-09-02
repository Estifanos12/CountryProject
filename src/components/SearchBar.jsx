import { React, useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const SearchBar = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const mode = useSelector((state) => state.toggle.mode);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search === '') {
    } else {
      navigate('/search/' + search);
    }
  };

  return (
    <form
      style={{
        backgroundColor:
          mode === 'light' ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)',
        color: mode === 'light' ? 'hsl(200, 15%, 8%)' : ' hsl(0, 0%, 100%)',
      }}
      className="search text-black flex w-[100%] gap-2 items-center  rounded-md md:w-[30%] h-[30%] bg-white"
      onSubmit={handleSubmit}
    >
      <AiOutlineSearch size={25} color="grey" className="ml-5" />
      <input
        style={{
          backgroundColor:
            mode === 'light' ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)',
          color: mode === 'light' ? 'hsl(200, 15%, 8%)' : ' hsl(0, 0%, 100%)',
        }}
        type="text"
        placeholder="Search for country"
        className="p-2 outline-none w-[100%] rounded-md"
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
