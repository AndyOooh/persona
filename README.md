<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<div align="center">

<img src="https://user-images.githubusercontent.com/60953822/210187142-107019aa-38a6-4e65-9268-f61b76e578d4.png" alt="Logo" width="80" height="80">

<h1>Persona</h3>
<h4>A test assignment</h4>
  <p>
    <a href="https://github.com/AndyOooh/repo_name">View Demo</a>
    ·
    <a href="https://github.com/AndyOooh/repo_name/issues">Report Bug</a>
    ·
    <a href="https://github.com/AndyOooh/repo_name/issues">Request Feature</a>
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
      <ul>
        <li><a href="#assignment">Assignment</a></li>
      </ul>
      <ul>
        <li><a href="#intro">Intro</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#author">Author</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
# About The Project

## Built With

<!-- * [![Next][Next.js]][Next-url] -->

- ![Turborepo](https://img.shields.io/static/v1?style=for-the-badge&message=Turborepo&color=9E4C96&logo=Turborepo&logoColor=FFFFFF&label=)
- ![Next.js](https://img.shields.io/static/v1?style=for-the-badge&message=Next.js&color=000000&logo=Next.js&logoColor=FFFFFF&label=)
- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
- ![JSON-server](https://img.shields.io/static/v1?style=for-the-badge&message=JSON-server&color=1E3A8A&logo=JSON&logoColor=FFFFFF&label=)
- ![Jest](https://img.shields.io/static/v1?style=for-the-badge&message=Jest&color=C21325&logo=Jest&logoColor=FFFFFF&label=)

## Assignment

Following is the essence of the assignment given:

> Build a simple personality test application, that takes 3-5 different questions, maps them into a score and produces a personality trait of either Introvert or Extrovert. An example could be:
>
> - Landing screen
> - Start personality test
> - Dynamic screen, that reads question and answers from a the backend (Just build CRUD, with in memory DB)
> - Finish screen, where you can see your personality trait.

## Intro

This project is bootstrapped as a monorepo with [turborepo](https://turbo.build/). It includes three _apps_:

- client - a Next.js 13 frontend.
- server - A Node.js/Express API.
- database - a _json-server_ mock database.

It also includes three _packages_ for sharing configurations and typescript types:

- eslint-config-custom
- tsconfig
- types

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
# Getting Started

To get a local copy up and running follow these simple steps.

## Prerequisites

You must be running **node v. 18** or higher.

## Installation

1. Clone the repo:
   ```sh
   git clone https://github.com/AndyOooh/persona
   ```
2. Install packages (In the root folder):
   ```sh
   yarn install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

# Usage

Before starting the development servers, you must rename the `.env.example` files in the `client` and `server` *apps* to `.env`. This is to prevent the environment variables from being committed to the repository.

For running tests and starting the development servers, turborepo is used. It is configured to run the client, server and database concurrently. The commands are:

```sh
yarn dev
```

and

```sh
yarn test
```

or

```sh
yarn coverage
```

However, you can also run the apps separately. Either by using the `--filter` flag in combination with the app names `client`, `server` or `database`, or by appending them with `:<package>`. For example, to start the client development server only, run:

```sh
yarn dev --filter client
```

or

```sh
yarn dev:client
```

Or you can _cd_ into the specific directories and use the commands there.

Once you have the development servers running, you can access the client at [localhost:3000](http://localhost:3000) and the database at [localhost:8000](http://localhost:8000).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ROADMAP -->
# Roadmap

- [x] Personality test.
- [x] CRUD operations for personality test.
- [ ] (admin) user and login.
- [ ] View dashboard with CMS for blog posts and creating more tests/surveys.

See the [open issues](https://github.com/AndyOooh/persona/issues) for a full list of proposed features (and known issues).
<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- Author -->
# Author

👤 **AndyOooh**

- Website: [andyo.xyz](https://www.andyo.xyz/)
- LinkedIn: [@andyooh](https://linkedin.com/in/andyooh)
- Resume: [andyo.xyz/resume](https://www.andyo.xyz/static/media/Andreas%20Oee%20-%20Junior%20Full%20Stack%20-%20Resume.ab537effccc087b4a020.pdf)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->