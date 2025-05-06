import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1 className="mt-12 underline flex justify-center items-center text-2xl">
        Frontend Developer Interview Practice
      </h1>
      <ul>
        <li className="flex justify-center items-center mt-12">
          <Link className="text-blue-500 underline" href={"./reverse-string"}>
            How to reverse a string
          </Link>
        </li>
        <li className="flex justify-center items-center mt-4">
          <Link className="text-blue-500 underline" href={"./even-number"}>
            Check a number is even
          </Link>
        </li>
        <li className="flex justify-center items-center mt-4">
          <Link
            className="text-blue-500 underline"
            href={"./largest-number-in-array"}
          >
            Find the largest number in an array
          </Link>
        </li>
        <li className="flex justify-center items-center mt-4">
          <Link
            className="text-blue-500 underline"
            href={"./capitalise-first-letter"}
          >
            Capitalise the first letter of a string
          </Link>
        </li>
        <li className="flex justify-center items-center mt-4">
          <Link className="text-blue-500 underline" href={"./sum-all-numbers"}>
            Sum all numbers
          </Link>
        </li>
        <li className="flex justify-center items-center mt-4">
          <Link
            className="text-blue-500 underline"
            href={"./group-words-by-first-letter"}
          >
            Group words by first letter
          </Link>
        </li>
        <li className="flex justify-center items-center mt-4">
          <Link className="text-blue-500 underline" href={"./fragile-bridge"}>
            Fragile Bridge
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
