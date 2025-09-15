export default function TeacherRe( { titulo, myScore = 0, maxScore = 10} ) {
    return (
        <div className="flex flex-col gap-2.5">
            <h1>{titulo}</h1>
            <div className="flex justify-center items-center gap-2">
                <p className="text-4xl font-bold">{myScore}</p>
                <p> de </p>
                <p>{maxScore}</p>
            </div>
        </div>
    );
};