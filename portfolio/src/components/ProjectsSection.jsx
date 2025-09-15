export default function ProjectsSection({ children }) {
    return(
        <>
        <div className="flex flex-col gap-4 p-10 bg-gray-900 rounded-4xl border-1 border-white  text-white hover:bg-white hover:text-black hover:border-black duration-300 ease-in">
            {children}
        </div>
        </>
    )
}