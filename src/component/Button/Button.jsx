// eslint-disable-next-line react/prop-types
const Button = ({ children, small = false }) => {
    return (
        <button
            style={{
                letterSpacing: "1.5px",
                color: "#118097",
                backgroundColor: "#D4F1F7", // A soft, light teal matching #118097
            }}
            className={`${small ? "px-4 py-1 text-sm" : "px-5 py-2"} font-header font-semibold rounded-md border-[1px]  border-[#118097]`}
        >
            {children}
        </button>

    );
};

export default Button;
