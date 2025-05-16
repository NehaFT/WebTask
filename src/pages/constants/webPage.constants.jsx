import { Clock, Info, MapPin, Printer } from "lucide-react";
import LOCAL_IMAGES from "../../assets/images/Local_Images";

const NAVIGATION_CONST = [
  {
    key: "qualifications",
    label: "Qualifications",
    items: ["Qualification 1", "Qualification 2", "Qualification 3"],
  },
  {
    key: "organizations",
    label: "Organizations",
    items: ["Organization 1", "Organization 2", "Organization 3"],
  },
  {
    key: "research",
    label: "Research & Analysis",
    items: ["Research 1", "Research 2", "Research 3"],
  },
  {
    key: "lorem1",
    label: "Lorem ipsum",
    items: ["Lorem 1", "Lorem 2", "Lorem 3"],
  },
  {
    key: "lorem2",
    label: "Lorem ipsum",
    items: ["Ipsum 1", "Ipsum 2", "Ipsum 3"],
  },
];

const EXAM_DATA = [
  {
    date: "02th October 2014", // Consider fixing to "02nd" if needed
    title: "Level 1 exam",
  },
  {
    date: "Nov-Dec 2016",
    title: "Level 2",
    subtitle: "Lorem Ipsum\nLorem Ipsum",
  },
  {
    date: "Ongoing this year",
    title: "Level 3 (Grad)",
  },
];

const FOOTER_LOCATION_CONST = [
  {
    icon: MapPin,
    name: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
  },
  {
    icon: Info,
    name: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
  },
  {
    icon: Clock,
    name: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
  },
  {
    icon: Printer,
    name: "Lorem ipsum asd asdsaaweeq Lorem Ipsum",
  },
];

const FAQS_CONST = [
  {
    question: "How does an investor gain access to MF Utility?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
  {
    question: "Will investors be able to have multiple Common Account Numbers?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
  {
    question: "How does an investor gain access to MF Utility?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
];

const cardData = [
  {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
  },
  {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
  },
  {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
  },
  {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
  },
];
const slides = [
  {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    image: LOCAL_IMAGES?.slider1,
  },
  {
    title: "Explore More",
    description:
      "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.",
    image: LOCAL_IMAGES?.slider2,
  },
  {
    title: "Take Action",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    image: LOCAL_IMAGES?.slider1,
  },
];
export {
  NAVIGATION_CONST,
  EXAM_DATA,
  FOOTER_LOCATION_CONST,
  FAQS_CONST,
  slides,
  cardData,
};
