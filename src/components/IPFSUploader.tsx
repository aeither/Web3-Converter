import { Button } from "@chakra-ui/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";
import { ChangeEvent, useMemo, useState } from "react";

const IPFSUploader = () => {
  const network = "polygon";
  const [image, setImage] = useState<File>();
  const sdk = useMemo(() => new ThirdwebSDK(network), [network]);

  /** Upload to IPFS and get Metadata */
  const uploadIPFS = async ({ _image }: { _image: File }) => {
    return sdk.storage.upload(_image);
  };

  const saveImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const uploadImage = async () => {
    if (image) {
      const uri = await uploadIPFS({ _image: image });
      // eslint-disable-next-line no-console
      console.log(uri);
    }
  };

  return (
    <div>
      <p>Upload to IPFS</p>
      <div>
        <input
          type="file"
          onChange={(e) => saveImage(e)}
          placeholder="token address"
          //   value={image}
        />
        <Button onClick={() => uploadImage()}>Upload and get Metadata</Button>
      </div>
    </div>
  );
};

export default IPFSUploader;
