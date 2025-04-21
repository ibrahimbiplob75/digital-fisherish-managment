

const SectionTitle = ({ subTitle, title }) => {
  return (
    <div className="mx-auto text-center max-w-md md:max-w-lg my-10">
      <p className="text-[#2B7DCE] mb-2 text-lg font-medium tracking-wider">
        ~~~ {subTitle} ~~~
      </p>
      <h3 className="text-4xl font-bold text-[#1A5F7A] relative pb-4">
        {title}
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#2B7DCE] to-[#57C5B6] rounded-full"></span>
        <span className="absolute -bottom-1 left-1/2 p-1 transform -translate-x-1/2 text-2xl text-[#57C5B6]">
          🐟
        </span>
      </h3>
    </div>
  );
};

export default SectionTitle;