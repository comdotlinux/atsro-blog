import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://b.kulkarni.cloud/",
  author: "Guruprasad Kulkarni",
  desc: "Umm, many things mostly software though, I hope",
  title: "Developer Musings",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/comdotlinux",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Github",
    href: "https://github.com/gurukulkarni",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://github.com/comdotlinux",
    linkTitle: `${SITE.title} on Facebook`,
    active: false,
  },
  {
    name: "Instagram",
    href: "https://github.com/comdotlinux",
    linkTitle: `${SITE.title} on Instagram`,
    active: false,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/comdotlinux/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:contact@kulkarni.cloud",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/comdotlinux",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "Twitch",
    href: "https://github.com/comdotlinux",
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCGRXM08d5KIwqYWIaY_DxOQ",
    linkTitle: `${SITE.title} on YouTube`,
    active: true,
  },
  {
    name: "WhatsApp",
    href: "https://github.com/comdotlinux",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "https://github.com/comdotlinux",
    linkTitle: `${SITE.title} on Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "https://github.com/comdotlinux",
    linkTitle: `${SITE.title} on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "https://github.com/comdotlinux",
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: "https://github.com/comdotlinux",
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://github.com/comdotlinux",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://github.com/comdotlinux",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://www.reddit.com/user/comdotlinux",
    linkTitle: `${SITE.title} on Reddit`,
    active: true,
  },
  {
    name: "Skype",
    href: "https://github.com/comdotlinux",
    linkTitle: `${SITE.title} on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "https://github.com/comdotlinux",
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://comdotlinux.t.me",
    linkTitle: `${SITE.title} on Telegram`,
    active: true,
  },
  {
    name: "Mastodon",
    href: "https://mastodon.social/@comdotlinux",
    linkTitle: `${SITE.title} on Mastodon`,
    active: true,
  },
];
