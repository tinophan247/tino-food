import Swal from "sweetalert2"

export const notification = (text,type = 'success') => {
    Swal.fire({
        position: 'top',
        icon: type,
        title: text,
        showConfirmButton: false,
        timer: 1500
      })
}