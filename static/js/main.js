document.querySelectorAll("button[data-endpoint]").forEach(btn => {
  btn.addEventListener("click", async () => {
    const ep = btn.getAttribute("data-endpoint");
    let payload = {};
    if (ep.includes("skill")) payload.text = document.getElementById("skill-input").value;
    if (ep.includes("portfolio")) payload.clips = document.getElementById("portfolio-input").value;
    if (ep.includes("decoder")) payload.jd = document.getElementById("decoder-input").value;

    btn.disabled = true;
    btn.textContent = "Working…";

    const res = await fetch(ep, {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    document.querySelector(`#${ep.split("/")[2]}-output`).textContent = data.result;

    btn.disabled = false;
    btn.textContent = btn.getAttribute("data-endpoint").includes("portfolio") ? "Build Portfolio" : "Translate";
  });
});
