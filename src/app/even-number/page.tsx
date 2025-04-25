import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeString = `const checkEvenNumber = (number: number): boolean => {
    return number % 2 === 0;
};

// console.log(2) : true
// console.log(3) : false
`;

const checkEvenNumber = (number: number): boolean => {
  return number % 2 === 0;
};

const EvenNumberComponent = (): React.ReactElement => {
  return (
    <section className="p-10 w-250 justify-center mt-0 mb-0 mr-auto ml-auto">
      <h2 className="underline text-center">Check a number is even</h2>
      <br />
      <p className="text-center">
        The task is to create a resuable function which checks whether a number
        is even.
      </p>
      <br />
      <div className="text-center">
        For this we can create a simple function which checks whether a number
        is divisable by two and has no remainder value. If the remainder is
        equal to zero, it is even and returns true otherwise false.
        <br />
        <br />
        <p>Therefore, the entire solution is:</p>
        <br />
        <SyntaxHighlighter
          language="typescript"
          style={oneDark}
          showLineNumbers
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </section>
  );
};

export default EvenNumberComponent;
