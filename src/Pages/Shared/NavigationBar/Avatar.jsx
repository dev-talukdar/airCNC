import React, { useContext } from 'react';
import placeholder from '../../../assets/images/placeholder.jpg'
import { AuthContext } from '../../../providers/AuthProvider';

const Avatar = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <img className='rounded-full' src={user && user.photoURL ? user.photoURL : placeholder} alt="profile" height='30' width='30' />
        </div>
    );
};

export default Avatar;