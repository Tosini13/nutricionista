import Button from "../form/Button";

type PackFooterPropsType = {
  recommended?: boolean;
};

const PackFooter: React.FC<PackFooterPropsType> = ({ recommended }) => {
  return (
    <div
      data-test-id="pack_footer"
      className="flex items-center justify-center"
    >
      <Button alternative={!recommended} href="#contact">
        Pide Cita
      </Button>
    </div>
  );
};

export default PackFooter;
