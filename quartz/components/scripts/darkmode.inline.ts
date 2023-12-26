const userPref = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
const currentTheme = localStorage.getItem("theme") ?? userPref
document.documentElement.setAttribute("saved-theme", currentTheme)

function setImageSource(theme: boolean) {
  // theme == true is dark
  var dark: NodeList = document.querySelectorAll('.dark-img');
    var light: NodeList = document.querySelectorAll('.light-img');
    for (var i = 0; i < dark.length; i++){
      var d = dark[i] as HTMLElement
      d.setAttribute("media", theme ? "all" : "none")
    }
    for (var i = 0; i < dark.length; i++){
      var l = light[i] as HTMLElement
      l.setAttribute("media", theme ? "none" : "all")
    }
}

document.addEventListener("nav", () => {
  const switchTheme = (e: any) => {
    if (e.target.checked) {
      document.documentElement.setAttribute("saved-theme", "dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.setAttribute("saved-theme", "light")
      localStorage.setItem("theme", "light")
    }

    setImageSource(e.target.checked);
  }

  // Darkmode toggle
  const toggleSwitch = document.querySelector("#darkmode-toggle") as HTMLInputElement
  toggleSwitch.removeEventListener("change", switchTheme)
  toggleSwitch.addEventListener("change", switchTheme)
  if (currentTheme === "dark") {
    toggleSwitch.checked = true
    setImageSource(true);
  } else {
    setImageSource(false);
  }

  // Listen for changes in prefers-color-scheme
  const colorSchemeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
  colorSchemeMediaQuery.addEventListener("change", (e) => {
    const newTheme = e.matches ? "dark" : "light"
    document.documentElement.setAttribute("saved-theme", newTheme)
    localStorage.setItem("theme", newTheme)
    toggleSwitch.checked = e.matches
  })
})
