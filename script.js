const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const awesome = document.querySelector('#awesome')

toggles.forEach(toggle => toggle.addEventListener('change', (e) =>
doTheTrick(e.target)))

function doTheTrick(theClickedOne) {
    if(good.checked && cheap.checked && awesome.checked) {
        if(good === theClickedOne) {
            cheap.checked = false
        }

        if(cheap === theClickedOne) {
            good.checked = false
            awesome.checked = false
        }

        if(awesome === theClickedOne)  {
            cheap.checked = false
        }
    }
}