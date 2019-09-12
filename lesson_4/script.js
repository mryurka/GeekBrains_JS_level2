const button = document.querySelector("button");
button.addEventListener("click", (event)=>{
    const element = event.target.previousElementSibling;
    const text = element.innerText;
    const myRegExpOne = new RegExp("(')", 'g',);
    const myRegExpTwo = new RegExp('(")\\w\\s', 'g',);
    const newText = text.replace(myRegExpOne, '"');
    const finalText = newText.replace(myRegExpTwo, "'");
    element.insertAdjacentHTML("beforeend", `<p><h2> Текст после замены </h2>${finalText}</p>`);
    // console.log(newText.match(myRegExpTwo));
    // console.log(newText);
    // console.log(finalText);
});