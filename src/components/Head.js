import React from "react";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8"
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX////t7e3u7u4AAADr6+vs7Ozz8/Px8fG7u7vl5eXV1dWNjY2urq6Wlpb39/eZmZnIyMioqKjDw8NJSUk/Pz/a2tptbW3g4OAbGxvPz8+2trZnZ2dCQkJVVVUmJiYXFxd9PqD8AAAEDklEQVR4nO2c2XKjMBBFWWwJMoMwjhPbWf//L2MsT/LGlJtwW41uP52XVHErbXTQVhRjlVVVlSulIpHnYEIm/F/CbVmWm5VScaFye6XNKqksKvU2WpYqJjRP1fV3GH+Sm1XS7YWaxsMsQ7HSaCiO+Ew4lVDfPOg0YqLT2KccEtJpzFOsNBqKIz4TTiXUNw86jZjoNPYph4R0GvMUK42G4ojPhFMJ9c2DTiMmOo19yiEhncY8xUqjoTjiM+FUQn3zoNOIiU5jn3JISKcxT7HSaCiO+Ew4lVDfPOg0YqLT2KccEtJpzFOsOa1Qee+rhUlpxPehcG3bPozVtguSK4JTSOjD/rVG1es+eLTT+PYRlm+sx9YLn1ToNL6F5hur9Uin8Ud4wLo+euCIH94UEh4CLqFrFALWdeNgThPeVRK+B5zTqASsa8GT/qs7RxmN98xYR9iI/6CU8AxL+KSU8AnmNEEpYYA5TfhQCfgRYE7jepWEnWw8lFmbSkLhLIYooXtRCPgi+kiUztMEfJ/2ATtPEwZwwCEIn7S4+99+I3d8BuZ7Pjr8PI0P1W7o+/7PWH2/IA27Mnj8PM03ubEWJtHrcOY8jR3i2pN5ymFlZv0JZU5jh8ROY4dipdFQyxAT2qdY+uZBpxETncY+5ZCQTmOeYs1pBX/5EPcLk9KI74LfNU3zd6ymWZB2XmU/jXP9CTbVdurdzLm2+03B7WDxYu2c8EmFTgMPOEZEOo0/wwPW9Rm6n+ZTIeEncj8NetEi1gDcT3NQSXjgfprfcxqt/TQz9mLc+Xfr309jcE/UvaaglFDwpIXMadTepVvYfhpT46HMaXCfFT91AjqNLS+VzdNofVsA52kc+r94+z4EztNcvvFxOxTnf+ML52ncqudpvgkx17ad8Xyx9FeIuPYkJq492accEsqcxg6JncYOxUqjoZYhJrRPsfTNg04jJjqNfcohIZ3GPMWSNsBYNs7MCBKWPpT7oeu66+mkrluQhv1W49xTAJ9dC2in0Tp/CHMarTOkMKcxdQ5Y9ppSCAg9y+06lYTC8/gSp9G7UwHlNIr3YoCcxuDdJnf+3fr30+Ava4vF/TS/uJ9G7a4v2H4aU/e1iZxG5c69N+h+Gkv3JsrmaVTuvtxC52m07i8FztMYu4NWkBB7j7DoJzg74Y1s3AWtv0LEtScxce3JPuWQUOY0dkjsNHYoVhoNtQwxoX2KpW8edBox0WnsUw4J6TTmKVYaDcURnwmnEuqbB51GTHQa+5RDQjqNeYqVRkNxxGfCqYT65kGnEROdxj7lkJBOY55ipdFQHPGZcCqhvnnQacREp7FPOSSk05inWGk0FEd8JpxKqG8edBox0WnsUw4J6TTmKVYaDcURnwmnEv68UNdHX8DKFsu5QrZiAAAAAElFTkSuQmCC"
        />

        <img
          className="h-8 mx-2"
          alt="youtube-logo"
          src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
        />
      </div>
      <div className="col-span-10 px-10 text-center">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
          🔍
        </button>
      </div>
      <div className=" col-span-1">
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
