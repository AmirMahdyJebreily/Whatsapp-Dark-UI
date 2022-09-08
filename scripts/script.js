function GenerateMessage(id, messageText, messageTime, isSenderMe) {
    var primeMessage = '<div class="flex-1 flex justify-start" id="' + id + '"> <svg viewBox="0 0 8 13" width="8" height="13" class=""><path opacity=".13" class="text-MessagePrime" fill="#005C4B" d="M1.533 3.568 8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path><path fill="#005C4B" d="M1.533 2.568 8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"></path></svg> <div class="flex items-end max-w-md bg-MessagePrime rounded-lg rounded-tl-none shadow-md shadow-black/20 px-4 py-2 gap-2"> <span class="text-neutral-400 text-xs align-bottom font-vazir-thin">' + messageTime + '</span> <span class="text-white text-sm align-middle font-vazir-thin">' + messageText + '</span> </div> </div>';
    var secondMessage = '<div class="flex-1 flex flex-row-reverse" id="' + id + '"> <svg viewBox="0 0 8 13" width="8" height="13" class="text-MessageSecond"><path opacity=".13" d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"></path><path fill="currentColor" d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"></path></svg> <div class="flex items-end max-w-md bg-MessageSecond rounded-lg rounded-tr-none shadow-md shadow-black/20 px-4 py-2 gap-2"> <span class="text-neutral-400 text-xs align-bottom font-vazir-thin">' + messageTime + '</span> <span class="text-white text-sm align-middle font-vazir-thin">' + messageText + '</span> </div> </div>';

    return (isSenderMe) ? primeMessage : secondMessage;
}

function AddMessage(id, messageText, messageTime, isSenderMe) {
    document.getElementById("chatSheet").innerHTML += GenerateMessage(id, messageText, messageTime, isSenderMe)
}


let data;

for (let i = 0; i < messages; i++) {
    let message = messages[i];
    AddMessage(message[0], message[1], message[2], message[3]);
}

document.getElementById("title").innerHTML = title;