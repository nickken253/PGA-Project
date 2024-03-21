import { useNavigate } from 'react-router';
import storage from '../../../utils/storage';
import { toast } from 'react-toastify';
import { Button } from '../../../components/Buttons';

const handleLogout = () => {
    storage.remove('token');
    toast.success('Đăng xuất thành công');
}
export const Landing = () => {
    const navigate = useNavigate();
    const token = storage.get('token');
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="w-full max-w-md">
                <h1 className="text-3xl font-bold text-center mb-6">Landing Page</h1>
                {!token && (
                    <div>
                        <Button
                            label='Login'
                            onClick={() => navigate('/auth/login')}
                            style='login'
                        />
                        <Button
                            label='Create New Account'
                            onClick={() => navigate('/auth/register')}
                            style='register'
                        />
                    </div>
                )}
                {token && (
                    <Button
                        label='Logout'
                        onClick={() => {handleLogout(); navigate('/')}}
                        style='logout'
                    />
                )}
            </div>
        </div>
    );
};