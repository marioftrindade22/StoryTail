import React, { useState } from 'react';

const ActivityTable = () => {
  const activity = [
    {
      title: 'Be an artist',
      book: 'The Koala Who Could',
      description: 'Create an adorable bear using...',
      images: 3,
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6c7d5bc94203b3654187452ce5c46776c457e8678ebf9d72a547698f690e42c3?apiKey=fd59c5029e504504992c88df427ec386&width=100'
    },
    {
      title: 'Be a cook',
      book: 'Monkey Puzzle',
      description: 'Use your favourite pancake recipe...',
      images: 2,
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6c7d5bc94203b3654187452ce5c46776c457e8678ebf9d72a547698f690e42c3?apiKey=fd59c5029e504504992c88df427ec386&width=100'
    },
    {
      title: 'Be an artist',
      book: 'Giraffes Can’t Dance',
      description: 'Create an adorable bear using...',
      images: 3,
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6c7d5bc94203b3654187452ce5c46776c457e8678ebf9d72a547698f690e42c3?apiKey=fd59c5029e504504992c88df427ec386&width=100'
    },
    {
      title: 'Be a cook',
      book: 'Giraffes Can’t Dance',
      description: 'Use your favourite pancake recipe...',
      images: 2,
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6c7d5bc94203b3654187452ce5c46776c457e8678ebf9d72a547698f690e42c3?apiKey=fd59c5029e504504992c88df427ec386&width=100'
    },
    {
      title: 'Be a chef',
      book: 'Giraffes Can’t Dance',
      description: 'Use your favourite cake recipe...',
      images: 4,
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6c7d5bc94203b3654187452ce5c46776c457e8678ebf9d72a547698f690e42c3?apiKey=fd59c5029e504504992c88df427ec386&width=100'
    },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const activityPerPage = 5; // You can adjust this based on your needs
  const totalactivity = activity.length;

  // Calculate the index range for the current page
  const indexOfLastactivity = currentPage * activityPerPage;
  const indexOfFirstactivity = indexOfLastactivity - activityPerPage;
  const currentactivity = activity.slice(indexOfFirstactivity, indexOfLastactivity);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleActionClick = (activity) => {
    // Implement your logic for edit or delete
    console.log(`Action clicked for book: ${activity.title}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="rounded-xl shadow-lg overflow-hidden">
        <div className="bg-white flex flex-col items-stretch pl-7 pr-6 py-5 max-md:px-5">
          <div className="flex justify-between items-center mb-3.5 px-3.5">
            <div className="flex items-center">
            <h1 className="text-4xl font-extrabold font-montserrat text-tabela">Activities table</h1>
            </div>
            <div className="flex ml-auto items-center">
              <button className="flex items-center gap-2.5 px-4 py-2 rounded-xl border border-solid border-neutral-400">
                <span className="text-neutral-400 text-sm font-semibold leading-5 grow whitespace-nowrap mr-2">
                  Filters
                </span>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/31d57f29969370647471f9b155529a6846a703efb4f9c51818df904c7a1639ae?apiKey=fd59c5029e504504992c88df427ec386&"
                  className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                  alt="Filter Image"
                />
              </button>
              <button className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-orange-500 text-white hover:bg-blue-600 transition duration-300 ml-2">
                <span className="text-base font-bold grow whitespace-nowrap">CREATE</span>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/40af93aa37494d5ad75a6818c94b4853c3edab79f661045d4fdb2292f36bc3a5?apiKey=fd59c5029e504504992c88df427ec386&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/40af93aa37494d5ad75a6818c94b4853c3edab79f661045d4fdb2292f36bc3a5?apiKey=fd59c5029e504504992c88df427ec386&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/40af93aa37494d5ad75a6818c94b4853c3edab79f661045d4fdb2292f36bc3a5?apiKey=fd59c5029e504504992c88df427ec386&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/40af93aa37494d5ad75a6818c94b4853c3edab79f661045d4fdb2292f36bc3a5?apiKey=fd59c5029e504504992c88df427ec386&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/40af93aa37494d5ad75a6818c94b4853c3edab79f661045d4fdb2292f36bc3a5?apiKey=fd59c5029e504504992c88df427ec386&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/40af93aa37494d5ad75a6818c94b4853c3edab79f661045d4fdb2292f36bc3a5?apiKey=fd59c5029e504504992c88df427ec386&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/40af93aa37494d5ad75a6818c94b4853c3edab79f661045d4fdb2292f36bc3a5?apiKey=fd59c5029e504504992c88df427ec386&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/40af93aa37494d5ad75a6818c94b4853c3edab79f661045d4fdb2292f36bc3a5?apiKey=fd59c5029e504504992c88df427ec386&"
                  className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full self-start"
                  alt="Image description"
                />
              </button>
            </div>
          </div>

          <table className="w-full border-collapse">
            <thead>
              <tr className="text-campos font-montserrat">
                <th className="py-2 px-4 text-left">Title</th>
                <th className="py-2 px-4 text-left">Book</th>
                <th className="py-2 px-4 text-left">description</th>
                <th className="py-2 px-4 text-left">Images</th>
                <th className="py-2 px-4"></th>
              </tr>
              <tr className="bg-violet-100 shrink-0 h-px max-md:max-w-full">
                <td colSpan="9"></td>
              </tr>
            </thead>

            <tbody>
              {currentactivity.map((activity, index) => (
                <React.Fragment key={index}>
                  <tr className="bg-white text-tabela font-montserrat">
                    <td className="py-2 px-4">{activity.title}</td>
                    <td className="py-2 px-4">{activity.book}</td>
                    <td className="py-2 px-4">{activity.description}</td>
                    <td className="py-2 px-4">{activity.images}</td>
                    <td className="py-2 px-4">
                    <button
          className="flex items-center gap-2.5 px-2 py-2 rounded-xl text-white hover:bg-blue-600 transition duration-300"
          onClick={() => handleActionClick(activity)}
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/31d57f29969370647471f9b155529a6846a703efb4f9c51818df904c7a1639ae?apiKey=fd59c5029e504504992c88df427ec386&"
            className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch shrink-0 max-w-full"
            alt="Image"
          />
        </button>
                    </td>
                  </tr>
                  <tr className="bg-violet-100 shrink-0 h-px max-md:max-w-full">
                    <td colSpan="9"></td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>

          <div className="bg-violet-100 shrink-0 h-px mt-3.5 max-md:max-w-full" />
                
{/* Pagination section */}
<div className="flex justify-between items-center mt-3.5 px-3.5">
  {/* Back button on the left corner */}
  <button className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white border border-solid border-[color:var(--grey-200,#C5C5D3)] shadow-sm hover:bg-gray-300">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/79420cd85ae13a9e2495779e4bc7d6cda459b4d816dc64a607ca9248c3cbfa21?apiKey=fd59c5029e504504992c88df427ec386&"
      className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
      alt="Logo"
    />
    <span className="text-indigo-900 text-sm font-semibold leading-5 grow whitespace-nowrap">
      Back
    </span>
  </button>

  {/* Page indicator in the middle */}
  <div className="flex items-center gap-2">
    <span className="text-indigo-900 text-sm font-semibold leading-5 grow whitespace-nowrap bg-orange-500 bg-opacity-60 px-4 py-2 rounded-xl hover:bg-gray-300">
       {currentPage}
    </span>
  </div>

  {/* Next button on the right corner */}
  <button className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white border border-solid border-[color:var(--grey-200,#C5C5D3)] shadow-sm hover:bg-gray-300">
    <span className="text-indigo-900 text-sm font-semibold leading-5 grow whitespace-nowrap">
      Next
    </span>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a18f81d77d8a28205073251deea3cc1576b64a28dcdc0dc89d6c0212bd02903b?apiKey=fd59c5029e504504992c88df427ec386&"
      className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
      alt="Next Image"
    />
  </button>
</div>

        </div>
      </div>
    </div>
  );
};

export default ActivityTable;