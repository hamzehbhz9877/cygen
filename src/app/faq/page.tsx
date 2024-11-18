import {GetFaq} from "@/services/Faq";
import Faq from "@/app/faq/_components/faq";


export default async function FaqPage() {

    const faq:Topic = await GetFaq()

    return (
        <div className="faq">
          <Faq data={faq}/>
        </div>
    );
}
