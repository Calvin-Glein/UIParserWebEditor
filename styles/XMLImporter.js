function loadXMLDoc(xmlString) {
    /*    var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                myFunction(this);
                    console.log("loadxmldoc");

            }
        };

        xmlhttp.open("GET", xmlString, true);
            xmlhttp.setRequestHeader('Content-Type', 'text/plain; charset="utf-8"');
        xmlhttp.send();*/
    myFunction(xmlString);

}

function myFunction(xml) {
    var i;
    var xmlDoc = $.parseXML(xml);;
    /*
      var table="<tr><th>Artist</th><th>Title</th></tr>";
    */
    var x = xmlDoc.getElementsByTagName("Element");
    for (i = 0; i < x.length; i++) {
        /* table += "<tr><td>" +
         x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
         "</td><td>" +
         x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
         "</td></tr>";*/


        //if textsField is empty
        try {
            var text = x[i].getElementsByTagName("Text")[0].childNodes[0].nodeValue;
        } catch (err) {
            var text = "";
        }

        var type = x[i].getElementsByTagName("Type")[0].childNodes[0].nodeValue;

        var width = x[i].getElementsByTagName("Width")[0].childNodes[0].nodeValue;

        var height = x[i].getElementsByTagName("Height")[0].childNodes[0].nodeValue;

        var fontSize = x[i].getElementsByTagName("FontSize")[0].childNodes[0].nodeValue;

        // var layer = document.getElementById('add_layer_content').value;
        var layer = x[i].getElementsByTagName("Layer")[0].childNodes[0].nodeValue;

        var yCoordinate = x[i].getElementsByTagName("YCoordinate")[0].childNodes[0].nodeValue;

        var xCoordinate = x[i].getElementsByTagName("XCoordinate")[0].childNodes[0].nodeValue;

        addElementToListFromImport(indexCounter, type, text, fontSize, width, height, layer, yCoordinate, xCoordinate);

        indexCounter = indexCounter + 1;

        console.log(i);
    }
}
