import { NavLink } from "@/types"

const main: NavLink[] = [
  { name: "Våre sykler", href: "/vare-sykler" },
  { name: "Butikk", href: "/butikk" },
  { name: "Om oss", href: "/om-oss" },
  { name: "Kontakt", href: "/kontakt-oss" },
  { name: "Verksted", href: "/verksted" },
];

const support: NavLink[] = [
  {name: "Kundeservice", href: "https://www.kajakk-fritid.no/kontaktoss"} ,
  {name: "22 02 00 22", href: "tel:004722020022"} ,
  {name: "Ofte stilte spørsmål", href: "https://kajakk-fritid.zendesk.com/hc/no"} ,
  {name: "Teknisk hjelp", href: "https://kajakk-fritid.zendesk.com/hc/no/articles/11670083912733-Teknisk-hjelp-el-sykkel"} ,
]

export { main, support }
