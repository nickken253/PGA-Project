export const API_URL = process.env.REACT_APP_API_URL as string;
export const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

export const STYLES = {
    label: "block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4",
    field: "appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",
    errorMsg: "text-sm text-red-600",
    loginButton: "w-full shadow bg-blue-500 hover:bg-blue-600 focus:shadow-outline-purple focus:outline-none text-white font-bold py-2 px-4 rounded mb-2"
};

export * from './styles';