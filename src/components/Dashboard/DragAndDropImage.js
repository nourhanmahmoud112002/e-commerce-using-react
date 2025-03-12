import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";


export default function ImageUploader({ setImage, existingImage }) {
  const [base64, setBase64] = useState(existingImage || "");
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setBase64(reader.result);
        setImage(reader.result); // Pass base64 to parent component
        setUploadSuccess(false); // Reset success state on new image selection
      };
    }
  }, [setImage]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false,
  });


  return (
    <div className="flex flex-col items-center p-3 border-2 border-dashed border-gray-300 rounded-md cursor-pointer w-full max-w-sm">
      <div {...getRootProps()} className="p-3 text-center w-full">
        <input {...getInputProps()} />
        <p className="text-gray-500 text-sm">
          Drag & drop an image, or click to upload
        </p>
      </div>
      {(base64 || existingImage) && (
        <div className="mt-2 w-12 h-12 border border-gray-300 rounded-md flex items-center justify-center bg-gray-100 overflow-hidden">
          <img
            src={base64 || existingImage}
            alt="Uploaded"
            className="object-contain"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </div>
      )}
      {uploadSuccess && (
        <p className="text-green-500 mt-2">Upload successful!</p>
      )}
    </div>
  );
}



