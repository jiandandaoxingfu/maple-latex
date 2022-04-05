import { notification } from 'antd';

export function Notification(placement, info) {
  notification.info({
    message: '',
    description: info,
    placement
  });
};