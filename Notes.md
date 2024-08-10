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


