import Image from "next/image";
import Link from "next/link";
import React from "react";

function UserMedia({ userId }: { userId?: string }) {
    return (
        <div className="bg-white shadow-lg p-5 gap-7 rounded-lg flex flex-col ">
            {/* header part */}
            <div className="flex justify-between">
                <span className="font-medium  ">User Information</span>
                <Link href="/" className="cursor-pointer text-blue-600">
                    See all
                </Link>
            </div>

            {/* all image */}
            <div className="flex flex-wrap gap-4 justify-evenly">
                <div className="relative w-1/5 h-28">
                    <Image
                        src="https://images.pexels.com/photos/30411544/pexels-photo-30411544/free-photo-of-casual-coffee-break-with-newspaper-in-cafe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="map png"
                        fill
                        className="rounded-lg object-cover"
                    />
                </div>
               
                <div className="relative w-1/5 h-28">
                    <Image
                        src="https://images.pexels.com/photos/30411544/pexels-photo-30411544/free-photo-of-casual-coffee-break-with-newspaper-in-cafe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="map png"
                        fill
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="relative w-1/5 h-28">
                    <Image
                        src="https://images.pexels.com/photos/30411544/pexels-photo-30411544/free-photo-of-casual-coffee-break-with-newspaper-in-cafe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="map png"
                        fill
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="relative w-1/5 h-28">
                    <Image
                        src="https://images.pexels.com/photos/30411544/pexels-photo-30411544/free-photo-of-casual-coffee-break-with-newspaper-in-cafe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="map png"
                        fill
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="relative w-1/5 h-28">
                    <Image
                        src="https://images.pexels.com/photos/30411544/pexels-photo-30411544/free-photo-of-casual-coffee-break-with-newspaper-in-cafe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="map png"
                        fill
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="relative w-1/5 h-28">
                    <Image
                        src="https://images.pexels.com/photos/30411544/pexels-photo-30411544/free-photo-of-casual-coffee-break-with-newspaper-in-cafe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="map png"
                        fill
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="relative w-1/5 h-28">
                    <Image
                        src="https://images.pexels.com/photos/30411544/pexels-photo-30411544/free-photo-of-casual-coffee-break-with-newspaper-in-cafe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="map png"
                        fill
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="relative w-1/5 h-28">
                    <Image
                        src="https://images.pexels.com/photos/30411544/pexels-photo-30411544/free-photo-of-casual-coffee-break-with-newspaper-in-cafe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="map png"
                        fill
                        className="rounded-lg object-cover"
                    />
                </div>
            </div>
        </div>
    );
}

export default UserMedia;
