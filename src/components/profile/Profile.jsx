import React, { useState } from 'react'
import Input from '../SignIn/Input'
import Button from '../Button/Button'

import profilImage from '../../assets/about/profile.png'
import { CameraIcon } from '../shared/svgComponents';
import { useForm } from 'react-hook-form';

function Profile() {
  const [profileImage, setProfileImage] = useState(profilImage);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const currentPassword = watch("currentPassword");
  const newPassword = watch("newPassword");

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = (data) => {
    console.log("Form data:", data);
  };

  return (
    <div className='w-full bg-dark text-slate-300'>
      <div className='w-full border-b border-stone-400/50'>
        <h3 className='text-2xl font-bold p-6'>Profile</h3>
      </div>
      <div className='w-full pb-20'>
        <div className='w-full'>
          <div className='w-full flex flex-col justify-center items-center mt-8'>
            <div className='w-32 h-32 rounded-full overflow-hidden relative group cursor-pointer'>
              <img className='w-32 h-32 scale-150 mt-2 bg-slate-300 p-2' src={profileImage} alt="" />
              <div className='h-full w-full bg-slate-400 absolute top-0 left-0 flex items-start justify-center mt-[100%] group-hover:mt-[60%] duration-300 bg-white/20'>
                <CameraIcon className="text-4xl mt-2 text-black/50 " />
              </div>
            </div>
            <p className='text-lg py-2 px-4 mt-4 w-[150px] text-center bg-primary/80 rounded-md cursor-default'>Verified</p>
            </div>
            <div className='ml-8'>
              <h4 className='text-xl font-bold mt-8 pb-2 mb-4 border-b inline-block'>Personal Information : </h4>
              <div className='flex gap-4 text-lg py-2'><p className='w-[100px]'>Name</p> : <p>Ahsan Kabir</p></div>
              <div className='flex gap-4 text-lg py-2'><p className='w-[100px]'>Email</p> : <p>ahsanKabirrana@gmail.com</p></div>
              <div className='flex gap-4 text-lg py-2'><p className='w-[100px]'>NID</p> : <p>826500814728</p></div>
              <div className='flex gap-4 text-lg py-2'><p className='w-[100px]'>Phone</p> : <p>+8801308686991</p></div>
            </div>
          

          <h4 className='py-6 ml-6 mt-4 mb-4 text-xl font-bold border-b border-stone-400/50 inline-block'>Security Information : </h4>

          <form className='ml-10' onSubmit={handleSubmit(onSubmit)}>
            {/* Current Password */}
            <div className='py-2 flex items-center relative'>
              <label className='text-base w-[150px] py-2'>Current Password : </label>
              <input
                className='p-2 bg-grayDark rounded-md'
                type={showCurrentPassword ? "text" : "password"}
                {...register("currentPassword", { required: "Current password is required" })}
                placeholder='Current Password'
              />
              <span
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                className=' cursor-pointer'
              >
                {showCurrentPassword ? "👁️" : "🚫"}
              </span>
            </div>
            {errors.currentPassword && <p className='text-red-500'>{errors.currentPassword.message}</p>}

            {/* New Password */}
            <div className='py-4 flex items-center relative'>
              <label className='text-base w-[150px]'>New Password : </label>
              <input
                className='p-2 bg-grayDark rounded-md'
                type={showNewPassword ? "text" : "password"}
                {...register("newPassword", {
                  required: "New password is required",
                  validate: (value) =>
                    value !== currentPassword || "New password must be different from current password",
                })}
                placeholder='New Password'
              />
              <span
                onClick={() => setShowNewPassword(!showNewPassword)}
                className=' cursor-pointer'
              >
                {showNewPassword ? "👁️" : "🚫"}
              </span>
            </div>
            {errors.newPassword && <p className='text-red-500'>{errors.newPassword.message}</p>}

            {/* Confirm Password */}
            <div className='py-4 flex items-center relative'>
              <label className='text-base w-[150px]'>Confirm Password : </label>
              <input
                className='p-2 bg-grayDark rounded-md'
                type={showConfirmPassword ? "text" : "password"}
                {...register("confirmPassword", {
                  required: "Confirm password is required",
                  validate: (value) =>
                    value === newPassword || "Confirm password must match new password",
                })}
                placeholder='Confirm Password'
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className=' cursor-pointer'
              >
                {showConfirmPassword ? "👁️" : "🚫"}
              </span>
            </div>
            {errors.confirmPassword && <p className='text-red-500'>{errors.confirmPassword.message}</p>}

            <button className='py-2 bg-primary px-6 rounded-md' type="submit">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
