import { GoHome } from "react-icons/go";
import { LuClipboardList, LuMousePointer2 } from "react-icons/lu";
import { FiGrid, FiTruck } from "react-icons/fi";
import { TbBrandGoogleAnalytics, TbDiscount2 } from "react-icons/tb";
import { PiMegaphoneBold } from "react-icons/pi";
import { MdPayments, MdOutlinePeopleAlt, MdOutlineColorLens } from "react-icons/md";
import { IoFlashOutline } from "react-icons/io5";



export const sideBarOptions = [
  {
    id: "home_1",
    label: "Home",
    icon: GoHome,
  },
  {
    id: "orders_1",
    label: "Orders",
    icon: LuClipboardList,
  },
  {
    id: "products_1",
    label: "Products",
    icon: FiGrid,
  },
  {
    id: "delivery_1",
    label: "Delivery",
    icon: FiTruck,
  },
  {
    id: "marketing_1",
    label: "Marketing",
    icon: PiMegaphoneBold,
  },
  {
    id: "analytics_1",
    label: "Analytics",
    icon: TbBrandGoogleAnalytics,
  },
  {
    id: "payments_1",
    label: "Payments",
    icon: MdPayments,
  },
  {
    id: "tools_1",
    label: "Tools",
    icon: LuMousePointer2,
  },
  {
    id: "discounts_1",
    label: "Discounts",
    icon: TbDiscount2,
  },
  {
    id: "audience_1",
    label: "Audience",
    icon: MdOutlinePeopleAlt,
  },
  {
    id: "appearance_1",
    label: "Appearance",
    icon: MdOutlineColorLens,
  },
  {
    id: "plugins_1",
    label: "Plugins",
    icon: IoFlashOutline,
  },
];