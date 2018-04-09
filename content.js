function fixDates() {
    // Makes comment date appear next to "x dates ago" in comments
    var dates = document.getElementsByClassName('time');
    for (var x = 0; x < dates.length; x++) {
        var fuzzy = dates[x].innerHTML;
        dates[x].innerHTML = dates[x].title + ' | ' + fuzzy;
        dates[x].title = '';
    }
}
function fixDiscuss() {
    var discuss = 'Discuss';
    var lang = document.getElementsByName('language')[0].value;
    
    switch (lang) {
        // English
        case 'en':
            discuss = 'Discuss';
            break;
        // Spanish
        case 'es':
            discuss = 'Discutir';
            break;
        // Norwegian
        case 'nb':
            discuss = 'Diskutere';
            break;
        case 'nn':
            discuss = 'Diskutere';
            break;
        // French
        case 'fr':
            discuss = 'Discuter';
            break;
        // Hungarian
        case 'hu':
            discuss = 'Beszéljétek';
            break;
        default:
            discuss = 'Discuss';
            break;
    }
    var button = document.getElementsByTagName('a')[3];
    document.getElementsByTagName('li')[2].id = 'di';
    button.href = '/discuss';
    
    button.innerHTML = '<div class="dropdown-2"> <span class=\"d\">' + discuss +'</span> <div class="dropdown-menu"> <a href="https://scratch.mit.edu/discuss/5/">Announcements</a>  <a href="https://scratch.mit.edu/discuss/7/">Help with Scripts</a>  <a href="https://scratch.mit.edu/discuss/10/">Collaboration</a>  <a href="https://scratch.mit.edu/discuss/11/">Requests</a> <a href="https://scratch.mit.edu/discuss/1/">Suggestions</a> <a href="https://scratch.mit.edu/discuss/3/">Report Glitches</a> </div></div>';
    
}
window.onload = function() {
    // Makes full username display above dropdown menu
    var username = document.getElementsByTagName('ul')[2].firstChild.firstChild.outerHTML.split("\"")[1].split('/')[2];
    var userbox = document.getElementsByClassName('user-name')[0].innerHTML.split('>')[1];
    var logoHTML = document.getElementsByClassName('user-name')[0].innerHTML.split('>')[0] + '>';
    document.getElementsByClassName('user-name')[0].innerHTML = logoHTML + username + '<img class=\"dropdown-arrow\" src="https://scratch.mit.edu/images/dropdown.png" />';
    
    fixDiscuss();
    fixDates();
    var buttons = document.getElementsByClassName('button');
    var x = 0;;
    while (buttons[x].dataset.control != 'load-more') {
        x++;
    }
    
    buttons[x].addEventListener(click, function () {setTimeout(() => {
        fixDates();
    }, 5000)});
}