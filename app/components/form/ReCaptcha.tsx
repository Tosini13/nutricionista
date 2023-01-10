import React from "react";

declare global {
  interface Window {
    grecaptcha: {
      execute: Function;
      getResponse: Function;
      ready: Function;
      render: Function;
      reset: Function;
    };
  }
}

type ReCaptchaPropsType = {
  siteKey?: string;
  error?: string | null;
};

const isReady = () =>
  typeof window !== "undefined" &&
  typeof window.grecaptcha !== "undefined" &&
  typeof window.grecaptcha.render === "function";

const ReCaptcha: React.FC<ReCaptchaPropsType> = ({ siteKey, error }) => {
  const [ready, setReady] = React.useState(isReady());
  const refInterval = React.useRef<NodeJS.Timer>();

  React.useEffect(() => {
    if (ready) {
      return;
    }

    const intervalId = setInterval(() => updateReadyState(), 1000);

    refInterval.current = intervalId;

    return () => clearInterval(intervalId);
  }, []);

  const updateReadyState = React.useCallback(() => {
    const isOrNot = isReady();

    if (isOrNot) {
      setReady(true);

      clearInterval(refInterval.current);
    }
  }, []);

  return (
    <div data-test-id="re_captcha" className="relative my-[1.1rem] mb-[20px]">
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
