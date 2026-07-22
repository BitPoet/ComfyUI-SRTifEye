import { app } from "../../scripts/app.js";

function openSRTifEye() {
  // Avoid opening multiple SRTifEye overlays.
  document.querySelector("[data-srtifeye-overlay]")?.remove();

  const overlay = document.createElement("div");
  overlay.dataset.srtifeyeOverlay = "true";
  overlay.tabIndex = -1;
  overlay.style.cssText = `
    position: fixed;
    inset: 0;
    z-index: 100001;
    display: flex;
    flex-direction: column;
    background: #090b0d;
  `;

  const toolbar = document.createElement("div");
  toolbar.style.cssText = `
    height: 44px;
    flex: 0 0 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 14px;
    color: white;
    background: #15181c;
    border-bottom: 1px solid #34383e;
  `;

  const title = document.createElement("strong");
  title.textContent = "SRTifEye";

  const closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.textContent = "Close";
  closeButton.onclick = () => overlay.remove();

  const iframe = document.createElement("iframe");
  iframe.src = "/srtifeye/index.html";
  iframe.title = "SRTifEye";
  iframe.allow = "autoplay";
  iframe.style.cssText = `
    flex: 1;
    width: 100%;
    min-height: 0;
    border: 0;
    background: #17191c;
  `;

  overlay.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      overlay.remove();
    }
  });

  toolbar.append(title, closeButton);
  overlay.append(toolbar, iframe);
  document.body.append(overlay);

  closeButton.focus();
}

function ensureButton(node) {
  const buttonName = "Open SRTifEye";

  node.widgets = (node.widgets || []).filter(
    (widget) =>
      !(widget?.type === "button" && widget?.name === buttonName)
  );

  const button = node.addWidget(
    "button",
    buttonName,
    null,
    openSRTifEye
  );

  if (button) {
    button.serialize = false;
  }

  node.setSize([300, 100]);
}

app.registerExtension({
  name: "SRTifEye.Launcher",

  async nodeCreated(node) {
    if (node.comfyClass !== "SRTifEye") return;
    ensureButton(node);
  },
});
