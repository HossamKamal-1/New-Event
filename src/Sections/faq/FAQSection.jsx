import {
  FAQHeadingWrapper,
  FAQSectionWrapper,
  FaqContent,
  HeadingDesc,
  HeadingTitle,
} from './style';
import { faqList } from '../../constants/data';
import AccordionList from '../../components/accordionlist';
function FAQSection() {
  return (
    <FAQSectionWrapper id="faq">
      <div className="container">
        <FAQHeadingWrapper>
          <HeadingTitle>
            Do You Have Any <span>Questions</span>?
          </HeadingTitle>
          <HeadingDesc>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora,
            Lorem ipsum dolor
          </HeadingDesc>
        </FAQHeadingWrapper>
        <FaqContent>
          <AccordionList itemsList={faqList} />
        </FaqContent>
      </div>
    </FAQSectionWrapper>
  );
}
export default FAQSection;
