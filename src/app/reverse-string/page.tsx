import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const reverseString = (str: string): string => {
  return str.split("").reverse().join("");
};

const ReverseStringComponent = (): React.ReactElement => {
  return (
    <section className="p-10 w-250 justify-center mt-0 mb-0 mr-auto ml-auto">
      <h2 className="underline text-center">Reverse a string</h2>
      <br />
      <p className="text-center">
        The task is to create a resuable function which reverses a string value.
      </p>
      <br />
      <div className="text-center">
        <strong>Step one:</strong> Take the string value and call the{" "}
        <code>split()</code>
        method. This splits a string argument into substrings based on a defined
        separator value and returns an array of substring values. If you want to
        split out a string based on the indivdual characters, the first argument
        should be empty string notation.
        <br />
        <br />
        <p>In the example, this leads to the following result:</p>
        <br />
        <br />
        <code className="bg-slate-200 p-4">
          str.split("") === ['h','e','l','l','o']
        </code>
        <br />
        <br />
        <br />
        <strong>Step two:</strong> Call the <code>reverse()</code> method on the
        resulting array. This reverses the array in place. It can be chained
        from the split method.
        <br />
        <p>In the example, this leads to the following result:</p>
        <br />
        <br />
        <code className="bg-slate-200 p-4">
          ['h','e','l','l','o'].reverse() === ['o','l','l','e','h']
        </code>
        <br />
        <br />
        <br />
        <strong>Step three:</strong> Call the <code>join()</code> method on the
        reversed array. This joins the array elements back to a string value,
        based on the separator you specified, in the order of the array. It can
        be chained from the reverse method.
        <br />
        <p>In the example, this leads to the following result:</p>
        <br />
        <br />
        <code className="bg-slate-200 p-4">
          ['o','l','l','e','h'].join("") === "olleh"
        </code>
        <br />
        <br />
        <br />
        <p>Therefore, the entire solution is:</p>
        <br />
        <code className="bg-slate-200 p-4 block whitespace-pre mb-8">
          {`const reverseString = (str: string): string => {
    return str.split("").reverse().join("");
  };`}
        </code>
        <p>The resulting ouput is:</p>
        <br />
        <code className="bg-slate-200 p-4 block whitespace-pre mb-16">
          {reverseString("hello")}
        </code>
      </div>
    </section>
  );
};

export default ReverseStringComponent;
