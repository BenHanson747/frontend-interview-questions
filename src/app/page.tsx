import Link from "next/link";
import Heading from "./_components/heading";

const Home = () => {
  return (
    <>
      <Heading text="Frontend Developer Interview Practice" />
      <h4 className="mt-12 underline flex justify-center items-center text-2xl">
        React Components
      </h4>
      <ul>
        <li className="flex justify-center items-center mt-12">
          <Link className="underline text-blue-500" href="/accordion">
            How to build an Accordion from scratch
          </Link>
        </li>
        <li className="flex justify-center items-center mt-4">
          <Link className="underline text-blue-500" href="/counter">
            How to build a Counter from scratch
          </Link>
        </li>
        <li className="flex justify-center items-center mt-4">
          <Link className="underline text-blue-500" href="/todolist">
            How to build a Todo List from scratch
          </Link>
        </li>
        <li className="flex justify-center items-center mt-4">
          <Link className="underline text-blue-500" href="/modal">
            How to build a dialog component
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
