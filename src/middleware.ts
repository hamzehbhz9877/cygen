import {NextResponse} from "next/server";
import {fetchAPi} from "@/hooks/fetch";

export async function middleware(req) {


    const res = await fetchAPi({url:'https://api.cygenco.com/api/AdvanceRedirect/RedirectRecords'});


    const redirect = res.find((redirect) => decodeURIComponent(req.nextUrl.pathname) === redirect.OldUrl);


    if (redirect) {
        const statusCode = redirect.RedirectType === 301 ? 307 : 308

        if (redirect.NewUrl.startsWith('http')) {
            return NextResponse.redirect(new URL(redirect.NewUrl), statusCode);
        }
        return NextResponse.redirect(new URL(redirect.NewUrl, req.url), statusCode);
    }

    const response = NextResponse.next()

    return response
}