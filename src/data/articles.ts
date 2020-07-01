interface Article {
  date: string;
  title: string;
  description: string;
  link: string;
}

type Articles = Array<Article>;

const articles: Articles = [
  {
    date: "Jun 26, 2020",
    title: "Design system tips for developers",
    description:
      "Principles and guidelines that will help you develop a solid design system to improve UX in your applications.",
    link: "https://blog.logrocket.com/design-system-tips-for-developers/",
  },
  {
    date: "Jun 05, 2020",
    title: "Getting started with TypeScript generics",
    description:
      "Learn how to use generic types in our functions to create more reusable functions.",
    link:
      "https://blog.logrocket.com/getting-started-with-typescript-generics/",
  },
  {
    date: "May 25, 2020",
    title: "Types vs. interfaces in TypeScript",
    description:
      "Sometimes we need to think more about the best use case to use TypeScript types and intefaces.",
    link: "https://blog.logrocket.com/types-vs-interfaces-in-typescript/",
  },
  {
    date: "Apr 8, 2020",
    title: "Lifecycle methods with the useEffect Hook",
    description:
      "How we can use the useEffect Hook to use lifecycle methods in React functional components.",
    link:
      "https://blog.logrocket.com/lifecycle-methods-with-the-useeffect-hook/",
  },
  {
    date: "Apr 6, 2020",
    title: "When to use Flexbox and when to use CSS grid",
    description: "The differences between the most used layout systems.",
    link: "https://blog.logrocket.com/flexbox-vs-css-grid/",
  },
  {
    date: "Mar 31, 2020",
    title: "How to Build Custom Forms with React Hooks",
    description: "Learn how to create custom forms using React Hooks.",
    link: "https://www.telerik.com/blogs/how-to-build-custom-forms-react-hooks",
  },
  {
    date: "Mar 12, 2020",
    title: "The Guide to Arrow Functions in ES6",
    description:
      "How to have better, concise, and powerful functions in JavaScript using Arrow Functions.",
    link: "https://www.telerik.com/blogs/the-guide-to-arrow-functions-in-es6",
  },
  {
    date: "Mar 06, 2020",
    title: "Immutability in React with Immer",
    description:
      "Learn about immutability in React and how we can use Immer to have an immutable state.",
    link: "https://blog.logrocket.com/immutability-in-react-with-immer/",
  },
  {
    date: "Mar 05, 2020",
    title: "Intersection Observer API Makes Lazy Loading a Snap",
    description: "A powerful way to lazy load elements in our applications.",
    link:
      "https://www.telerik.com/blogs/intersection-observer-api-makes-lazy-loading-a-snap",
  },
  {
    date: "Feb 28, 2020",
    title: "Why you shouldn’t use inline styling in production React apps",
    description:
      "Learn why you shouldn't be using inline styling in your React applications.",
    link:
      "https://blog.logrocket.com/why-you-shouldnt-use-inline-styling-in-production-react-apps/",
  },
  {
    date: "Feb 20, 2020",
    title: "Master these JavaScript Fundamentals to Land Your Next Job",
    description:
      "Learn what JavaScript concepts you should master to land a new job.",
    link:
      "https://www.telerik.com/blogs/master-these-javascript-fundamentals-to-land-your-next-job",
  },
  {
    date: "Jan 27, 2020",
    title: "Better Modals in React",
    description:
      "Learn about Portals and how we can use them to create modals in React.",
    link: "https://www.telerik.com/blogs/better-modals-in-react",
  },
  {
    date: "Jan 02, 2020",
    title: "Understanding CSS-in-JS",
    description:
      "The powers of CSS-in-JS and how we can create better applications by writing our CSS code with JavaScript.",
    link: "https://www.telerik.com/blogs/understanding-css-in-js",
  },
  {
    date: "Jan 02, 2020",
    title: "Understanding CSS-in-JS",
    description:
      "The powers of CSS-in-JS and how we can create better applications by writing our CSS code with JavaScript.",
    link: "https://www.telerik.com/blogs/understanding-css-in-js",
  },
  {
    date: "Nov 21, 2019",
    title: "JavaScript Fundamentals: Closures",
    description:
      "Understand why Closures are so popular among developers and how to use it in our projects.",
    link: "https://www.telerik.com/blogs/javascript-fundamentals-closures",
  },
  {
    date: "Nov 20, 2019",
    title: "JavaScript Fundamentals: Prototype Chains",
    description:
      "How 'almost everything' in JavaScript is an object, and then learn about Prototypes and Prototype Chains.",
    link:
      "https://www.telerik.com/blogs/javascript-fundamentals-prototype-chains",
  },
  {
    date: "Sep 30, 2019",
    title: "Understanding Server-Side Rendering",
    description:
      "Learn how this technique can help create better ranked and faster applications.",
    link: "https://www.telerik.com/blogs/understanding-server-side-rendering",
  },
  {
    date: "Aug 26, 2019",
    title: "A Short Introduction to TypeScript",
    description:
      "Learn what's TypeScript and how you can use it in real-world projects.",
    link: "https://www.telerik.com/blogs/a-short-introduction-to-typescript",
  },
  {
    date: "Aug 7, 2019",
    title: "An Expense App with React and TypeScript",
    description:
      "Learn how to create an expense app using React and TypeScript.",
    link:
      "https://www.telerik.com/blogs/an-expense-app-with-react-and-typescript",
  },
  {
    date: "May 9, 2019",
    title: "React Hooks and Component Composition",
    description:
      "Learn more about React Hooks and how to increase state logic reuse.",
    link: "https://www.telerik.com/blogs/react-hooks-and-component-composition",
  },
  {
    date: "May 9, 2019",
    title: "Advanced Patterns in React",
    description: "Understand and learn some advanced patterns in React.",
    link: "https://www.telerik.com/blogs/advanced-patterns-in-react",
  },
  {
    date: "Mar 15, 2019",
    title: "Subscriptions in GraphQL",
    description: "Learn about GraphQL and how Subscriptions work",
    link:
      "https://hashnode.com/post/subscriptions-in-graphql-cjt9rwa9h0012kes1upk77gnj",
  },
  {
    date: "Feb 27, 2019",
    title: "Mutations in GraphQL",
    description: "Learn about GraphQL and how Mutations work.",
    link:
      "https://hashnode.com/post/mutations-in-graphql-cjsnn19fj0017q9s1wyeea0br",
  },
  {
    date: "Feb 26, 2019",
    title: "Forms with Formik + TypeScript",
    description: "Learn how to improve your forms using Formik and TypeScript.",
    link:
      "https://medium.com/fotontech/forms-with-formik-typescript-d8154cc24f8a",
  },
  {
    date: "Feb 15, 2019",
    title: "Queries in GraphQL",
    description: "Learn about GraphQL and how Queries work.",
    link:
      "https://hashnode.com/post/queries-in-graphql-cjs5z5s4u0016kfs1tcgoluql",
  },
  {
    date: "Feb 6, 2019",
    title: "Write your first React Hook!",
    description:
      "Learn about React Hooks, the new way to manage state in functional components in React.",
    link:
      "https://hashnode.com/post/write-your-first-react-hook-cjrt8lfci00aw18s1z8v9s06n",
  },
  {
    date: "Feb 4, 2019",
    title: "How I Made One of the Top Open Source Projects of 2018",
    description:
      "How I made one of the top open source projects in 2018 and what you can do to achieve the same.",
    link:
      "https://hashnode.com/post/how-i-made-one-of-the-top-open-source-projects-of-2018-cjrqdcn5p000rsrs1z29pnkui",
  },
  {
    date: "Jan 4, 2019",
    title: "A Complete React Boilerplate Tutorial — From Zero to Hero",
    description:
      "Learn how to set up a complete React boilerplate for your projects.",
    link:
      "https://medium.com/free-code-camp/a-complete-react-boilerplate-tutorial-from-zero-to-hero-20023e086c4a",
  },
  {
    date: "Jan 4, 2019",
    title: "A Beginner’s Guide to GraphQL",
    description:
      "Learn what's GraphQL and how you can build better APIs using it.",
    link:
      "https://medium.com/free-code-camp/a-beginners-guide-to-graphql-86f849ce1bec",
  },
  {
    date: "Nov 7, 2018",
    title:
      "What’s the Document Object Model, and why you should know how to use it.",
    description: "The basics about the DOM (Document Object Model).",
    link:
      "https://medium.com/free-code-camp/whats-the-document-object-model-and-why-you-should-know-how-to-use-it-1a2d0bc5429d",
  },
  {
    date: "Nov 5, 2018",
    title: "How to set up a GraphQL Server using Node.js, Express & MongoDB",
    description: "How to set up a simple GraphQL server.",
    link:
      "https://medium.com/free-code-camp/how-to-set-up-a-graphql-server-using-node-js-express-mongodb-52421b73f474",
  },
  {
    date: "Feb 8, 2018",
    title: "Entendendo o DOM (Document Object Model)",
    description: "O DOM explicado de uma maneira fácil.",
    link: "https://tableless.com.br/entendendo-o-dom-document-object-model/",
  },
];

export default articles;
