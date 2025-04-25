import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeString = `const findLargestNumberInArray = (array: number[]): number | undefined => {
    if (!array.length) {
      return;
    }
  
    return array.sort()[array.length - 1];
  };

// console.log([]) : undefined
// console.log([1, 3, 5, 9, 2]) : 9
`;

const findLargestNumberInArray = (array: number[]): number | undefined => {
  const arrayLength = array.length;

  if (!arrayLength) {
    return;
  }

  return array.sort()[arrayLength - 1];
};

const LargestNumberInArrayComponent = (): React.ReactElement => {
  return (
    <section className="p-10 w-250 justify-center mt-0 mb-0 mr-auto ml-auto">
      <h2 className="underline text-center">
        Find the largest number in an array
      </h2>
      <br />
      <p className="text-center">
        The task is to create a resuable function which finds the largest number
        in an array
      </p>
      <br />
      <div className="text-center">
        Here we can take a two step approach. In Typescript, we state the
        function's prop is a number array. First to an early return is the array
        is empty as the output isn't valid. Then call <code>sort()</code> on the
        array to order it in the UTF-16 code unit order. This is fine because
        numbers are ordered correctly in this format. Then return the last item
        in the array by using an index method equal to the arrays length minus
        one because array items are zero indexed.
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

export default LargestNumberInArrayComponent;
