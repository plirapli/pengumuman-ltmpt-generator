import qrCode from "../../src/assets/images/qrcode.png";

function QrCode() {
  return (
    <img
      className="w-24 h-24 mb-4 sm:mb-0 sm:mr-4 rounded-md shadow"
      src={qrCode}
      alt=""
    />
  );
}

export default QrCode;
