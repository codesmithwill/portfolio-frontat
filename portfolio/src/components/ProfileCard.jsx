export default function ProfileCard( {img, nome, sobre}) {
    return (
        <div className="flex bg-gray-900 rounded-4xl border-1 border-white p-4 text-white hover:bg-white hover:text-black hover:border-black duration-300 ease-in">
            <img className="rounded-4xl" src={img} alt="imagem de perfil" width={81} height={81}/>
            <div className="flex flex-col text-start gap-2 ml-4 justify-center">
                <h2 className="font-bold text-base italic">{nome}</h2>
                <p>{sobre}</p>
            </div>
        </div>
    );
};