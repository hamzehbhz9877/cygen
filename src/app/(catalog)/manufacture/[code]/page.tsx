import {ProductsListByManufacturer} from "@/services/Catalog";
import Catalog from "@/app/(catalog)/_components/catalog";
import {Metadata} from "next";


export const dynamic = "force-dynamic";
export const revalidate = 0

export async function generateMetadata({params,searchParams}: any): Promise<Metadata> {
    const manufacture:catalog=await ProductsListByManufacturer({manufacturerSeName:decodeURIComponent(params.code),...searchParams})
    return {
        title: manufacture?.MetaTitle,
        description: manufacture?.MetaDescription,
        keywords: manufacture?.MetaKeywords,
    };
}

export default async function Home({searchParams,params}:any) {

    const manufacture:catalog = await ProductsListByManufacturer({manufacturerSeName:decodeURIComponent(params.code),...searchParams})

    return (
        <div className="main-page container">
                <Catalog searchParams={searchParams} category={manufacture}/>
            {manufacture.JsonLd?
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(manufacture.JsonLd)}}
            />:""}
        </div>
    );
}
