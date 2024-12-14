import {NextResponse} from "next/server";

export async function middleware(req) {

    // const pluginsres = await fetch('https://api.cygenco.com/api/Plugin/GetAllActivePlugins')

    const res = await fetch('https://api.cygenco.com/api/AdvanceRedirect/RedirectRecords');
    const redirects = await res.json();

    const redirect = redirects.find((redirect) => decodeURIComponent(req.nextUrl.pathname) === redirect.OldUrl);

    // const token=JSON.parse( req.cookies.get('user').value).AccessToken

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