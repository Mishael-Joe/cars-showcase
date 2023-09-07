import { MouseEventHandler } from "react";

export interface CustomButtonPros {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?:'button' | 'submit';
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface SearchManuFacturerProps {
    manufacturer: string
    setManuFacturer: (manufacturer: string) => void
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
    options: optionProps[];
}

export interface showMoreProps {
    pageNumber: number;
    isNext: boolean;
}