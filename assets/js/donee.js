async function getData(){
  var langSwitcher = document.getElementById("langSwitcher");
  var selectedLanguage = langSwitcher.value;
  var parcoursaca = document.getElementById("parcoursaca");
  const response = await fetch('assets/donnees.xml');
  const data = await response.text();
  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(data, "application/xml");
  
  var courses = xmlDoc.getElementsByTagName('course');
  console.log("course"+courses);
  if (selectedLanguage === "ar" ){
    var htmlContent = `<div class="mu-service-header">
    <h2 class="mu-heading-title">الرحلة الأكاديمية</h2>
    <span class="mu-header-dot"></span>
   </div>
   <div class="mu-service-content">
    <div class="row">`;
  }
  else{
    var htmlContent = `<div class="mu-service-header">
    <h2 class="mu-heading-title">${selectedLanguage === "en" ? "ACADEMIC JOURNEY" : "PARCOURS ACADÉMIQUES"}</h2>
    <span class="mu-header-dot"></span>
   </div>
   <div class="mu-service-content">
    <div class="row">`;

  }
           
  for (var i = 0; i < courses.length; i++) {
      var name = courses[i].querySelector('name[lang="' + selectedLanguage + '"]').textContent;
      var status = courses[i].querySelector('status[lang="' + selectedLanguage + '"]').textContent;
      htmlContent += `<div class="col-md-4 col-sm-6">
      <div class="mu-service-content-single">
          <span class="mu-service-icon-box">
             <i class="fa fa-graduation-cap"></i>
          </span>
            <h4>${name}</h4>
                <p>${status}</p>
      </div>
      </div>`;
                              }
    htmlContent += '</div></div>';
    console.log("html1"+htmlContent);
    parcoursaca.innerHTML = htmlContent;
}



document.addEventListener('DOMContentLoaded', function() {
  getData();
});
document.getElementById("langSwitcher").addEventListener("change", function() {
  getData();
});
