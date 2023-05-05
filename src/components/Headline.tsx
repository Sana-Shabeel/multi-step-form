interface Props {
  title: string;
  description: string;
}

const Headline = ({ title, description }: Props) => {
  return (
    <div className="my-2">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-coolGray mt-1">{description}</p>
    </div>
  );
};

export default Headline;
