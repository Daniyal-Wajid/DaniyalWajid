// cursor.js

export function initializeCursor() {
  const cursor = document.getElementById("cursor");
  if (!cursor) return () => {};

  const isTouchDevice = window.matchMedia("(hover: none), (pointer: coarse)").matches;
  if (isTouchDevice) return () => {};

  const speed = 0.1;

  function updateCursorPosition(e) {
    const { clientX: mouseX, clientY: mouseY } = e;
    let cursorX = cursor.offsetLeft;
    let cursorY = cursor.offsetTop;

    cursorX += (mouseX - cursorX) * speed;
    cursorY += (mouseY - cursorY) * speed;

    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
  }

  function handleMouseOver(e) {
    if (e.target.closest("button") || e.target.closest("a")) {
      cursor.classList.add("hover");
    }
  }

  function handleMouseOut(e) {
    if (e.target.closest("button") || e.target.closest("a")) {
      cursor.classList.remove("hover");
    }
  }

  function animate() {
    updateCursorPosition({ clientX: window.mouseX, clientY: window.mouseY });
    requestAnimationFrame(animate);
  }

  const handleMouseMove = (e) => {
    window.mouseX = e.clientX;
    window.mouseY = e.clientY;
  };

  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseover", handleMouseOver);
  document.addEventListener("mouseout", handleMouseOut);

  requestAnimationFrame(animate);

  return () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseover", handleMouseOver);
    document.removeEventListener("mouseout", handleMouseOut);
  };
}
