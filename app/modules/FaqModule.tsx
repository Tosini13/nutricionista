import Faq from "~/components/faq/Faq";
import Section from "~/components/sections/Section";
import SectionTitle from "~/components/sections/SectionTitle";

export type FAQType = {
  id: string;
  question: string;
  answer: string;
};

type FaqModulePropsType = {
  faqs: Array<FAQType>;
};

const FaqModule: React.FC<FaqModulePropsType> = ({ faqs }) => {
  return (
    <Section
      data-test-id="faq_module"
      id="faq"
      className="mx-auto max-w-screen-lg"
    >
      <SectionTitle className="text-center text-secondary">FAQ</SectionTitle>
      <div className="space-y-6">
        {faqs.map((faq) => (
          <Faq key={faq.id} faq={faq} />
        ))}
      </div>
    </Section>
  );
};

export default FaqModule;
