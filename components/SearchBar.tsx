"use client"

import React, { useState } from "react"
import { SearchManufacturer } from "./"
import Image from "next/image"
import { useRouter } from "next/navigation"

const SearchButton = ({ otherClasses } : { otherClasses : string}) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image src={'/magnifying-glass.svg'}
    alt="magnifying glass"
    width={40}
    height={40}
    className=" object-contain"
    />
  </button>
)

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('')
  const [model, setModel] = useState('')
  const router = useRouter()

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (manufacturer === '' && model === '') {
      return alert('Please fill in the search');
    }

    updateSearchParams(manufacturer.toLowerCase(), model.toLowerCase()); // update search params. see line 36 - 61
    // as soon as you update the search params, make Nextjs to automatically refetch the data and to do this,
    // go back to the page.tsx were we are fetching the data in the first place and get all the data from search params
  }

  const updateSearchParams = ( model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    // if there was something here before we need to know it and store it right the we want to update or delete it
    if (model) {
      searchParams.set('model', model);
    } else {
      searchParams.delete('model');
    }

    if (manufacturer) {
      searchParams.set('manufacturer', manufacturer);
    } else {
      searchParams.delete('manufacturer');
    }
    // now we have gotten the new search params

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    // we are taking the current pathname, appending all of this search params to it and coming to the final pathname
    // or the final URL and then we do a router.push(newPathname). Remember to import the router from "next/navigation" 
    // call the router as a hook i.e const router = useRouter() as seen in line 22
    // remember to call the updateSearchParams function in your handleSearch function

    router.push(newPathname, {scroll: false});
  }

  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer 
              manufacturer={manufacturer}
              setManuFacturer={setManufacturer}
            />
            <SearchButton otherClasses={` sm:hidden`}/>
        </div>

        <div className="searchbar__item">
          <Image 
          src={'/model-icon.png'}
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
          />
          <input 
          type="text"
          name="model"
          value={model}
          onChange={(event) => setModel(event.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
          />
          <SearchButton otherClasses="sm:hidden"/>
        </div>
          <SearchButton otherClasses="max-sm:hidden"/>
    </form>
  )
}

export default SearchBar