type ArrowLeftIconPropsType = {
  className?: string;
};

export const ArrowLeftIcon: React.FC<ArrowLeftIconPropsType> = ({
  className,
}) => {
  return (
    <svg
      data-test-id="arrow_left_icon"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M22.0219 10.5C22.8503 10.5 23.5219 11.1716 23.5219 12C23.5219 12.8284 22.8503 13.5 22.0219 13.5V10.5ZM0.961191 13.0607C0.375404 12.4749 0.375404 11.5251 0.961191 10.9393L10.5071 1.3934C11.0929 0.807611 12.0427 0.807611 12.6285 1.3934C13.2142 1.97919 13.2142 2.92893 12.6285 3.51472L4.14317 12L12.6285 20.4853C13.2142 21.0711 13.2142 22.0208 12.6285 22.6066C12.0427 23.1924 11.0929 23.1924 10.5071 22.6066L0.961191 13.0607ZM22.0219 13.5H2.02185V10.5H22.0219V13.5Z"
        fill="#E27488"
      />
    </svg>
  );
};

export const ArrowRight = () => (
  <svg
    width="18"
    height="16"
    viewBox="0 0 18 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="ml-3 [&_path]:fill-[#FFF]"
  >
    <path
      d="M2.28534 8.23775H15.6187M9.78534 2.40442L15.6187 8.23775L9.78534 14.0711"
      stroke="#FFF"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
