import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

type ReCaptchaPropsType = {
  siteKey?: string;
  error?: string | null;
};

const ReCaptcha: React.FC<ReCaptchaPropsType> = ({ siteKey, error }) => {
  const reCaptchaRef = React.createRef<ReCAPTCHA>();

  return (
    <div data-test-id="re_captcha" className="relative my-[1.1rem] mb-[20px]">
      <div className="h-[75px] w-[300px]">
        <ReCAPTCHA ref={reCaptchaRef} sitekey={siteKey as string} />
      </div>
      {error && (
        <p className="absolute right-0 bottom-0 translate-y-[100%] text-sm text-red-400">
          {error === "required" ? "Este campo es obligatorio" : error}
        </p>
      )}
    </div>
  );
};

export default ReCaptcha;
