import { LuGithub } from "react-icons/lu";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard( { titulo, desc, img, github, link} ) {
    return (
        <div className="flex flex-col gap-2.5">
            <h1 className="font-bold">{titulo}</h1>
            <p className="italic text-xs">{desc}</p>
            <img src={img} alt="imagem do projeto" />
            <div className="flex justify-around mt-3">
                <a className="inline-block border-2 rounded-4xl p-2 hover:bg-gray-900 hover:text-white duration-300 ease-in" href={github} target="__blank">
                    <button className="flex hover:cursor-pointer items-center gap-2 p-1">
                        <LuGithub/>GitHub
                    </button>
                </a>
                <a className="inline-block border-2 rounded-4xl p-2 hover:bg-gray-900 hover:text-white duration-300 ease-in" href={link} target="__blank">
                    <button className="flex hover:cursor-pointer items-center gap-2 p-1">
                        <FaExternalLinkAlt/>Website
                    </button>
                </a>
            </div>
        </div>
    );
};