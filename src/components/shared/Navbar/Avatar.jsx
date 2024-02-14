
import { useContext } from 'react';
import avatarImg from '../../../assets/placeholder.jpg'
import { AuthContext } from '../../../providers/AuthProvider';
const Avatar = () => {
  const {user} = useContext(AuthContext)
    return (
    
      <img className=' rounded-full' src={user && user.photoURL ? user.photoURL : avatarImg} alt="profile" width={'30'} height={"30"}  referrerPolicy='no-referrer'/>
    );
};

export default Avatar;