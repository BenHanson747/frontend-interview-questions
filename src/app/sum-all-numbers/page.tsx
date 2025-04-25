import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeString = `
const sumAllNumbers = (maxNumber: number) => {
    let finalNumber = 0;
  
    for (let i = 1; i <= maxNumber; i++) {
      finalNumber += i;
    }
  
    return finalNumber;
  };
`;

const sumAllNumbers = (maxNumber: number) => {
  let finalNumber = 0;

  for (let i = 1; i <= maxNumber; i++) {
    finalNumber += i;
  }

  return finalNumber;
};

const SumAllNumbersComponent = (): React.ReactElement => {
  console.log(sumAllNumbers(5));

  return (
    <section className="p-10 w-250 justify-center mt-0 mb-0 mr-auto ml-auto">
      <h2 className="underline text-center">Sum all numbers from 1 to n</h2>
      <p>
        For example, if I input a number of '15' into the function, it will add
        all integers between 1 and 15 inclusive (ie. 1+2+3+4+5+...n)
      </p>
      <SyntaxHighlighter language="typescript" style={oneDark} showLineNumbers>
        {codeString}
      </SyntaxHighlighter>
    </section>
  );
};

export default SumAllNumbersComponent;
