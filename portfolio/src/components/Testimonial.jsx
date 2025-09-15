export default function Testimonial({ texto }) {
    return(
        <div className="flex bg-gray-900 rounded-4xl border-1 border-white p-4 text-white hover:bg-white hover:text-black hover:border-black duration-300 ease-in">
            <p className="text-left">{texto}</p>
        </div>
    );
};