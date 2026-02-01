import { useEffect } from "react";

export default function OnekoCat() {
  useEffect(() => {
    if (window.__onekoMounted) return;
    window.__onekoMounted = true;

    let interval;
    const listeners = [];

    const nekoEl = document.createElement("div");

    let nekoPosX = 32;
    let nekoPosY = 32;

    let mousePosX = 0;
    let mousePosY = 0;

    let frameCount = 0;
    let idleTime = 0;
    let idleAnimation = null;
    let idleAnimationFrame = 0;

    let forceSleep = false;
    let grabbing = false;
    let grabStop = true;
    let nudge = false;
    let kuroNeko = false;
    let variant = "classic";

    const nekoSpeed = 10;

    const variants = [
      ["classic", "Classic"],
      ["dog", "Dog"],
      ["tora", "Tora"],
      ["maia", "Maia"],
      ["vaporwave", "Vaporwave"],
    ];

    const spriteSets = {
      idle: [[-3, -3]],
      alert: [[-7, -3]],
      scratchSelf: [[-5, 0], [-6, 0], [-7, 0]],
      scratchWallN: [[0, 0], [0, -1]],
      scratchWallS: [[-7, -1], [-6, -2]],
      scratchWallE: [[-2, -2], [-2, -3]],
      scratchWallW: [[-4, 0], [-4, -1]],
      tired: [[-3, -2]],
      sleeping: [[-2, 0], [-2, -1]],
      N: [[-1, -2], [-1, -3]],
      NE: [[0, -2], [0, -3]],
      E: [[-3, 0], [-3, -1]],
      SE: [[-5, -1], [-5, -2]],
      S: [[-6, -3], [-7, -2]],
      SW: [[-5, -3], [-6, -1]],
      W: [[-4, -2], [-4, -3]],
      NW: [[-1, 0], [-1, -1]],
    };

    function ls(key, fallback) {
      try {
        const v = JSON.parse(localStorage.getItem(`oneko:${key}`));
        return typeof v === typeof fallback ? v : fallback;
      } catch {
        return fallback;
      }
    }

    function getSprite(name, frame) {
      return spriteSets[name][frame % spriteSets[name].length];
    }

    function setSprite(name, frame) {
      const [x, y] = getSprite(name, frame);
      nekoEl.style.backgroundPosition = `${x * 32}px ${y * 32}px`;
    }

    function resetIdleAnimation() {
      idleAnimation = null;
      idleAnimationFrame = 0;
    }

    function sleepToggle() {
      forceSleep = !forceSleep;
      nudge = false;
      localStorage.setItem("oneko:forceSleep", forceSleep);
      resetIdleAnimation();
    }

    function idle() {
      idleTime++;

      if (
         idleTime > 5 &&
  Math.random() < 0.15 &&
  idleAnimation == null
      ) {
        const pool = ["sleeping", "scratchSelf"];

        if (nekoPosX < 32) pool.push("scratchWallW");
        if (nekoPosY < 32) pool.push("scratchWallN");
        if (nekoPosX > window.innerWidth - 32)
          pool.push("scratchWallE");
        if (nekoPosY > window.innerHeight - 32)
          pool.push("scratchWallS");

        idleAnimation =
          pool[Math.floor(Math.random() * pool.length)];
      }

      if (forceSleep) idleAnimation = "sleeping";

      switch (idleAnimation) {
        case "sleeping":
          if (idleAnimationFrame < 8 && nudge && forceSleep) {
            setSprite("idle", 0);
            break;
          } else if (nudge) {
            nudge = false;
            resetIdleAnimation();
          }

          if (idleAnimationFrame < 8) {
            setSprite("tired", 0);
            break;
          }

          setSprite(
            "sleeping",
            Math.floor(idleAnimationFrame / 4)
          );

          if (idleAnimationFrame > 192 && !forceSleep)
            resetIdleAnimation();

          break;

        case "scratchWallN":
        case "scratchWallS":
        case "scratchWallE":
        case "scratchWallW":
        case "scratchSelf":
          setSprite(idleAnimation, idleAnimationFrame);
          if (idleAnimationFrame > 9)
            resetIdleAnimation();
          break;

        default:
          setSprite("idle", 0);
          return;
      }

      idleAnimationFrame++;
    }

    function frame() {
      frameCount++;

      if (grabbing) {
        grabStop && setSprite("alert", 0);
        return;
      }

      const diffX = nekoPosX - mousePosX;
      const diffY = nekoPosY - mousePosY;
      const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

      if ((distance < nekoSpeed || distance < 48) && !forceSleep) {
        idle();
        return;
      }

      resetIdleAnimation();

      if (idleTime > 1) {
        setSprite("alert", 0);
        idleTime = Math.min(idleTime, 7);
        idleTime--;
        return;
      }

      let direction = "";
      direction += diffY / distance > 0.5 ? "N" : "";
      direction += diffY / distance < -0.5 ? "S" : "";
      direction += diffX / distance > 0.5 ? "W" : "";
      direction += diffX / distance < -0.5 ? "E" : "";

      setSprite(direction, frameCount);

      nekoPosX -= (diffX / distance) * nekoSpeed;
      nekoPosY -= (diffY / distance) * nekoSpeed;

      nekoPosX = Math.min(
        Math.max(16, nekoPosX),
        window.innerWidth - 16
      );
      nekoPosY = Math.min(
        Math.max(16, nekoPosY),
        window.innerHeight - 16
      );

      nekoEl.style.left = `${nekoPosX - 16}px`;
      nekoEl.style.top = `${nekoPosY - 16}px`;
    }

    function create() {
      variant = ls("variant", "vaporwave");
      kuroNeko = ls("kuroneko", false);
      forceSleep = ls("forceSleep", false);

      nekoEl.id = "oneko";

      nekoEl.style.cssText = `
        width:32px;
        height:32px;
        position:fixed;
        image-rendering:pixelated;
        z-index:9999;
        left:${nekoPosX - 16}px;
        top:${nekoPosY - 16}px;
        background-image:url('/oneko/oneko-${variant}.gif');
        filter:${kuroNeko ? "invert(100%)" : "none"};
        cursor:pointer;
      `;

      document.body.appendChild(nekoEl);

      const mouseMove = (e) => {
        if (!forceSleep) {
          mousePosX = e.clientX;
          mousePosY = e.clientY;
        }
      };

      window.addEventListener("mousemove", mouseMove);
      listeners.push(["mousemove", mouseMove]);

      nekoEl.addEventListener("dblclick", sleepToggle);

      nekoEl.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        kuroNeko = !kuroNeko;
        localStorage.setItem("oneko:kuroneko", kuroNeko);
        nekoEl.style.filter = kuroNeko
          ? "invert(100%)"
          : "none";
      });

      nekoEl.addEventListener("mousedown", (e) => {
        if (e.button !== 0) return;

        grabbing = true;

        let sx = e.clientX;
        let sy = e.clientY;
        let ox = nekoPosX;
        let oy = nekoPosY;

        const mm = (ev) => {
          const dx = ev.clientX - sx;
          const dy = ev.clientY - sy;

          if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10)
            setSprite(
              dx > 0 ? "scratchWallW" : "scratchWallE",
              frameCount
            );
          else if (Math.abs(dy) > 10)
            setSprite(
              dy > 0 ? "scratchWallN" : "scratchWallS",
              frameCount
            );

          nekoPosX = ox + dx;
          nekoPosY = oy + dy;

          nekoEl.style.left = `${nekoPosX - 16}px`;
          nekoEl.style.top = `${nekoPosY - 16}px`;
        };

        const mu = () => {
          grabbing = false;
          nudge = true;
          resetIdleAnimation();
          window.removeEventListener("mousemove", mm);
          window.removeEventListener("mouseup", mu);
        };

        window.addEventListener("mousemove", mm);
        window.addEventListener("mouseup", mu);
      });

      interval = setInterval(frame, 100);
    }

    create();

    return () => {
      clearInterval(interval);
      nekoEl.remove();
      listeners.forEach(([e, fn]) =>
        window.removeEventListener(e, fn)
      );
      window.__onekoMounted = false;
    };
  }, []);

  return null;
}
