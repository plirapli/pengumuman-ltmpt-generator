import qrCode from '../../src/assets/images/qrcode.png';

function QrCode(props) {
  return (
    <img
      className={`${props.size} mb-4 sm:mb-0 rounded-md shadow`}
      src={qrCode}
      alt=''
    />
  );
}

export default QrCode;
