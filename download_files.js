function download_regulamin() {
var download = (path, filename) => {
    // Create a new link
    var anchor = document.createElement('a');
    anchor.href = path;
    anchor.download = filename;

    // Append to the DOM
    document.body.appendChild(anchor);

    // Trigger `click` event
    anchor.click();

    // Remove element from DOM
    document.body.removeChild(anchor);
}; 

// Example download
download('', 'regulamin.txt');
}

function download_rodo() {
    var download = (path, filename) => {
        // Create a new link
        var anchor = document.createElement('a');
        anchor.href = path;
        anchor.download = filename;
    
        // Append to the DOM
        document.body.appendChild(anchor);
    
        // Trigger `click` event
        anchor.click();
    
        // Remove element from DOM
        document.body.removeChild(anchor);
    }; 
    
    // Example download
    download('', 'rodo.txt');
    }

    function download_dokumenty() {
        var download = (path, filename) => {
            // Create a new link
            var anchor = document.createElement('a');
            anchor.href = path;
            anchor.download = filename;
        
            // Append to the DOM
            document.body.appendChild(anchor);
        
            // Trigger `click` event
            anchor.click();
        
            // Remove element from DOM
            document.body.removeChild(anchor);
        }; 
        
        // Example download
        download('', 'dokumenty.txt');
        }
    
    