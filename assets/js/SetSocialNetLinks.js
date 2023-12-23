fetch('SocialNetLinks.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#SetSocialNetLinks");
    let newelem = document.createElement("ul");
    newelem.innerHTML = text;
    newelem.setAttribute("class","icons");
    oldelem.parentNode.replaceChild(newelem,oldelem);
})