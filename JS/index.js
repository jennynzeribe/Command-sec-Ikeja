var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");
//this is to create a click for experience
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");//this is to remove the active tablinks.
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");//this is to remove the active tabcontents.
    }

    event.currentTarget.classList.add("active-link"); //used to display the lines under the skills.
    document.getElementById(tabname).classList.add("active-tab");//used to display the contents of both the education and experience.
    
}