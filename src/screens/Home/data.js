import { FaChartLine } from "react-icons/fa";
import { MdOutlineSwapHorizontalCircle } from "react-icons/md";
import { BsCurrencyExchange } from "react-icons/bs";
export const homeData = [
  {
    id: 1,
    title: "Financial Intermediation",
    content: `We deliver deep expertise, objective insights, a tailored approach and unparalleled collaboration to help business leaders confidently face the future. Our advisory solutions span critical business problems in business process, analytics, risk, compliance, technology, financial transaction advice.  We are committed to attracting and developing a diverse workforce of professionals that share the common value of collaboration.  As an organization, we believe that by teaming together, with each other, and our clients, we can see beyond the surface of changes and problems organizations face in this fast changing world to discover opportunities others might miss and face the future with greater confidence.`,
    tag: (
      <MdOutlineSwapHorizontalCircle className="" size={32} color={"white"} />
    ),
  },
  {
    id: 2,
    content: `Because of the huge demand of forex by companies and individuals in Nigerian and the scarcity of same, we have found a niche in assisting companies and individuals to ease the burden of getting a forex buyer or seller. We intermediate to connect buyers and sellers in a way that safeguards the funds of both parties. We guarantee competitive rates, prompt delivery and reduction of transfer charges. With our growing network of clients we are sure to provide you with the most efficient and effective way to meet all your forex needs.
    If you need any advice on the best route for your next forex transaction, please fill the form below and one of our professionals will contact you.
    `,
    title: "Financial Advisory",
    tag: <FaChartLine className="" size={32} color={"white"} />,
  },
  {
    id: 3,
    content: `We offer to sell and to buy all 3 major foreign currencies (i.e. USD, GBP, EURO) at competitive rates whether its cash or transfer. With required documentation, we fulfill your order for BTA, PTA, medical fees, tuition payment, mortgage payment etc. We are fully compliant with all federal regulations governing the operations of Bureau de change in Nigeria.    `,
    title: "Bureau De Change",
    tag: <BsCurrencyExchange className="" size={32} color={"white"} />,
  },
];
