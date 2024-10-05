import Marquee from "react-fast-marquee";

const BrakingNews = () => {
    return (
        <div className="flex justify-center items-center gap-2 bg-gray-100 p-2 rounded-md mb-4">
            <button className="btn btn-sm btn-secondary ">Braking News</button>
            <Marquee pauseOnHover={true}>
            I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    );
};

export default BrakingNews;