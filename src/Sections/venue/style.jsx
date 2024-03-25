import styled from "@emotion/styled";
import theme from "../../theme-config";
import VenueBg from '../../assets/images/venue.jpg'

const VenueWrapper = styled('section')`
  label: venue-wrapper;
  padding: 80px 0;
  background-image: url(${VenueBg});
  background-attachment: fixed;
  background-size: cover;
`
const VenueContent = styled('div')`
  label: venue-content;
  max-width: 550px;
`
const VenueTitle = styled('h2')`
  label: venue-title;
  color: ${theme.primary};
  font-size: 30px;
`
const VenueDesc = styled('p')`
  label: venue-desc;
  color: ${theme.gray};
  line-height: 1.6;
  margin-bottom: 30px;
`
const VenueAddress = styled('address')`
  label: venue-address;
  font-weight: bold;
`
export {VenueWrapper, VenueContent, VenueTitle, VenueDesc, VenueAddress};