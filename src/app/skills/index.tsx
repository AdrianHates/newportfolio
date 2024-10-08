import LineXStyle from "@/components/shared/line-x-style";
import CarouselMultiple from "./carousel-multiple";

interface Props {
  id: string;
  dictionary: Skills;
}
const Skills = ({ id, dictionary }: Props) => {
  const skillsArray = [
    {
      name: "html",
    },
    {
      name: "css",
    },
    {
      name: "javascript",
      type: "jpg",
      className: "px-1",
    },
    {
      name: "python",
    },
    {
      name: "react",
    },
    {
      name: "node",
    },
    {
      name: "postgresql",
    },
    {
      name: "typescript",
    },
  ];

  return (
    <section
      id={id}
      className="pt-[75px] sm:pt-[100px] text-center font-fondamento uppercase"
    >
      <h3 className="font-fondamento uppercase tracking-[3.5px] text-xl sm:text-3xl text-center pb-[50px] text-sky-blue-200">
        {dictionary?.title}
      </h3>
      <LineXStyle />
      <CarouselMultiple items={skillsArray} />
    </section>
  );
};

export default Skills;
