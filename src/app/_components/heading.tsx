interface HeadingProps {
  text: string;
}

const Heading = ({ text }: HeadingProps) => {
  return <h1 className="text-5xl flex justify-center pt-10">{text}</h1>;
};

export default Heading;
