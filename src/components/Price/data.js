import { price1, price2, price3 } from "@/assets/sharedSection";

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
