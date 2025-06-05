import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
  title: "1M+",
  icon: <BsBarChartFill size={34} className="text-blue-500" />,
  description: "Returns filed securely and accurately by individuals and businesses across the U.S.",
},
{
  title: "4.9★",
  icon: <BsFillStarFill size={34} className="text-yellow-500" />,
  description: "Average rating across Trustpilot, Google, and app stores — trusted by real users.",
},
{
  title: "50+",
  icon: <PiGlobeFill size={34} className="text-green-600" />,
  description: "States supported with full Federal and State e-filing — fast, compliant, and reliable.",
}

];