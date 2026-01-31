import { useEffect } from "react";

export default function OnekoCat() {
  useEffect(() => {
    // ---- ORIGINAL ONEKO CODE START ----
    (async function oneko() {
      const nekoEl = document.createElement("div");

      let nekoPosX = 32,
        nekoPosY = 32,
        mousePosX = 0,
        mousePosY = 0,
        frameCount = 0,
        idleTime = 0,
        idleAnimation = null,
        idleAnimationFrame = 0,
        forceSleep = false,
        grabbing = false,
        grabStop = true,
        nudge = false,
        kuroNeko = false,
        variant = "vaporwave";

      function parseLocalStorage(key, fallback) {
        try {
          const value = JSON.parse(localStorage.getItem(`oneko:${key}`));
          return typeof value === typeof fallback ? value : fallback;
        } catch {
          return fallback;
        }
      }

      const nekoSpeed = 10;

      const spriteSets = {
        idle: [[-3, -3]],
        alert: [[-7, -3]],
        N: [
          [-1, -2],
          [-1, -3],
        ],
        NE: [
          [0, -2],
          [0, -3],
        ],
        E: [
          [-3, 0],
          [-3, -1],
        ],
        SE: [
          [-5, -1],
          [-5, -2],
        ],
        S: [
          [-6, -3],
          [-7, -2],
        ],
        SW: [
          [-5, -3],
          [-6, -1],
        ],
        W: [
          [-4, -2],
          [-4, -3],
        ],
        NW: [
          [-1, 0],
          [-1, -1],
        ],
      };

      function getSprite(name, frame) {
        return spriteSets[name][frame % spriteSets[name].length];
      }

      function setSprite(name, frame) {
        const sprite = getSprite(name, frame);
        nekoEl.style.backgroundPosition = `${sprite[0] * 32}px ${
          sprite[1] * 32
        }px`;
      }

      function resetIdleAnimation() {
        idleAnimation = null;
        idleAnimationFrame = 0;
      }

      function idle() {
        idleTime += 1;
        setSprite("idle", 0);
      }

      function frame() {
        frameCount++;

        if (grabbing) return;

        const diffX = nekoPosX - mousePosX;
        const diffY = nekoPosY - mousePosY;
        const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

        if (distance < nekoSpeed || distance < 48) {
          idle();
          return;
        }

        idleAnimation = null;
        idleAnimationFrame = 0;

        const direction =
          (diffY / distance > 0.5 ? "N" : "") +
          (diffY / distance < -0.5 ? "S" : "") +
          (diffX / distance > 0.5 ? "W" : "") +
          (diffX / distance < -0.5 ? "E" : "");

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
        variant = parseLocalStorage("variant", "vaporwave");

        nekoEl.id = "oneko";
        nekoEl.style.width = "32px";
        nekoEl.style.height = "32px";
        nekoEl.style.position = "fixed";
        nekoEl.style.backgroundImage = `url('/oneko/oneko-${variant}.gif')`;
        nekoEl.style.imageRendering = "pixelated";
        nekoEl.style.left = `${nekoPosX - 16}px`;
        nekoEl.style.top = `${nekoPosY - 16}px`;
        nekoEl.style.zIndex = "9999";

        document.body.appendChild(nekoEl);

        window.addEventListener("mousemove", (e) => {
          mousePosX = e.clientX;
          mousePosY = e.clientY;
        });

        window.onekoInterval = setInterval(frame, 100);
      }

      create();
    })();
    // ---- ORIGINAL ONEKO CODE END ----

    return () => {
      clearInterval(window.onekoInterval);
      document.getElementById("oneko")?.remove();
    };
  }, []);

  return null;
}
