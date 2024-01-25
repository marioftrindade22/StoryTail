import React from 'react';
import BookTable from 'src/Components/BookTable/booktable.js';
import SideBar from 'src/Components/sidebar.tsx'; 
import SearchBar from 'src/Components/SearchBar/SearchBar.js'; 


export default function BookPage() {
  return (
      <div>
          <SearchBar />
          <SideBar />
          <BookTable />
      </div>
  );
  }
  
  return (
    <div className="bg-white flex flex-col items-center">
      <div className="self-stretch flex w-full flex-col items-center max-md:max-w-full">
        <div className="bg-amber-600 self-stretch flex items-start gap-0 px-5 max-md:max-w-full max-md:flex-wrap">
          <div className="items-center bg-amber-600 bg-opacity-0 self-stretch flex basis-[0%] flex-col justify-center px-4 py-7">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d371f14a01d3a4983e9452057360540e2a93bcfcccf4be7450225423a6bfd685?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d371f14a01d3a4983e9452057360540e2a93bcfcccf4be7450225423a6bfd685?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d371f14a01d3a4983e9452057360540e2a93bcfcccf4be7450225423a6bfd685?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d371f14a01d3a4983e9452057360540e2a93bcfcccf4be7450225423a6bfd685?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d371f14a01d3a4983e9452057360540e2a93bcfcccf4be7450225423a6bfd685?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d371f14a01d3a4983e9452057360540e2a93bcfcccf4be7450225423a6bfd685?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d371f14a01d3a4983e9452057360540e2a93bcfcccf4be7450225423a6bfd685?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d371f14a01d3a4983e9452057360540e2a93bcfcccf4be7450225423a6bfd685?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&"
              className="aspect-[5.56] object-contain object-center w-[89px] overflow-hidden"
            />
          </div>
          <div className="items-center bg-amber-600 bg-opacity-0 self-stretch flex justify-between gap-2.5 px-5 py-6 max-md:pl-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3b8393b80fe6179fabe76dbf0fe814f8ca018639e02977a8317e932d7507ae3?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&"
              className="aspect-square object-contain object-center w-3.5 stroke-[3px] stroke-white overflow-hidden shrink-0 max-w-full my-auto"
            />
            <div className="text-white text-base font-extrabold self-stretch">
              Home
            </div>
          </div>
          <div className="items-stretch bg-white self-stretch flex gap-1.5 px-5 py-7 rounded-xl max-md:pl-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e1af568871973d68a6a6d0bf93960da593a614785708f7a1843f6e0fc0238bd?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&"
              className="aspect-[0.88] object-contain object-center w-[15px] fill-amber-600 stroke-[3px] stroke-white overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-amber-600 text-base font-extrabold self-center my-auto">
              Books
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/10f76491198f447f1f7d24f55da41ce2bafff001074b3f4aabdfe1d8c815e845?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&"
              className="aspect-[1.33] object-contain object-center w-2 fill-amber-600 overflow-hidden self-center shrink-0 max-w-full my-auto"
            />
          </div>
          <div className="items-center bg-amber-600 bg-opacity-0 self-stretch flex justify-between gap-2.5 px-5 py-6 max-md:pl-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/888ecf425bd3a7a48b22f948c4223c430de9327d4b5279d40a5b774c753fa6ec?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&"
              className="aspect-[1.19] object-contain object-center w-[19px] stroke-[3px] stroke-white overflow-hidden shrink-0 max-w-full my-auto"
            />
            <div className="text-white text-base font-extrabold self-stretch grow whitespace-nowrap">
              Favourites
            </div>
          </div>
          <div className="items-center bg-amber-600 bg-opacity-0 self-stretch flex justify-between gap-2.5 px-5 py-6 max-md:pl-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/55d746afc3ccf5a30206b0e7d70c73babfbfb745436501ddc309a310dac149e2?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&"
              className="aspect-[0.65] object-contain object-center w-[11px] stroke-[3px] stroke-white overflow-hidden shrink-0 max-w-full my-auto"
            />
            <div className="text-white text-base font-extrabold self-stretch grow whitespace-nowrap">
              Read Later
            </div>
          </div>
          <div className="justify-between items-stretch bg-white self-center flex gap-5 my-auto pl-8 pr-4 py-2.5 rounded-3xl max-md:max-w-full max-md:flex-wrap max-md:pl-5">
            <div className="text-neutral-400 text-base">Placeholder text</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e70d4ff7261152c72f6d2141438b11f825500bc09588a0e2da1e937abe3be39a?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&"
              className="aspect-square object-contain object-center w-5 fill-neutral-700 stroke-[0.5px] stroke-neutral-700 overflow-hidden shrink-0 max-w-full"
            />
          </div>
          <div className="items-stretch bg-amber-600 bg-opacity-0 self-stretch flex justify-between gap-1 px-5 py-6">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/78b4743244cc1373e2c8323eb2f556c9488ef339f9cbe55a6bdf28ddfa78e4d6?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&"
              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/225c5626a73bfc1e7d6a32b641397eda4cae0ba19966d5d87cc97d963be4718c?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&"
              className="aspect-[1.33] object-contain object-center w-2 fill-white overflow-hidden self-center shrink-0 max-w-full my-auto"
            />
          </div>
        </div>
        <div className="bg-neutral-500 self-stretch flex w-full flex-col justify-center items-center px-16 max-md:max-w-full max-md:px-5">
          <div className="flex items-center justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
            <div className="text-white text-base font-extrabold grow whitespace-nowrap my-auto">
              About the Book
            </div>
            <div className="self-stretch flex items-center justify-between gap-0 max-md:max-w-full max-md:flex-wrap">
              <div className="text-white text-base font-extrabold grow whitespace-nowrap my-auto">
                Read Now
              </div>
              <div className="text-white text-base font-extrabold whitespace-nowrap items-stretch bg-neutral-500 self-stretch grow justify-center px-5 py-6 max-md:pl-5">
                Watch Vídeo
              </div>
              <div className="text-neutral-500 text-base font-extrabold whitespace-nowrap items-stretch bg-white self-stretch grow justify-center px-5 py-6 rounded-xl max-md:pl-5">
                Check Activities
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[1201px] mt-10 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col items-stretch max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/abecf56af657fa88b56a019b1a4c1e1b57d0bd41b9ceb82924064ce0c69f78dc?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/abecf56af657fa88b56a019b1a4c1e1b57d0bd41b9ceb82924064ce0c69f78dc?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/abecf56af657fa88b56a019b1a4c1e1b57d0bd41b9ceb82924064ce0c69f78dc?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/abecf56af657fa88b56a019b1a4c1e1b57d0bd41b9ceb82924064ce0c69f78dc?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/abecf56af657fa88b56a019b1a4c1e1b57d0bd41b9ceb82924064ce0c69f78dc?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/abecf56af657fa88b56a019b1a4c1e1b57d0bd41b9ceb82924064ce0c69f78dc?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/abecf56af657fa88b56a019b1a4c1e1b57d0bd41b9ceb82924064ce0c69f78dc?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/abecf56af657fa88b56a019b1a4c1e1b57d0bd41b9ceb82924064ce0c69f78dc?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&"
                  className="aspect-[1.34] object-contain object-center w-full overflow-hidden"
                />
                <div className="flex items-stretch justify-between gap-5 mt-5 px-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/83b0b7edca6e54cd8e5df013d6ff4bb140915cde09bac25aecf6b9ff82d53884?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/83b0b7edca6e54cd8e5df013d6ff4bb140915cde09bac25aecf6b9ff82d53884?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/83b0b7edca6e54cd8e5df013d6ff4bb140915cde09bac25aecf6b9ff82d53884?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/83b0b7edca6e54cd8e5df013d6ff4bb140915cde09bac25aecf6b9ff82d53884?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/83b0b7edca6e54cd8e5df013d6ff4bb140915cde09bac25aecf6b9ff82d53884?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/83b0b7edca6e54cd8e5df013d6ff4bb140915cde09bac25aecf6b9ff82d53884?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/83b0b7edca6e54cd8e5df013d6ff4bb140915cde09bac25aecf6b9ff82d53884?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/83b0b7edca6e54cd8e5df013d6ff4bb140915cde09bac25aecf6b9ff82d53884?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&"
                    className="aspect-[1.33] object-contain object-center w-[100px] overflow-hidden shrink-0 max-w-full"
                  />
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/83b0b7edca6e54cd8e5df013d6ff4bb140915cde09bac25aecf6b9ff82d53884?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/83b0b7edca6e54cd8e5df013d6ff4bb140915cde09bac25aecf6b9ff82d53884?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/83b0b7edca6e54cd8e5df013d6ff4bb140915cde09bac25aecf6b9ff82d53884?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/83b0b7edca6e54cd8e5df013d6ff4bb140915cde09bac25aecf6b9ff82d53884?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/83b0b7edca6e54cd8e5df013d6ff4bb140915cde09bac25aecf6b9ff82d53884?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/83b0b7edca6e54cd8e5df013d6ff4bb140915cde09bac25aecf6b9ff82d53884?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/83b0b7edca6e54cd8e5df013d6ff4bb140915cde09bac25aecf6b9ff82d53884?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/83b0b7edca6e54cd8e5df013d6ff4bb140915cde09bac25aecf6b9ff82d53884?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&"
                    className="aspect-[1.33] object-contain object-center w-[100px] overflow-hidden shrink-0 max-w-full"
                  />
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/83b0b7edca6e54cd8e5df013d6ff4bb140915cde09bac25aecf6b9ff82d53884?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/83b0b7edca6e54cd8e5df013d6ff4bb140915cde09bac25aecf6b9ff82d53884?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/83b0b7edca6e54cd8e5df013d6ff4bb140915cde09bac25aecf6b9ff82d53884?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/83b0b7edca6e54cd8e5df013d6ff4bb140915cde09bac25aecf6b9ff82d53884?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/83b0b7edca6e54cd8e5df013d6ff4bb140915cde09bac25aecf6b9ff82d53884?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/83b0b7edca6e54cd8e5df013d6ff4bb140915cde09bac25aecf6b9ff82d53884?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/83b0b7edca6e54cd8e5df013d6ff4bb140915cde09bac25aecf6b9ff82d53884?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/83b0b7edca6e54cd8e5df013d6ff4bb140915cde09bac25aecf6b9ff82d53884?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&"
                    className="aspect-[1.33] object-contain object-center w-[100px] overflow-hidden shrink-0 max-w-full"
                  />
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b4e0a222564bdf2a33156802b3f3e199c5a2e15f8c54698cf7221a071d58b828?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4e0a222564bdf2a33156802b3f3e199c5a2e15f8c54698cf7221a071d58b828?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4e0a222564bdf2a33156802b3f3e199c5a2e15f8c54698cf7221a071d58b828?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4e0a222564bdf2a33156802b3f3e199c5a2e15f8c54698cf7221a071d58b828?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4e0a222564bdf2a33156802b3f3e199c5a2e15f8c54698cf7221a071d58b828?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4e0a222564bdf2a33156802b3f3e199c5a2e15f8c54698cf7221a071d58b828?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4e0a222564bdf2a33156802b3f3e199c5a2e15f8c54698cf7221a071d58b828?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4e0a222564bdf2a33156802b3f3e199c5a2e15f8c54698cf7221a071d58b828?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&"
                    className="aspect-[0.53] object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col items-stretch px-5 max-md:max-w-full max-md:mt-10">
                <div className="flex justify-between gap-5 items-start max-md:max-w-full max-md:flex-wrap">
                  <div className="overflow-hidden text-neutral-500 text-ellipsis text-xl font-extrabold grow shrink basis-auto">
                    Activity Title Example 1
                  </div>
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/30d3c28d-5eee-4a48-8589-7a5ef56716ad?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/30d3c28d-5eee-4a48-8589-7a5ef56716ad?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/30d3c28d-5eee-4a48-8589-7a5ef56716ad?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/30d3c28d-5eee-4a48-8589-7a5ef56716ad?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/30d3c28d-5eee-4a48-8589-7a5ef56716ad?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/30d3c28d-5eee-4a48-8589-7a5ef56716ad?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/30d3c28d-5eee-4a48-8589-7a5ef56716ad?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/30d3c28d-5eee-4a48-8589-7a5ef56716ad?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&"
                    className="aspect-square object-contain object-center w-[37px] fill-amber-600 stroke-[1px] stroke-amber-600 overflow-hidden self-stretch shrink-0 max-w-full"
                  />
                </div>
                <div className="text-amber-600 text-base mt-8 max-md:max-w-full">
                  Description
                </div>
                <div className="overflow-hidden text-neutral-500 text-ellipsis whitespace-nowrap text-xl grow shrink basis-auto justify-between gap-5 mt-2.5 pt-1 items-start max-md:max-w-full max-md:flex-wrap">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  sagittis tristique venenatis. Aliquam vel cursus nunc. Etiam
                  commodo aliquam eleifend. Vestibulum aliquet tellus metus, et
                  rutrum urna fermentum ac. Ut luctus viverra metus in finibus.
                  Donec dapibus consequat mauris. In quis volutpat justo, in
                  laoreet lectus. Nulla efficitur nisi ac ex suscipit viverra.
                  Fusce pharetra facilisis malesuada. Sed scelerisque augue sed
                  ligula accumsan, a sodales ipsum tempus. Vestibulum eget augue
                  in mi maximus lobortis. Nulla facilisi. Cras nec felis
                  fermentum, bibendum nibh sit amet, semper elit. Nulla
                  efficitur nisi ac ex suscipit viverra. Fusce pharetra
                  facilisis malesuada. Sed scelerisque augue sed ligula
                  accumsan, a sodales ipsum tempus. Vestibulum eget augue in mi
                  maximus lobortis. Nulla facilisi. Cras nec felis fermentum,
                  bibendum nibh sit amet, semper elit.
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch bg-white flex w-[22px] max-w-full flex-col mt-14 pt-1 pb-12 px-1 rounded-3xl border-2 border-solid border-neutral-500 self-end max-md:hidden max-md:mt-10">
                <div className="bg-amber-600 flex shrink-0 h-[100px] flex-col mb-24 rounded-xl max-md:mb-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="z-[1] flex w-full max-w-[1159px] flex-col items-stretch mt-20 max-md:max-w-full max-md:mt-10">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9fb02f7635a9d80e8d6a2f834b4321626bd1c0cd482a63643d1dbc77f1290cf0?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&"
          className="aspect-square object-contain object-center w-[37px] fill-amber-600 stroke-[1px] stroke-amber-600 overflow-hidden mt-0 max-w-full self-end max-md:mt-0"
        />
      </div>
      <div className="self-stretch flex mt-0 w-full flex-col pt-12 pb-3 px-16 items-end max-md:max-w-full max-md:px-5">
        <div className="flex w-[779px] max-w-full items-stretch justify-between gap-5 mr-16 mt-8 max-md:flex-wrap max-md:mr-2.5">
          <div className="text-white text-center text-xl grow shrink basis-auto">
            © 2023 Storytail. All Rights Reserved
          </div>
          <div className="items-stretch flex gap-4 self-start">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d75169f73780defce60e180405c2ed62658558dd3fb4ab7c1da0411741371664?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&"
              className="aspect-square object-contain object-center w-3.5 overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9452a8b3361df9ec475edae49eba6032044a553580eac87d827a8dd495835e50?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&"
              className="aspect-[1.21] object-contain object-center w-[17px] fill-white overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b38e97d36fe14d64e8401fce7375a8755c14e42b0d3c5e6e7259067fa26b282e?apiKey=7eda2d6e2dfe497fa6a5eeeafe1a9558&"
              className="aspect-square object-contain object-center w-3.5 fill-white overflow-hidden shrink-0 max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
