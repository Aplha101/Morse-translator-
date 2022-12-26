const p = document.getElementById("mt")
const txt = document.getElementById("txt")
const btn = document.getElementById("btn")

function Encode(str) {
  let morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
  let alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  let len = str.length
  let result = []
  let s = str.toLowerCase()
    .split(" ")
    .map((v) => alphabets.indexOf(v) + 1)
  for (let i = 0; i < len; i++) {
    if (s[i] > 0) {
      let val = s[i] - 1
      result.push(morse[val])
    }
  }
  return result.join("").toUpperCase()
}

function Decode(str) {
  let morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", "  "]
  let alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "]
  let len = str.length
  let result = []
  let s = str.toLowerCase()
    .split("")
    .map((v) => alphabets.indexOf(v) + 1)
  for (let i = 0; i < len; i++) {
    if (s[i] > 0) {
      let val = s[i] - 1
      result.push(morse[val])
    }
  }
  return result.join(" ").toUpperCase()
}

txt.addEventListener('input', function textareaValue(event) {
  p.textContent = Decode(event.target.value)

  function cpy() {
    navigator.clipboard.writeText(Decode(event.target.value))
  }

  btn.addEventListener("click", () => {
    cpy()
  })
})
btn.addEventListener("click" , () => {
  alert("Copied to clipboard!")
})