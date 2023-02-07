import { defineConfig } from "vitepress";
export default defineConfig({
  title: "Yumbot",
  description: "Docs for the Best Bot on Twitch!!",
  lang: "en-US",
  ignoreDeadLinks: true,
  lastUpdated: true,
  cleanUrls: "without-subfolders",
  themeConfig: {
    // algolia: {
    //   appId: "V96RZ4HBB3",
    //   apiKey: "b07f18943767b4ab0f8575ffca6e6a60",
    //   indexName: "dev_yumbot",
    // },
    lastUpdatedText: "Last Commit",
    siteTitle: "Yumbot",
    logo: "https://cdn.discordapp.com/attachments/1068077665854181418/1068077727283937300/logo.jpg",
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Options",
        items: [
          { text: "Commands", link: "/commands" },
          { text: "Tools", link: "/tools/" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
      { icon: "twitter", link: "..." },
      { icon: "discord", link: "..." },
    ],
    footer: {
      message: "Made by Yumshot  with 🖤",
      copyright: "Copyright © 2023-present Yumshot",
    },
  },
});
