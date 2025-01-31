import { Feed } from "@/components/Feed";
import LeftMenu from "@/components/LeftMenu";
import { RightMenu } from "@/components/RightMenu";
import Image from "next/image";
import React from "react";

const ProfilePage = () => {
    return (
        <div className="flex gap-6 pt-7">
            {/* left part */}
            <div className="hidden md:block w-[20%]">
                <LeftMenu type="profliepage" />
            </div>

            {/* center part(MainSection) or Mobile part*/}
            <div className=" w-full lg:w-[60%] xl:w-[40%] ">
                {/* uesr profile */}
                <div className="mb-10 flex flex-col gap-20 ">

                    {/* cover image and profile picture */}
                    <div className="h-64  relative">
                        {/* oover image  */}
                        <Image
                            src="https://images.pexels.com/photos/7180792/pexels-photo-7180792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="cover image"
                            fill
                            className="object-cover rounded-md"
                        />

                        {/* profile page */}
                        <Image
                            src="https://images.pexels.com/photos/1391499/pexels-photo-1391499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="cover image"
                            width={100}
                            height={100}
                            className=" w-32 h-32 -bottom-16 absolute left-0 right-0 m-auto object-cover  rounded-full ring-4 ring-white "
                        />
                    </div>

                    <span className="text-4xl font-semibold left-0 right-0 m-auto">Surya Majhi</span>

                    {/* post, followes, follwing */}
                    <div className="flex text-lg -mt-10 font-semibold left-0 right-0 m-auto gap-6">
                        <div className="flex flex-col items-center">
                            <span>123</span>
                            <span>Posts</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span>1.5k</span>
                            <span>Followers</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span>1.2k</span>
                            <span>Following</span>
                        </div>
                    </div>
                </div>
                <Feed />
            </div>

            {/* right  part */}
            <div className="hidden md:block w-[28%] ">
                <RightMenu userId={"textcase"} />
            </div>
        </div>
    );
};

export default ProfilePage;
