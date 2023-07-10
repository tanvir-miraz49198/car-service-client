import  { useContext } from 'react';
import { AuthContext } from '../../src/Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user} = useContext(AuthContext)

   

    if (user?.email) {
        return children
    }
    return <Navigate to='/login' replace></Navigate>;
};

export default PrivetRoute;