import Image from "next/image";
import React from "react";

const AddToPost = () => {
    return (
        <div className="bg-white flex items-start gap-5 justify-between my-4 p-4 rounded-xl shadow-sm">
            {/* provfile picture section  */}
            
                <Image
                    src="https://images.pexels.com/photos/8762189/pexels-photo-8762189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    width={48}
                    height={48}
                    alt="profile picture "
                    className="rounded-full object-cover w-12 h-12 cursor-pointer"
                ></Image>
            
            <div className="flex-1">
                <div className="flex gap-4 mb-3 text-[18px]  items-end">
                    <textarea
                        className=" bg-slate-100 p-3 flex-1 rounded-lg outline-blue-400/50 resize-none"
                        placeholder="what's on your mind?"
                    ></textarea>
                    <Image
                        src="/emoji.png"
                        alt="emoji picture"
                        width={20}
                        height={20}
                        className="w-6 h-6"
                    ></Image>
                </div>
                <div className="flex gap-5 text-slate-500">
                    <div className="flex text-lg cursor-pointer gap-2">

                        <Image
                            src="/addimage.png"
                            width={20}
                            height={20}
                            alt="adding image "
                            className="w-6 h-6"
                        />
                        Home
                    </div>
                    <div className="flex gap-2 text-lg cursor-pointer">

                        <Image
                            src="/addVideo.png"
                            width={20}
                            height={20}
                            alt="adding image "
                            className="w-6 h-6"
                        />
                        Video
                    </div>
                    <div className="flex gap-2 text-lg cursor-pointer">

                        <Image
                            src="/addevent.png"
                            width={20}
                            height={20}
                            alt="adding image "
                            className="w-6 h-6"
                        />
                        Event
                    </div>
                    <div className="flex gap-2 text-lg cursor-pointer">

                        <Image
                            src="/poll.png"
                            width={20}
                            height={20}
                            alt="adding image "
                            className="w-6 h-6"
                        />
                        Poll
                    </div>
                </div>
            </div>
        </div> // last 40:00
    );
};

export default AddToPost;
