import { bitcoin, iota, omigo, ripple, zcash } from "@/assets";

import { introIcon1, introIcon2, introIcon3 ,} from '@/assets';

export const CarouselData=[
  {
    name:"Bitcoin",
    image:bitcoin,
  },{
    name:"Ripple",
    image:ripple,
  },{
    name:"OmiseGO",
    image:omigo,
  },{
    name:"Zcash",
    image:zcash,
  },{
    name:"IOTA",
    image:iota,
  },
]
export const features = [
  {
    icon: introIcon1,
    title: '#1 Digital Currency',
    description: 'Maecenas posuere ac ex vitae fringilla. Fusce pulvinar luctus elit. Fusce cursus lacus vel orci.'
  },
  {
    icon: introIcon2,
    title: 'Encryption Techniques',
    description: 'Maecenas posuere ac ex vitae fringilla. Fusce pulvinar luctus elit. Fusce cursus lacus vel orci.'
  },
  {
    icon: introIcon3,
    title: 'Independent of Banks',
    description: 'Maecenas posuere ac ex vitae fringilla. Fusce pulvinar luctus elit. Fusce cursus lacus vel orci.'
  }
];

export const positions = [
  { top: '0%', left: '8%', width: '40px', rotation: '10deg' },
  { top: '0%', left: '40%', width: '60px', rotation: '20deg' },
  { top: '16%', left: '5%', width: '40px', rotation: '30deg' },
  { top: '6%', left: '20%', width: '50px', rotation: '15deg' },
  { top: '25%', left: '10%', width: '55px', rotation: '25deg' },
  { top: '28%', left: '40%', width: '30px', rotation: '5deg' },
  { top: '30%', left: '90%', width: '65px', rotation: '35deg' },
  { top: '100%', left: '30%', width: '145px', rotation: '45deg' },
];


export const cryptoData = [
  { name: "BITCOIN", percentage: 76, color: "#FFA500" },
  { name: "ETHERIUM", percentage: 69, color: "#00FF99" },
  { name: "RIPPLE", percentage: 57, color: "#FF0080" },
  { name: "ZCASH", percentage: 67, color: "#00FFFF" },
];
