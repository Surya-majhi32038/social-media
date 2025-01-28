import Image from "next/image";
import Link from "next/link";
import React from "react";

function Ads({ size }: { size: "sm" | "md" | "lg" }) {
    return (
        <div className="flex flex-col gap-5 rounded-lg p-4 bg-white shadow-md">
            {/* upper tag */}
            <div className="flex justify-between items-center">
                <span className="font-medium text-gray-500">Sponserd Ads</span>
                <Image
                    src="/more.png"
                    width={10}
                    height={10}
                    alt="money icon"
                    className="rounded-full object-cover w-5 h-5 cursor-pointer"
                />
            </div>
            {/* ads image */}
            <div
                className={`relative w-full ${size === "md" ? "h-36" : size === "sm" ? "h-24" : "h-48"
                    }`}
            >
                <Image
                    src="https://images.pexels.com/photos/2885917/pexels-photo-2885917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="image"
                    fill
                    className=" object-cover rounded-lg"
                />
            </div>
            {/* to show the ads tag line*/}
            <div className="flex gap-2 items-center cursor-pointer">
                <Image
                    src="https://images.pexels.com/photos/8762189/pexels-photo-8762189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="friends picture"
                    width={20}
                    height={20}
                    className="w-7 h-7 rounded-full object-cover"
                />
                <span className="font-medium text-blue-800">
                    The seven Mysterious place to visit in 2025
                </span> 
            </div>
            <div className="flex flex-col flex-1 gap-3">
                <p>{`${size === "sm"
                        ? "Lorem ipsum dolor sit amet consectetur adipisicing elit"
                        : size === "lg"
                            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque unde omnis dolorem alias maiores? Accusamus possimus magnam reiciendis iure ex perspiciatis quibusdam autem repellat id et tempore fugit"
                            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque unde omnis dolorem alias maiores"
                }`}</p>
                <Link href="/" className="bg-[#E5E7EB] flex-1 py-1.5 cursor-pointer text-center rounded-lg">Learn More</Link>
            </div>
        </div>
    );
}

export default Ads;
