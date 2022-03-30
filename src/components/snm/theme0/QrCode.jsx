import qrCode from '../../../assets/images/qrcode.png';

function QrCode(props) {
  return (
    <img
      className={`${props.size} mb-4 sm:mb-0`}
      src={qrCode}
      alt={props.alt || 'Image'}
    />
  );
}

export default QrCode;
