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

const fragileBridge = (bridge: number[]): number => {
  let count = 0;
  const updated = [...bridge];

  let shouldContinue = true;

  while (shouldContinue) {
    for (let i = 0; i < updated.length; i++) {
      updated[i] -= 2;
      if (updated[i] <= 0) {
        shouldContinue = false;
        break;
      }
    }

    if (shouldContinue) {
      count++;
    }
  }

  return count;
};

const FragileBridgeComponent = (): React.ReactElement => {
  console.log(fragileBridge([6, 7, 10, 4, 8]));

  return (
    <section className="p-10 w-250 justify-center mt-0 mb-0 mr-auto ml-auto">
      <h2 className="underline text-center">Fragile Bridge (Triad Plc)</h2>
      <br />
      <span className="text-center">
        Write a function that takes an array of numbers and write a loop which
        minus two from each element in the array. Each time it successfully
        loops over the array, count it in a separate variable. If the array
        number falls below or equal to zero, stop the process and return the
        total number of successful counts where the bridge didn't collapse.
        Given the bridge
        <SyntaxHighlighter
          language="typescript"
          style={oneDark}
          showLineNumbers
        >
          const bridge = [6, 7, 10, 4, 8];
        </SyntaxHighlighter>
      </span>
      <br />
      <div className="text-center">
        <p>The resulting function is:</p>
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

export default FragileBridgeComponent;
