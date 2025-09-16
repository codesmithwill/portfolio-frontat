import React from "react";

export default function ProjectsSection({ children }) {
    return(
        <div className="flex flex-col p-10 bg-gray-900 rounded-4xl border-1 border-white text-white hover:bg-white hover:text-black hover:border-black duration-300 ease-in">
            {React.Children.map(children, (child) => (
                <div className="rounded-2xl p-6 shadow-lg mb-8 border border-white hover:border-gray-900 hover:border-4">
                    {child}
                </div>
            ))}
        </div>
    )
}