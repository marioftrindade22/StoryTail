import React, { useState } from 'react';

const ProfileTable = () => {
  const User = [
    {
      Name: 'Elena Pereira',
      UserName: 'Lena',
      Email: 'elenapereira@gmail.com',
      AgeGroup: '0-2 years old',
      BirthDate: '2021-12-21',
      Plan: 'Premium',
      AverageTime: '3.65 hours',
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6c7d5bc94203b3654187452ce5c46776c457e8678ebf9d72a547698f690e42c3?apiKey=fd59c5029e504504992c88df427ec386&width=100'
    },
    {
        Name: 'Julia Pinheiro',
        UserName: 'Julia',
        Email: 'juliapinheiro@gmail.com',
        AgeGroup: '3-5 years old',
        BirthDate: '2019-10-18',
        Plan: 'Free',
        AverageTime: '5.98 hours',
        image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6c7d5bc94203b3654187452ce5c46776c457e8678ebf9d72a547698f690e42c3?apiKey=fd59c5029e504504992c88df427ec386&width=100'
    },
    {
        Name: 'Hugo Leandro',
        UserName: 'Bushi',
        Email: 'hugoleandro@gmail.com',
        AgeGroup: '3-5 years old',
        BirthDate: '2020-07-03',
        Plan: 'Free',
        AverageTime: '2.23 hours',
        image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6c7d5bc94203b3654187452ce5c46776c457e8678ebf9d72a547698f690e42c3?apiKey=fd59c5029e504504992c88df427ec386&width=100'
    },
    {
        Name: 'Ricardo Pereira',
        UserName: 'Ricas',
        Email: 'ricardopereira@gmail.com',
        AgeGroup: '6-8 years old',
        BirthDate: '2016-05-29',
        Plan: 'Premium',
        AverageTime: '3.11 hours',
        image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6c7d5bc94203b3654187452ce5c46776c457e8678ebf9d72a547698f690e42c3?apiKey=fd59c5029e504504992c88df427ec386&width=100'
    },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const UserPerPage = 5; // You can adjust this based on your needs
  const totalUser = User.length;

  // Calculate the index range for the current page
  const indexOfLastUser = currentPage * UserPerPage;
  const indexOfFirstUser = indexOfLastUser - UserPerPage;
  const currentaUser = User.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleActionClick = (User) => {
    // Implement your logic for edit or delete
    console.log(`Action clicked for book: ${User.title}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="rounded-xl shadow-lg overflow-hidden">
        <div className="bg-white flex flex-col items-stretch pl-7 pr-6 py-5 max-md:px-5">
          <div className="flex justify-between items-center mb-3.5 px-3.5">
            <div className="flex items-center">
            <h1 className="text-4xl font-extrabold font-montserrat text-tabela">Users table</h1>
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
                <th className="py-2 px-4 text-left">Name</th>
                <th className="py-2 px-4 text-left">UserName</th>
                <th className="py-2 px-4 text-left">Email</th>
                <th className="py-2 px-4 text-left">AgeGroup</th>
                <th className="py-2 px-4 text-left">BirthDate</th>
                <th className="py-2 px-4 text-left">Plan</th>
                <th className="py-2 px-4 text-left">AverageTime</th>
                <th className="py-2 px-4"></th>
              </tr>
              <tr className="bg-violet-100 shrink-0 h-px max-md:max-w-full">
                <td colSpan="9"></td>
              </tr>
            </thead>

            <tbody>
              {currentaUser.map((User, index) => (
                <React.Fragment key={index}>
                  <tr className="bg-white text-tabela font-montserrat">
                    <td className="py-2 px-4">{User.Name}</td>
                    <td className="py-2 px-4">{User.UserName}</td>
                    <td className="py-2 px-4">{User.Email}</td>
                    <td className="py-2 px-4">{User.AgeGroup}</td>
                    <td className="py-2 px-4">{User.BirthDate}</td>
                    <td className="py-2 px-4">{User.Plan}</td>
                    <td className="py-2 px-4">{User.AverageTime}</td>
                    <td className="py-2 px-4">
                    <button
          className="flex items-center gap-2.5 px-2 py-2 rounded-xl text-white hover:bg-blue-600 transition duration-300"
          onClick={() => handleActionClick(User)}
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

export default ProfileTable;
