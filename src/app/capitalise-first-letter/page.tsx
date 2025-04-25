import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeString = `const capitaliseFirstLetter = (word: string): string | undefined => {
  if (!word) {
    return;
  }

  const firstCharacter = word.at(0);
  const firstCharacterUpperCase = firstCharacter?.toUpperCase();

  if (firstCharacter === firstCharacterUpperCase) {
    return word;
  }

  return \`\${firstCharacterUpperCase}\${word.substring(1, word.length)}\`;
};

// console.log([]) : undefined
// console.log([1, 3, 5, 9, 2]) : 9
`;

const capitaliseFirstLetter = (word: string): string | undefined => {
  if (!word) {
    return;
  }

  const firstCharacter = word.at(0);
  const firstCharacterUpperCase = firstCharacter?.toUpperCase();

  if (firstCharacter === firstCharacterUpperCase) {
    return word;
  }

  return `${firstCharacterUpperCase}${word.substring(1, word.length)}`;
};

const CapitaliseFirstLetterComponent = (): React.ReactElement => {
  console.log(capitaliseFirstLetter("Hello"));

  return (
    <section className="p-10 w-250 justify-center mt-0 mb-0 mr-auto ml-auto">
      <h2 className="underline text-center">
        Capitalise the first letter of a word
      </h2>
      <SyntaxHighlighter language="typescript" style={oneDark} showLineNumbers>
        {codeString}
      </SyntaxHighlighter>
    </section>
  );
};

export default CapitaliseFirstLetterComponent;
