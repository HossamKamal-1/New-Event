import { useCallback, useState } from 'react';
import { AccordionContent, AccordionHeader, AccordionItem } from './style';

function AccordionList({ itemsList }) {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const toggleActiveAccordion = useCallback(
    (index) => {
      if (activeAccordion === index) {
        setActiveAccordion(null);
      } else {
        setActiveAccordion(index);
      }
    },
    [activeAccordion]
  );
  return (
    <div className="accordion-wrapper">
      {itemsList.map((faq, index) => (
        <AccordionItem key={index}>
          <AccordionHeader onClick={() => toggleActiveAccordion(index)}>
            <p>{faq.question}</p>
            <span>{activeAccordion === index ? '-' : '+'}</span>
          </AccordionHeader>
          <AccordionContent
            className={`${activeAccordion === index ? 'show' : ''}`}
          >
            {faq.answers.map((answer, index) => (
              <p key={index}>{answer}</p>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </div>
  );
}
export default AccordionList;
