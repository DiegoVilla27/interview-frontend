import Swal from "sweetalert2";

/**
 * Displays a SweetAlert2 modal dialog with a specified title and optional text.
 * The alert will not have confirmation or close buttons.
 *
 * @param title - The title to be displayed on the alert dialog.
 * @param text - Optional additional text to include in the alert dialog.
 */
const showAlert = (title: string, text: string = "") => {
  Swal.fire({
    title,
    text,
    showConfirmButton: false,
    showCloseButton: false
  });
};

export { showAlert };
