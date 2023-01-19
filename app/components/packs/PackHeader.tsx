type PackHeaderPropsType = {
  title: string;
};

const PackHeader: React.FC<PackHeaderPropsType> = ({ title }) => {
  return (
    <h5
      data-test-id="pack_header"
      className="text-center text-lg font-bold text-[#465342]"
    >
      {title}
    </h5>
  );
};

export default PackHeader;
