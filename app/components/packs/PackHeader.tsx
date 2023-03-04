type PackHeaderPropsType = {
  title: string;
};

const PackHeader: React.FC<PackHeaderPropsType> = ({ title }) => {
  return (
    <h3
      data-test-id="pack_header"
      className="text-center text-lg font-extrabold text-[#465342]"
    >
      {title}
    </h3>
  );
};

export default PackHeader;
