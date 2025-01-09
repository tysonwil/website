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
    "An engineering / product leader in the mobile, video, and blockchain space.",
  summary: 
    "Engineering leader and founding team member with a proven track record of building innovative mobile products used by millions. I specialize in scaling engineering teams and delivering complex technical products in video, blockchain, and AI spaces. Known for building exceptional user experiences and leading high-performing teams from concept to successful exits (including two acquisitions). I thrive at the intersection of technical excellence and product strategy, having collaborated directly with founders and C-suite executives to transform ambitious visions into market-ready products.",
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
      badges: ["Director of Engineering","Founding engineer"],
      title: "",
      logo: ConsultlyLogo,
      start: "2022",
      end: null,
      description:
        "Led an 8-person engineering team in developing one of the first mobile-first verifiable credential platforms. Architected and shipped a revolutionary digital identity wallet that enabled major universities and enterprises to issue secured digital credentials. Collaborated directly with CEO/CTO on technical strategy and product direction.\n\nKey Achievements:\n• Built pioneering verifiable credential infrastructure powering multiple high-profile conferences\n• Led development of industry-leading mobile wallet with best-in-class UX for digital identity management\n• Established mobile engineering practices and technical architecture from company inception",
    },
    {
      company: "Bright",
      link: "https://variety.com/2021/digital/news/bright-live-video-events-celebrities-1234965976/",
      badges: ["Engineering & Product Manager", "Founding engineer"],
      title: "",
      logo: ParabolLogo,
      start: "2021",
      end: "2022",
      description:
        "Led development of an innovative video platform enabling direct celebrity-fan connections. Managed a 6-person cross-functional team building iOS and macOS applications while driving product strategy.\n\nKey Achievements:\n• Architected multiplatform SwiftUI video conferencing system from ground up\n• Drove technical and product decisions as founding engineer, reporting directly to CEO\n• Established engineering processes and technical architecture for early-stage startup",
    },
    {
      company: "BlueJeans",
      link: "https://www.verizon.com/about/news/verizon-business-enters-agreement-acquire-bluejeans",
      badges: ["Staff Software Engineer"],
      title: "",
      logo: JojoMobileLogo,
      start: "2018",
      end: "2020",
      description:
        "Led core iOS initiatives for enterprise video conferencing platform serving millions of users across Fortune 500 companies. Played key role during critical COVID-19 period when reliable video communication became essential.\n\nKey Achievements:\n• Drove development of mission-critical video features used by Facebook, Nike, and LinkedIn\n• Facilitated successful $400M acquisition by Verizon, leading technical integration efforts\n• Optimized video performance and reliability during 300% usage surge in pandemic",
    },
    {
      company: "MixBit",
      link: "https://en.wikipedia.org/wiki/MixBit",
      badges: ["Lead Engineer", "Founding engineer"],
      title: "",
      logo: NSNLogo,
      start: "2015",
      end: "2018",
      description: "Collaborated with YouTube co-founder Chad Hurley to build innovative video editing platform. Led development of real-time collaborative video editing features.\n\nKey Achievements:\n• Architected WebRTC-based video editing system\n• Built and shipped iOS app that was later acquired by BlueJeans\n• Pioneered real-time collaborative video editing features",
    },
    {
      company: "Applidium",
      link: "https://www.crunchbase.com/organization/applidium",
      badges: ["Intern"],
      title: "",
      logo: NSNLogo,
      start: "2014",
      end: "2014",
      description: "Gained foundational iOS development experience at Paris-based firm.",
    },
  ],
  skills: [
    {
      category: "Leadership & Strategy",
      color: "bg-blue-200",
      skills: ["Engineering Leadership", "Product Strategy", "Team Building", "Technical Architecture", "Agile Management"]
    },
    {
      category: "Mobile Development",
      color: "bg-violet-200",
      skills: ["Swift", "SwiftUI", "iOS", "macOS", "Objective-C"]
    },
    {
      category: "AI & Modern Tools",
      color: "bg-emerald-200",
      skills: ["GPT-4 Integration", "Claude", "Midjourney", "Cursor", "LLM Implementation"]
    },
    {
      category: "Video Technologies",
      color: "bg-rose-200",
      skills: ["WebRTC", "Video Streaming", "Real-time Communication", "Video Processing"]
    },
    {
      category: "Web3 & Identity",
      color: "bg-orange-200",
      skills: ["Verifiable Credentials", "Decentralized Identity", "Cryptocurrency Wallets", "Solidity"]
    }
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
        "The best mobile wallet for verifiable credentials.",
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
        "An automated, collaborative video editor built in collaboration with Chad Hurley.",
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
        "An iMessage nutritional coach to track your daily meals.",
      logo: Minimal,
      link: {
        label: "techcrunch.com",
        href: "https://techcrunch.com/2013/08/08/youtube-founders-introduce-mixbit-to-crack-the-code-of-video-editing-on-mobile/",
      },
    },
  ],
} as const;
