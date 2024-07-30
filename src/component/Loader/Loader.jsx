import './Loader.css'

const Loader = () => {
    return (
        <div className="loader-container">

            <svg id='svg-loader' viewBox="0 0 1440 220">
                <text x="50%" y="50%" dy=".32em" width="100%" height="100%" textAnchor="middle" className="text-body">
                    Identity Inclusion .
                </text>

            </svg>
        </div>
    );
};

export default Loader;