// About page CMS data interface

export interface TeamMember {
  _key: string;
  name: string;
  title: string;
  bio: string;
  joinYear?: string;
  image: {
    asset: {
      _ref: string;
    };
  };
}

export interface AboutPageData {
  // Hero section
  heroTitle: string;
  heroSubtitle: string;
  heroImage: {
    asset: {
      _ref: string;
    };
  };
  
  // Intro section
  introParagraph: string;
  
  // Our Story section
  ourStoryTitle: string;
  ourStoryContent: string[];
  
  // Team section
  teamSectionTitle: string;
  teamSectionDescription: string;
  teamMembers: TeamMember[];
  
  // Call to action section
  ctaTitle: string;
  ctaDescription: string;
  ctaButtons: {
    _key: string;
    label: string;
    link: string;
    variant: 'primary' | 'secondary' | 'outline' | 'purple';
  }[];
}

// Sample GROQ query for the about page data
export const aboutPageQuery = `*[_type == "aboutPage"][0]{
  heroTitle,
  heroSubtitle,
  heroImage {
    asset->
  },
  introParagraph,
  ourStoryTitle,
  ourStoryContent,
  teamSectionTitle,
  teamSectionDescription,
  teamMembers[] {
    _key,
    name,
    title,
    bio,
    joinYear,
    image {
      asset->
    }
  },
  ctaTitle,
  ctaDescription,
  ctaButtons[] {
    _key,
    label,
    link,
    variant
  }
}`;

// Sample fallback data for the about page
export const fallbackAboutData: AboutPageData = {
  heroTitle: "About Us",
  heroSubtitle: "Finding Inspiration in Every Turn",
  heroImage: {
    asset: {
      _ref: ""
    }
  },
  
  introParagraph: "Touch & Restored is a 501(c)(3) non-profit Florida originated organization, founded by Jacqueline Sinclair in 2017. T.O.U.C.H. (Tender Outreach United Christian Home).",
  
  ourStoryTitle: "Our Story",
  ourStoryContent: [
    "Touch & Restored Foundation is a beacon of blessings miraculously birthed out of the abuse of Jacqueline (Jackie) Sinclair as a child alongside her mother, Josephine as a battered woman. Domestic violence created a plague of personal tragedies for them both throughout their lives. Desperate to make sense of this violence, in 2017 Jackie realized that with a team she could make something positively impactful out of her experience as she recognized her world reflected the same pain. After the release of her book, A Child Cries: The Pain of Searching for Love, she searched for a team—united in accepting God's higher goal. That goal? Simply, a safe haven for the abused & battered. Together, we dedicate our lives in finding, creating & providing resources catering to the needs of those who have suffered.",
    
    "Grateful for the support our family receives from the community, we are focused on paying our blessings forward. We feel a deep sense of responsibility to make a difference in the lives of all the Jackies we will never know and the Josephines we may never meet. Touch & Restored Foundation is committed to restore lives, and revive hope."
  ],
  
  teamSectionTitle: "Meet the Team",
  teamSectionDescription: "Our dedicated board of directors brings diverse expertise and a shared commitment to our mission of supporting survivors and creating lasting change.",
  teamMembers: [
    {
      _key: "member1",
      name: "Jacqueline Sinclair",
      title: "Founder & Chair",
      bio: "A Times Best Selling Author & Speaker. She's driven, energetic & has over 25 years of leadership experience. \"My goal is to inspire & be a catalyst of change as I educate against Domestic Violence & Abuse.\"",
      image: {
        asset: {
          _ref: "/team-members/jackie.jpeg"
        }
      }
    },
    {
      _key: "member2",
      name: "Wayne Robinson",
      title: "Analyst/Business Consultant",
      bio: "Wayne Robinson serves as an Analyst and Business Consultant. Joined Touch & Restored in 2017.",
      image: {
        asset: {
          _ref: "/team-members/wayne-robinson.png"
        }
      }
    },
    {
      _key: "member3",
      name: "Lincoln Grant",
      title: "Treasurer/Warehouse Supervisor",
      bio: "Lincoln Grant serves as Treasurer and Warehouse Supervisor. Joined Touch & Restored in 2017.",
      image: {
        asset: {
          _ref: "/team-members/webp/lincoln-grant.webp"
        }
      }
    },
    {
      _key: "member4",
      name: "Nadine Neabard",
      title: "Fundraiser/Lead Supervisor",
      bio: "Nadine Neabard brings her exceptional organizational and people skills as our Fundraiser and Lead Supervisor. As a flight attendant, she has developed a unique ability to connect with people from all walks of life, which she leverages in her fundraising efforts for Touch & Restored.",
      image: {
        asset: {
          _ref: "/team-members/nadine-neabard.png"
        }
      }
    },
    // Other team members would be here
  ],
  
  ctaTitle: "Join Our Mission",
  ctaDescription: "We believe that everyone deserves to live free from violence and fear. By working together, we can create a community where survivors are supported, empowered, and able to thrive. Join us in making a difference.",
  ctaButtons: [
    {
      _key: "button1",
      label: "Volunteer With Us",
      link: "/support-us#volunteer",
      variant: "primary"
    },
    {
      _key: "button2",
      label: "Make a Donation",
      link: "/support-us#donate",
      variant: "secondary"
    },
    {
      _key: "button3",
      label: "Contact Us",
      link: "/contact",
      variant: "purple"
    }
  ]
}; 