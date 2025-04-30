<script>
    const colorizeButton = document.getElementById('colorizeButton');
    const imageUpload = document.getElementById('imageUpload');
    const resultSection = document.getElementById('resultSection');
    const colorizedImage = document.getElementById('colorizedImage');

    colorizeButton.addEventListener('click', async () => {
        const file = imageUpload.files[0];
        if (!file) {
            alert('Please upload an image first!');
            return;
        }

        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await fetch('http://127.0.0.1:5000/predict', {
                method: 'POST',
                body: formData
            });
            if (!response.ok) throw new Error('Error colorizing the image');
            const blob = await response.blob();
            colorizedImage.src = URL.createObjectURL(blob);
            resultSection.style.display = 'block';
        } catch (error) {
            console.error('Error:', error);
        }
    });
</script>
