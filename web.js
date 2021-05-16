function read() {
    var dot = document.getElementById("dot");
    var read = document.getElementById("read");
    var readButton = document.getElementById("readMoreJS");
  
    if (read.style.display === "none") {

        dot.style.display = "none";
        readButton.innerHTML = "Read less";
        read.style.display = "inline";

    } else {
        
        dot.style.display = "inline";
        readButton.innerHTML = "Read more";
        read.style.display = "none";
      
    
  }
}