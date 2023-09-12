import { MouseEventHandler } from "react";

export interface CustomButtonPros {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?:'button' | 'submit';
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
} // an interface specifies how a specific structure should look like, what variables and values should it have

export interface SearchManuFacturerProps {
    manufacturer: string
    setManuFacturer: (manufacturer: string) => void // a function that that takes manufacturer as a string and returns nothing (void)
}

export interface CarProps {
    city_mpg: number;
    carClass: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

export interface FilterPros {
    manufacturer:  string;
    year:  number;
    fuel :string;
    limit: number;
    model: string;
}

export interface optionProps {
    title: string;
    value: string;
}

export interface CustomFilterProps {
    title: string;
    options: optionProps[]; // we are creating an interface within an interface. optionProps[] is an array
}

export interface showMoreProps {
    pageNumber: number;
    isNext: boolean;
}

export interface FilterProps {
    manufacturer?: string;
    year?: number;
    model?: string;
    limit?: number;
    fuel?: string;
  }
  
  export interface HomeProps {
    searchParams: FilterProps;
  }