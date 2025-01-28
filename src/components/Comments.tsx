import Image from "next/image";
import React from "react";

function Comments() {
  return (
    <div className="flex flex-col gap-2">
      {/* add the comment */}
      <div className="flex mr-5 gap-4 items-center flex-1">
        <img
          src="https://images.pexels.com/photos/8762189/pexels-photo-8762189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="profile image"
          width={28}
          height={28}
          className="object-cover w-8 h-8 rounded-full"
        />

        <div className="flex py-2 px-4 rounded-lg items-center  flex-1 bg-slate-100">
          <input
            type="text"
            placeholder="Write a comment..."
            className="w-full outline-none  px-3 rounded-lg flex-1 bg-transparent"
          />
          <Image
            src="/emoji.png"
            alt="emoji picture"
            width={20}
            height={20}
            className="w-5 h-5 "
          />
        </div>
      </div>

      {/* show comments */}
      <div className="flex gap-3 justify-between mt-6">
        {/* user section  */}
        <Image
          src="https://images.pexels.com/photos/8762189/pexels-photo-8762189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={40}
          height={40}
          alt="profile picture "
          className=" rounded-full object-cover w-10 h-10"
        />

        {/* comment part  */}
        <div className="flex flex-col gap-2 flex-1">
          <span className="font-medium">Surya Majhi</span>
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
            officiis vitae, incidunt fuga delectus ratione quam aliquam eos
            tempore facilis?
          </p>
          <div className="flex gap-8 items-center text-base text-gray-500">
            <div className="flex gap-4">
              <Image
                src="/like.png"
                alt="like image"
                width={20}
                height={20}
                className="w-5 h-5 cursor-pointer "
              />
              <span className="text-gray-300">|</span>
              <span className="text-gray-500">123</span>
            </div>
            <div className="cursor-pointer">Replay</div>
          </div>
        </div>
        {/* more icon */}
        <Image
          src="/more.png"
          alt="more png"
          width={20}
          height={20}
          className="w-5 h-5 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Comments;
