---
title: "Client-Side Rendering, Server-Side Rendering and Static-Site Generation of Next.js applications explained"
summary: "One of the Next.js killer features is pre-rendering and multiple methods of fetching data. Great understanding of it gives you a power to mix and match these techniques on page level basis."
photo: 2020-12-15.jpg
---

[Next.js](https://nextjs.org) by Vercel is a [React](https://reactjs.org) framework that is getting a lot of traction in a web development community. The perfect balance of flexibility, opinionated set of tools and abstractions help to build production-ready websites. One of its killer features is pre-rendering and multiple methods of fetching data — no more typical for SPAs (single page apps) flashes of blank pages rendered entirely on the client. That helps a lot with performance and SEO (search engine optimization). [Client-Side Rendering](https://nextjs.org/docs/basic-features/data-fetching#fetching-data-on-the-client-side) is a technique well known to every React developer. [Static Generation](https://nextjs.org/docs/basic-features/pages#static-generation-recommended) and [Server-side Rendering](https://nextjs.org/docs/basic-features/pages#server-side-rendering) are two methods of pre-rendering Next.js apps. We are going to analyze each of them.

- [Client-Side Rendering](#client-side-rendering)
- [Server-Side Rendering](#server-side-rendering)
- [Static Site Generation](#static-site-generation)

![Client-Side Rendering, Server-Side Rendering and Static-Site Generation of Next.js applications](/photos/2020-12-15-1.jpg)

## Client-Side Rendering

Client-Side Rendering (CSR) is an excellent complementary method for pre-rendering mechanisms described in the following part of this article. It is the way of fetching data in React and has nothing to do with Next.js. It can be useful to render dynamic pages when performance and SEO isn't the key focus. Personalized user dashboard is a perfect candidate for CSR.

![Client-Side Rendering](/photos/2020-12-15-2.jpg)

Let's build a page that displays GitHub user info. For data fetching, I would highly recommend using a package like [SWR made by Vercel team](https://swr.vercel.app), but for the simplicity, I am going to use `axios`.

```jsx
import { useState, useEffect } from "react";
import axios from "axios";

const CSR = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const { data } = await axios("https://api.github.com/users/pawelgrzybek");
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>Error</p>;
  }

  return (
    <>
      <h1>GitHub info about {data.login}</h1>

      <ul>
        <li>name: {data.name}</li>
        <li>repos: {data.public_repos}</li>
        <li>followers: {data.followers}</li>
      </ul>
    </>
  );
};

export default CSR;
```

## Server-Side Rendering

Server-Side Rendering (SSR) is a technique to render pages with dynamic content. The page is generated on demand on runtime phase. Because the process is happening on every single request, Time-To-First-Byte (TTFB) is slower than statically generated sites (SSG) explained in the following section.

![Server-Side Rendering](/photos/2020-12-15-3.jpg)

Next.js uses `getServerSideProps()` to fetch a dynamic data and to pass it to a page as a `props`. Let's have a look at the same GitHub user info example, but let's give it a little spin and take the username dynamically from the URL query.

```jsx
import axios from "axios";

const SSR = (props) => (
  <>
    <h1>GitHub info about {props.login}</h1>

    <ul>
      <li>name: {props.name}</li>
      <li>repos: {props.public_repos}</li>
      <li>followers: {props.followers}</li>
    </ul>
  </>
);

export default SSR;

export async function getServerSideProps({ query }) {
  try {
    const { data } = await axios(`https://api.github.com/users/${query.user}`);

    return {
      props: data,
    };
  } catch (error) {
    console.error(error);
  }
}
```

## Static Site Generation

Static Site Generation (SSG) is a preferred way of rendering content. Use it when there is no need to run any computation at the runtime. It also reduces the area for potential security attacks. It is just serving HTML built at deploy time. A perfect use case is the "About us" or "FAQ (Frequently Asked Questions)" section of a website.

![Static Site Generation](/photos/2020-12-15-4.jpg)

Next.js uses `getStaticProps()` to fetch dynamic data and to pass it to a page as a `props`. Because the page is generated on deploy time, when we use dynamic routes, Next.js needs to be aware of all possible permutation of this page. That's where the `getStaticPaths()` method comes in handy. Let's have a look at the same GitHub user info example, but this time let's pre-build pages just for three users: `pawelgrzybek`, `danjordan` and `gaearon`.

```jsx
import axios from "axios";

const SSG = (props) => (
  <>
    <h1>GitHub info about {props.login}</h1>

    <ul>
      <li>name: {props.name}</li>
      <li>repos: {props.public_repos}</li>
      <li>followers: {props.followers}</li>
    </ul>
  </>
);

export default SSG;

export async function getStaticProps({ query }) {
  try {
    const { data } = await axios(`https://api.github.com/users/${query.user}`);

    return {
      props: data,
    };
  } catch (error) {
    console.error(error);
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { user: "pawelgrzybek" } },
      { params: { user: "danjordan" } },
      { params: { user: "gaearon" } },
    ],
    falback: false,
  };
}
```

### Incremental Static Regeneration

Introduced in Next.js 9.5 [Incremental Static Regeneration](https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration) allows you to update existing pages by re-rendering them in the background as traffic comes in. It merely means that static content can also be dynamic. Users traffic is always served from static storage, but the content of a page can be revalidated on the specific interval (in seconds). The `revalidate` config flag controls the regeneration frequency.

```
export async function getStaticProps({ query }) {
  try {
    const { data } = await axios(`https://api.github.com/users/${query.user}`);

    return {
      props: data,
      revalidate: 1, // 👈
    };
  } catch (error) {
    console.error(error);
  }
}
```

## Conclusions

A lot of acronyms for one day, I know! I hope that this article helped you out to decide which of these three techniques is the best one to pick in a particular scenario. Understanding all three of them gives you the power of mixing them on page-basis — that's the beauty of Next.js. I will catch you Next.js time (terrible joke, isn't it) 👋
