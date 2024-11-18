import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.scss";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import ModalContext from "@/context/modal";
import ClientReactQueryProvider from "@/utils/reactQueryProvider-client";
import Auth from "../context/authentication";
import ToastProvider from "@/utils/react-toastify-client";
import NProgressProviders from "@/utils/nprogress-client";
import {GetDynamicLinkPositions, GetDynamicLinkPositionsQuery} from "@/services/DynamicLink";
import {
    dehydrate,
    HydrationBoundary, QueryClient,
} from '@tanstack/react-query'
import {getQueryClient} from "@/utils/get-query-client";
import {GetPopularSearchTermsQuery, GetSiteSettingsQuery} from "@/services/Common";
import {GetSocialMediasQuery} from "@/services/SocialMedia";
import {GetLicenseLogosQuery} from "@/services/LicenseLogo";
import {GetAnywherePicturePositionsQuery} from "@/services/AnyWherePicture";
import {GetPopupQuery, PopupQuery} from "@/services/Popup";
import GeneralPopup from "@/context/popup";
import OverlayContext from "@/context/overlay";

const bYekan = localFont({
    src: "./fonts/YekanBakhFaNum-Regular.woff",
    variable: "--font-Yekan",
    weight: "100 900",
});

const parsKala = localFont({
    src: "./fonts/parskala.ttf",
    variable: "--font-parskaka",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Your store",
    description: null,
};

export default async function RootLayout({
                                             children,
                                         }: Readonly<{
    children: React.ReactNode;
}>) {


    const queryClient=getQueryClient()

    void queryClient.prefetchQuery(GetSiteSettingsQuery)
    void queryClient.prefetchQuery(GetSocialMediasQuery)
    void queryClient.prefetchQuery(GetLicenseLogosQuery)
    // void queryClient.prefetchQuery(GetAllActivePluginsQuery)
    void queryClient.prefetchQuery(GetPopularSearchTermsQuery)
    void queryClient.prefetchQuery(GetDynamicLinkPositionsQuery)
    void queryClient.prefetchQuery(GetAnywherePicturePositionsQuery)
    void queryClient.prefetchQuery(PopupQuery)
    void queryClient.prefetchQuery(GetPopupQuery)


    return (
        <html lang="en">
        <body
            className={`${bYekan.variable} ${parsKala.variable} antialiased`}
        >
        <ClientReactQueryProvider>
            <OverlayContext>
                <GeneralPopup>
                    <ToastProvider>
                        <Auth>
                            <ModalContext>
                                <NProgressProviders>
                                    <HydrationBoundary state={dehydrate(queryClient)}>
                                        <Header/>
                                        <main>
                                            {children}
                                        </main>
                                        <Footer/>
                                    </HydrationBoundary>
                                </NProgressProviders>
                            </ModalContext>
                        </Auth>
                    </ToastProvider>
                </GeneralPopup>
            </OverlayContext>

        </ClientReactQueryProvider>
        </body>
        </html>
    );
}
