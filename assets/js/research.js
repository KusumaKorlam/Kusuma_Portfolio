const mainContainer = document.querySelector(".main");

// Resume file path
const resumePath = "assets/images/research-page/Kusuma_Resume.pdf";

// Function to render resume preview and buttons
const displayResume = () => {
  mainContainer.innerHTML = `
    <div class="resume-container" style="max-width: 1200px; margin: 2rem auto; background: #fff; padding: 1rem; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); text-align: center;">
      <h2 style="margin-bottom: 1rem;">My Resume</h2>

      <!-- PDF Preview -->
      <iframe src="${resumePath}" type="application/pdf" style="width:1000px; height:800px; border:none; margin: 0 auto 1rem; display:block;"></iframe>



      <!-- Buttons -->
      <div class="button-group" style="display:flex; justify-content:center; gap:1rem;">
        <a href="${resumePath}" target="_blank" class="resume-button" style="padding: 0.75rem 1.5rem; background-color: #007BFF; color: white; border-radius: 5px; text-decoration: none; font-size: 1rem;">View Resume</a>
        <a href="${resumePath}" download class="resume-button" style="padding: 0.75rem 1.5rem; background-color: #007BFF; color: white; border-radius: 5px; text-decoration: none; font-size: 1rem;">Download Resume</a>
      </div>
    </div>
  `;
};

document.addEventListener("DOMContentLoaded", displayResume);
