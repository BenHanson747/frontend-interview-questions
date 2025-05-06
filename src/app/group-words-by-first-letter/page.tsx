import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeString = `
const groupByFirstLetter = (
    array: string[]
  ): Record<string, string[]> | undefined => {

    // First, conduct an early return if there are no strings in the array
    if (!array.length) {
      return;
    }
  
    return array
    // Secondly, filter out words in the array which are empty strings
      .filter((word: string) => word !== "")
      .reduce<Record<string, string[]>>((accumulatedResult, word) => {
       // if the object key doesn't exist yet, put an empty array as the key's value
        if (!accumulatedResult[word[0]]) {
          accumulatedResult[word[0]] = [];
        }
        // push the word to that array
        accumulatedResult[word[0]].push(word);
        // return the array for the next callback
        return accumulatedResult;
        // start with an empty object
      }, {});
  };
`;

const groupByFirstLetter = (
  array: string[]
): Record<string, string[]> | undefined => {
  if (!array.length) {
    return;
  }

  return array
    .filter((word: string) => word !== "")
    .reduce<Record<string, string[]>>((accumulatedResult, word) => {
      if (!accumulatedResult[word[0]]) {
        accumulatedResult[word[0]] = [];
      }
      accumulatedResult[word[0]].push(word);
      return accumulatedResult;
    }, {});
};

const addTheNumbers = (array: number[]): number | undefined => {
  if (!array.length) {
    return;
  }

  return array.reduce<number>((accumulatedResult, currentValue) => {
    return accumulatedResult + currentValue;
  }, 0);
};

const ReverseStringComponent = (): React.ReactElement => {
  console.log(addTheNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

  return (
    <section className="p-10 w-250 justify-center mt-0 mb-0 mr-auto ml-auto">
      <h2 className="underline text-center">Group words by first letter</h2>
      <br />
      <span className="text-center">
        Write a function that takes an array of words and returns an object
        where each key is the first letter of a word, and the value is an array
        of all words starting with that letter. For example:
        <SyntaxHighlighter
          language="typescript"
          style={oneDark}
          showLineNumbers
        >
          groupByFirstLetter(["apple", "banana", "apricot", "blueberry",
          "cherry"]);
        </SyntaxHighlighter>
        Which outputs:
        <SyntaxHighlighter
          language="typescript"
          style={oneDark}
          showLineNumbers
        >
          {`{ a: ["apple", "apricot"], b: ["banana", "blueberry"], c: ["cherry"]}`}
        </SyntaxHighlighter>
      </span>
      <br />
      <div className="text-center">
        <p>The resulting ouput is:</p>
        <br />
        <SyntaxHighlighter
          language="typescript"
          style={oneDark}
          showLineNumbers
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
      <br />
      <br />
      <h4 className="bold underline">What is the reduce function?</h4>
      <p className="pt-4">
        Reduce is a method that reduces an array into a single value which could
        be any primitive type.
        <br />
        It does this by looping over each item in the array and accumulating the
        result. You can set a starting value for the accumulator as an optional
        parameter. In our case, we set the optional parameter as an empty
        object.
      </p>
      <p>Lets try another Reduce Question - this is a basic example</p>
      <p>
        Add numbers together in an array using array.reduce
        <br />
        <br />
        Given the array:
      </p>
      <SyntaxHighlighter language="typescript" style={oneDark} showLineNumbers>
        {`const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`}
      </SyntaxHighlighter>
      <br />
      <br />
      You can solve the problem like this
      <br />
      <br />
      <SyntaxHighlighter language="typescript" style={oneDark} showLineNumbers>
        {`const addTheNumbers = (array: number[]): number | undefined => {
    if (!array.length) {
      return;
    }
  
    return array.reduce<number>((accumulatedResult, currentValue) => {
      return accumulatedResult + currentValue;
    }, 0);
  };
  
  // Output: 55
  `}
      </SyntaxHighlighter>
    </section>
  );
};

export default ReverseStringComponent;
