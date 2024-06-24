function loadXMLDoc(filename) {
  return new Promise((resolve, reject) => {
      const xhttp = new XMLHttpRequest();
      xhttp.open("GET", filename, true);
      xhttp.onreadystatechange = function () {
          if (xhttp.readyState === 4 && xhttp.status === 200) {
              resolve(xhttp.responseXML);
          } else if (xhttp.readyState === 4) {
              reject(new Error("Failed to load XML file"));
          }
      };
      xhttp.send();
  });
}

function loadXSLTDoc(filename) {
  return new Promise((resolve, reject) => {
      const xhttp = new XMLHttpRequest();
      xhttp.open("GET", filename, true);
      xhttp.onreadystatechange = function () {
          if (xhttp.readyState === 4 && xhttp.status === 200) {
              resolve(xhttp.responseXML);
          } else if (xhttp.readyState === 4) {
              reject(new Error("Failed to load XSLT file"));
          }
      };
      xhttp.send();
  });
}

async function transformXML() {
    try {
        const xml = await loadXMLDoc("assets/donnees.xml");
        const xsl = await loadXSLTDoc("assets/transform.xslt");
  
        const lang = document.getElementById("langSwitcher").value;
  
        if (window.ActiveXObject || "ActiveXObject" in window) {
            const ex = xml.transformNode(xsl);
            document.getElementById("parcoursaca").innerHTML = ex;
        } else if (document.implementation && document.implementation.createDocument) {
            const xsltProcessor = new XSLTProcessor();
            xsltProcessor.importStylesheet(xsl);
            
            // Set the language parameter
            xsltProcessor.setParameter(null, "lang", lang);
  
            const resultDocument = xsltProcessor.transformToFragment(xml, document);
            const parcoursaca = document.getElementById("parcoursaca");
            parcoursaca.innerHTML = "";
            parcoursaca.appendChild(resultDocument);
        }
  
        // Remove the temporary title
        const tempTitle = document.getElementById("temp-title");
        if (tempTitle) {
            tempTitle.remove();
        }
    } catch (error) {
        console.error("Error during XML transformation:", error);
    }
  }
  
  document.addEventListener('DOMContentLoaded', transformXML);
  document.getElementById("langSwitcher").addEventListener("change", transformXML);
  
