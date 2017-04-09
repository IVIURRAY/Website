$(function() { //executes each function

RenderInterestsPanel();

});

//****************
//TopStats Panel
//****************

function RenderInterestsPanel(){
  return OutputXML("xml/interests.xml", "xslt/interests.xslt", "InterestsSection"); 
}

//********************
//Default XML Function
//********************

//Enables the XSLT and underlying XML to be compiled into a HTML element (e.g. div)
function OutputXML(xmlDoc, xslt, el) {
  xml = loadXMLDoc(xmlDoc);
  xslt = loadXMLDoc(xslt);
  
  // for IE browser
  if (window.ActiveXObject || xhttp.responseType == "msxml-document") {
    ex = xml.transformNode(xslt);
    document.getElementById(el).innerHTML = ex;
  }
  
  //for all other browsers
  else if (document.implementation && document.implementation.createDocument) {
    xsltProcessor = new XSLTProcessor();
    xsltProcessor.importStylesheet(xslt);
    resultDocument = xsltProcessor.transformToFragment(xml, document);
    document.getElementById(el).appendChild(resultDocument);
  }
}