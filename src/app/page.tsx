/* eslint-disable react/no-unescaped-entities */
const Page = () => {
  return (
    <div className="max-w-2xl">
      <h1 className="text-4xl font-semibold tracking-3 text-gray-900 dark:text-white">
        Software engineer, philosophy student, and entrepreneur.
      </h1>
      <p className="mt-6 text-base tracking-1 text-gray-500 dark:text-gray-400">
        I’m Leonardo Maldonado, a software engineer working at{' '}
        <a
          className="text-base font-medium tracking-1 text-gray-900 hover:underline dark:text-white"
          href="https://www.namecheap.com/"
          target="_blank"
        >
          Namecheap
        </a>
        . I'm passionate about building software that helps people and
        businesses succeed. I like to write and read about software, philosophy,
        entrepreneurship, and more.
      </p>
    </div>
  )
}

export default Page
