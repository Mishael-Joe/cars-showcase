import { CarProps, FilterPros } from "@/types";

export async function fetchCars(filters: FilterPros) {

  const { manufacturer, year, model , limit, fuel } = filters;

  // Set the required headers for the API request
  const headers = {
    'X-RapidAPI-Key': '593339e85emshd1227b6b2b51096p13bebfjsn2779a7908c13',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }

  // Set the required headers for the API request
  const response =  await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${model}&year=${year}&model=${manufacturer}&limit=${limit}&fuel_type=${fuel}`, {
      headers: headers,
  });

  // Parse the response as JSON
  const result = await response.json();

  return result;
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage"); // we can append additional information to this API to get the data
  const { make, model, year } = car; // we destructured the make, model, and the year from the car that we are going to pass to this function
  const key = 'hrjavascript-mastery';

  url.searchParams.append('customer', key); // my keys first
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]); //split with one space and get the first element out of it
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
} 


export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const updateSearchParams = ( type: string, value: string) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(window.location.search);

  // Set the specified search parameter to the given value
  searchParams.set(type, value);

  // Set the specified search parameter to the given value
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
}

export const deleteSearchParams = (type: string) => {
  // Set the specified search parameter to the given value
  const newSearchParams = new URLSearchParams(window.location.search);

  // Delete the specified search parameter
  newSearchParams.delete(type.toLocaleLowerCase());

  // Construct the updated URL pathname with the deleted search parameter
  const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;

  return newPathname;
};
