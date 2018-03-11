window.onload = function() {
    var username = document.getElementsByTagName('ul')[2].firstChild.firstChild.outerHTML.split("\"")[1].split('/')[2];
    var userbox = document.getElementsByClassName('user-name')[0].innerHTML.split('>')[1];
    var logoHTML = document.getElementsByClassName('user-name')[0].innerHTML.split('>')[0] + '>';
    document.getElementsByClassName('user-name')[0].innerHTML = logoHTML + username + '<img class=\"dropdown-arrow\" src="https://scratch.mit.edu/images/dropdown.png" />';
}