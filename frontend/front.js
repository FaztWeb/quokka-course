({
  plugins: ["jsdom-quokka-plugin"],
  jsdom: {
    "file": "./index.html"
  }
})

const list = document.querySelector('#list')

// typeof list //?

// list.innerHTML //?

// document.querySelector('li') //?

// typeof document.querySelectorAll('li') //?
const items = [...document.querySelectorAll('li')].map(li => li.textContent) //?

items
