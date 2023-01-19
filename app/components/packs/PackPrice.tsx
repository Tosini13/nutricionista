type PackPricePropsType = {
  price: number;
  offer?: number;
};

const PackPrice: React.FC<PackPricePropsType> = ({ price, offer }) => {
  return (
    <div data-test-id="pack_price" className="flex items-center justify-center">
      <p className="mb-10 text-5xl font-bold tracking-normal text-price">
        {price}€
        {offer && (
          <span
            className="relative px-1 text-2xl text-primary
          after:absolute after:top-1/2 after:left-1/2 after:w-full after:-translate-y-[50%] after:-translate-x-[50%] after:-rotate-[20deg] after:border-b-2 after:border-primary after:content-['']"
          >
            {offer}€
          </span>
        )}
      </p>
    </div>
  );
};

export default PackPrice;
