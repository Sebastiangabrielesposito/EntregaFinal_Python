"use client";
import React, { ChangeEvent, useRef, useState, useEffect } from "react";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { updateUserImage } from "@/redux/reducers/auth.slice";

export const LeftBar = () => {
   const dispatch = useDispatch();
   const { user } = useAppSelector((state) => state.auth);
   const [profileImage, setProfileImage] = useState(
      "/default-profile-image.jpg"
   );
   const imageInputRef = useRef<HTMLInputElement | null>(null);
   const token = localStorage.getItem("access");
   const userId = user?.id as number | undefined;
   const [imageUrl, setImageUrl] = useState(
      `${process.env.NEXT_PUBLIC_API_URL}${user!.image}`
   );

   const handleImageUploadClick = () => {
      if (imageInputRef.current) {
         imageInputRef.current.click();
      }
   };
   const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
      const selectedImage = e.target.files?.[0];

      if (selectedImage) {
         const formData = new FormData();
         formData.append("image", selectedImage);

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/update-profile-image/`,
            {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: formData,
            }
         );

         if (response.ok) {
          console.log("imagen cambiada");
            const responseData = await response.json();
            //  console.log(responseData.image_url);

            const updatedImageUrl = responseData.image_url;
            setProfileImage(updatedImageUrl);
            setImageUrl(updatedImageUrl);

            if (typeof userId === "number") {
               dispatch(updateUserImage(updatedImageUrl));
            } else {
               console.log("userId no es un número válido");
            }
         }else {
            console.log("la imagen no se cambió");
         }
      } catch (error) {
      console.log(error);
      }
   }
};

   useEffect(() => {
      setProfileImage(imageUrl);
   }, [imageUrl]);

   return (
      <div className="basis-[25%]  sticky top-[85px] h-[calc(100vh-70px)] px-6">
         <div className="border border-gray-300 dark:border-gray-200 pb-4 rounded-md">
            <div className="relative bg-gray-300 h-[130px] rounded-t-md">
               <div className="w-[95px] max-w-[100px] h-[95px] rounded-full absolute -bottom-7 right-[calc(50%-47.5px)]">
                  <Image
                  key={profileImage}
                  src={`${process.env.NEXT_PUBLIC_API_URL}${user!.image}`}
                  alt="#"
                  fill
                  className="object-cover rounded-full"
                  placeholder="blur"
                  blurDataURL="/blur.svg"
                  loading="lazy"
                  sizes="(max-width: 95px) 100vw, 75px, 50px"
                  onClick={handleImageUploadClick}
                  />
               </div>
            </div>

            <div className="w-full px-7 mt-7">
               <div className="flex flex-col">
                  <h3 className="text-xl font-semibold">
                  {user?.first_name} {user?.last_name}
                  </h3>

                  <small className="text-gray-400 dark:text-white/80 text-xs font-bold">
                  ({user?.username})
                  </small>

                  <p className="break-all text-black/60 dark:text-white/60 mt-3">
                  {user?.bio}
                  </p>
               </div>
            </div>
         </div>

         <input
         type="file"
         accept="image/*"
         id="profileImageInput"
         style={{ display: "none" }}
         onChange={handleImageChange}
         ref={imageInputRef}
         />
      </div>
   );
};
