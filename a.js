document.getElementById("sendBtn").addEventListener("click", function() {
  const userMessage = document.getElementById("userInput").value;
  if (userMessage) {
 
    const chatbox = document.getElementById("chatbox");
    chatbox.innerHTML += `<div class="text-left text-sm text-gray-700 bg-blue-100 p-2 mb-2 rounded-md">${userMessage}</div>`;
 
    document.getElementById("userInput").value = "";

    
    fetch('/get_response', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: userMessage })
    })
    .then(response => response.json())
    .then(data => {
      const botMessage = data.response;
      chatbox.innerHTML += `<div class="text-right text-sm text-gray-700 bg-gray-200 p-2 mb-2 rounded-md">${botMessage}</div>`;
      chatbox.scrollTop = chatbox.scrollHeight;
    })
    .catch(error => {
      console.error("Error:", error);
    });
  }
});
