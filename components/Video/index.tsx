import Link from "next/link";


const Video = (props: { url: string }) => {

    return (
        <section className="w-full h-screen relative snap-start mb-4">
            <iframe src={props.url}
                loading="lazy"
                className="border-none absolute top-0 h-full w-full"
                allow="accelerometer; gyroscope; autoplay; encrypted-media;"
                allowFullScreen={true} />

            <div className="absolute top-0 left-0 p-4">
                <Link href="#">
                    <div className="flex gap-2 items-center">
                        <div className="w-10 h-10 bg-red-100 rounded-full cursor-pointer">
                            
                        </div>
                        <div>
                            <span className="block text-[1rem] leading-4 font-medium text-zinc-300">Lorem ipsum</span>
                            <span className="block text-[.8rem] leading-4 text-zinc-300">Lorem ipsum dolor sit </span>
                        </div>
                    </div>
                </Link>
            </div>


            <div className="absolute bottom-[20%] right-0 p-2">

                <div className="grid grid-rows-3 gap-4">

                    <div className="w-12 h-12 p-3 rounded-full cursor-pointer bg-white bg-opacity-10 flex items-center justify-center">
                        <img src="/img/like.svg" alt="" />
                    </div>

                    <div className="w-12 h-12 p-3 rounded-full cursor-pointer bg-white bg-opacity-10 flex items-center justify-center">
                        <img src="/img/deslike.svg" alt="" />
                    </div>

                    <div className="w-12 h-12 p-3 rounded-full cursor-pointer bg-white bg-opacity-10 flex items-center justify-center">
                        <img src="/img/download.svg" alt="" />
                    </div>

                    <div className="w-12 h-12 p-3 rounded-full cursor-pointer bg-white bg-opacity-10 flex items-center justify-center">
                        <img src="/img/shared.svg" alt="" />
                    </div>

                </div>

            </div>

        </section>
    );
};

export default Video;