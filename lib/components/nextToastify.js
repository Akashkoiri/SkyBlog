"use client"

export { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';

export function showToast(success, message) {
    if (success) {
        toast.success('Thank you', {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
        });
    }
    else {
        toast.error(message, {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
        });
    }
}