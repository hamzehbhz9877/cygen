import React from 'react';
import {useSuspenseQuery} from "@tanstack/react-query";
import {GetSiteSettingsQuery} from "@/services/Common";

const TellBox = () => {

    const {data: settings} = useSuspenseQuery(GetSiteSettingsQuery)

    return (
        <div className="tell-box flex-col flex md:flex-row ">


          <span className="boxer-tells !flex">
            <span className="text-number">شماره تماس:</span>
              <div className="gap-[5px]">
            <span className="one-number">{settings.StoreContact.FirstPhoneNumber}</span>
            <span className="one-number">{settings.StoreContact.SecondPhoneNumber}</span>
              </div>
          </span>


            <span className="line-tell">|</span>


            <span className="boxer-tells">
            <span className="text-number">آدرس ایمیل:</span>
            <span className="tow-number">{settings.StoreContact.Email}</span>
          </span>
            <span className="line-tell">|</span>

            <span className="boxer-tells">
            <span className="text-number">شماره فکس:</span>
            <span className="tow-number">{settings.StoreContact.FaxNumber}</span>
          </span>

        </div>

    );
};

export default TellBox;