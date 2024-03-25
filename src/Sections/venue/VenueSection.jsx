import { VenueAddress, VenueContent, VenueDesc, VenueTitle, VenueWrapper } from './style';

function VenueSection() {
  return (
    <VenueWrapper id="venue">
      <div className="container">
        <VenueContent>
          <VenueTitle>Venue</VenueTitle>
          <VenueDesc>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
            eveniet quasi aperiam, enim molestias aspernatur! Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Explicabo, quas!
          </VenueDesc>
          <VenueAddress>
            <p>New Event</p>
            <p>120 Market Street, Suite 110</p>
            <p>San Francisco, CA 10110</p>
            <p>Tel: 010-020-0120</p>
          </VenueAddress>
        </VenueContent>
      </div>
    </VenueWrapper>
  );
}
export default VenueSection;
