export function setupButton(baseUrl) {
  document.getElementById('button-fetch').addEventListener('click', function() {
    fetch(`${baseUrl}api/ping`).then(async (res) => {
      const message = document.getElementById('message')
      message.innerHTML = await res.text()
    })
  })
}

