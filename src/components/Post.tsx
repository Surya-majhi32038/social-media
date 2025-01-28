import Image from "next/image";
import React from "react";
import Comments from "./Comments";

const Post = () => {
    return (
        <div className=" flex-1 items-start p-3">
            {/* user section  */}
            <div className="flex items-center justify-between flex-1">
                <div className="flex items-center gap-3 cursor-pointer">
                    <Image
                        src="https://images.pexels.com/photos/8762189/pexels-photo-8762189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        width={48}
                        height={48}
                        alt="profile picture "
                        className="rounded-full object-cover w-12 h-12"
                    />

                    {/* name of the user  */}
                    <span className="text-lg">Surya Majhi</span>
                </div>
                <Image
                    src="/more.png"
                    width={20}
                    height={20}
                    alt="money icon"
                    className="rounded-full object-cover w-5 h-5 cursor-pointer"
                />
            </div>

            {/* description sectoin  */}
            <div className="pt-3">
                {/* des text */}
                <div>
                    <p className="text-lg text-current">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, aut porro quas excepturi, adipisci laudantium laboriosam consectetur culpa neque vit velit consectetur sint expedita laboriosam quod laborum autem, culpa officiis totam quis non delectus? Quae, veniam vitae deserunt neque exercitationem velit? Fuga suscipit reiciendis, vitae, dignissimos corporis ipsam tempora iusto blanditiis voluptas quia, officiis non?
                    </p>
                </div>

                {/* des image */}
                <div className="w-full min-h-96 relative mt-3 rounded-md overflow-hidden">
                    <Image
                        src="https://images.pexels.com/photos/29884131/pexels-photo-29884131/free-photo-of-tranquil-landscape-in-mixnitz-austria.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        fill
                        alt="des image "
                        className="object-cover rounded-md "
                    />
                </div>

            </div>

            {/* like, share and comment section  */}
            <div className="flex flex-1 justify-between px-2 text-lg text-gray-400">
                <div className="flex items-center gap-8 pt-3">

                    <div className="flex items-center gap-2">
                        <Image
                            src="/like.png"
                            width={20}
                            height={20}
                            alt="like icon"
                            className="object-cover w-8 h-8 cursor-pointer"
                        />
                        <span className="flex gap-1">12
                            <span className="hidden md:block"> Likes</span>
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image
                            src="/comment.png"
                            width={20}
                            height={20}
                            alt="comment icon"
                            className=" w-8 h-8 cursor-pointer"
                        />
                        <span className="flex gap-1">12
                            <span className="hidden md:block"> Comments</span>
                        </span>
                    </div>
                </div>

                {/* share section  */}
                <div className="flex items-center gap-2 pt-3 text-lg text-gray-400">
                    <Image
                        src="/share.png"
                        width={20}
                        height={20}
                        alt="share icon"
                        className=" w-8 h-8 cursor-pointer"
                    />
                    <span className="flex gap-1">12
                            <span className="hidden md:block"> Share</span>
                        </span>
                </div>
            </div>

            {/* comments section  */}
            <div className="flex flex-col my-4">
                <Comments/>
            </div>
        </div>
    );
};

export default Post;
