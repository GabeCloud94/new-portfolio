import { AiFillStar } from "react-icons/ai"

interface KeyPointProps {
    header: string,
    body: string
}

export default function Keypoint({header, body}: KeyPointProps) {
    return (
        <div className="flex flex-col md:flex-row gap-4 items-center w-full bg-violet-400 my-auto rounded-md py-8 md:py-6 px-4 xl:p-8">
            <div className="md:w-1/12 md:-ml-16 xl:-ml-20">
                <div className="rounded-full  p-4 text-center flex justify-center items-center bg-slate-900 w-24 h-24">
                    <AiFillStar className="text-yellow text-2xl" />
                </div>
            </div>
            <div className="flex flex-col gap-2 w-full text-center">
                <h2 className="md:ml-16 xl:ml-20 text-lg font-bold">{header}</h2>
                <p className="md:ml-16 xl:ml-20">{body}</p>
            </div>
        </div>
    )
}