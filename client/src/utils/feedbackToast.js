import {toast} from 'react-toastify'

export function feedbackToast(msg, success){
    if(success){
        toast.success(msg, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            theme: "light"
        });
    }
    else{
        toast.error(msg, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            theme: "light"
        });
    }
}