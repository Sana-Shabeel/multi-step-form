interface Props {
  title: string;
  description: string;
}

const Headline = ({ title, description }: Props) => {
  return (
    <div className="my-2">
      <h1 className="text-2xl font-bold xl:text-3xl">{title}</h1>
      <p className="text-coolGray mt-1 xl:mt-3">{description}</p>
    </div>
  );
};

export default Headline;
