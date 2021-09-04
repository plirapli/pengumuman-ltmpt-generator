import qrCode from "../../src/assets/images/qrcode.png";

function QrCode() {
  return (
    <img
      className="w-32 h-32 mb-4 sm:mb-0 sm:mr-4 rounded-md shadow"
      src={qrCode}
      alt=""
    />
  );
}

export default QrCode;
