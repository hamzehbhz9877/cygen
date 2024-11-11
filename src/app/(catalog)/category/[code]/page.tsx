import {ProductsListByCategory} from "@/services/Catalog";
import Catalog from "@/app/(catalog)/_components/catalog";
import {Metadata} from "next";


export const dynamic = "force-dynamic";
export const revalidate = 0

export async function generateMetadata({params,searchParams}: any): Promise<Metadata> {
    const category:catalog=await ProductsListByCategory({categorySeName:decodeURIComponent(params.code),...searchParams})
    return {
        title: category?.MetaTitle,
        description: category?.MetaDescription,
        keywords: category?.MetaKeywords,
    };
}


export default async function Home({searchParams,params}:any) {

    const category:catalog = await ProductsListByCategory({categorySeName:decodeURIComponent(params.code),...searchParams})

    return (
        <div className="main-page container">
                <Catalog searchParams={searchParams} category={category}/>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(category.JsonLd)}}
            />
        </div>
    );
}
