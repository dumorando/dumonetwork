async function travel(destination) {
    const text = await fetch(destination).then(a=>a.text());
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');
    const content = doc.querySelector("#content").innerHTML;
    document.querySelector("#content").innerHTML = content;
    document.title = doc.querySelector("title").innerText;

    history.pushState({}, "", destination);
}