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
    "An engineering / product leader in the mobile and blockchain space.",
  summary: "Seasoned engineering leader with over a decade of experience in startups, specializing in mobile and blockchain technologies. From founding engineer to director, I excel at transforming innovative ideas into cutting-edge products, with a focus on building best-in-class mobile experiences and pioneering solutions in identity and credential management.",
  avatarUrl: "/avatar.PNG",
  personalWebsiteUrl: "https://tysonwil.com",
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
      degree: "Double major in Computer Science and Computer Engineering",
      start: "2010",
      end: "2015",
    },
  ],
  work: [
    {
      company: "Heirloom",
      link: "https://heirloom.io",
      badges: ["Founding engineer"],
      title: "Director of Engineering",
      logo: ConsultlyLogo,
      start: "2022",
      end: null,
      description:
        "Founding engineer leading development of a verifiable credential wallet. Driving mobile engineering and product strategy for blockchain-enabled identity solutions.",
    },
    {
      company: "Bright",
      link: "https://variety.com/2021/digital/news/bright-live-video-events-celebrities-1234965976/",
      badges: ["Founding engineer"],
      title: "Engineering and Product Manager",
      logo: ParabolLogo,
      start: "2021",
      end: "2022",
      description:
        "Led team of 5 engineers building iOS and macOS clients. Developed pioneering multiplatform SwiftUI video conferencing app while also managing product.",
    },
    {
      company: "Verizon",
      link: "https://www.verizon.com",
      badges: [],
      title: "Staff Software Engineer",
      logo: ClevertechLogo,
      start: "2021",
      end: "2021",
      description:
        "Facilitated post-acquisition integration of BlueJeans technology into Verizon's ecosystem.",
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
        "Developed award-winning enterprise video conferencing platforms for iOS and macOS. Company acquired by Verizon in 2022.",
    },
    {
      company: "MixBit",
      link: "https://en.wikipedia.org/wiki/MixBit",
      badges: ["Founding engineer"],
      title: "Software Engineer",
      logo: NSNLogo,
      start: "2015",
      end: "2018",
      description: "Collaborated with YouTube cofounder on WebRTC-based products. Developed video chat app acquired by BlueJeans in 2018.",
    },
    {
      company: "Applidium",
      link: "https://www.crunchbase.com/organization/applidium",
      badges: [],
      title: "iOS Developer (Intern)",
      logo: NSNLogo,
      start: "2014",
      end: "2014",
      description: "Gained foundational iOS development experience at Paris-based firm.",
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
        label: "techcrunch.com",
        href: "https://techcrunch.com/2013/08/08/youtube-founders-introduce-mixbit-to-crack-the-code-of-video-editing-on-mobile/",
      },
    },
  ],
} as const;
