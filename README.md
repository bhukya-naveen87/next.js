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
      import { useParams } from 'next/navigation'

      const ProjectDetails = () => {
      const params = useParams();
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

### Metadata:

- Next.js has a Metadata API that can be used to define your application metadata (e.g. meta and link tags inside your HTML head element) for improved SEO and web shareability.
- There are two ways you can add metadata to your application:
  - Config-based Metadata: Export a static metadata object or a dynamic generateMetadata function in a layout.js or page.js file.
  - File-based Metadata: Add static or dynamically generated special files to route segments.
- With both these options, Next.js will automatically generate the relevant `<head>` elements for your pages. You can also create dynamic OG images using the ImageResponse constructor.
- #### Static Metadata

  - To define static metadata, export a Metadata object from a layout.js or static page.js file.

    ```
    import React from "react";

    const MetaDataClass = () => {
      return <div>Meta data class;</div>;
    };

    export const metadata = {
      title: "Meta Data Class Title",
      description: "This description is set in metadata class",
    };

    export default MetaDataClass;

    ```

  -

- #### Dynamic Metadata

  - You can use generateMetadata function to fetch metadata that requires dynamic values.

    ```
    export async function generateMetadata({ params, searchParams }, parent) {
      // read route params
      const id = params.id

      // fetch data
      const product = await fetch(`https://.../${id}`).then((res) => res.json())

      // optionally access and extend (rather than replace) parent metadata
      const previousImages = (await parent).openGraph?.images || []

      return {
        title: product.title,
        openGraph: {
          images: ['/some-specific-page-image.jpg', ...previousImages],
        },
      }
    }
    export default function Page({ params, searchParams }) {}
    ```

- **Good To Know**:
  - Both static and dynamic metadata through generateMetadata are only supported in **Server Components**.

### Image:

- `<Image />` tag importing from **next/image** helps you to render optimized pics in the UI.
- Image rendering in Next.js is bit tricky. If you want to render **static images** i.e by importing following method is good.

  ```
    import React from "react";
    import developmentImg from "@/public/images/development.png";
    import Image from "next/image";
    const ImagePage = () => {
      return (
        <div>
          <Image
            src={developmentImg}
            alt="Developement"
            width={900}
            height={900}
          />
        </div>
      );
    };
    export default ImagePage;
  ```

- Images rendering through **external urls** then another approach has to be maintained.

  - Directly using urls for Image will throw an error like as follows:

    ```
    <Image src="https://unsplash.com/photos/coca-cola-can-z8PEoNIlGlg" alt="Developement" width={900} height={900}  />

    ```

    ```
    Error: Invalid src prop (https://unsplash.com/photos/coca-cola-can-z8PEoNIlGlg) on `next/image`, hostname "unsplash.com" is not configured under images in your `next.config.js`
    See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host
    ```

  - To avoid this error, in **next.config.js** give the domain name as follow:

  ```
  /** @type {import('next').NextConfig} */
    const nextConfig = {
        images: {
            domains: ["images.unsplash.com"]
        }
    };

    export default nextConfig;
  ```

- images.domains is deprecated, use **images.remotePatterns**

  ```
  /** @type {import('next').NextConfig} */
    const nextConfig = {
        images: {
            remotePatterns: [
                {
                    protocol: 'https',
                    hostname: 'images.unsplash.com',
                },
            ]
        }
    };
    export default nextConfig;
  ```

### Fonts:

- Next.js has default google fonts which can be

  - imported
  - setup extra options and
  - use

    ```
      import React from "react";
      import { Roboto } from "next/font/google";
      const roboto = Roboto({
        subsets: ["greek-ext"],
        weight: "500",
      });

      const page = () => {
        return (
          <div>
            <h3>Fonts</h3>
            <p>This text is having normal font</p>
            <p className={roboto.className}>This text is having roboto font</p>
          </div>
        );
      };

      export default page;
    ```

### data:

- Cleint side data fetching involves using useEffect, useState to fecth and update the data

  ```
  "use client";
  import Image from "next/image";
  import React, { useEffect, useState } from "react";

  const CleintData = () => {
    const [data, setData] = useState([]);
    const [visibleData, setVisibleData] = useState(50); // initially show 50 images

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/photos")
        .then((response) => response.json())
        .then((json) => setData(json));
    }, []);

    useEffect(() => {
      const handleScroll = () => {
        if (
          window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 100
        ) {
          handleLoadMore();
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [visibleData, data]);

    const handleLoadMore = () => {
      setVisibleData((prev) => prev + 50); // load more images in increments of 50
    };

    return (
      <div className="data__main">
        <div className="grid">
          {data.slice(0, visibleData).map((each) => {
            const { id, title, url } = each;
            return (
              <div key={id} className="image-card">
                <Image
                  src={url}
                  alt={title}
                  width={220}
                  height={200}
                  loading="lazy"
                />
                <p>{title}</p>
              </div>
            );
          })}
        </div>
        {visibleData < data.length && (
          <p className="loading-text">Loading more images...</p>
        )}
      </div>
    );
  };
  export default CleintData;
  ```

- In Server side data fetching directly calls the api and assign it to a variable and use it.

  ```
  import React from "react";
  const fetchData = async () => {
    let data = await fetch("https://jsonplaceholder.typicode.com/posts");
    data = await data.json();
    return data;
  };

  const CleintData = async () => {
    const data = await fetchData();

    return (
      <div className="data__main">
        <div className="grid">
          {data.map((each) => {
            const { id, title } = each;
            return (
              <div key={id} className="image-card">
                <p>{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  export const metadata = {
      title: "Server data fetch",
      description: "This component is used to fetch data from server side where client side hooks and nothing is used"
  }
  export default CleintData;
  ```

### Backend:

- In app folder, create a folder with name **"api"**. Folder name should be **api** only.
- Now I want to create routes for **user** service, then create a folder named **user** and in this create a file named \*_route.js_ and inside it we can create routes.
- This route.js file will have routes and their naming convention is also fixed. Like for GET HTTP request, it will be GET method

      app
        |_api
          |_user
            |_route.js
              |_ GET and so on

  ```
  And the url will be like: GET /api/user

    import { NextResponse } from "next/server"
    export const GET = () => {
        return NextResponse.json(
            {
                message: "Message from product"
            },
            {
                status: 201
            }
        )
    };
  ```

- Dynamic routing:

        app
        |_api
          |_user
            |_[id]
              |_route.js
                |_ GET and so on

  ```
    import { NextRequest, NextResponse } from "next/server"

    export const GET = (_, res) => {
        return NextResponse.json(
            {
                message: "Message from users from dynamic routing.",
                id: res.params.id
            },
            {
                status: 201
            }
        )
    }
  ```

### Middleware

- allows you to run code before a request is completed.
- Then, based on the incoming request, you can modify the response by rewriting, redirecting, modifying the request or response headers, or responding directly.
- Middleware runs before cached content and routes are matched.
- #### Use cases:

  - Integrating Middleware into your application can lead to significant improvements in performance, security, and user experience.
  - **Authentication and Authorization**
  - **Server-Side Redirects**
  - **Path Rewriting**
  - **Bot Detection**
  - **Logging and Analytics**

- Basic middleware function is: Here in UI, whenever you check for http://localhost:3000/about/<....>, below middleware executes.

  ```
      import { NextResponse } from 'next/server'

      // This function can be marked `async` if using `await` inside
      export function middleware(request) {
        return NextResponse.redirect(new URL('/home', request.url))
      }

      // See "Matching Paths" below to learn more
      export const config = {
        matcher: '/about/:path*',
      }
  ```

- If I want to execute middleware for every path, then I have to
  ```
    export const config = {
          matcher: '/:path*',
    }
  ```
- Now in my code, I want to check in cookies if there is user_type and if user_type is not exists, then I want to route to /login. So during login.
- login/page.jsx code is:

  ```
  "use client";
  import { useRouter } from "next/navigation";
  import React, { useState } from "react";

  const Login = () => {
    const [user, setUser] = useState("");
    const router = useRouter(); // useRouter hook for client-side navigation

    const handleLogin = () => {
      if (user && user.trim() && ["user", "admin"].includes(user)) {
        document.cookie = `user_type=${user}; path=/;`; // Set user_type in a cookie
        router.push("/home"); // Use router.push for client-side redirection
        setUser("");
      } else {
        setUser("");
        alert("Invalid User");
      }
    };

    return (
      <div>
        <input
          type="text"
          value={user}
          onChange={(e) => {
            console.log(e.target.value)
            setUser(e.target.value);
          }}
        />
        {user && <button onClick={handleLogin}>Login</button>}
      </div>
    );
  };

  export default Login;
  ```

- But because of middleware code, /login page works not as expected. To work properly we have to **Modify the matcher to exclude static files and only target specific routes that need middleware processing.**
  . So in config, we have to change to
  ```
    import { NextResponse } from 'next/server';
    export const middleware = (request) => {
        const userType = request.cookies.get("user_type");
        if (request.nextUrl.pathname !== "/login" && !userType) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
        return NextResponse.next(); // Ensure normal processing for other requests
    }

    export const config = {
        matcher: ["/((?!_next/static|favicon.ico).*)"]
    }
  ```
- This configuration will prevent the middleware from running on static assets and certain paths like favicon.ico, which are not necessary to be handled by the middleware.
- Matcher Exclusion: The matcher is now set to exclude routes like _next/static and favicon.ico, which are responsible for serving static assets.
