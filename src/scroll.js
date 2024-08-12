let scrollTimeout = null;

function scrollToSection(targetIndex) {
  const sections = document.querySelectorAll('.section');
  if (targetIndex < 0 || targetIndex >= sections.length) return;

  const targetSection = sections[targetIndex];
  window.scrollTo({
    top: targetSection.offsetTop,
    behavior: 'smooth',
  });
}

function handleScroll(event) {
  if (scrollTimeout) clearTimeout(scrollTimeout);
  
  scrollTimeout = setTimeout(() => {
    const sections = document.querySelectorAll('.section');
    const currentScroll = window.scrollY || window.pageYOffset;
    const sectionHeights = Array.from(sections).map(section => section.offsetTop);
    let targetIndex = sectionHeights.findIndex(height => currentScroll < height);

    if (targetIndex === -1) {
      targetIndex = sections.length - 1;
    } else if (targetIndex > 0) {
      targetIndex -= 1;
    }

    if (event.deltaY > 0) {
      targetIndex = Math.min(targetIndex + 1, sections.length - 1);
    } else {
      targetIndex = Math.max(targetIndex - 1, 0);
    }

    scrollToSection(targetIndex);
  }, 150);
}

window.addEventListener('wheel', handleScroll);
