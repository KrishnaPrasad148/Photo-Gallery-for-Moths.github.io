/*Name this external file gallery.js*/

function update(previewPic){
    let displayDiv = document.getElementById("image");
 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
    displayDiv.style.backgroundImage = `url('${previewPic.src}')`;
    displayDiv.innerHTML = previewPic.alt;
}

function undo(){
    let displayDiv = document.getElementById("image");

     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
	displayDiv.style.backgroundImage = "";
    displayDiv.innerHTML = "<p>Hover over an image below to display here.</p>";
}