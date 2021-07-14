const content = {
  homePageWebSiteTitle: 'International Financial Consulting',
  contactPageTitle: 'Contact only if you are really interested',
  secondaryContent: [
    {
      title: 'Private',
      description: 'Thought exactly for you. Asset management and market analysis. Study of the best performing returns on the market',
    },
    {
      title: 'Legal',
      description: 'Civil right , penal right, corporate right, banking right, international right.',
    },
    {
      title: 'Companies',
      description: '360° Business strategy. structure analysis and tax optimization. Study and intermediation on banking relationships',
    },
    {
      title: 'Credit',
      description: `Financial and banking consultancy<br>Assistence in obtaining a credit line<br>Financing for individuals (PRIVATE) and companies.`,
    },
    {
      title: 'Real Estate',
      description: 'Study and analysis of real estate structures. Property acquisition resulting from auction  or private',
    },
    {
      title: 'International',
      description: 'Creation of foreign companies. Legal and commercial assistance, obtaining certificates and permits.',
    }
  ],
  internationalConsulting: {
    title: 'International Consulence',
    description: 'Our financial consulting intermediation is a company with decades of experience in the field of managerial, corporate, private consulting and investments. From the 1st fall of the world stock exchange on 24 october 1929. Our headquarters in Australia and Luxemburg allow us to provide our costumers with an exlusive service that comes with the idea of bringhing together individuals, professionals and companies, creating a synergy through a preferential channel with the sole intention of providing a personalized service and hoc for the end customer. Our mission is to create an economic and lasting solidity over time by restarting the world economy.',
  },
  lendersAndInvestors: {
    title: 'Lenders and Investors',
    description: 'Our clients and investors are a group of individuals chosen on the basis of their Aviability and quality deriving specifically from the world elite: russian maniat, tsars, semit, Asians chairmans, americans CEO’s and emirates.',
  }
};

export default function (_, inject) {
  inject('content', content);
}
