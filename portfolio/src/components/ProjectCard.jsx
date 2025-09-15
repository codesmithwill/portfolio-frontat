import { GitHub } from 'lucide-react';

export default function ProjectCard( { titulo, desc, img} ) {
    return (
        <div className="flex flex-col gap-2.5">
            <h1 className="font-bold">{titulo}</h1>
            <p className="italic text-xs">{desc}</p>
            <img src={img} alt="imagem do projeto" />
            <div>
                <button>
                    <a href="">Acessar</a>
                </button>
                <button></button>
            </div>
        </div>
    );
};