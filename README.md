[![Netlify Status](https://api.netlify.com/api/v1/badges/22d9a6f7-5338-40fb-a84d-542f6b7d2793/deploy-status)](https://app.netlify.com/sites/gatsby-react-cloud-paas/deploys)

# Gatsby React Cloud PaaS

<h3 style="font-size: 5em;">☃️❄️⚙️⚛📶🌐</h3>

## **Cloud Native Platform as a Service application built on Gatsby**

---

## ⚙ Features

![](https://raw.githubusercontent.com/moisestech/gatsby-react-cloud-paas/main/gatsby/reference/diagram/gatsby-firebase-logo.png)

- React 16.13
- Gatsby 2.24
- [Firebase Auth](https://github.com/marcomelilli/gatsby-firebase-simple-auth)
- React Hooks
- ES8
- PropTypes
- Light/Dark Theme

## 👁️‍🗨️ Project Preview

## Ui

|                                                                          🖥️ Desktop Mode                                                                           |                                                                                                  📱 Mobile Mode                                                                                                  |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| ![](https://raw.githubusercontent.com/moisestech/gatsby-react-cloud-paas/main/gatsby/reference/ui/nevalyashka_cloud_provider_ui_dashboard_desktop_June28_2021.png) | <img src="https://raw.githubusercontent.com/moisestech/gatsby-react-cloud-paas/main/gatsby/reference/ui/nevalyashka_cloud_provider_ui_dashboard_mobile_June28_2021.png" width="500px" style="max-width: 300px"/> |

## Architecture

![](https://raw.githubusercontent.com/moisestech/gatsby-react-cloud-paas/main/gatsby/reference/diagram/gatsby-basic-auth.png)

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
    │       ├── dashboard_desktop.png
    │       └── dashboard_mobile.png
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

- Re-write in Typescript

---

## 📝 Todos

### Login

- Create Gatsby Auth Login Page.
- Setup Firebase Login.

### App State Management

- Import ReduxJS.
- Setup Instances Redux Action Creators.
- Setup Loading Bar.

### Dashboard (Instances)

- Create Dashboard Page Pagination.
- Create Create Instance Page.
- Create Instance:InstanceID Page.

### Homepage

- Create Home Page Welcome Design.

### Design

- Create a Dark Mode / Light Mode Theme.
- Add Favicon / SVG.
- Mobile version.
- Create 404 Page.
