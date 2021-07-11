# Gatsby React Cloud PaaS

<h3 style="font-size: 5em;">☃️❄️⚙️⚛📶🌐</h3>

## **Cloud Native Platform as a Service application built on Gatsby**

---

## ⚙ Features

- React 16.13
- Gatsby 2.24
- React Hooks
- ES8
- PropTypes
- Light/Dark Theme

## 👁️‍🗨️ Project Preview

|                                                                                                                                                                                      Light Mode                                                                                                                                                                                       |     Dark Mode     |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------: |
| ![](https://raw.githubusercontent.com/moisestech/gatsby-sanity-cloud-paas/main/gatsby/static/ui/nevalyashka_cloud_provider_ui_dashboard_desktop_June28_2021.png) <img src="https://raw.githubusercontent.com/moisestech/gatsby-sanity-cloud-paas/main/gatsby/static/ui/nevalyashka_cloud_provider_ui_dashboard_mobile_June28_2021.png" width="500px" style="max-width: 500px"/> ![]() | ![]() ![]() ![]() |

## 🗺 URL Tree

```bash
├── /                          #Home
├── /:dashboard                #Dashboard
├── /:instances/:instanceID    #Instance:ID
├── /create                    #Create Instance
└── /*                         #404
```

## 🌿 Application Tree

```bash
├── README.md
├── gatsby
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-ssr.js
    ├── netlify.toml
    ├── package.json
    ├── reference
    │   ├── diagram
    │   │   └── gatsby-basic-auth.png
    │   └── ui
    │       ├── nevalyashka_cloud_provider_ui_dashboard_desktop_June28_2021.png
    │       └── nevalyashka_cloud_provider_ui_dashboard_mobile_June28_2021.png
    └── src
        ├── assets
        │   ├── fonts
        │   │   └── replica-regular.woff
        │   └── images
        │       └── udacity.svg
        ├── components
        │   ├── Footer.js
        │   ├── Instance.js
        │   ├── InstanceList.js
        │   ├── Layout.js
        │   ├── Logo.js
        │   ├── Nav.js
        │   └── TopNav.js
        ├── pages
        │   ├── 404.js
        │   ├── about.js
        │   ├── account.js
        │   ├── billing.js
        │   ├── dashboard.js
        │   └── index.js
        ├── services
        │   └── auth.js
        ├── styles
        │   ├── GlobalStyles.js
        │   └── Typography.js
        ├── templates
        └── utils
```

## ⛰️ Roadmap

## 📝 Todos

- Create Home Page.
- Create Login Page.
- Create Dashboard Page.
- Create Instance:InstanceID Page.
- Create Create Page.
- Create 404 Page.
- Create a Dark Mode / Light Mode Theme.

- Add Favicon / SVG.
- Mobile version.
- Re-write in Typescript.
- Re-factor in styled components.
