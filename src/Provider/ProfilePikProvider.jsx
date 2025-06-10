import React, { useState } from 'react';
import { ImgContext } from '../Context/Context';

const ProfilePikProvider = ({ children }) => {
    const [profilePik, setProfilePik] = useState(null)
    
    return <ImgContext value={{profilePik,setProfilePik}}>{children }</ImgContext>
    
};

export default ProfilePikProvider;