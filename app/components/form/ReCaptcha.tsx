type ReCaptchaPropsType = {
  siteKey?: string;
  error?: string | null;
};

const ReCaptcha: React.FC<ReCaptchaPropsType> = ({ siteKey, error }) => {
  return (
    <div data-test-id="re_captcha" className="relative py-[1.1rem]">
      <div
        className="g-recaptcha h-[75px] w-[300px]"
        data-sitekey={siteKey}
      ></div>
      {error && (
        <p className="absolute right-0 bottom-0 translate-y-[100%] text-sm text-red-400">
          Este campo es obligatorio
        </p>
      )}
    </div>
  );
};

export default ReCaptcha;
