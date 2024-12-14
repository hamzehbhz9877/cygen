import {ProductsListByGetTagProducts} from "@/services/Catalog";
import Catalog from "@/app/(catalog)/_components/catalog";
import {Metadata} from "next";


export const dynamic = "force-dynamic";
export const revalidate = 0

export async function generateMetadata({params, searchParams}: any): Promise<Metadata> {
    const tag: catalog = await ProductsListByGetTagProducts({productTagSeName: decodeURIComponent(params.code), ...searchParams})
    return {
        title: tag?.MetaTitle,
        description: tag?.MetaDescription,
        keywords: tag?.MetaKeywords,
    };
}

export default async function Home({searchParams, params}: any) {

    const tag: catalog = await ProductsListByGetTagProducts({productTagSeName: decodeURIComponent(params.code), ...searchParams})

    return (
        <div className="main-page container">
            <Catalog searchParams={searchParams} category={tag}/>
            {tag.JsonLd ?
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{__html: JSON.stringify(tag.JsonLd)}}
                /> : ""}
        </div>
    );
}
