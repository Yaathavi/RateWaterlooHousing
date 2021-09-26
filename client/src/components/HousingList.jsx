import React, { useEffect, useContext } from "react";
import HousingFinder from "../apis/HousingFinder";
import { HousingContext } from "../context/HousingContext";

const HousingList = (props) => {
  const { housing, setHousing } = useContext(HousingContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await HousingFinder.get("/getAllhousing");
        console.log(response.data.data);
        setHousing(response.data.data.housing);
      } catch (err) {}
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto ">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-40">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Rating
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Price Range
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {housing &&
                  housing.map((housing) => {
                    return (
                      <tr key={housing.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center ">
                            <div className="flex flex-col ml-4">
                              <div className="text-lg font-medium text-gray-900">
                                {housing.name}
                              </div>
                              <div className="text-sm text-gray-900">
                                {housing.address}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="p-4 inline-flex text-2xl leading-5 font-semibold rounded-full  text-green-800">
                            3/5
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  text-lg">
                          ${housing.monthly_rent_price}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HousingList;
