import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'

const DoctorProfile = () => {

  const {dToken, profileData, setProfileData, getProfileData} = useContext(DoctorContext)
  const {currency, backendUrl} = useContext(AppContext)

  useEffect(()=>{
    if (dToken) {
      getProfileData()
    }
  },[dToken])

  return profileData && (
    <div>
      <div className=" flex flex-col gap-4 m-5">
        <div className="">
          <img src={profileData.image} className='bg-primary/80 w-full sm:max-w-64 rounded-lg' alt="" />
        </div> 
        <div className="flex-1 border border-stone-100 rounded-lg p-8 py-7 bg-white ">
          {/* Doc info : name , degree and experience */} 
          <p className='flex items-center gap-2 text-3xl font-medium text-gray-700'>{profileData.name}</p>
          <div className="flex items-center gap-2 mt-1 text-gray-600">
            <p>{profileData.degree} - {profileData.speciality}</p> 
            <button className='py-0.5 px-2 border text-xs rounded-full'>{profileData.experience} Years </button>
          </div> 
          {/* Doc About  */} 
          <div className="">
             <p className='flex items-center gap-1 text-sm font-medium text-neutral-800 mt-3'>About:</p> 
             <p>
              {profileData.about}
             </p>
          </div>
          <p>
            Appointment fee: <span>{currency} {profileData.fees}</span>
          </p> 
          <div className="">
            <p>Address:</p> 
            <p>
              {profileData.address.line1}
              <br />
              {profileData.address.line2}
            </p>
          </div> 

          <div className="">
            <input type="checkbox" name="id" id="" /> 
            <label htmlFor="">Available</label>
          </div> 

          <button>Edit</button> 

        </div>
      </div>
    </div>
  )
}

export default DoctorProfile
