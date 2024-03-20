import { useNavigate } from 'react-router';
import storage from '../../../utils/storage';
import { toast } from 'react-toastify';
export const Landing = () => {
    const navigate = useNavigate();
    const token = storage.get('token');
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="w-full max-w-md">
                <h1 className="text-3xl font-bold text-center mb-6">Landing Page</h1>
                {!token && (
                    <button className="w-full block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigate('/auth/login')}>
                        Login
                    </button>
                )}
                {token && (
                    <button className="w-full block bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2" onClick={() => {
                        storage.remove('token');
                        toast.success('Đăng xuất thành công');
                        navigate('/auth/login');
                    }
                    }>
                        Logout
                    </button>
                )}
            </div>
        </div>
    );
};