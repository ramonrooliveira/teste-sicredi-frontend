import { toast } from 'react-toastify';

const notify = (message) => toast.success(message, {
  position: toast.POSITION.BOTTOM_RIGHT
});

export default notify;