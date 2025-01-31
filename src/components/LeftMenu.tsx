import React from "react";
import ProfileCard from "./ProfileCard";
import Image from "next/image";
import Link from "next/link";
import Ads from "./Ads";

const LeftMenu = ({ type }: { type: "homepage" | "profliepage" }) => {
    return (
        <div className="flex flex-col gap-5">
            {type === "homepage" && <ProfileCard />}

            {/* other activites */}
            <div className="bg-white  flex flex-col gap-10 p-8 rounded-md shadow-md text-lg text-gray-500">
                <Link href='/' className="flex gap-3 items-center cursor-pointer hover:bg-slate-100">
                    <Image
                        src="/posts.png"
                        alt="cover image"
                        width={10}
                        height={10}
                        className="w-6 h-6 "
                    />
                    <span>My Posts</span>
                </Link>
                <Link href='/' className="flex gap-3 items-center cursor-pointer hover:bg-slate-100">
                    <Image
                        src="/activity.png"
                        alt="cover image"
                        width={10}
                        height={10}
                        className="w-6 h-6 "
                    />
                    <span>Activity</span>
                </Link>
                <Link href='/' className="flex gap-3 items-center cursor-pointer hover:bg-slate-100">
                    <Image
                        src="/market.png"
                        alt="cover image"
                        width={10}
                        height={10}
                        className="w-6 h-6 "
                    />
                    <span>Market Place</span>
                </Link>
                <Link href='/' className="flex gap-3 items-center cursor-pointer hover:bg-slate-100">
                    <Image
                        src="/events.png"
                        alt="cover image"
                        width={10}
                        height={10}
                        className="w-6 h-6 "
                    />
                    <span>Events</span>
                </Link>
                <Link href='/' className="flex gap-3 items-center cursor-pointer hover:bg-slate-100">
                    <Image
                        src="/albums.png"
                        alt="cover image"
                        width={10}
                        height={10}
                        className="w-6 h-6 "
                    />
                    <span>Albums</span>
                </Link>
                <Link href='/' className="flex gap-3 items-center cursor-pointer hover:bg-slate-100">
                    <Image
                        src="/videos.png"
                        alt="cover image"
                        width={10}
                        height={10}
                        className="w-6 h-6 "
                    />
                    <span>Video</span>
                </Link>
                <Link href='/' className="flex gap-3 items-center cursor-pointer hover:bg-slate-100">
                    <Image
                        src="/posts.png"
                        alt="cover image"
                        width={10}
                        height={10}
                        className="w-6 h-6 "
                    />
                    <span>News</span>
                </Link>
                <Link href='/' className="flex gap-3 items-center cursor-pointer hover:bg-slate-100">
                    <Image
                        src="/courses.png"
                        alt="cover image"
                        width={10}
                        height={10}
                        className="w-6 h-6 "
                    />
                    <span>Course</span>
                </Link>
                <Link href='/' className="flex gap-3 items-center hover:bg-slate-100 cursor-pointer">
                    <Image
                        src="/lists.png"
                        alt="cover image"
                        width={10}
                        height={10}
                        className="w-6 h-6 "
                    />
                    <span>Lists </span>
                </Link>
                <Link href='/' className="flex gap-3 items-center cursor-pointer hover:bg-slate-100">
                    <Image
                        src="/settings.png"
                        alt="cover image"
                        width={10}
                        height={10}
                        className="w-6 h-6 "
                    />
                    <span>Settings</span>
                </Link>
            </div>
            <Ads size="sm" />
        </div>
    );
};

export default LeftMenu;
