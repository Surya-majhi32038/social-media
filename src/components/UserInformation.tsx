import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserInformation = ({ userId }: { userId?: string }) => {
    return (
        <div className="bg-white rounded-lg p-5 text-gray-500 shadow-lg flex flex-col gap-7">
            {/* header part */}
            <div className="flex justify-between">
                <span className="font-medium  ">User Information</span>
                <Link href="/" className="cursor-pointer text-blue-600">
                    See all
                </Link>
            </div>

            {/* profile name  */}
            <div className="flex items-center gap-2">
                <span className="text-2xl text-black font-semibold">Surya Majhi</span>
                <span className="text-gray-500 ">@suryamajhi1234</span>
            </div>

            {/* description about the user  */}
            <p className="text-gray-500 text-lg ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
                incidunt aut aliquam quod deleniti harum iusto libero nesciunt.
                Architecto maxime nulla provident temporibus vel inventore saepe
                assumenda, pariatur esse dolores.
            </p>

            <div className="flex flex-col gap-4">
                {/* live */}
                <div className="flex items-center gap-2">
                    <Image
                        src="/map.png"
                        alt="map png"
                        width={10}
                        height={10}
                        className="w-5 h-5 object-cover"
                    />
                    <span className="text-gray-500"> Living in</span>
                    <span className="font-semibold">Ambika Kalna</span>
                </div>
                {/* live */}
                <div className="flex items-center gap-2">
                    <Image
                        src="/school.png"
                        alt="map png"
                        width={10}
                        height={10}
                        className="w-5 h-5 object-cover"
                    />
                    <span className="text-gray-500"> Went to</span>
                    <span className="font-semibold">
                        Ambika Kalna MahisMardini High School
                    </span>
                </div>
                {/* live */}
                <div className="flex items-center gap-2">
                    <Image
                        src="/work.png"
                        alt="map png"
                        width={10}
                        height={10}
                        className="w-5 h-5 object-cover"
                    />
                    <span className="text-gray-500"> Work at</span>
                    <b>Meta...</b>
                </div>

                {/* end part */}
                <div className="flex flex-1 flex-col">
                    <div className="flex justify-between">
                        <div className="flex items-center gap-1">
                            <Image
                                src="/link.png"
                                alt="link png"
                                width={10}
                                height={10}
                                className="w-4 h-4"
                            />
                            <Link href="/" className=" text-blue-600">
                                click here
                            </Link>
                        </div>
                        <div className="flex items-center gap-1">
                            <Image
                                src="/date.png"
                                alt="link png"
                                width={10}
                                height={10}
                                className="w-4 h-4"
                            />
                            <span className=" text-gray-500">Joined December 2024</span>
                        </div>
                    </div>

                    {/* follow option */}

                    <span className="flex  justify-center text-white my-3 rounded-lg cursor-pointer py-2 bg-blue-600 ">Follow</span>


                    <span className="flex justify-end cursor-pointer text-red-500">Block User</span>

                </div>
            </div>
        </div>
    );
};

export default UserInformation;
