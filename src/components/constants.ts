import { bitcoin, iota, omigo, ripple, zcash } from "@/assets";

import { introIcon1, introIcon2, introIcon3 } from "@/assets";

import { img1, img2, img3 } from "@/assets/Middle-assests";
import { price1, price2, price3,profile1,profile2,profile3 } from "@/assets/sharedSection";

export const CarouselData = [
  {
    name: "Bitcoin",
    image: bitcoin,
  },
  {
    name: "Ripple",
    image: ripple,
  },
  {
    name: "OmiseGO",
    image: omigo,
  },
  {
    name: "Zcash",
    image: zcash,
  },
  {
    name: "IOTA",
    image: iota,
  },
];
export const features = [
  {
    icon: introIcon1,
    title: "#1 Digital Currency",
    description:
      "Maecenas posuere ac ex vitae fringilla. Fusce pulvinar luctus elit. Fusce cursus lacus vel orci.",
  },
  {
    icon: introIcon2,
    title: "Encryption Techniques",
    description:
      "Maecenas posuere ac ex vitae fringilla. Fusce pulvinar luctus elit. Fusce cursus lacus vel orci.",
  },
  {
    icon: introIcon3,
    title: "Independent of Banks",
    description:
      "Maecenas posuere ac ex vitae fringilla. Fusce pulvinar luctus elit. Fusce cursus lacus vel orci.",
  },
];

 export const positions = [
  { top: "0%", left: "8%", width: "40px", rotation: "10deg" },
  { top: "0%", left: "40%", width: "60px", rotation: "20deg" },
  { top: "16%", left: "5%", width: "40px", rotation: "30deg" },
  { top: "6%", left: "20%", width: "50px", rotation: "15deg" },
  { top: "25%", left: "10%", width: "55px", rotation: "25deg" },
  { top: "28%", left: "40%", width: "30px", rotation: "5deg" },
  { top: "30%", left: "90%", width: "65px", rotation: "35deg" },
  { top: "100%", left: "30%", width: "145px", rotation: "45deg" },
];
 
/* export const positions = [
  { top: "0%", left: "8%", width: "20px", rotation: "10deg" },
  { top: "0%", left: "40%", width: "30px", rotation: "20deg" },
  { top: "16%", left: "5%", width: "20px", rotation: "30deg" },
  { top: "6%", left: "20%", width: "10px", rotation: "15deg" },
  { top: "25%", left: "10%", width: "35px", rotation: "25deg" },
  { top: "28%", left: "40%", width: "20px", rotation: "5deg" },
  { top: "30%", left: "90%", width: "25px", rotation: "35deg" },
  { top: "100%", left: "30%", width: "35px", rotation: "45deg" },
];
 */

export const cryptoData = [
  { name: "BITCOIN", percentage: 76, color: "#FFA500",rotation: 0.25 },
  { name: "ETHERIUM", percentage: 69, color: "#00FF99",rotation: 0.32 },
  { name: "RIPPLE", percentage: 57, color: "#FF0080",rotation : 0.43 },
  { name: "ZCASH", percentage: 67, color: "#00FFFF",rotation : 0.33 },
];



export const pricingPlans = [
  {
    name: "Mycelium",
    logo: price1.src,
    price: "$50",
    features: [
      { text: "Control over your money", status: "check" },
      { text: "Centralized validation", status: "check" },
      { text: "Remote app", status: "dash" },
      { text: "Vulnerable environment", status: "check" },
      { text: "Basic privacy", status: "check" },
      { text: "Discloses information to third party", status: "dash" },
      { text: "Dynamic fee with override", status: "check" },
     
    ],
  },
  {
    name: "Armory",
    logo: price2.src,
    price: "$20",
    features: [
      { text: "Control over your money", status: "check" },
      { text: "Centralized validation", status: "check" },
      { text: "Remote app", status: "check" },
      { text: "Vulnerable environment", status: "check" },
      { text: "Basic privacy", status: "check" },
      { text: "Discloses information to third party", status: "check" },
      { text: "Dynamic fee with override", status: "dash" },
    ],
  },
  {
    name: "Exodus",
    logo: price3.src,
    price: "$100",
    features: [
      { text: "Control over your money", status: "check" },
      { text: "Centralized validation", status: "dash" },
      { text: "Remote app", status: "check" },
      { text: "Vulnerable environment", status: "check" },
      { text: "Basic privacy", status: "dash" },
      { text: "Discloses information to third party", status: "check" },
      { text: "Dynamic fee with override", status: "check" },
     
    ],
  },
];



const testimonials = [
  {
    name: "Stephanie Welch",
    position: "INVISION",
    quote: "Great to stay on top of the process. Especially liked to play with the financial section when viewing properties. Highly recommended!",
    image: profile1.src,
  },
  {
    name: "Sylvester Knight",
    position: "AIRBNB",
    quote: "Just started flat hunting. Your affordability calculator saved me some serious time to focus on what I can actually buy. Thanks so much.",
    image: profile2.src,
  },
  {
    name: "Andrew Bradshaw",
    position: "EVERNOTE",
    quote: "Thanks Plentific for helping us stay on top of a very stressful process! Finally exchanged and looking forward to complete.",
    image: profile3.src,
  },
  
  {
    name: "Stephanie Welch",
    position: "INVISION",
    quote: "Great to stay on top of the process. Especially liked to play with the financial section when viewing properties. Highly recommended!",
    image: profile1.src,
  },
  {
    name: "Sylvester Knight",
    position: "AIRBNB",
    quote: "Just started flat hunting. Your affordability calculator saved me some serious time to focus on what I can actually buy. Thanks so much.",
    image: profile2.src,
  },
  {
    name: "Andrew Bradshaw",
    position: "EVERNOTE",
    quote: "Thanks Plentific for helping us stay on top of a very stressful process! Finally exchanged and looking forward to complete.",
    image: profile3.src,
  },
];

export default testimonials;
export const sections = [
  {
    id: 1,
    title: "Unique Design Layouts and Features",
    content:
      "We work with clients big and small across a range of sectors and we utilise all forms of media to get your name out there in a way that's right for you. We have the skills and resources to create professional films.",
  },
  {
    id: 2,
    title: "Easy dashboard integration for all mobile devices",
    content:
      "We work with clients big and small across a range of sectors and we utilise all forms of media to get your name out there in a way that's right for you. We have the skills and resources to create professional films.",
  },
  {
    id: 3,
    title: "Community Service Forums",
    content:
      "We work with clients big and small across a range of sectors and we utilise all forms of media to get your name out there in a way that's right for you. We have the skills and resources to create professional films.",
  },
  {
    id: 4,
    title: "Find the best jobs for your location",
    content:
      "We work with clients big and small across a range of sectors and we utilise all forms of media to get your name out there in a way that's right for you. We have the skills and resources to create professional films.",
  },
  {
    id: 5,
    title: "Search for talented workers to improve your business",
    content:
      "We work with clients big and small across a range of sectors and we utilise all forms of media to get your name out there in a way that's right for you. We have the skills and resources to create professional films.",
  },
];
export const contentArray = [
  {
    imgSrc: img1.src,
    title: "THE AMAZING SAGA OF BITCOIN CRYPTOCURRENCY",
    date: "18th September 2015",
    author: "ram",
    category: "blockchain",
  },
  {
    imgSrc: img2.src,
    title: "BLOCKCHAIN IS PUBLIC DISTRIBUTED LEDGER",
    date: "18th September 2015",
    author: "ram",
    category: "blockchain",
  },
  {
    imgSrc: img3.src,
    title: "WHAT IS PUBLIC KEY CRYPTOGRAPHY SYSTEM?",
    date: "18th September 2015",
    author: "ram",
    category: "blockchain",
  },
];
export   const ChooseUssections = [
    {
      tag: "headone",
      label: "Acquiring Bitcoins",
      paragraphs: [
        "Alternatively if you have a specific service or question in mind please dont hesitate to contact us using the contact details:",
      ],
      items: [
        "Crowdfunding",
        "Micro payments",
        "Dispute Mediation",
        "Multi-signature accounts",
      ],
      extraContent:
        "We have a team of writers who specialise in writing end of year reports to highlight the successes of your business and the forecast for the next year, which you can distribute to clients and investors, both current and potential. We have the skills and resources to create professional films. Whether you want a corporate promotional film or a record of a conference we can provide the services you require.",
    },
    {
      tag: "headtwo",
      label: "Mining Bitcoins",
      paragraphs: [
        "xxxxx tincidunt, nisl at porttitor vulputate, justo nulla blandit nisl, ut posuere metus tortor vel odio...",
      ],
      items: [
        "Duis aliquam lenb sodales.",
        "Mauris aliquam sapien pharetra.",
        "Fusce sed mi scelerisque est.",
        "In luctus arcu urna commodo.",
      ],
      extraContent:
        "Maecenas posuere ac ex vitae fringilla. Fusce pulvinar luctus elit. Fusce cursus lacus vel orci malesuada pharetra. Duis vel imperdiet enim. Vestibulum dolor metus, condimentum vitae vehicula et, facilisis a nunc. Suspendisse potenti. Fusce ullamcorper ullamcorper convallis. Morbi nec auctor mauris. Nam et arcu sit amet justo accumsan tempus vel in ante. Vestibulum lacinia velit eu lorem tincidunt vitae.",
    },
    {
      tag: "headthree",
      label: "Digital Wallet",
      paragraphs: [
        "yyyyy tincidunt, nisl at porttitor vulputate, justo nulla blandit nisl, ut posuere metus tortor vel odio...",
      ],
      items: [
        "Duis aliquam lenb sodales.",
        "Mauris aliquam sapien pharetra.",
        "Fusce sed mi scelerisque est.",
        "In luctus arcu urna commodo.",
      ],
      extraContent:
        "Maecenas posuere ac ex vitae fringilla. Fusce pulvinar luctus elit. Fusce cursus lacus vel orci malesuada pharetra. Duis vel imperdiet enim. Vestibulum dolor metus, condimentum vitae vehicula et, facilisis a nunc. Suspendisse potenti. Fusce ullamcorper ullamcorper convallis. Morbi nec auctor mauris. Nam et arcu sit amet justo accumsan tempus vel in ante. Vestibulum lacinia velit eu lorem tincidunt vitae.",
    },
  ];

