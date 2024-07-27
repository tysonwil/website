import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Tyson Williams",
  initials: "TJW",
  location: "San Francisco, California",
  locationLink: "https://www.google.com/maps/place/San+Francisco",
  about:
    "An engineering / product leader in the mobile space.",
  summary:
    "With a decade of startup experience, I’ve been at the forefront of mobile technology. Now, as Head of Mobile at Heirloom, I’m developing a cutting-edge blockchain-enabled identity platform. My goal is to create intuitive, user-friendly experiences that bring the benefits of Web3 to everyday users. From verifiable credentials to seamless on-chain integration, I’m focused on making advanced digital identity solutions practical and accessible.",
  avatarUrl: "https://media.licdn.com/dms/image/D5603AQEKTFJHIkb3LA/profile-displayphoto-shrink_400_400/0/1671211157451?e=1727308800&v=beta&t=apsRmtTXr89bL2cP_rmEdrGPdcPYAUv0yhEjUNWKINQ",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "tysonwil@icloud.com",
    tel: "+19205855242",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/tysonwil",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tysonwil/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/tysonwil",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Wisconsin",
      degree: "Bachelor's Degree in Computer Science\nBachelor's Degree in Computer Engineering",
      start: "2010",
      end: "2015",
    },
  ],
  work: [
    {
      company: "Heirloom",
      link: "https://heirloom.io",
      badges: ["Remote"],
      title: "Head of Mobile",
      logo: ConsultlyLogo,
      start: "2022",
      end: null,
      description:
        "Founding engineer. Leading the development of the best in class verifiable credential wallet",
    },
    {
      company: "Bright",
      link: "https://variety.com/2021/digital/news/bright-live-video-events-celebrities-1234965976/",
      badges: ["Remote"],
      title: "Engineering and Product Manager",
      logo: ParabolLogo,
      start: "2021",
      end: "2022",
      description:
        "Founding engineer. Responsible for a team of 5 engineers, building our iOS and macOS clients. Probably the first, multiplatform, SwiftUI video conferencing app in the world. I also acted as the product manager.",
    },
    {
      company: "Verizon",
      link: "https://www.verizon.com",
      badges: ["Remote"],
      title: "Staff Software Engineer",
      logo: ClevertechLogo,
      start: "2021",
      end: "2021",
      description:
        "I stayed around for a few months after the acqisition before getting the startup itch again.",
    },
    {
      company: "BlueJeans",
      link: "https://www.verizon.com/about/news/verizon-business-enters-agreement-acquire-bluejeans",
      badges: [],
      title: "Senior Software Engineer",
      logo: JojoMobileLogo,
      start: "2018",
      end: "2020",
      description:
        "Built award winning, enterprise video conferencing platforms for iOS and macOS. Acquired by Verizon in April 2022",
    },
    {
      company: "MixBit",
      link: "https://en.wikipedia.org/wiki/MixBit",
      badges: [],
      title: "Software Engineer",
      logo: NSNLogo,
      start: "2015",
      end: "2018",
      description: "Partnered with YouTube cofounder Chad Hurley to build a bunch of different products focused around WebRTC. Our consumer video chat app was acquired by BlueJeans in 2018.",
    },
    {
      company: "Applidium",
      link: "https://www.crunchbase.com/organization/applidium",
      badges: [],
      title: "iOS Developer (Intern)",
      logo: NSNLogo,
      start: "2014",
      end: "2014",
      description: "Interned at a Paris based firm where I learned all about iOS development",
    },
  ],
  skills: [
    "Swift",
    "SwiftUI",
    "iOS",
    "Solidity",
    "Web3",
    "Cryptocurrency wallets",
    "Decentralized identity",
    "Verifiable Credentials",
    "WebRTC",
  ],
  projects: [
    {
      title: "Heirloom ID",
      techStack: [
        "Engineering",
        "Product",
        "Swift",
        "SwiftUI",
        "CryptoKit",
        "BIP-39",
      ],
      description:
        "The best mobile wallet for verifiable credentials",
      logo: ParabolLogo,
      link: {
        label: "heirloom.io",
        href: "https://heirloom.io/heirloom-id",
      },
    },
    {
      title: "Bright Live",
      techStack: [
        "Archictect",
        "Product",
        "Manager",
        "Swift",
        "SwiftUI",
        "Multiplatform"
      ],
      description:
        "Video conferencing client to talk to your favorite celebrities.",
      logo: EvercastLogo,
      link: {
        label: "variety.com",
        href: "https://variety.com/2021/digital/news/bright-live-video-events-celebrities-1234965976/",
      },
    },
    {
      title: "BlueJeans",
      techStack: [
        "Lead Engineer",
        "Swift",
        "Objective-C",
        "WebRTC",
      ],
      description: "Enterprise grade video conferencing client. Used by Facebook, Nike, etc.",
      logo: ConsultlyLogo,
      link: {
        label: "wikipedia.com",
        href: "https://en.wikipedia.org/wiki/BlueJeans",
      },
    },
    {
      title: "Zeen",
      techStack: ["Lead Engineer", "Swift", "WebRTC"],
      description:
        "Consumer video chat app. Acquired by BlueJeans.",
      logo: MonitoLogo,
      link: {
        label: "bluejeans.com",
        href: "https://web.archive.org/web/20191022050941/https://www.bluejeans.com/blog/bluejeans-mixbit-mobile-development",
      },
    },
    {
      title: "MixBit",
      techStack: ["Lead Engineer", "Swift", "Objective-C"],
      description:
        "An automated, collaborative video editor built in collaboration with Chad Hurley",
      logo: JarockiMeLogo,
      link: {
        label: "techcrunch.com",
        href: "https://techcrunch.com/2013/08/08/youtube-founders-introduce-mixbit-to-crack-the-code-of-video-editing-on-mobile/",
      },
    },
    {
      title: "Meal Diary",
      techStack: ["Side Project", "GPT-4", "iMessage", "Swift"],
      description:
        "An iMessage nutritional coach to track your daily meals",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
  ],
} as const;
