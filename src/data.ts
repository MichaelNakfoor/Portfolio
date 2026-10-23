export const profile = {
  name: "Michael A Nakfoor",
  shortName: "Michael Nakfoor",
  title: "Web Developer · UI Designer",
  headline: "I design and build software for",
  headlineAccent: "people.",
  lede: [
    "My work combines interface design with the programming that makes it all work. I've developed everything from EA Sports game interfaces to complex web applications, often taking a project from its initial design through production.",
    "Sometimes that means rethinking an interface. Other times it means getting into the code and solving the problems behind it. Most projects involve a little of both.",
  ],
  location: "Central Florida",
  email: "michael.a.nakfoor@gmail.com",
  phone: "407-310-4402",
  github: "https://github.com/MichaelNakfoor",
  githubLabel: "github.com/MichaelNakfoor",
  linkedin: "https://www.linkedin.com/in/mike-nakfoor-b204691",
  linkedinLabel: "linkedin.com/in/mike-nakfoor-b204691",
};

export const about = {
  heading: "About Me",
  excerpt: [
    "I've spent much of my career designing software interfaces and writing the code that makes them work. I enjoy both sides of the process, especially when an interesting design presents an equally interesting programming challenge.",
    "That curiosity tends to follow me home, where there's usually some combination of software, woodworking, electronics, or gardening projects underway. Some are useful, some are just for fun, and nearly all of them teach me something I didn't know when I started.",
  ],
  paragraphs: [
    "I've spent much of my career designing software interfaces and writing the code that makes them work, and I've always enjoyed the combination of creative and technical problem-solving that comes with doing both. An interface needs to look good and behave sensibly, but I find the engineering behind it every bit as interesting as the design itself.",
    "At EA Tiburon, I designed and developed user interfaces for Madden NFL, NCAA Football, Tiger Woods PGA Tour, and several other EA Sports titles. My work included hands-on UI programming using the studio's proprietary development tools, as well as developing common interface systems shared by several franchises. I also served as UI Development Manager for Tiger Woods PGA Tour 08 and NCAA Football 10.",
    "At Online Labels, I redesigned and rebuilt Maestro Label Designer, transforming an aging Flash/ActionScript application into a sophisticated HTML5 and TypeScript design tool. The project involved much more than updating the technology. I reconsidered the user experience and developed the editing tools, text controls, and rendering functionality behind it, extending the work into server-side PDF generation, print production, and integration with the company's ordering systems.",
    "Over the years, I've also worked extensively with .NET, SQL Server, and enterprise web applications. I enjoy being involved in the entire process, whether I'm working through an interaction problem, designing an interface, writing application code, or figuring out why something that worked perfectly yesterday has suddenly decided to stop cooperating.",
    "That inclination to figure things out doesn't end when I leave the computer. I'm seldom content to sit still for very long, and there's usually something around the house or yard that I'm building, repairing, improving, or taking apart to see how it works. My interests have led me into everything from woodworking and electronics to gardening and home automation, often with a little custom software thrown in where it might prove useful.",
    "I particularly enjoy finding simple, practical solutions to problems that initially seem complicated. Sometimes that means writing software, sometimes it means building something with my hands, and occasionally it means realizing that the simplest solution was right in front of me all along. Either way, there's usually another project waiting for my attention, even if my wife occasionally wonders whether I'll ever run out of things to do.",
  ],
  signature: "Michael A Nakfoor",
};

export type Project = {
  id: string;
  title: string;
  role: string;
  summary: string[];
  image: string;
  imageAlt: string;
  tags: string[];
  details: string[];
  href?: string;
  applications?: string[];
};

export const projects: Project[] = [
  {
    id: "ea-sports",
    title: "EA Sports",
    role: "UI Design & Development",
    summary: [
      "At EA Tiburon, I designed and programmed user interfaces for games including Madden NFL, NCAA Football, and Tiger Woods PGA Tour. Working with proprietary development tools and several generations of consoles, I was involved in everything from visual design and hands-on UI programming to developing shared interface systems and managing the UI development team for Tiger Woods PGA Tour.",
    ],
    image: "/card-ea-mini.png",
    imageAlt: "EA Sports work",
    href: "/work/ea",
    tags: [
      "C",
      "Madden NFL",
      "NCAA Football",
      "Tiger Woods PGA Tour",
      "NFL Street",
      "NASCAR Thunder",
    ],
    details: [
      "Designed and implemented UI systems across multiple AAA titles.",
      "Created scalable interaction models and navigation systems across gaming platforms.",
      "Delivered responsive, high-performance UI under strict hardware and memory constraints.",
      "Built reusable UI frameworks and layout systems used across products.",
      "Established UI standards, workflows, and design pipelines; led and mentored multidisciplinary UI teams.",
    ],
  },
  {
    id: "maestro",
    title: "Enterprise & Web Applications",
    role: "Full-Stack Development & UI Design",
    summary: [
      "At Online Labels, I took over development of Maestro Label Designer, an application originally built in Flash. I eventually rebuilt it using HTML5 and TypeScript, redesigning the interface and developing the tools that allow customers to create labels and reproduce their designs accurately in print.",
      "My work has also included developing and maintaining customer-facing and enterprise applications for Online Labels and Consolidated Labels, using .NET, SQL Server, and other technologies.",
    ],
    image: "/card-maestro-mini.png",
    imageAlt: "Maestro Label Designer",
    href: "/work/maestro",
    tags: ["TypeScript", "SVG", "VB", ".NET", "PDF", "SQL", "C#", "Blazor", "JSON", "XML", "Jira", "Git", "Azure DevOps"],
    details: [
      "Owned frontend architecture, UI/UX, and implementation for complex browser-based editing workflows.",
      "Engineered interactive editing: inline text, direct manipulation, selection systems, and dynamic property panels.",
      "Built data-driven features including mail merge and programmatic barcode / QR generation.",
      "Implemented server-side rendering pipelines with iText, ImageMagick, and Ghostscript for print-ready PDF output.",
      "Achieved true WYSIWYG consistency between browser-rendered designs and production print.",
    ],
  },
  {
    id: "workshop",
    title: "Personal Workshop",
    role: "Independent Application Development",
    summary: [
      "Outside of my professional work, I enjoy experimenting with new technologies and finding practical uses for them. Some projects become tools that help keep a hobby from becoming a chore, while others are simply an excuse to write something interesting and have a little fun.",
      "The Workshop is a collection of those applications, designed and developed using Blazor, C#, SQL Server, and other technologies I've wanted to explore.",
    ],
    image: "/card-workshop-mini.png",
    imageAlt: "Independent Applications",
    href: "/work/workshop",
    tags: ["Blazor", "C#", ".NET", "SQL", "API integration"],
    details: [],
    applications: ["Weather Station", "Task Manager", "Blackjack", "Chicken Flock Manager"],
  },
];

export const skillGroups = [
  {
    name: "Frontend",
    items: [
      "C (production console UI)",
      "TypeScript / JavaScript",
      "React (this page)",
      "Blazor Server / Razor",
      "Vue.js",
      "HTML5 / CSS3 / Sass",
      "Component architecture",
      "State-driven UI workflows",
    ],
  },
  {
    name: "UI / UX",
    items: [
      "Interaction design",
      "Design systems",
      "Information architecture",
      "Prototyping",
      "Responsive interfaces",
    ],
  },
  {
    name: "Backend & data",
    items: [
      "C# / .NET / ASP.NET",
      "SQL Server / T-SQL",
      "Entity Framework",
      "REST APIs",
      "Client-server architecture",
    ],
  },
  {
    name: "Rendering",
    items: ["SVG rendering", "PDF (iText)", "ImageMagick", "Ghostscript"],
  },
];

export const stackPills = [
  { label: "C#", icons: ["csharp"] },
  { label: ".NET", icons: ["dotnet"] },
  { label: "SQL Server", icons: ["microsoftsqlserver"] },
  { label: "Blazor", icons: ["blazor"] },
  { label: "TypeScript", icons: ["typescript"] },
  { label: "React", icons: ["react"] },
  { label: "JavaScript", icons: ["javascript"] },
  { label: "HTML5 / CSS3", icons: ["html5", "css3"] },
];

export type Job = {
  id: string;
  role: string;
  company: string;
  location: string;
  dates: string;
  bullets: string[];
};

export const experience: Job[] = [
  {
    id: "olg",
    role: "Software Engineer / Application Designer",
    company: "Online Labels Group",
    location: "Sanford, FL",
    dates: "February 2012 – January 2026",
    bullets: [
      "Served as sole developer of Maestro Label Designer, maintaining the original Flash application before independently redesigning and rebuilding it in HTML5 and TypeScript.",
      "Designed and implemented a sophisticated SVG editing environment, including object manipulation, contextual property controls, and a custom inline rich-text editor with custom caret and selection logic.",
      "Developed the application's .NET backend, including APIs, design persistence, SQL Server database operations, Entity Framework integration, and stored procedures.",
      "Engineered the server-side SVG-to-PDF rendering pipeline using iText, ImageMagick, and Ghostscript, supporting home printing and commercial production.",
      "Integrated Maestro with enterprise ordering systems, including product configuration, print proofs, variable-data printing, and shopping cart workflows.",
      "Developed and maintained business applications supporting Online Labels and Consolidated Labels, including OLEA, CLEA, EOS, and customer-facing commercial printing systems.",
    ],
  },
  {
    id: "ea",
    role: "Senior UI Designer / UI Development Manager",
    company: "Electronic Arts",
    location: "Orlando, FL",
    dates: "September 1998 – April 2011",
    bullets: [
      "Designed and programmed interfaces for EA Sports franchises including Madden NFL, NCAA Football, and Tiger Woods PGA Tour across multiple console generations.",
      "Developed reusable interface controls and shared development frameworks, contributing to EA Tiburon's Central UI initiative supporting multiple franchises.",
      "Implemented interface systems using proprietary vector-based authoring tools and C-based scripting, working within console hardware and memory constraints.",
      "Served as UI Development Manager for Tiger Woods PGA Tour 08 and NCAA Football 10, coordinating development teams and production schedules.",
      "Helped transition interface development workflows toward more accessible authoring tools, including Adobe Flash.",
    ],
  },
  {
    id: "early",
    role: "Multimedia Developer",
    company: "Early Career",
    location: "Orlando, FL",
    dates: "April 1996 – September 1998",
    bullets: [
      "Developed interactive multimedia applications and computer-based training systems for commercial and U.S. Navy projects.",
      "Worked with multimedia authoring technologies in structured production environments supporting technical training.",
      "Previously held a U.S. government Secret security clearance while developing U.S. Navy training systems. Willing to undergo a new background investigation and clearance process if required.",
    ],
  },
];

export const education = [
  {
    school: "Rollins College",
    place: "Winter Park, FL",
    credential: "Bachelor of Science, Computer Science",
  },
  // {
  //   school: "Lansing Community College",
  //   place: "Lansing, MI",
  //   credential: "Associate in Applied Arts with Animation Certificate",
  // },
];

export const eaTitles = [
  {
    name: "Madden NFL",
    note: "Annual franchise UI across multiple console generations.",
  },
  {
    name: "NCAA Football",
    note: "Season, dynasty, and presentation systems.",
  },
  {
    name: "Tiger Woods PGA Tour",
    note: "Menus, challenge flows, and in-round presentation.",
  },
  {
    name: "NFL Street",
    note: "Arcade-style navigation and front-end presentation.",
  },
  {
    name: "NASCAR Thunder",
    note: "Early EA Sports UI systems work.",
  },
];

export const maestroCaseStudy = {
  introduction: [
    "Maestro Label Designer is a browser-based application that allows customers to create and customize labels for printing. When I joined Online Labels, Maestro was an existing Adobe Flash application written in ActionScript 2. I took over its development, maintaining and extending its functionality before undertaking a complete redesign and rebuild in HTML5 and TypeScript.",
    "I was Maestro's sole developer, responsible for the application from its user interface and interactive editing tools through its APIs, database access, server-side rendering, and integration with the company's ordering and production systems. The project combined interface design and frontend engineering with the backend development needed to make Maestro a complete, production-ready application.",
  ],
  history: [
    "As browser support for Flash declined, Maestro needed a new technical foundation. Rather than simply reproducing the existing application in another language, I used the transition as an opportunity to reconsider its interface and workflows.",
    "I redesigned the editing environment, reorganized the tools and property controls, and developed the new application using HTML5 and TypeScript. The challenge was to preserve the capabilities that customers already depended on while making the application easier to navigate and more flexible to extend.",
    "The screenshots below illustrate some of those changes, comparing the original Flash application with the HTML5 version.",
  ],
  environment: [
    "A label designer needs to provide precise control without overwhelming someone who simply wants to make an address label.",
    "Maestro supports text, images, shapes, and other design elements that customers can select, position, resize, rotate, and arrange within the physical dimensions of a label. I developed the application's editing controls and underlying functionality, including inline text editing, object manipulation, contextual property panels, and tools for formatting and alignment.",
    "One of the more challenging features was the inline rich-text editor, which I implemented directly in SVG with my own caret positioning, selection, and text-editing logic rather than relying on the browser's built-in editing controls.",
    "I also developed a reusable browsing framework that supports templates, saved designs, blank label formats, and order history. Additional features, including barcode, QR code, and nutrition-label generators, allow customers to create specialized content directly within their designs. Mail merge extends the editor further by supporting variable information imported from spreadsheets.",
  ],
  rendering: [
    "The design editor was only one part of Maestro. Behind the interface were the services responsible for saving customer designs, retrieving their work, managing data, generating printable documents, and connecting the application to Online Labels' enterprise systems.",
    "I developed Maestro's backend using .NET and SQL Server, including its API endpoints, database access through an ORM, and stored procedures. These systems supported the editor's everyday functionality as well as the processes involved in preparing designs for printing.",
    "One of the more technically demanding parts of that work was the rendering pipeline. Maestro's browser-based editor used SVG, but printable output required recreating the artwork as a PDF. I developed the server-side conversion process using iText, with ImageMagick and Ghostscript providing supporting graphics-processing capabilities.",
    "The system deserialized the design data received through the API and reconstructed its text, shapes, images, and transformations in PDF format. It then arranged the rendered artwork according to the dimensions and layout of the selected label product, whether the customer was printing at home or ordering professionally printed labels.",
    "That work connected the editing experience to the practical requirements of producing physical labels, while maintaining the visual consistency customers expected between their designs and the finished output.",
  ],
  features: "The following case studies explore four areas of the application in more detail: the browsing and template-selection framework, the editing tools and property controls, specialized content generators, and the rendering and print-production pipeline.",
  enterprise: [
    "In addition to Maestro, I've developed and maintained enterprise applications supporting the operations of Online Labels and Consolidated Labels. Although the companies shared a corporate structure, their customers and business processes were quite different.",
    "Online Labels primarily served customers purchasing blank label stock, often using Maestro to create and print their own designs. Consolidated Labels served commercial customers ordering large quantities of professionally printed labels produced on industrial flexographic presses.",
    "The software supporting those operations reflected those differences. My work included internal business applications, data management, system integration, and customer-facing tools built with .NET, SQL Server, and related technologies.",
    "Among the applications I've worked on were OLEA (Online Labels Enterprise Application), CLEA (Consolidated Labels Enterprise Application), EOS (a Blazor-based intermediary connecting data between those systems), and the Consolidated Labels customer portal.",
    "The customer portal supported commercial printing customers through workflows such as submitting and reviewing artwork, accessing invoices, and reviewing print jobs. It provided a very different experience from Maestro, reflecting the needs of customers managing commercial print orders rather than printing individual labels themselves.",
  ],
};

export const maestroFeatures = [
  {
    slug: "browsing",
    title: "Browsing & templates",
    image: "mld_browsing.png",
    width: 1918, height: 909,
    alt: "Maestro template browser with category navigation, search, sorting, and a scrollable thumbnail grid",
    caption: "Pre-designed templates organized in a searchable, sortable thumbnail grid.",
    highlights: [
      { title: "Scrollable, sortable content", description: "I organized user content into a thumbnail grid for quick visual scanning and discovery." },
      { title: "A reusable browsing framework", description: "The same UI patterns supported saved designs, blank media, and order history for a consistent experience across content types." },
      { title: "Context with stable navigation", description: "Context-sensitive side panels worked alongside persistent top-level navigation, balancing flexibility and discoverability." },
      { title: "Content management at scale", description: "Structured layouts and filtering supported large datasets without overwhelming the user." },
    ],
    summary:
      "A reusable browsing framework for templates, saved designs, blank media, and order history.",
  },
  {
    slug: "generators",
    title: "Integrated generators",
    image: "mld_integrated-generators.png",
    width: 1919, height: 911,
    alt: "Maestro QR code generator with contact-information fields, generated preview, and Add To Design control",
    caption: "The integrated QR code generator previews content before adding it to a design.",
    highlights: [
      { title: "Programmatically generated content", description: "I extended the core design tools with generators for barcodes, QR codes, and nutrition labels, allowing users to incorporate this content without constructing it manually." },
      { title: "Data-driven mail merge", description: "Mail merge workflows generated sequential or variable label content from external data sources such as spreadsheets." },
      { title: "Beyond one-off designs", description: "These capabilities supported repeatable production workflows and high-volume content generation within the design application." },
    ],
    summary:
      "Integrated barcodes, QR codes, nutrition labels, and data-driven mail merge workflows.",
  },
  {
    slug: "printing",
    title: "Precision printing",
    image: "mld_precision-printing.png",
    width: 1919, height: 946,
    alt: "Maestro editor behind a PDF viewer displaying a sheet of repeated Mango labels ready for printing",
    caption: "A generated PDF sheet shown alongside the browser-based design environment.",
    highlights: [
      { title: "From SVG editing to PDF output", description: "I tightly integrated SVG editing with PDF generation to maintain WYSIWYG consistency between on-screen layouts and printed labels." },
      { title: "Server-side rendering", description: "The print-ready rendering pipeline used iText, ImageMagick, and Ghostscript to generate production-quality PDFs." },
      { title: "Client–server rendering architecture", description: "I designed and implemented the full client–server rendering architecture, managing data flow and transformation from user interaction to final output." },
    ],
    summary:
      "WYSIWYG from browser canvas to print-ready PDF using iText, ImageMagick, and Ghostscript.",
  },
  {
    slug: "tools",
    title: "Tools & properties",
    image: "mld_tools-properties.png",
    width: 1916, height: 907,
    alt: "Maestro editor with selected Mango label text, contextual text properties, font picker, color dialog, and object list",
    caption: "Text editing, contextual properties, font selection, color controls, and object management in one workspace.",
    highlights: [
      { title: "A complete browser-based design environment", description: "I developed a comprehensive set of design capabilities while maintaining usability for a broad audience." },
      { title: "Unified creation tools", description: "Shapes, text, images, and dynamic content supported both programmatic and user-driven design workflows within a unified interface." },
      { title: "Custom editing interactions", description: "I engineered custom text editing, selection mechanics, and direct-manipulation behaviors from the ground up for precise control." },
      { title: "Context-aware properties", description: "Detailed property controls provided access to styling, layout, and transformations in the context of the selected design element." },
    ],
    summary:
      "Selection, inline editing, direct manipulation, and dynamic property panels for a dense professional editor.",
  },
];


export const eaOverview = {
  title: "EA Sports — UI Design & Development",
  introduction: [
    "At EA Tiburon, I designed and developed user interfaces for several EA Sports franchises, including Madden NFL, NCAA Football, and Tiger Woods PGA Tour. My work involved visual and interaction design, hands-on programming with the studio's proprietary UI tools, and developing reusable interface systems that could serve multiple games.",
    "I was Lead UI Designer on most of the titles I worked on, and served as UI Development Manager for Tiger Woods PGA Tour 08 and NCAA Football 10. Although each game presented its own requirements, they shared many of the same technical challenges, particularly as we adapted our interfaces to new console platforms and annual release schedules.",
  ],
  challenge: [
    "Game interfaces had to accommodate more than the visual requirements of a particular title. Controller navigation, display resolutions, hardware limitations, and the underlying game systems all influenced how an interface could be designed and implemented.",
    "I worked directly in the development environment, allowing me to address many of these considerations while designing the interface rather than handing off static artwork for someone else to interpret.",
  ],
};

export const eaFranchises = [
  {
    slug: "madden-nfl",
    title: "Madden NFL",
    summary: "My work on Madden included the design and programming of production interfaces, broadcast-inspired graphics, and reusable UI controls that became part of the foundation for subsequent releases.",
    introduction: "My Madden NFL work brought interface design and production development together. From Madden NFL 2001 onward, I personally designed and coded production interfaces in C using EA’s proprietary UI authoring application, collaborating with a dedicated UI team.",
    image: "/hero-madden.png",
    imageAlt: "Madden NFL main menu with navigation alongside player artwork",
  },
  {
    slug: "ncaa-football",
    title: "NCAA Football",
    summary: "I designed and coded interfaces adapted to the particular requirements of college football, including recruiting workflows, roster management, and a system that applied each school's colors throughout the UI.",
    introduction: "NCAA Football was among the EA Sports franchises I worked on. This case study will explore my contributions within the dedicated UI team’s collaborative development process.",
    image: "/hero-ncaa.png",
    imageAlt: "NCAA Football team select screen with navigation and team artwork",
  },
  {
    slug: "tiger-woods-pga-tour",
    title: "Tiger Woods PGA Tour 08",
    summary: "As UI Development Manager, I led the team's work during the franchise's transition to our studio, which involved converting inherited technology and assets while development was already underway.",
    introduction: "I served as UI Development Manager for Tiger Woods PGA Tour, working with a dedicated UI team. This case study will explore that role and the team’s collaborative UI development work.",
    image: "/hero-tw.png",
    imageAlt: "Tiger Woods PGA Tour confidence interface showing hole history and shot results",
  },
  {
    slug: "central-ui",
    title: "Central UI",
    summary: "I helped establish a department responsible for developing shared interface systems and assets that could be adapted by the Madden, NCAA Football, and NASCAR teams.",
    introduction: "Collaborative development of shared UI frameworks, components, and assets for EA Sports franchise teams.",
    image: "/images/ea/central-ui/2004/Madden_EditPlayer.png",
    imageAlt: "Central UI work: Madden player editor with option selectors and player preview",
  },
];

export type MaddenScreenshot = {
  file: string;
  titleYear: number;
  title?: string;
  caption: string;
  alt: string;
  width: number;
  height: number;
};

export const maddenCaseStudy = {
  title: "Madden NFL",
  subtitle: "UI Design & Development",
  introduction: [
    "Madden NFL 2001 was one of EA Sports' launch titles for the PlayStation 2, introducing a new console generation at the same time that our studio was adopting an entirely new approach to interface development.",
    "I designed and programmed production UI using iStudio, a proprietary authoring application developed by EA's internal Tools department. The work included menus, player information screens, broadcast-style graphics, and the reusable interface controls that would become part of the foundation for subsequent Madden and NCAA Football releases.",
  ],
  sections: [
    {
      id: "new-generation",
      title: "A New Console and a New Development Environment",
      paragraphs: [
        "The PlayStation 2 presented plenty of challenges on its own, but Madden NFL 2001 also marked the introduction of iStudio. Unlike conventional graphics tools, iStudio allowed us to create vector-based interface elements that were rendered directly by the game engine, with C-based scripting to control their behavior and interact with the game's underlying systems.",
        "This meant that interface development involved much more than preparing artwork. I could build the screens, write the code that controlled them, and work directly with the game systems that supplied their data.",
        "The development schedule was demanding, particularly with the unfamiliar hardware and tools. Nevertheless, the work we completed established an interface foundation that would continue to evolve over several subsequent releases.",
      ],
      image: "roster2001",
    },
    {
      id: "broadcast",
      title: "Menus and Broadcast Presentation",
      paragraphs: [
        "A football game needs to communicate a surprising amount of information without distracting from the action on the field. In addition to conventional menus and player-management screens, our team's UI work included scoring displays, player statistics, penalty information, and animated broadcast-style overlays.",
        "We approached these elements as part of the game's overall presentation, borrowing familiar conventions from televised football while adapting them to the requirements of an interactive game. A scoring banner, for example, needed to be informative without obstructing the play, while a roster screen could devote considerably more space to detailed statistics and navigation controls.",
      ],
      image: "stats2001",
    },
    {
      id: "annual-evolution",
      title: "Building Interfaces That Could Evolve",
      paragraphs: [
        "Annual sports-game releases have an interesting habit of accumulating functionality and legacy code. A control that works well in one year's game may need a completely different appearance the following year, even though its underlying behavior remains much the same.",
        "I helped establish UI design guidelines that separated reusable controls from their visual presentation. Roster tables, directional option selectors, and other common interface elements could retain their functionality while receiving updated artwork and styling to suit each release.",
        "This made it easier to maintain familiar interaction patterns without rebuilding the same controls from scratch every year.",
      ],
      image: "create2001",
    },
  ],
  controllers: [
    "As my console work expanded across PlayStation, Xbox, GameCube, and Wii platforms, controller differences introduced their own interaction challenges. Button assignments, navigation conventions, and platform-specific requirements all needed consideration, even when the underlying interface functionality was shared.",
    "For the Nintendo Wii, this included pointer-based navigation and motion gestures, as shown in the Madden NFL 2011 Franchise interface below.",
  ],
  evolution: [
    "The screenshots below show selected interfaces from Madden NFL 2001, 2010, and 2011. Although the visual treatment changed considerably over the years, many of the same fundamental interaction patterns remained recognizable.",
    "The evolution of these interfaces illustrates an ongoing challenge in annual game development: accommodating new features and presentation styles while maintaining familiar, reliable controls for returning players.",
  ],
};

export const maddenScreenshots = {
  hero: { file: "Madden 2001/Press Start.jpg", titleYear: 2001, caption: "The starting point for a new console generation.", alt: "Madden NFL 2001 title screen with EA Sports logo and Press Start prompt", width: 640, height: 480 },
  roster2001: { file: "Madden 2001/View Roster.jpg", titleYear: 2001, caption: "Roster table, highlighted player row, and team selectors.", alt: "Madden NFL 2001 View Roster screen showing player ratings, a highlighted Derrick Brooks row, and team information", width: 640, height: 480 },
  stats2001: { file: "Madden 2001/Ingame Player Stats.jpg", titleYear: 2001, caption: "Broadcast-inspired scoring-drive information over the game view.", alt: "Madden NFL 2001 scoring-drive banner with Titans team information over a player close-up", width: 640, height: 480 },
  create2001: { file: "Madden 2001/Create Player 1.jpg", titleYear: 2001, caption: "Player information fields with left/right option selectors.", alt: "Madden NFL 2001 Create Player menu with editable information, arrow selectors, and player preview", width: 640, height: 480 },
  penalty2001: { file: "Madden 2001/Penalty.jpg", titleYear: 2001, caption: "Penalty details with player, yardage, and accept/decline options.", alt: "Madden NFL 2001 holding penalty overlay showing player Pace, ten yards, and accept or decline choices", width: 640, height: 480 },
  play2010: { file: "Madden 2010/Play Call 1.jpg", titleYear: 2010, caption: "Play-call presentation with formation choices and score information.", alt: "Madden NFL 2010 play-call screen with formation diagrams on the right and score information above the game view", width: 854, height: 480 },
  roster2011: { file: "Madden 2011/View Rosters.jpg", titleYear: 2011, caption: "A later roster presentation with player ratings and salary information.", alt: "Madden NFL 2011 View Rosters screen with Panthers players, ratings columns, and salary information", width: 854, height: 480 },
  franchise2011: { file: "Madden 2011/Franchise Main.jpg", titleYear: 2011, title: "Madden NFL 2011 — Nintendo Wii", caption: "Franchise mode interface designed for the Wii, incorporating motion gestures and pointer-based navigation.", alt: "Madden NFL 2011 franchise screen with an overhead facility view, legacy rank, and team, money, and fans indicators", width: 854, height: 480 },
} satisfies Record<string, MaddenScreenshot>;

export const maddenEvolutionGallery = ["penalty2001", "play2010", "roster2011", "franchise2011"] as const;

export type CentralUiScreenshot = {
  file: string;
  franchise: string;
  caption: string;
  alt: string;
  width: number;
  height: number;
};

export const centralUiCaseStudy = {
  title: "Central UI — One Framework for Multiple Franchises",
  subtitle: "Shared Interface Development at EA Sports",
  franchises: ["Madden NFL", "NCAA Football", "NASCAR"],
  introduction: [
    "Annual sports-game development presented an interesting problem. Madden NFL, NCAA Football, and NASCAR each had their own visual identity and gameplay requirements, but much of their interface functionality was remarkably similar. All three needed roster tables, settings screens, option selectors, and other controls that performed essentially the same tasks.",
    "Developing and maintaining separate versions of those controls for every franchise meant repeating work that could be shared.",
    "I helped establish EA Tiburon's Central UI department and worked with the team to develop a common interface framework that individual game teams could adapt to their own requirements. I was involved in the department during the 2004, 2005, and 2009 development cycles.",
  ],
  challenge: [
    "Although the games looked different, many of their underlying interaction patterns were familiar.",
    "A scrolling roster table in Madden served much the same purpose as one in NCAA Football. A directional selector used to adjust a player's attributes wasn't fundamentally different from one used to configure a NASCAR vehicle. What changed was the information being presented, how it was arranged, and the visual treatment applied to the controls.",
    "The challenge was to identify which parts of these interfaces could be developed once and reused, while leaving individual game teams enough flexibility to accommodate their particular requirements.",
  ],
  foundation: [
    "Central UI developed shared interface components and assets that franchise teams could customize for their games. Rather than requiring each team to recreate basic controls independently, the framework provided common functionality that could be adapted with different graphics, colors, and layouts.",
    "The work built on our earlier experience developing reusable UI controls, but extended that thinking across several franchises. The objective was to reduce redundant development and make the underlying interfaces easier to maintain without imposing a common visual identity on games that were supposed to look and feel different.",
  ],
  practice: [
    "The screenshots below illustrate how similar interface patterns appeared across Madden NFL, NCAA Football, and NASCAR during the 2004, 2005, and 2009 development cycles.",
    "Some differences are primarily visual, while others reflect the particular requirements of each sport. A football roster screen needs to present player positions and ratings, for example, while a NASCAR setup screen might use similar selection controls to adjust vehicle settings.",
    "These examples illustrate the approach behind Central UI: retain useful common functionality while allowing each franchise to determine how that functionality should be presented to its players.",
  ],
  workflow: [
    "Our original development environment, iStudio, combined vector graphics with C-based scripting. It was capable of producing sophisticated game interfaces, but using it effectively required considerable programming knowledge.",
    "Central UI later transitioned toward Adobe Flash as an authoring environment, making interface development accessible to a broader group of designers and developers.",
    "That change reflected an important practical consideration: a shared framework is only as useful as the ability of the teams adopting it to work with it. Reducing the technical barriers to interface authoring made it easier for franchise teams to take advantage of the common functionality while concentrating on the requirements of their own games.",
  ],
};

export const centralUiCycles: { cycle: number; title: string; comparison: string; screenshots: CentralUiScreenshot[] }[] = [
  {
    cycle: 2004,
    title: "Option Selectors",
    comparison: "Madden, NCAA Football, and NASCAR used comparable controls for choosing options and modifying settings, although their interfaces were arranged and styled differently.",
    screenshots: [
      { file: "Madden_EditPlayer.png", franchise: "Madden NFL", caption: "Player attributes, directional selectors, and a character preview.", alt: "Madden Create-Edit Player screen with blue option arrows, attribute rows, and a player preview", width: 800, height: 600 },
      { file: "NCAA_EditPlayer.jpg", franchise: "NCAA Football", caption: "Equipment options alongside the selected player.", alt: "NCAA Edit Player Equipment screen with a Miami player preview and left/right equipment options", width: 640, height: 480 },
      { file: "NASCAR_MyNASCAR.jpg", franchise: "NASCAR", caption: "Driver and paint-scheme selectors with car and driver imagery.", alt: "My NASCAR screen with name, driver, and paint scheme selectors beside Tony Stewart and car imagery", width: 800, height: 600 },
    ],
  },
  {
    cycle: 2005,
    title: "Roster Tables and Settings",
    comparison: "The Madden and NCAA roster screens illustrate how similar information could receive different visual treatments. Settings screens from Madden and NASCAR demonstrate related controls serving different purposes.",
    screenshots: [
      { file: "Madden_Roster.jpg", franchise: "Madden NFL", caption: "Roster columns, a highlighted player row, and scrollbars.", alt: "Madden View Rosters screen with player salary columns, a red selected row, and horizontal and vertical scrollbars", width: 1000, height: 720 },
      { file: "NCAA_Roster.jpg", franchise: "NCAA Football", caption: "A roster table framed by team and player information.", alt: "NCAA roster screen showing Auburn player information above a ratings table with a highlighted row and scrollbars", width: 640, height: 480 },
      { file: "Madden_Settings.jpg", franchise: "Madden NFL", caption: "Stadium selection with weather controls and a preview.", alt: "Madden Select Stadium screen with team selector, weather adjustment bars, and Chicago stadium preview", width: 1280, height: 720 },
      { file: "NASCAR_Settings.jpg", franchise: "NASCAR", caption: "Suspension settings using arrows and horizontal adjustment bars.", alt: "NASCAR car setup screen with front springs, rear springs, and wedge adjustment bars; Part 43 text appears in the source image", width: 1280, height: 720 },
    ],
  },
  {
    cycle: 2009,
    title: "Lists and Navigation",
    comparison: "Examples of team selection, recruiting, and driver management show how common interface patterns continued to appear across the franchises.",
    screenshots: [
      { file: "Madden_FranchiseSetup.jpg", franchise: "Madden NFL", caption: "Team selection alongside a franchise detail panel.", alt: "Madden Franchise Setup screen with a scrollable team list and Tampa Bay Buccaneers information panel", width: 1915, height: 1078 },
      { file: "NCAA_Recruiting..jpg", franchise: "NCAA Football", caption: "Recruiting pitch information organized in aligned columns.", alt: "NCAA recruiting phone-call screen listing pitch names, school ratings, and prospect importance", width: 1024, height: 576 },
      { file: "NASCAR_DriverSelect.webp", franchise: "NASCAR", caption: "Driver list, ratings, and a car preview.", alt: "NASCAR Select Driver screen with driver names, track ratings, and a yellow number 88 car preview", width: 1080, height: 606 },
      { file: "Madden_Topmenu.jpg", franchise: "Madden NFL", caption: "A two-level menu over a blue studio environment.", alt: "Madden main menu with Franchise highlighted and New Franchise, Load Franchise, and Resume Franchise submenu choices", width: 1915, height: 1078 },
    ],
  },
];

export const ncaaCaseStudy = {
  title: "NCAA Football",
  subtitle: "UI Design & Development",
  introduction: [
    "When NCAA Football made its PlayStation 2 debut in 2002, we had an advantage that hadn't been available during the development of Madden NFL 2001: an established UI framework built around EA's proprietary iStudio development environment.",
    "That gave us a useful starting point, but college football presented its own challenges. The game needed to accommodate more than a hundred schools, each with its own identity, along with recruiting and team-management features that had no direct counterpart in Madden. I designed and programmed the NCAA interfaces using iStudio and C, adapting our existing technology to the particular requirements of college football.",
  ],
  foundation: [
    "Much of the underlying interface functionality developed for Madden could be reused, but the games were different enough that simply replacing the artwork wasn't going to work.",
    "College football required its own navigation, presentation, and team-management features. We built on the existing foundation while developing the additional functionality necessary to support NCAA's considerably larger collection of teams and its different gameplay systems.",
    "The result was an interface that benefited from established technology without losing the character of the college game.",
  ],
  scaling: [
    "At the time, the NFL had 32 teams. NCAA Football had more than a hundred, which made the selection and presentation of teams a more complicated proposition.",
    "There were also licensing restrictions that prevented us from identifying individual college athletes in the same way as Madden's professional players. Roster screens and player information therefore relied on positions, jersey numbers, and other available information.",
    "These differences influenced everything from team-selection controls to recruiting and roster-management interfaces.",
  ],
  workflows: [
    "Recruiting was one of the features that most clearly distinguished NCAA Football from Madden. Players needed a way to find prospective athletes, examine recruiting information, and manage their efforts across the country.",
    "I designed and programmed the recruiting interface, including its interactive map, using the same iStudio environment that supported the rest of the game.",
    "The recruiting map gave players a geographical way to explore information that might otherwise have been buried in tables and menus. Other college-specific screens presented roster details and team-management information in ways suited to the game's particular requirements.",
  ],
  theming: [
    "Supporting more than a hundred teams also presented an interesting visual-design problem. Each school had its own colors, and those identities were an important part of the college football experience.",
    "Rather than create separate sets of interface graphics for every team, I developed a system that stored each school's primary and secondary colors as RGBA values. When a user selected or focused on a different team, the interface automatically applied the corresponding colors to its elements.",
    "This allowed a common interface to reflect the identity of the school currently in focus without requiring individually authored variations for every team. It was a practical solution to a problem that would otherwise have created a great deal of repetitive artwork and maintenance.",
  ],
  displays: [
    "As HDTVs began finding their way into living rooms, most players were still using conventional 4:3 televisions. I was an early adopter of HDTV myself, and I wanted our interfaces to take advantage of the additional screen space without leaving traditional television owners behind.",
    "For NCAA Football 2003, I designed the UI around a 16:9 widescreen layout while keeping essential information within a central 4:3-safe region. This allowed us to accommodate both display formats without requiring entirely separate interfaces.",
    "The play-calling screen illustrates the approach. Formation and play selections, team information, and game statistics were arranged to make use of the available space while preserving the information players needed on standard displays.",
  ],
  evolution: [
    "As NCAA Football continued through subsequent releases, its interfaces evolved to accommodate new features, information, and presentation styles.",
    "The screenshots below show examples of that progression, including depth charts, recruiting screens, and school-budget controls. Although their appearance changed over time, the underlying design challenges remained much the same: presenting large amounts of information clearly while keeping the interface manageable for players.",
  ],
};

export type NcaaScreenshot = {
  file: string;
  titleYear: number;
  caption: string;
  alt: string;
  width: number;
  height: number;
};

export const ncaaScreenshots = {
  hero: { file: "NCAA 2002/640x480/Press Start.jpg", titleYear: 2002, caption: "The title screen for NCAA Football’s PlayStation 2 debut title.", alt: "NCAA Football 2002 title screen with EA Sports logo and Press Start prompt", width: 640, height: 480 },
  menu: { file: "NCAA 2002/640x480/Main Menu.jpg", titleYear: 2002, caption: "Main navigation with Exhibition, Options, and Campus Challenge.", alt: "NCAA Football 2002 main menu with Exhibition highlighted beside a Michigan State mascot", width: 640, height: 480 },
  teams: { file: "NCAA 2002/640x480/Team Select.jpg", titleYear: 2002, caption: "Team selection combining school identities and ratings.", alt: "NCAA Football 2002 Team Select screen showing Florida State and Oklahoma with offense, defense, and special teams ratings", width: 640, height: 480 },
  recruiting: { file: "NCAA 2002/640x480/Recruiting Map.jpg", titleYear: 2002, caption: "Recruiting Central with a state map and recruiting-report navigation.", alt: "NCAA Football 2002 Recruiting Central screen with Texas highlighted on a United States map and Florida team branding", width: 640, height: 480 },
  roster: { file: "NCAA 2002/640x480/View Rosters.jpg", titleYear: 2002, caption: "Roster ratings with position-and-number player labels.", alt: "NCAA Football 2002 Penn State roster table with player positions, numbers, and ratings; LG number 72 is selected", width: 640, height: 480 },
  depth: { file: "NCAA 2003/640x480/Depth Chart.jpg", titleYear: 2003, caption: "Depth-chart slots and player ratings within a school-branded header.", alt: "NCAA Football 2003 Notre Dame Depth Chart screen with quarterback slots, ratings tables, and a helmet graphic", width: 640, height: 480 },
  recruiting2006: { file: "NCAA 2006/854x480/Recruiting Map.jpg", titleYear: 2006, caption: "A later Recruiting Central view with school and conference context.", alt: "NCAA Football 2006 Recruiting Central screen with Tennessee branding, SEC East conference label, and Iowa highlighted on the map", width: 854, height: 480 },
  budget: { file: "NCAA 2006/854x480/School Budgets.jpg", titleYear: 2006, caption: "School budget allocations for recruiting, training, and discipline.", alt: "NCAA Football 2006 School Budgets screen for Florida with percentage bars for recruiting, training, and discipline", width: 854, height: 480 },
  board: { file: "NCAA 2007/854x480/Recruiting Board.jpg", titleYear: 2007, caption: "In-season recruiting with interest levels and points allocations.", alt: "NCAA Football 2007 In-Season Recruiting Board showing LSU prospects with interest level bars and recruiting points", width: 854, height: 480 },
  teams2007: { file: "NCAA 2007/854x480/Team Select.jpg", titleYear: 2007, caption: "School colors, team logos, and comparative ratings in a later team-selection screen.", alt: "NCAA Football 2007 Select Team screen showing Florida State and Miami school colors, logos, and team ratings", width: 854, height: 480 },
} satisfies Record<string, NcaaScreenshot>;

export const ncaaEvolutionGallery = ["depth", "recruiting2006", "budget", "board"] as const;

export const tigerWoodsCaseStudy = {
  title: "Tiger Woods PGA Tour 08",
  subtitle: "UI Development Management",
  introduction: [
    "Tiger Woods PGA Tour 08 was the first installment of the franchise developed at EA Tiburon after production moved from EA's Redwood Shores studio. I served as UI Development Manager, responsible for the team developing the game's interfaces and ensuring that our work met the production schedule.",
    "The transition brought several challenges. We inherited an established game with its own development history and technology, while also integrating developers from the recently acquired Hypnotix studio. At the same time, we needed to adapt the existing interface assets to the tools and framework used at Tiburon.",
  ],
  transition: [
    "Taking over an established franchise is quite different from developing a new title. The game already had an identity, established features, and an audience with expectations about how it should look and behave.",
    "Our job wasn't to reinvent Tiger Woods PGA Tour. We needed to bring its interface development into our studio's production environment while preserving the functionality and presentation that players expected.",
    "That meant getting people familiar with the inherited systems, identifying the work necessary to integrate them with our own technology, and keeping the team's development priorities aligned with the game's production schedule.",
  ],
  migration: [
    'One of our senior programmers described the situation as "building the tracks while the train is running at full speed." It was an apt description.',
    "The UI team was converting inherited assets to our framework while development continued around us. We couldn't simply put production on hold until the transition was complete. New features, fixes, and integration work all needed attention while the underlying technology was being brought into line with the studio's existing tools.",
    "As UI Development Manager, my responsibility was to keep that work organized, address dependencies with other development teams, and ensure that the technical transition didn't prevent us from delivering the game's interfaces.",
  ],
  delivery: [
    "The screenshots below show examples of the interfaces delivered by the UI team, including course selection, GamerNet challenges, and player-confidence information.",
    "Although the finished screens don't reveal the technical and organizational complications behind their development, they represent the result of bringing together people, tools, and production processes that had not previously worked as a single team.",
    "Despite the challenges of the studio transition and ongoing asset conversion, we delivered the game on schedule. Looking back, I'm particularly pleased with how the team handled the situation and brought the project together.",
  ],
};

export const tigerWoodsScreenshots = {
  course: {
    file: "Screenshot 2026-04-23 123445.png",
    caption: "Course selection with Pebble Beach information and play settings.",
    alt: "Tiger Woods PGA Tour 08 course-selection interface showing Pebble Beach Golf Links, course imagery, and settings for holes, tees, and course conditions",
    width: 1314,
    height: 736,
  },
  challenge: {
    file: "tw_challenge.jpg",
    caption: "GamerNet challenge browsing with a selected challenge and its details. GameSpot watermark retained from the supplied image.",
    alt: "Tiger Woods PGA Tour 08 GamerNet Free Style screen showing a challenge list and Trick Shot details; GameSpot watermark at lower right",
    width: 1280,
    height: 720,
  },
  confidence: {
    file: "tw_confidence.jpg",
    caption: "Confidence information with hole history and a score timeline.",
    alt: "Tiger Woods PGA Tour 08 confidence display showing a hole list, current confidence, and a chart of recent scores for hole 16",
    width: 1280,
    height: 720,
  },
};

export type WorkshopScreenshot = {
  file: string;
  title: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export const workshopApplications: {
  id: string; title: string; paragraphs: string[]; screenshots: WorkshopScreenshot[];
}[] = [
  {
    id: "weather-station", title: "Weather Station",
    paragraphs: [
      "I've always been interested in weather, so building my own weather application seemed like a worthwhile project.",
      "The Weather Station retrieves current conditions and forecasts through the Open-Meteo APIs, presenting hourly and weekly information in an interface I designed for quick reference. Locations are maintained in SQL Server, allowing me to save and switch between places without repeatedly entering their coordinates.",
      "I also developed a Weather Almanac that retrieves historical observations and summarizes conditions for a selected location and date. It calculates historical averages, highs, lows, and precipitation statistics, turning the raw weather data into something useful for comparing current conditions with previous years.",
      "The application combines external API integration, database persistence, data processing, and presentation through Blazor components."
    ],
    screenshots: [
      { file: "Weather/Weather_Hourly.png", title: "Hourly forecast", alt: "Weather Station hourly forecast for Altamonte Springs with temperature, precipitation, and wind columns in a dark blue and brass interface", caption: "Hourly weather data and saved-location navigation.", width: 1275, height: 810 },
      { file: "Weather/Weather_Almanac.png", title: "Historical Almanac", alt: "Weather Almanac with average highs and lows, record temperatures, and average precipitation over a 30-year history", caption: "Historical observations summarized into averages, extremes, and precipitation statistics.", width: 1088, height: 787 },
    ],
  },
  {
    id: "task-manager", title: "Task Manager",
    paragraphs: [
      "The Task Manager began as a practical way to keep track of the assorted projects, chores, and other things that tend to accumulate around the house.",
      "I developed a SQL-backed task system with categories, due dates, completion tracking, sorting, and filtering. Tasks can be created and edited through Blazor forms, while the main interface provides several ways to organize and review the same underlying records.",
      "I also implemented category-specific icons and visual indicators for task status and deadlines. The goal was to make the application useful for everyday planning without turning the simple act of remembering to do something into another chore."
    ],
    screenshots: [
      { file: "TaskManager/TaskManager_Main.png", title: "Task organization", alt: "Task Manager with tasks, custom category icons, completion checkboxes, status totals, sorting, and filtering controls", caption: "Task states, category icons, and list organization.", width: 1586, height: 992 },
      { file: "TaskManager/TaskManager_AddTaskModal.png", title: "Creating a task", alt: "New Task dialog with an example description, Website / Development category, optional due date, and Save Task and Cancel controls", caption: "Task creation with a description, category, and optional due date.", width: 1586, height: 992 },
    ],
  },
  {
    id: "chicken-flock-manager", title: "Chicken Flock Manager",
    paragraphs: [
      "What started as a backyard chicken project eventually needed its own software.",
      "Chicken Manager has grown into a substantial application for tracking individual birds, health events, maintenance schedules, supplies, and egg production. It uses a relational SQL Server database to keep the different records connected rather than treating each feature as an isolated list.",
      "I developed the database structure and application workflows for managing flock information, recording health observations, scheduling recurring maintenance, tracking feed and supplies, and logging eggs. Reference tables provide consistent classifications for breeds, health conditions, activities, and other information used throughout the system.",
      "The application also brings together summaries and operational information on a dashboard, including flock status, maintenance reminders, and a camera view of the coop.",
      "Of the Workshop applications, this one has probably grown the furthest beyond its original purpose. Apparently, keeping chickens also requires maintaining a small information system."
    ],
    screenshots: [
      { file: "ChickenManager/ChickenManager_MainPage.png", title: "Flock overview", alt: "Chicken Flock Manager with bird records, breed and age columns, summary indicators, sorting, filters, and a coop camera view", caption: "Individual bird records, flock summaries, and a coop camera view.", width: 1672, height: 941 },
      { file: "ChickenManager/ChickenManager_HealthLog.png", title: "Health history", alt: "Chicken Flock Manager health history with health events, status labels, follow-up notes, and bird, event-type, and status filters", caption: "Health-event tracking, follow-up information, and filtering.", width: 1672, height: 941 },
      { file: "ChickenManager/ChickenManager_FlockList.png", title: "Feed & supplies", alt: "Chicken Flock Manager feed and supplies inventory with sample items, categories, current stock, minimum levels, low-stock status, and purchase dates", caption: "Feed and supplies inventory with low-stock indicators.", width: 1672, height: 941 },
      { file: "ChickenManager/ChickenManager_Tasks&Maintenance.png", title: "Tasks & maintenance", alt: "Chicken Flock Manager maintenance schedule with sample tasks, category labels, due dates, repeat intervals, completion history, and status indicators", caption: "Recurring care tasks, due dates, and maintenance status.", width: 1672, height: 941 },
    ],
  },
  {
    id: "blackjack", title: "Blackjack",
    paragraphs: [
      "Blackjack is a project I originally developed years ago and later revisited in Blazor.",
      "The application handles the rules and changing state of a blackjack game, including player configuration, betting, card dealing, hand evaluation, and the available decisions during play.",
      "I developed the game logic in C# and connected it to a custom interface with its own card graphics and table presentation. As the game progresses, the interface responds to changes in the player's hand, available actions, and betting state.",
      "It's a different kind of programming challenge from the database-backed applications elsewhere in Workshop, and it was also an enjoyable excuse to bring an old project back to life."
    ],
    screenshots: [
      { file: "Blackjack/Blackjack_Hand.png", title: "A hand in play", alt: "Blackjack game on a green felt table showing dealer and player cards, hand totals, a current bet, and hit, stand, split, and double-down controls", caption: "The working game with custom card and table visuals, hand totals, and betting controls.", width: 1541, height: 836 },
      { file: "Blackjack/Blackjack_Settings.png", title: "Game configuration", alt: "Blackjack setup dialog with player name, number of decks, starting purse, and house rules", caption: "Player and game configuration before starting a hand.", width: 1560, height: 839 },
    ],
  },
];
