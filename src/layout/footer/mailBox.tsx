import React from 'react';

const MailBox = () => {
    return (
        <div className="foot-box mailbox">
            <span className="foot-title">رسانه های خبری ما</span>
            <div className="social-foot">
         <span className="icon-social">
          <a href="https://www.rtl-theme.com/parskala-wordpress-theme/" target="_blank" rel="nofollow"></a>
          <a href="https://www.rtl-theme.com/parskala-wordpress-theme/" target="_blank" rel="nofollow"></a>
           <a href="https://www.rtl-theme.com/parskala-wordpress-theme/" target="_blank" rel="nofollow"></a>
            <a href="https://www.rtl-theme.com/parskala-wordpress-theme/" target="_blank" rel="nofollow"></a>
            <a href="https://www.rtl-theme.com/parskala-wordpress-theme/" target="_blank" rel="nofollow"></a>
            <a href="https://www.rtl-theme.com/parskala-wordpress-theme/" target="_blank" rel="nofollow"></a>
         </span>
            </div>

            <span className="foot-title mail">در خبرنامه پر تخفیف ما عضو شوید</span>

            <form className="mail-foot prk_sms_newsletter_form">
                <input type="text" data-nonce="9fd6e81b9d" className="prk_sms_newsletter_mobile"
                       name="prk_sms_newsletter_mobile" placeholder="شماره موبایل خود را وارد نمایید."/>
                <button className="submit_newsletter_form" type="submit">ثبت</button>
            </form>
        </div>
    );
};

export default MailBox;