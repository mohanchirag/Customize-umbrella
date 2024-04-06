document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("previewCanvas");
  const ctx = canvas.getContext("2d");

  // Umbrella images
  const umbrellaImages = {
    pink: "assets/Pink umbrella.png",
    blue: "assets/Blue umbrella.png",
    yellow: "assets/Yello umbrella.png",
  };

  let currentColor = "pink";
  drawUmbrella(currentColor);

  // Handle color button clicks
  const colorButtons = document.querySelectorAll(".color-dot");
  colorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentColor = button.dataset.color;
      drawUmbrellaWithLoader(currentColor);
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const logoInput = document.getElementById("logoInput");
    const crossIcon = document.querySelector(".cross-icon");

    // Hide cross icon by default
    crossIcon.style.display = "none";

    logoInput.addEventListener("change", function () {
      const file = logoInput.files[0];
      const fileLabel = document.querySelector(".file-label");

      if (file) {
        fileLabel.textContent = file.name; // Display file name as label
        crossIcon.style.display = "block"; // Show cross icon
      } else {
        fileLabel.textContent = "Upload Photo"; // Set default placeholder text
        crossIcon.style.display = "none"; // Hide cross icon
      }
    });
  });


  // Handle logo upload
  const logoInput = document.getElementById("logoInput");
  logoInput.addEventListener("change", handleLogoUpload);

  //update umbrealla color
  function drawUmbrella(color) {
    const img = new Image();
    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    };
    img.src = umbrellaImages[color];
  }

  function drawUmbrellaWithLoader(color) {
    const loader = document.querySelector(".loader");
    var opacity = 0;
    var intervalID = setInterval(function () {
      loader.style.display = "none";
      if (opacity < 1) {
        opacity = opacity + 0.1
        canvas.style.opacity = opacity;
        drawUmbrella(color);
      } else {
        canvas.style.display = "block";
        clearInterval(intervalID);
      }
    }, 250);

  }


  function handleLogoUpload(event) {
    console.log(event);
    const file = event.target.files[0];
    const logoInput = document.getElementById("upload-img");

    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        logoInput.src = e.target.result; // Use e.target.result instead of event.target.result
        logoInput.style.display = "block";
      };
      reader.readAsDataURL(file);
    }
  }
});
