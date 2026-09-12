import { site } from "@/lib/site";

// Who the site is about, so a name search can resolve to one person with
// linked profiles. Shared by the root layout and the About ProfilePage.
export const person = {
  "@type": "Person",
  "@id": `${site.url}/#person`,
  name: site.fullName,
  alternateName: site.name,
  jobTitle: site.title,
  url: site.url,
  image: `${site.url}${site.portrait}`,
  email: `mailto:${site.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Accra",
    addressCountry: "GH",
  },
  sameAs: [site.linkedin, site.github],
};
