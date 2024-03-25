// ICONS
import {
  faPeopleGroup,
  faClock,
  faMicrophone,
  faHouseFloodWaterCircleArrowRight,
} from '@fortawesome/free-solid-svg-icons';
// IMAGES
import SpeakerImage1 from '../assets/images/speakers/speakers-img1.jpg';
import SpeakerImage2 from '../assets/images/speakers/speakers-img2.jpg';
import SpeakerImage3 from '../assets/images/speakers/speakers-img3.jpg';
import SpeakerImage4 from '../assets/images/speakers/speakers-img4.jpg';
import ProgramImage1 from '../assets/images/ourPrograms/firstday-1.jpg';
import ProgramImage2 from '../assets/images/ourPrograms/firstday-2.jpg';
import ProgramImage3 from '../assets/images/ourPrograms/firstday-3.jpg';
import ProgramImage4 from '../assets/images/ourPrograms/secondday-1.jpg';
import ProgramImage5 from '../assets/images/ourPrograms/secondday-2.jpg';
import ProgramImage6 from '../assets/images/ourPrograms/secondday-3.jpg';
import ProgramImage7 from '../assets/images/ourPrograms/thirdday-1.jpg';
import ProgramImage8 from '../assets/images/ourPrograms/thirdday-2.jpg';
import ProgramImage9 from '../assets/images/ourPrograms/thirdday-3.jpg';
import sponsorImage1 from '../assets/images/ourSponsor/sponsor-img1.jpg';
import sponsorImage2 from '../assets/images/ourSponsor/sponsor-img2.jpg';
import sponsorImage3 from '../assets/images/ourSponsor/sponsor-img3.jpg';
import sponsorImage4 from '../assets/images/ourSponsor/sponsor-img4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedin, faPinterestP, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
const overviewList = [
  {
    id: 1,
    icon: faPeopleGroup,
    title: '650 Participants',
    description:
      'ldasdas dh 7uqwyh eu9wqjujio daso jdioas uiodsau iodusioa jdioas uiodsau iodusio  jdioas uiodsau iodusio jdioas uiodsau iodusio udiosa uiouqwie',
  },
  {
    id: 2,
    icon: faClock,
    title: '24 Programs',
    description:
      'ldasdas dh 7uqwyh eu9wqjujio daso jdioas uiodsau iodus  jdioas uiodsau iodusio  jdioas uiodsau iodusio jdioas uiodsau iodusioioa udiosa uiouqwie',
  },
  {
    id: 3,
    icon: faMicrophone,
    title: '11 Speakers',
    description:
      'ldasdas dh 7uqwyh eu9wqjujio daso jdioas uiodsau iodu  jdioas uiodsau iodusio jdioas uiodsau iodusio jdioas uiodsau iodusiosioa udiosa uiouqwie',
  },
];
const speakersList = [
  {
    id: 1,
    name: 'Jenny Green',
    jobTitle: 'UI Designer',
    image: SpeakerImage1,
    alt: 'speaker 1',
  },
  {
    id: 2,
    name: 'David Yoon',
    jobTitle: 'Creative Director',
    image: SpeakerImage2,
    alt: 'speaker 2',
  },
  {
    id: 3,
    name: 'Je Mary Lee',
    jobTitle: 'Web Specialist',
    image: SpeakerImage3,
    alt: 'speaker 3',
  },
  {
    id: 4,
    name: 'Jonathan Doe',
    jobTitle: 'Front End Dev',
    image: SpeakerImage4,
    alt: 'speaker 4',
  },
];
const programsList = [
  {
    id: 1,
    day: 'one',
    programTitle: 'Introduction to Design',
    programSpeakerName: 'Jenny Green',
    programSpeakerImage: ProgramImage1,
    alt: 'Jenny Green',
    programDesc:
      'ldisajdi oasjdio asjdio ajsiod jioaj dioqjw iojeioqwjeioqwjioeqwjioj iodjas iodjas iojdio asjd ',
    programRoomNum: 240,
    programTime: '09:00 AM',
  },
  {
    id: 2,
    day: 'one',
    programTitle: 'Front-End Development',
    programSpeakerName: 'Jonathan Doe',
    programSpeakerImage: ProgramImage2,
    alt: 'Jonathan Doe',
    programDesc:
      'ldisajdi oasjdio asjdio ajsiod jioaj dioqjw iojeioqwjeioqwjioeqwjioj iodjas iodjas iojdio asjd ',
    programRoomNum: 360,
    programTime: '10:00 AM',
  },
  {
    id: 3,
    day: 'one',
    programTitle: 'Front-End Development',
    programSpeakerName: 'Jonathan Doe',
    programSpeakerImage: ProgramImage3,
    alt: 'Jonathan Doe',
    programDesc:
      'ldisajdi oasjdio asjdio ajsiod jioaj dioqjw iojeioqwjeioqwjioeqwjioj iodjas iodjas iojdio asjd ',
    programRoomNum: 360,
    programTime: '10:00 AM',
  },
  {
    id: 4,
    day: 'two',
    programTitle: 'Introduction to Design',
    programSpeakerName: 'Jenny Green',
    programSpeakerImage: ProgramImage4,
    alt: 'Jenny Green',
    programDesc:
      'ldisajdi oasjdio asjdio ajsiod jioaj dioqjw iojeioqwjeioqwjioeqwjioj iodjas iodjas iojdio asjd ',
    programRoomNum: 240,
    programTime: '09:00 AM',
  },
  {
    id: 5,
    day: 'two',
    programTitle: 'Front-End Development',
    programSpeakerName: 'Jonathan Doe',
    programSpeakerImage: ProgramImage5,
    alt: 'Jonathan Doe',
    programDesc:
      'ldisajdi oasjdio asjdio ajsiod jioaj dioqjw iojeioqwjeioqwjioeqwjioj iodjas iodjas iojdio asjd ',
    programRoomNum: 360,
    programTime: '10:00 AM',
  },
  {
    id: 6,
    day: 'two',
    programTitle: 'Front-End Development',
    programSpeakerName: 'Jonathan Doe',
    programSpeakerImage: ProgramImage6,
    alt: 'Jonathan Doe',
    programDesc:
      'ldisajdi oasjdio asjdio ajsiod jioaj dioqjw iojeioqwjeioqwjioeqwjioj iodjas iodjas iojdio asjd ',
    programRoomNum: 360,
    programTime: '10:00 AM',
  },
  {
    id: 7,
    day: 'three',
    programTitle: 'Introduction to Design',
    programSpeakerName: 'Jenny Green',
    programSpeakerImage: ProgramImage7,
    alt: 'Jenny Green',
    programDesc:
      'ldisajdi oasjdio asjdio ajsiod jioaj dioqjw iojeioqwjeioqwjioeqwjioj iodjas iodjas iojdio asjd ',
    programRoomNum: 240,
    programTime: '09:00 AM',
  },
  {
    id: 8,
    day: 'three',
    programTitle: 'Front-End Development',
    programSpeakerName: 'Jonathan Doe',
    programSpeakerImage: ProgramImage8,
    alt: 'Jonathan Doe',
    programDesc:
      'ldisajdi oasjdio asjdio ajsiod jioaj dioqjw iojeioqwjeioqwjioeqwjioj iodjas iodjas iojdio asjd ',
    programRoomNum: 360,
    programTime: '10:00 AM',
  },
  {
    id: 9,
    day: 'three',
    programTitle: 'Front-End Development',
    programSpeakerName: 'Jonathan Doe',
    programSpeakerImage: ProgramImage9,
    alt: 'Jonathan Doe',
    programDesc:
      'ldisajdi oasjdio asjdio ajsiod jioaj dioqjw iojeioqwjeioqwjioeqwjioj iodjas iodjas iojdio asjd ',
    programRoomNum: 360,
    programTime: '10:00 AM',
  },
];
const sponsorsList = [
  {
    id: 1,
    img: sponsorImage1,
    alt: 'sponsor 1',
  },
  {
    id: 2,
    img: sponsorImage2,
    alt: 'sponsor 2',
  },
  {
    id: 3,
    img: sponsorImage3,
    alt: 'sponsor 3',
  },
  {
    id: 4,
    img: sponsorImage4,
    alt: 'sponsor 4',
  },
];
const navlinkList = [
  { id: 1, navlink: 'intro' },
  { id: 2, navlink: 'overview' },
  { id: 3, navlink: 'speakers' },
  { id: 4, navlink: 'programs' },
  { id: 5, navlink: 'register' },
  { id: 6, navlink: 'venue' },
  { id: 7, navlink: 'sponsors' },
  { id: 8, navlink: 'contact' },
];
const faqList = [
  {
    question: 'What is Responsive Design ?',
    answers: [
      'dasdja dasijdisajid asji djsai jdiasj idasjijsa',
      'dasdja dasijdisajid asji djsa das dasd as dasd as dasd asdasdwqeqew i jdiasj idasjijsa',
    ],
  },
  {
    question: 'What are Latest UX Developments ?',
    answers: [
      'dasdja dasijdisajid asji djsai jdiasj idasjijsa',
      'dasdja dasijdisajid asji djsa das dasd as dasd as dasd asdasdwqeqew i jdiasj idasjijsa',
    ],
  },
  {
    question: 'What Things about Social Media Will Be Discussed ?',
    answers: [
      'dasdja dasijdisajid asji djsai jdiasj idasjijsa',
      'dasdja dasijdisajid asji djsa das dasd as dasd as dasd asdasdwqeqew i jdiasj idasjijsa',
    ],
  },
];
const socialLinksIconsList = [
  { id: 0, icon: <FontAwesomeIcon icon={faFacebookF}  size='lg' fixedWidth/> },
  { id: 1, icon: <FontAwesomeIcon icon={faInstagram}  size='lg' fixedWidth/> },
  { id: 2, icon: <FontAwesomeIcon icon={faLinkedin}  size='lg' fixedWidth/> },
  { id: 3, icon: <FontAwesomeIcon icon={faPinterestP}  size='lg' fixedWidth/> },
  { id: 4, icon: <FontAwesomeIcon icon={faYoutube}  size='lg' fixedWidth/> },
  { id: 5, icon: <FontAwesomeIcon icon={faTwitter}  size='lg' fixedWidth/> },
];
export {
  overviewList,
  speakersList,
  programsList,
  sponsorsList,
  navlinkList,
  faqList,
  socialLinksIconsList
};
