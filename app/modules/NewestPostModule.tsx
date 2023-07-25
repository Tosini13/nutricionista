import { ButtonLink } from "~/components/form/Button";
import { ArrowLeftIcon } from "~/components/icons";
import Paragraph from "~/components/sections/Paragraph";
import { PostType } from "~/routes/blog";
import { formatDate } from "~/utils/formatDate";

type NewestPostModulePropsType = {
  post: PostType;
};

const NewestPostModule: React.FC<NewestPostModulePropsType> = ({ post }) => {
  return (
    <div
      data-testid="newest_post_module"
      className="grid grid-cols-1 gap-x-10 md:grid-cols-[40%_auto]"
    >
      <div className="col-span-1 md:order-2">
        <div className="overflow-hidden">
          <img
            src={post.imgSrc}
            alt="blog image"
            height="100%"
            width="auto"
            className="ml-auto max-h-[300px] rounded-3xl"
          />
        </div>
      </div>
      <div className="col-span-1 space-y-6 pt-10 md:order-1">
        <h1 className="text-xl font-semibold leading-tight md:text-2xl lg:text-4xl">
          {post.title}
        </h1>
        <Paragraph className="text-sm font-medium leading-none text-gray">
          {formatDate(post.date)}
        </Paragraph>
        <ButtonLink
          className={"group mx-auto w-full sm:w-fit md:ml-0"}
          href="#contact"
        >
          Leer mas
          <ArrowLeftIcon className="ml-3 h-4 w-4 rotate-180 transition-all duration-300 group-hover:ml-5 group-hover:-mr-2 [&_path]:fill-[#FFF]" />
        </ButtonLink>
      </div>
    </div>
  );
};

export default NewestPostModule;
