import { useState } from 'react';

const ImageUpload = () => {
    const [imageData, setImageData] = useState('');

    const handleImageChange = (e: any) => {
        const file = e.target.files[0];
        const reader: any = new FileReader();

        reader.onloadend = () => {
            setImageData(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = () => {
        // Upload imageData to the backend
        // Note: This is a simplified example. You would typically use fetch() or another method to send the image data to your backend.
        console.log('Image data:', imageData);
    };

    return (
        <div>
            <input type="file" accept="image/*" capture="environment" onChange={handleImageChange} />
            <button onClick={handleSubmit}>Upload Image</button>
            {imageData && <img src={imageData} alt="Uploaded" />}
        </div>
    );
};

export default ImageUpload;
