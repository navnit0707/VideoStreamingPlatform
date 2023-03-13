import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/contants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setsearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    // console.log(searchQuery);

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
      getSearchSuggestions();
    }, 200);

    // if we want to clear timeOut if we need to re render if user clicks another input
    //so in destroying phase we can do this by using return

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    //update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="data:image/pg;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX////t7e3u7u4AAADr6+vs7Ozz8/Px8fG7u7vl5eXV1dWNjY2urq6Wlpb39/eZmZnIyMioqKjDw8NJSUk/Pz/a2tptbW3g4OAbGxvPz8+2trZnZ2dCQkJVVVUmJiYXFxd9PqD8AAAEDklEQVR4nO2c2XKjMBBFWWwJMoMwjhPbWf//L2MsT/LGlJtwW41uP52XVHErbXTQVhRjlVVVlSulIpHnYEIm/F/CbVmWm5VScaFye6XNKqksKvU2WpYqJjRP1fV3GH+Sm1XS7YWaxsMsQ7HSaCiO+Ew4lVDfPOg0YqLT2KccEtJpzFOsNBqKIz4TTiXUNw86jZjoNPYph4R0GvMUK42G4ojPhFMJ9c2DTiMmOo19yiEhncY8xUqjoTjiM+FUQn3zoNOIiU5jn3JISKcxT7HSaCiO+Ew4lVDfPOg0YqLT2KccEtJpzFOsOa1Qee+rhUlpxPehcG3bPozVtguSK4JTSOjD/rVG1es+eLTT+PYRlm+sx9YLn1ToNL6F5hur9Uin8Ud4wLo+euCIH94UEh4CLqFrFALWdeNgThPeVRK+B5zTqASsa8GT/qs7RxmN98xYR9iI/6CU8AxL+KSU8AnmNEEpYYA5TfhQCfgRYE7jepWEnWw8lFmbSkLhLIYooXtRCPgi+kiUztMEfJ/2ATtPEwZwwCEIn7S4+99+I3d8BuZ7Pjr8PI0P1W7o+/7PWH2/IA27Mnj8PM03ubEWJtHrcOY8jR3i2pN5ymFlZv0JZU5jh8ROY4dipdFQyxAT2qdY+uZBpxETncY+5ZCQTmOeYs1pBX/5EPcLk9KI74LfNU3zd6ymWZB2XmU/jXP9CTbVdurdzLm2+03B7WDxYu2c8EmFTgMPOEZEOo0/wwPW9Rm6n+ZTIeEncj8NetEi1gDcT3NQSXjgfprfcxqt/TQz9mLc+Xfr309jcE/UvaaglFDwpIXMadTepVvYfhpT46HMaXCfFT91AjqNLS+VzdNofVsA52kc+r94+z4EztNcvvFxOxTnf+ML52ncqudpvgkx17ad8Xyx9FeIuPYkJq492accEsqcxg6JncYOxUqjoZYhJrRPsfTNg04jJjqNfcohIZ3GPMWSNsBYNs7MCBKWPpT7oeu66+mkrluQhv1W49xTAJ9dC2in0Tp/CHMarTOkMKcxdQ5Y9ppSCAg9y+06lYTC8/gSp9G7UwHlNIr3YoCcxuDdJnf+3fr30+Ava4vF/TS/uJ9G7a4v2H4aU/e1iZxG5c69N+h+Gkv3JsrmaVTuvtxC52m07i8FztMYu4NWkBB7j7DoJzg74Y1s3AWtv0LEtScxce3JPuWQUOY0dkjsNHYoVhoNtQwxoX2KpW8edBox0WnsUw4J6TTmKVYaDcURnwmnEuqbB51GTHQa+5RDQjqNeYqVRkNxxGfCqYT65kGnEROdxj7lkJBOY55ipdFQHPGZcCqhvnnQacREp7FPOSSk05inWGk0FEd8JpxKqG8edBox0WnsUw4J6TTmKVYaDcURnwmnEv68UNdHX8DKFsu5QrZiAAAAAElFTkSuQmCC"
        />
        <a href="/">
          <img
            className="h-10 pl-5 mt-0 pt-0 align-top"
            alt="youtube-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>
      <div className="col-span-10 px-10 scroll ">
        <div>
          <input
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setsearchQuery(e.target.value);
            }}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>

        {showSuggestion && (
          <div className=" fixed port bg-white py-2 px-2 shadow-lg w-[40.4rem] rounded-lg border-gray-100 ">
            <ul>
              {suggestions &&
                suggestions.map((item) => {
                  return (
                    <li key={item} className="py-2 shadow-sm hover:bg-gray-300">
                      🔍{item}
                    </li>
                  );
                })}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user-icon"
          src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
        />
      </div>
    </div>
  );
};

export default Head;
