import { CSSProperties } from "react";

export interface Bike {
    title: string;
    image: string;
    description: string;
    kf_url: string,
    price: number
}

export interface Article {
    title: string;
    content: any;
    image: string;
    url: string;
    buttonText: string,
    style?: CSSProperties
}

export interface Store {
    storeName: string,
    storeAddress: string,
    image: string,
    url: string
}

export interface NavLink {
    name: string;
    href: string;
}

export interface NavigationProps {
    menu: NavLink[];
    title?: string
}

export interface FeaturedBike {
    title: string;
    image: string;
    content: any;
    buttonText: string;
    url: string
}
