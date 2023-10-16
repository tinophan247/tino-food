import Swal from "sweetalert2"

export const notification = (text) => {
    Swal.fire({
        position: 'top',
        icon: 'success',
        title: text,
        showConfirmButton: false,
        timer: 1500
      })
}