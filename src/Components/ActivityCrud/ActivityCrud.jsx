import React, { useState, useEffect } from "react";

export default function Activity(props) {
  const [formData, setFormData] = useState({
    title: "",
    selectedBook: "", // Default selected book
  });

  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books from the API
    const fetchBooks = async () => {
      try {
        const response = await fetch("/api/books");
        if (response.ok) {
          const data = await response.json();
          setBooks(data); // Assuming the API response contains an array of books
        } else {
          console.error("Failed to fetch books");
        }
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/activities", {
        method: "POST", // Change to "PUT" or "PATCH" for updating
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Data sent successfully!");

        // Optionally, you can reset the form after successful submission
        setFormData({
          title: "",
          selectedBook: "",
        });

        // Handle success, e.g., redirect or show a success message
      } else {
        console.error("Failed to send data");
        // Handle error, e.g., show an error message
      }
    } catch (error) {
      console.error("Error sending data:", error);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <span className="flex flex-col mt-6 px-8 items-start max-md:max-w-full max-md:px-5 pr-12  ">
      <span className="self-stretch flex items-stretch justify-between gap-5 pr-3 max-md:max-w-full max-md:flex-wrap">
        <div className="text-indigo-900 text-4xl">Activity</div>
        <button
          onClick={handleSubmit} // Attach the handleSubmit function to the click event
          className="text-white text-base font-extrabold whitespace-nowrap justify-center items-stretch bg-amber-600 mt-2 px-5 py-2 rounded-xl self-start max-md:pl-5 mx-12 my-12"
        >
          Save
        </button>
      </span>
      <div className="text-amber-600 text-base font-bold self-stretch mt-10 max-md:max-w-full">
        Main Information
      </div>
      <div className="flex w-[718px] max-w-full items-stretch justify-between gap-5 mt-7 max-md:flex-wrap">
        <span className="flex grow basis-[0%] flex-col items-stretch">
          <div className="text-indigo-900 text-base font-semibold mt-7">
            Title
          </div>
          <input
            placeholder="Title..."
            type="text"
            className="text-black text-base whitespace-nowrap justify-center shadow-sm bg-gray-200 mt-4 pl-8 pr-16 py-2.5 rounded-xl items-start max-md:px-5"
          />
        </span>
        <span className="flex grow basis-[0%] flex-col items-stretch self-start ">
          <span className="flex grow flex-col items-stretch mt-10 max-md:mt-10">
            <div className="text-indigo-900 text-base font-semibold">
              Book
            </div>
            <select
              value={formData.selectedBook}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  selectedBook: e.target.value,
                }))
              }
              className="text-black text-base whitespace-nowrap justify-center shadow-sm bg-gray-200 mt-1 pl-8 pr-16 py-2.5 rounded-xl items-start max-md:px-5"
            >
              {books.map((book) => (
                <option key={book.id} value={book.name}>
                  {book.name}
                </option>
              ))}
            </select>
          </span>
        </span>
      </div>
      <div className="text-indigo-900 text-base font-semibold self-stretch mt-8 max-md:max-w-full">
        Description
      </div>
      <span className="justify-center shadow-sm bg-white flex w-[722px] max-w-full gap-5 mt-5 px-4 py-2.5 rounded-xl items-start max-md:flex-wrap">
        <div className="overflow-y-auto w-full max-h-[200px] px-4 py-2.5 rounded-xl max-md:max-w-full">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum auctor dui sed egestas. Mauris facilisis metus elit, a luctus diam varius in. Praesent pellentesque orci eu nisi malesuada tempus. Aliquam finibus diam egestas, porttitor dui quis, ornare risus. Nullam vel urna ligula. Aliquam id nunc diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse eu leo ultricies mauris dignissim iaculis. Etiam sed ante quis metus sollicitudin gravida. Nunc porta aliquet diam, eget pellentesque diam cursus at. Duis mi turpis, aliquet ut elementum at, pellentesque vel erat. Integer in nulla mi. Proin vitae diam id tortor suscipit facilisis. Ut urna eros, mattis vel sagittis aliquam, venenatis ut nunc.

            Aenean at aliquam ex. Sed massa libero, mollis nec sagittis eget, elementum vitae odio. Nam felis lacus, ullamcorper non ultrices id, gravida eu turpis. Pellentesque bibendum accumsan dictum. Cras eget malesuada enim. Aenean ultricies vehicula metus ut consequat. Donec non urna neque. Nunc semper nulla nulla, vitae hendrerit ante tempor vel. Proin nec est pellentesque, pharetra eros vitae, ullamcorper dui. Morbi et augue viverra, ultricies eros ac, ullamcorper tortor. Nam hendrerit porttitor metus, vel consectetur elit iaculis vitae. Morbi in rhoncus nisi. Ut eu nisl et tellus aliquam dignissim nec suscipit lacus. Sed feugiat tincidunt enim ut ultricies. Pellentesque porttitor ipsum vel felis tincidunt tincidunt.

            Nam nec posuere lorem. Vestibulum a aliquam risus, id vestibulum leo. Phasellus molestie fermentum hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur tempor aliquam eros, ac congue orci scelerisque eget. Pellentesque porta turpis eget vestibulum faucibus. Quisque eu est iaculis purus dictum consectetur id sed urna. Etiam semper felis vel pulvinar condimentum. In mollis justo eu risus molestie rhoncus.

            Donec lorem tortor, interdum a dignissim ac, imperdiet vel ipsum. Aliquam condimentum enim non magna dictum cursus. Nunc sed massa lacus. Vestibulum accumsan mauris in venenatis laoreet. Nulla pellentesque, ipsum nec eleifend aliquet, arcu sapien luctus lorem, eget venenatis nulla magna at nunc. Etiam lacus mauris, hendrerit in nisi ut, iaculis cursus metus. Mauris et tortor eget elit dictum consectetur. Donec vulputate, turpis id pharetra ornare, lectus massa sagittis ipsum, sit amet facilisis enim ligula sit amet lacus. Duis porttitor ultrices enim at tincidunt. Integer aliquam dolor ac massa mattis ornare. Vivamus maximus commodo elementum. Mauris in nisl interdum, fermentum metus non, rhoncus enim. Fusce elementum auctor elit, ut rutrum massa.

            In nec finibus libero. Aliquam eleifend consequat eleifend. Nullam vel ullamcorper dolor, sed sollicitudin nulla. In hac habitasse platea dictumst. Donec vel est in nisl semper aliquet egestas id nunc. Aenean euismod felis risus, sit amet tempus nulla dignissim non. Aliquam nisl nisi, porta sed luctus interdum, facilisis in quam.
            </p>  
        </div>
      </span>
      <div className="text-amber-600 text-base font-bold self-stretch mt-12 max-md:max-w-full max-md:mt-10">
        Images
      </div>
      <div className="shadow-sm bg-zinc-100 flex w-[222px] max-w-full flex-col justify-center items-center mt-5 px-16 py-12 rounded-xl max-md:px-5">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/febb6877543ca267a2d6edc5b8853fa28909298cc817a7fdd379bcf1875d765a?apiKey=fd59c5029e504504992c88df427ec386&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/febb6877543ca267a2d6edc5b8853fa28909298cc817a7fdd379bcf1875d765a?apiKey=fd59c5029e504504992c88df427ec386&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/febb6877543ca267a2d6edc5b8853fa28909298cc817a7fdd379bcf1875d765a?apiKey=fd59c5029e504504992c88df427ec386&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/febb6877543ca267a2d6edc5b8853fa28909298cc817a7fdd379bcf1875d765a?apiKey=fd59c5029e504504992c88df427ec386&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/febb6877543ca267a2d6edc5b8853fa28909298cc817a7fdd379bcf1875d765a?apiKey=fd59c5029e504504992c88df427ec386&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/febb6877543ca267a2d6edc5b8853fa28909298cc817a7fdd379bcf1875d765a?apiKey=fd59c5029e504504992c88df427ec386&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/febb6877543ca267a2d6edc5b8853fa28909298cc817a7fdd379bcf1875d765a?apiKey=fd59c5029e504504992c88df427ec386&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/febb6877543ca267a2d6edc5b8853fa28909298cc817a7fdd379bcf1875d765a?apiKey=fd59c5029e504504992c88df427ec386&"
          className="aspect-square object-contain object-center w-10 overflow-hidden max-w-full mt-20 mb-14 max-md:my-10"
        />
      </div>
    </span>
  );
}
