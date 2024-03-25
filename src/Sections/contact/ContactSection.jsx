import MainHeading from '../../components/mainheading';
import { ContactContent, ContactDesc, ContactFormWrapper, ContactInfoWrapper, ContactInput, ContactSectionWrapper, ContactTextArea, ContactTitle, DownloadLink, SubmitFormBtn } from './style';

function ContactSection() {
  return (
    <ContactSectionWrapper id="contact">
      <div className="container">
        <ContactContent>
          {/* Left */}
          <ContactInfoWrapper>
            <MainHeading>New Event</MainHeading>
            <ContactDesc>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
              voluptas illo quis amet, sit quam dignissimos ab enim voluptatem
              temporibus.
            </ContactDesc>
            <ContactDesc>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
              voluptas illo quis amet, sit quam dignissimos ab enim voluptatem
              temporibus.
            </ContactDesc>
            <ContactDesc>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
              voluptas illo quis amet, sit quam dignissimos ab enim voluptatem
              temporibus.
            </ContactDesc>
            <DownloadLink href="#home">Download Now</DownloadLink>
          </ContactInfoWrapper>
          {/* right */}
          <ContactFormWrapper>
            <form className="contact-form">
              <ContactTitle>
                Keep In <span>Touch</span>
              </ContactTitle>
              <ContactInput type="text" placeholder="Name" />
              <ContactInput type="email" placeholder="Email" />
              <ContactTextArea type="text" placeholder="Message" />
              <SubmitFormBtn>Send</SubmitFormBtn>
            </form>
          </ContactFormWrapper>
        </ContactContent>
      </div>
    </ContactSectionWrapper>
  );
}
export default ContactSection;
