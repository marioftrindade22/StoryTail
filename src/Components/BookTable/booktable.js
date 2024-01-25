import React, { useState } from 'react';

const BooksTable = () => {

  const [optionsVisible, setOptionsVisible] = useState({});

  const toggleOptions = (title) => {
    setOptionsVisible((prevState) => {
      // Close options for all books
      const updatedState = Object.keys(prevState).reduce((acc, bookTitle) => {
        acc[bookTitle] = false;
        return acc;
      }, {});

      // Toggle options for the clicked book
      updatedState[title] = !prevState[title];

      return updatedState;
    });
  };

  const [Books, setBooks] = useState([]);

  useEffect(() => {
      // Fetch books from the server when the component mounts
      fetch('http://localhost:5000/api/books')
        .then(response => response.json())
        .then(data => setBooks(data))
        .catch(error => console.error('Error fetching books:', error));
    }, []);
  
  const handleDeleteClick = async (bookId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/books/${bookId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Book deleted successfully!');
        // Optionally, you can update the state to reflect the change
        // and re-fetch the books or update the currentBooks directly
        // based on your application structure
      } else {
        console.error('Failed to delete book');
      }
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 5; // You can adjust this based on your needs
  const totalBooks = books.length;

  // Calculate the index range for the current page
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleActionClick = (book) => {
    // Implement your logic for edit or delete
    console.log(`Action clicked for book: ${book.title}`);

  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="rounded-xl shadow-lg overflow-hidden">
        <div className="bg-white flex flex-col items-stretch pl-7 pr-6 py-5 max-md:px-5">
          <div className="flex justify-between items-center mb-3.5 px-3.5">
            <div className="flex items-center">
            <h1 className="text-4xl font-extrabold font-montserrat text-tabela">Books table</h1>
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
                <th className="py-2 px-4 text-left">Tag</th>
                <th className="py-2 px-4 text-left">Age Group</th>
                <th className="py-2 px-4 text-left">Pages</th>
                <th className="py-2 px-4 text-left">Access Level</th>
                <th className="py-2 px-4 text-left">Author</th>
                <th className="py-2 px-4 text-left">Active</th>
                <th className="py-2 px-4 text-left">Rating</th>
                <th className="py-2 px-4"></th>
              </tr>
              <tr className="bg-violet-100 shrink-0 h-px max-md:max-w-full">
                <td colSpan="9"></td>
              </tr>
            </thead>

            <tbody>
              {currentBooks.map((book, index) => (
                <React.Fragment key={index}>
                  <tr className="bg-white text-tabela font-montserrat">
                    <td className="py-2 px-4">{book.title}</td>
                    <td className="py-2 px-4">{book.tag}</td>
                    <td className="py-2 px-4">{book.ageGroup}</td>
                    <td className="py-2 px-4">{book.pages}</td>
                    <td className="py-2 px-4">{book.accessLevel}</td>
                    <td className="py-2 px-4">{book.author}</td>
                    <td className="py-2 px-4">{book.active}</td>
                    <td className="py-2 px-4">{book.rating}</td>
                    <td className="py-2 px-4 relative">
                    <button
                      className="flex items-center gap-2.5 px-2 py-2 rounded-xl text-white hover:bg-blue-600 transition duration-300"
                      onClick={() => toggleOptions(book.title)}
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/31d57f29969370647471f9b155529a6846a703efb4f9c51818df904c7a1639ae?apiKey=fd59c5029e504504992c88df427ec386&"
                        className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch shrink-0 max-w-full"
                        alt="Image"
                      />
                    </button>
                    {optionsVisible[book.title] && (
                    <div className="absolute left-12 mb-8 bg-white p-2 rounded shadow ">
                        <button className="block w-full text-left px-2 py-1 hover:bg-gray-100">
                        Edit
                        </button>
                        <button
                      className="block w-full text-left px-2 py-1 hover:bg-gray-100"
                      onClick={() => handleDeleteClick(book.id)}
                    >
                      Delete
                    </button>
                      </div>
                    )}
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

export default BooksTable;

