import React from 'react';
import {GetHomepageManufacturers} from "@/services/Home";
import Brands from "@/app/brands/_components/brands";

const BrandsPage = async () => {
    const homepageManufacturers = await GetHomepageManufacturers()

    return (
            <Brands data={homepageManufacturers}/>
    );
};

export default BrandsPage;