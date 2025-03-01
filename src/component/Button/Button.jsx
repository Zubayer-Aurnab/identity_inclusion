

// eslint-disable-next-line react/prop-types
const Button = ({ children }) => {
    return (
        <button
            style={{
                letterSpacing: "1.5px",
               
            }}
            className="relative w-full px-8 py-2 rounded-md bg-white isolation-auto z-10 border-2 border-[#0d7f88] before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-[#0d7f88] before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center px-4 py-3 text-sm md:text-xl font-semibold text-black bg-white border border-[#0d7f88] rounded-lg shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none  font-header"
        >
            {children}
        </button>

    );
};

export default Button;