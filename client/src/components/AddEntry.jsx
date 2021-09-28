import React, { useState, useContext } from "react";
import { HousingContext } from "../context/HousingContext";
import HousingFinder from "../apis/HousingFinder";

const AddEntry = () => {
  const { addHousingEntry } = useContext(HousingContext);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [rent, setRent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await HousingFinder.post("/inputHousing", {
        name: name,
        address: address,
        monthly_rent_price: rent,
      });
      addHousingEntry(response.data.data.housing);
      console.log(response);
    } catch (error) {}
  };

  return (
    <div className="mb-4 rounded-2xl shadow-lg p-8 max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-around bg-white flex justify-center items-center flex-col">
      <p>
        {" "}
        If you don't see your building on this list, please feel free to add it!
        :){" "}
      </p>

      <form className="flex flex-row mt-8">
        <div class="mb-4 md:mr-4 md:mb-0">
          <label class="block mb-2 text-sm font-bold text-gray-700" for="name">
            Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
          />
        </div>
        <div class="mb-4 md:mr-4 md:mb-0">
          <label
            class="block mb-2 text-sm font-bold text-gray-700"
            for="address"
          >
            Address
          </label>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="address"
            type="text"
            placeholder="Address"
          />
        </div>
        <div class="mb-4 md:mr-4 md:mb-0">
          <label class="block mb-2 text-sm font-bold text-gray-700" for="rent">
            Monthly Rent Price
          </label>
          <input
            value={rent}
            onChange={(e) => setRent(e.target.value)}
            class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="rent"
            type="text"
            placeholder="Monthly Rent Price"
          />
        </div>
      </form>
      <div class="text-center mt-6">
        <button
          onClick={handleSubmit}
          type="submit"
          class="py-1 w-40 text-xl text-white bg-blue-900 rounded-2xl"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddEntry;
