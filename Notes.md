# Next.js

- a React framework for building full-stack web applications.
- Under the hood, Next.js also abstracts and automatically configures tooling needed for React, like bundling, compiling, and more.
- This allows you to focus on building your application instead of spending time with configuration.

## Main Features

Some of the main Next.js features include:
| Feature | Description |
|----------|----------|
| Routing | A file-system based router built on top of Server Components that supports layouts, nested routing, loading states, error handling, and more. |
|Rendering | Client-side and Server-side Rendering with Client and Server Components. Further optimized with Static and Dynamic Rendering on the server with Next.js. Streaming on Edge and Node.js runtimes. |
| Data Fetching | Simplified data fetching with async/await in Server Components, and an extended fetch API for request memoization, data caching and revalidation. |
| Styling | Support for your preferred styling methods, including CSS Modules, Tailwind CSS, and CSS-in-JS. |
| Optimizations | Image, Fonts, and Script Optimizations to improve your application's Core Web Vitals and User Experience. |
| TypeScript | Improved support for TypeScript, with better type checking and more efficient compilation, as well as custom TypeScript Plugin and type checker. |
| Static site Generation (SSG) | You can pre-render pages at build time. This approach is great for content-heavy websites and can offer even better performance and SEO benefits. |
| API Routes | offers a built-in API route feature that allows you to create serverless API endpoints within your Next.js project, making it easy to handle backend logic. |

### Command to create Next.js project

            `npx create-next-app@latest <project-name>`

### Command to run Next.js project:

            npm run dev

### Project Structure:

- gloabls.css: a file where global stylings can be given.
- layout.js:
- page.js: It is like App.js
- jsconfig.json: Here we can configure for our project.
- next.config.mjs: nextjs project related configuration can be done like images, providing domains, redirects.

### Routing:

- Routing is like giving **directions** to a website. When you type a url into your browser, routing tells the website which page or thing to show you.
- ##### Basic Routing:
  - for http://localhost:3000/about is folder named **about** in app folder with containing a file named **page.js**.
  - Folder structure is: **app//about//page.js**
- ##### Nested Routing:
  - for http://localhost:3000/about/me/personal is folder named **about** contained another folder named **me** which contained **personal** in app folder with containing a file named **page.js**
  - Folder structure is: **app//about//me//personal//page.js**

### Link

- It is a component provided by Next.js that allows to create links to navigate between pages in application.
- Primarily used for declarative, client-side navigation.
- It prevents the default browser full-page refresh and fetches the new page content on the client side, resulting in a faster and smoother user experience.

        import Link from 'next/link'
        <Link href="/about" >About</Link>

### useRouter()

- It is a hook provided by Next.js that allows you to access the router object and its properties within your component.
- Provides programmic control over the router and allows you to navigate to different pages or perform other routing-related actions in response to user interactions or events within your component.
- It is useful when you need to handle navigation or access route-specific information directly in your component logic.

  ```
  "use client"
  import { useRouter } from "next/navigation";
  import React from "react";

  const page = () => {
  const router = useRouter();

  const handleClick = (url) => {
      router.push(url);
  };
  return (
      <div>
      <h3>useRouter Tutorial</h3>
      <button onClick={() => handleClick("about")}>About</button>
      <button onClick={() => handleClick("/about/me/personal")}>
          Personal
      </button>
      </div>
  );
  };

  export default page;
  ```

- Don't forget to mention **"use client"** on the top of the page because **useRouter()** is a client side concept.

#### Ignoring folders in routing:

- Let's say I created Auth folder which will include login and register logic.

            |__Auth/
                |__login/
                |  |__page.jsx  (http://localhost:3000/Auth/login)
                |
                |__register/
                |  |__page.jsx  (http://localhost:3000/Auth/register)
                |

- Now I want to avoid **Auth** word in the route, then wrap the Auth folder name in paranthesis like (Auth).

                |__(Auth)
                    |__login/
                    |  |__page.jsx  (http://localhost:3000/login)
                    |
                    |__register/
                    |  |__page.jsx  (http://localhost:3000/register)
                    |

#### Dynamic Routes:

- It refers to a feature that allows you to create web pages with variables or dynamic parts in the URL.
- This is extremely useful when you have pages that share a **common structure (route pattern)** but differ based on specific information in the url.
- For example I want my url like
  - http://localhost:3000/users/1
  - http://localhost:3000/users/2
  - http://localhost:3000/users/3
  - http://localhost:3000/users/4
  - http://localhost:3000/users/5
    where are those numbers are id and common pattern is like
  - http://localhost:3000/users/{id}
- Create a folder named users and it contains another folder with name **[id]** which contains page.js i.e **users/[id]/page.jsx**
  |\__users
  |_[id]
  |\_page.jsx
- now page.jsx has following code:

  ```
      "use client"
      import React from "react";

      const User = ({ params }) => {
      return <div>
          Hello User: {params.id}
      </div>;
      };

      export default User;
  ```

- Here in params.id id refers to **[id]** folder name and if folder name is **[name]** then params.name fetches the name from http://localhost:3000/users/govind and params.name is **govind**.

#### Catch-All Routes:

- In Next.js, the **[...foldername]** notation indicates that you are using a catch-all route, which allows you to capture multiple URL segments and treat them as a dynamic array of values.
- This is useful when you want to create dynamic routes that can handle varying number of URL segments.
- My url is like http://localhost:3000/projects/software/front-end/react/stock-exchange i.e http://localhost:3000/projects is static and rest **software/front-end/react/stock-exchange/......** is dynamic and those values in general can be done by dynamic routing which needs nested folders and i.e more pain.

        |__projects
            |__[...details]
                |__page.jsx

  - now page.jsx has following code:

  ```
      "use client";
      import React from "react";

      const ProjectDetails = ({ params }) => {

      console.log(params);

      // for http://localhost:3000/projects/software/front-end/  react/stock-exchange, params logs as following

        let paramsData = {
        details: ["software", "front-end", "react", "stock-exchange"],
        };

      return <div>
          Project Details:
          {params.details.join(", ")}
      </div>;
      };

      /*
        UI:

        Project Details are:software, front-end, react, stock-exchange

      */

      export default ProjectDetails;

  ```

- now **params** logs as

```
    for url:
    http://localhost:3000/projects/software/front-end/react/stock-exchange


    {
        details: ["software", "front-end", "react", "stock-exchange"],
    }
```

- Here details is coming from [...details]

### 404 No Path found:

- By default Next.js handle this, but if you want to create your customized page, in app folder create a file whose name should be **not-found.jsx** or **not-found.js**

### redirect:

- This function allows you to redirect the user to another URL.
- The redirect function is meant for use in server-side actions or inside getServerSideProps, not directly in client-side code like within a React component or event handler.
- It can be used in **Server Components**, **Client Components**, **Route Handlers** and **Server Actions**.
- When used in a **streaming context**, this will insert a meta tag to emit the redirect on the client side. Otherwise it will serve a 307 HTTP redirect response to the caller.
- If a resource doesn't exist, you can use the **notFound function** instead.
- **Note:** If you prefer to return a 308 (Permanent) HTTP redirect instead of 307 (Temporary), you can use the **permanentRedirect function** instead.
- Parameters: The redirect functions accepts 2 arguments:

        redirect(path, type)

  - path[String]: URL to redirect to and it can be relative or absolute path.
  - type[String]: type of redirect to perform
    - 'replace' (default) or 'push' (default in server actions)

  ```
      import { redirect } from "next/navigation";
      import React from "react";

      const LoginPage = ({ params }) => {
      console.log(params);
      if (
      params.credentials[0] === "govind" &&
      params.credentials[1] === "maddala"
      ) {
      redirect("/");
      }
      return <div>{params.credentials}</div>;
      };

      export default LoginPage;

  ```

### Rendering:

- Rendering converts the code you write into user interfaces.
- React and Next.js allow you to create hybrid web applications where parts of your code can be rendered on the server or the client.
- Rendering Environments:
  - The client refers to the browser on a user's device that sends a request to a server for your application code. It then turns the response from the server into a user interface.
  - The server refers to the computer in a data center that stores your application code, receives requests from a client, and sends back an appropriate response.
- Network Boundary:
  - a conceptual line that separates the different environments. For example, the client and the server, or the server and the data store.
  - In React, you choose where to place the client-server network boundary wherever it makes the most sense.
  - Behind the scenes, the work is split into two parts: the **client module graph** and the **server module graph**.
  - You can use the React "use client" convention to define the boundary. There's also a "use server" convention, which tells React to do some computational work on the server. 

- ##### Server Components:
  - allow you to write UI that can be rendered and optionally **cached** on the server.
  - In Next.js, the rendering work is further split by route segments to enable streaming and partial rendering, and there are three different server rendering strategies:
    - Static Rendering
    - Dynamic Rendering
    - Streaming
  - Benefits: 
    - **Data Fetching**: 
      - allow you to move data fetching to the server, closer to your data source.
      - improve performance by reducing:
        - time it takes to fetch data needed for rendering, and
        - number of requests the client needs to make.
    - **Security**: 
      - allow you to keep **sensitive data** and logic on the server, such as **tokens and API keys**, without the risk of exposing them to the client.
    - **Caching**:
      - result can be cached and reused on subsequent requests and across users.
      - can improve performance and reduce cost by reducing the amount of rendering and data fetching done on each request.
    - **Performance**
    - **Initial Page Load and First Contentful Paint (FCP)**:
      -On the server, we can generate HTML to allow users to view the page immediately, without waiting for the client to download, parse and execute the JavaScript needed to render the page.
    - **Search Engine Optimization and Social Network Shareability**: 
      -The rendered HTML can be used by search engine bots to index your pages and social network bots to generate social card previews for your pages.
    - **Streaming**: 
      - allow you to split the rendering work into chunks and stream them to the client as they become ready without having to wait for the entire page to be rendered on the server. 
  - By default, Next.js uses Server Components. This allows you to automatically implement server rendering with no additional configuration, and you can opt into using Client Components when needed
- ##### Client Components:
  - Client Components allow you to write interactive UI that is prerendered on the server and can use client JavaScript to run in the browser.
  - Benefits:
    - **Interactivity**: Client Components can use state, effects, and event listeners, meaning they can provide immediate feedback to the user and update the UI.
    - **Browser APIs**: Client Components have access to browser APIs, like geolocation or localStorage.
  - **Using Client Components in Next.js**:
    - To use Client Components, you can add the React "use client" directive at the top of a file, above your imports.
    - by defining a "use client" in a file, all other modules imported into it, **including child components**, are considered part of the client bundle.


### Layout:
- A layout is like a **blueprint** that helps you make all the pages of your website look the same.
- It's a way to put common things, header, footer and other stuff that appears on every page, in one place.
- So, a layout is a ahandy tool that lets you keep things **tidy and consistent** on your website.
- For code, refer (layout_tut) folder