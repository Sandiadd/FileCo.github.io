// Progress Bar
const progressBar = document.getElementsByClassName('progress-bar')[0];
const maxWidth = 100; // Set the maximum width of the progress bar

function animateProgressBar() {
  const computedStyle = getComputedStyle(progressBar);
  let width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;

  if (width < maxWidth) {
    width += 0.5;
  } else {
    width = 0; // Reset the width when it reaches the maximum
  }

  progressBar.style.setProperty('--width', width);

  // Request the next animation frame
  requestAnimationFrame(animateProgressBar);
}

// Start the animation
animateProgressBar();
