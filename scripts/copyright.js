copyright = document.getElementsByClassName("copyright");


let date = new Date();

for(let ctr = 0; ctr < copyright.length; ctr++)
{
    copyright[ctr].textContent = "© " + date.getFullYear() + " Copyright: ";
}
