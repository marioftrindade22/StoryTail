import React, { useState } from "react";

const ProfileCrudForm = (props) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthdate: "",
    username: "",
    email: "",
    plan: "Free", // Default plan
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Data sent successfully!");

        // Optionally, you can reset the form after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          birthdate: "",
          username: "",
          email: "",
          plan: "Free",
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
    <div className="flex grow basis-[0%] flex-col items-stretch self-start max-md:max-w-full">
      <div className="mt-5 mx-9 max-md:max-w-full max-md:mr-2.5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[29%] max-md:w-full max-md:ml-0">
            <span className="flex grow flex-col items-stretch max-md:mt-9">
              <div className="text-indigo-900 text-4xl">User</div>
              <div className="text-amber-600 text-base font-bold mt-11 max-md:mt-10">
                Personal Information
              </div>
              <div className="text-indigo-900 text-base font-semibold mt-7">
                First Name
              </div>
              <input
                placeholder="First Name..."
                type="text"
                className="text-black text-base whitespace-nowrap justify-center shadow-sm bg-gray-200 mt-4 pl-8 pr-16 py-2.5 rounded-xl items-start max-md:px-5"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </span>
          </div>
          <div className="flex flex-col items-stretch w-[71%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col mt-2.5 items-end max-md:max-w-full max-md:mt-10">
            <button
                type="submit"
                onClick={handleSubmit}
                className="text-white text-base font-extrabold whitespace-nowrap justify-center items-stretch bg-amber-600 px-8 py-2 rounded-xl max-md:px-5"
              >
                Save
              </button>
              <div className="self-stretch flex items-stretch justify-between gap-5 mt-20 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                <span className="flex grow basis-[0%] flex-col items-stretch">
                  <div className="text-indigo-900 text-base font-semibold">
                    Last Name
                  </div>
                  <input
                placeholder="Last Name..."
                type="text"
                className="text-black text-base whitespace-nowrap justify-center shadow-sm bg-gray-200 mt-4 pl-8 pr-16 py-2.5 rounded-xl items-start max-md:px-5"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
                </span>
                <span className="flex grow basis-[0%] flex-col items-stretch self-start">
                  <div className="text-indigo-900 text-base font-semibold">
                    Birthdate
                  </div>
                  <input
                placeholder="BirthDate..."
                type="date"
                className="text-black text-base whitespace-nowrap justify-center shadow-sm bg-gray-200 mt-4 pl-8 pr-16 py-2.5 rounded-xl items-start max-md:px-5"
                name="birthdate"
                value={formData.birthdate}
                onChange={handleInputChange}
              />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 mx-9 max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[30%] max-md:w-full max-md:ml-0">
            <span className="flex grow flex-col items-stretch max-md:mt-8">
              <div className="text-amber-600 text-base font-bold">
                Account Information
              </div>
              <div className="text-indigo-900 text-base font-semibold mt-7">
                Username
              </div>
              <input
                placeholder="username..."
                type="text"
                className="text-black text-base whitespace-nowrap justify-center shadow-sm bg-gray-200 mt-4 pl-8 pr-16 py-2.5 rounded-xl items-start max-md:px-5"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </span>
          </div>
          <div className="flex flex-col items-stretch w-[37%] ml-5 max-md:w-full max-md:ml-0">
            <span className="flex grow flex-col items-stretch mt-10 max-md:mt-10">
              <div className="text-indigo-900 text-base font-semibold">
                Email
              </div>
              <input
                placeholder="Email..."
                type="text"
                className="text-black text-base whitespace-nowrap justify-center shadow-sm bg-gray-200 mt-4 pl-8 pr-16 py-2.5 rounded-xl items-start max-md:px-5"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </span>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <span className="flex grow flex-col items-stretch mt-10 max-md:mt-10">
              <div className="text-indigo-900 text-base font-semibold">
                Plan
              </div>
              <select 
              className="text-black text-base whitespace-nowrap justify-center shadow-sm bg-gray-200 mt-4 pl-8 pr-16 py-2.5 rounded-xl items-start max-md:px-5"
              name="plan"
              value={formData.plan}
              onChange={handleInputChange}>

              <option value="Free">Free</option>
              <option value="Premium">Premium</option>
              <option value="Plus">Plus</option>
              
              </select>
            </span> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCrudForm;