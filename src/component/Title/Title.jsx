

// eslint-disable-next-line react/prop-types
const Title = ({ children }) => {
    return (
        <div className="relative border-s-8 border-[#118088] md:border-s-8 md:ps-3 font-[Roboto] ">
            <h2 className="text-4xl md:text-5xl xl:text-5xl font-bold">{children}</h2>
            <p className="absolute bottom-2 text-5xl md:text-7xl -z-10 opacity-5">{children}</p>
        </div>
    );
};

export default Title;