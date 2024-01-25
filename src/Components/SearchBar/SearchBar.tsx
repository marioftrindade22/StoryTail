import React from "react";

export default function SearchBar() {
return (
    <form className="bg-white flex justify-between gap-5 pl-5 pr-11 py-5 items-start max-md:flex-wrap max-md:pr-5">
    <div className="items-stretch shadow-sm bg-white flex gap-3.5 pl-5 pr-20 py-3 rounded-xl max-md:max-w-full max-md:flex-wrap max-md:pr-5">
        <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/af3fdabeb43e6c48fb43a54bb38e40449f8a04694223e4922cb7e989bee459bc?apiKey=fd59c5029e504504992c88df427ec386&"
        className="aspect-square object-contain object-center w-5 fill-neutral-700 stroke-[0.5px] stroke-neutral-700 overflow-hidden shrink-0 max-w-full"
        alt="Book Image"
        />
        <div className="text-neutral-400 text-sm leading-5 grow whitespace-nowrap">
        <label htmlFor="searchInput"></label>
        <input
            type="text"
            id="searchInput"
            aria-label="Search Input"
            role="search"
            placeholder="Search..."
        />
        </div>
    </div>
    <div className="items-stretch flex gap-3">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5b10b73c57aaf675f9f800a8cea12bd0650cf647d98e9df462b9aef9a05ddfdc?apiKey=fd59c5029e504504992c88df427ec386&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b10b73c57aaf675f9f800a8cea12bd0650cf647d98e9df462b9aef9a05ddfdc?apiKey=fd59c5029e504504992c88df427ec386&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b10b73c57aaf675f9f800a8cea12bd0650cf647d98e9df462b9aef9a05ddfdc?apiKey=fd59c5029e504504992c88df427ec386&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b10b73c57aaf675f9f800a8cea12bd0650cf647d98e9df462b9aef9a05ddfdc?apiKey=fd59c5029e504504992c88df427ec386&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b10b73c57aaf675f9f800a8cea12bd0650cf647d98e9df462b9aef9a05ddfdc?apiKey=fd59c5029e504504992c88df427ec386&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b10b73c57aaf675f9f800a8cea12bd0650cf647d98e9df462b9aef9a05ddfdc?apiKey=fd59c5029e504504992c88df427ec386&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b10b73c57aaf675f9f800a8cea12bd0650cf647d98e9df462b9aef9a05ddfdc?apiKey=fd59c5029e504504992c88df427ec386&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b10b73c57aaf675f9f800a8cea12bd0650cf647d98e9df462b9aef9a05ddfdc?apiKey=fd59c5029e504504992c88df427ec386&"className="aspect-square object-contain object-center w-11 overflow-hidden shrink-0 max-w-full"
        alt="User Image"
        />
        <div className="items-stretch self-center flex grow basis-[0%] flex-col my-auto">
        <div className="text-indigo-900 text-base font-bold leading-6 whitespace-nowrap">
            Wade Warren
        </div>
        <div className="text-slate-500 text-xs leading-4 whitespace-nowrap">
            wade.warren@mail.com
        </div>
        </div>
    </div>
    </form>
);
}
