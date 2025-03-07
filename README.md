<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pharaoh's QR Code Chamber</title>
    <style>
        body {
            background-color: #f4e4bc; /* Sandstone background */
            font-family: 'Papyrus', sans-serif; /* Hieroglyph-like font */
            text-align: center;
            color: #2c1d0e; /* Dark brown text */
            margin: 0;
            padding: 20px;
        }
        h1 {
            font-size: 2.5em;
            color: #d4a017; /* Gold color */
            text-shadow: 2px 2px 4px #000;
        }
        .container {
            background-color: #8b5a2b; /* Wood-like brown */
            padding: 20px;
            border: 5px solid #d4a017;
            border-radius: 10px;
            max-width: 600px;
            margin: 0 auto;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
        }
        input {
            padding: 10px;
            font-size: 1.2em;
            width: 80%;
            margin: 10px 0;
            border: 2px solid #d4a017;
            background-color: #f4e4bc;
            color: #2c1d0e;
        }
        button {
            padding: 10px 20px;
            font-size: 1.2em;
            background-color: #d4a017;
            color: #fff;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        button:hover {
            background-color: #b8860b;
        }
        #qrcode {
            margin-top: 20px;
            background-color: #fff;
            padding: 10px;
            display: inline-block;
        }
        .pharaoh-decoration {
            font-size: 1.5em;
            color: #d4a017;
            margin: 10px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Pharaoh's QR Code Chamber</h1>
        <div class="pharaoh-decoration">𓀀 𓀁 𓀂 𓀃</div>
        <p>Click to receive the sacred QR code:</p>
        <button onclick="generateQR()">Generate Pharaoh's QR</button>
        <div id="qrcode"></div>
        <div class="pharaoh-decoration">𓀄 𓀅 𓀆 𓀇</div>
    </div>

    <!-- QR Code Library -->
    <script src="https://cdn.jsdelivr.net/npm/qrcode@1.5.3/build/qrcode.min.js"></script>
    <script>
        function generateQR() {
            const qrcodeDiv = document.getElementById("qrcode");
            qrcodeDiv.innerHTML = ""; // Clear previous QR code
            // Hardcoded value - replace with the actual content of your QR code
            const fixedQRContent = "https://example.com"; // Replace with the correct URL/text
            QRCode.toCanvas(fixedQRContent, { width: 200 }, function (error, canvas) {
                if (error) console.error(error);
                qrcodeDiv.appendChild(canvas);
            });
        }
    </script>
</body>
</html>