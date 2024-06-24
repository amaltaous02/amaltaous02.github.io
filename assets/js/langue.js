function displayContent() {
    // Sélectionner l'élément <select> par son ID
    var langSwitcher = document.getElementById("langSwitcher");

    // Récupérer la valeur sélectionnée
    var selectedLanguage = langSwitcher.value;

    // Sélectionner l'élément où le contenu sera affiché
    var apprenti = document.getElementById("apprenti");
    var apropos = document.getElementById("apropos");
    var Skills = document.getElementById("Skills");
   
    var contactezmoi = document.getElementById("contactezmoi");
    var video = document.getElementById("video");
    var tes = document.getElementById("tes");

    // Changer le contenu en fonction de la langue sélectionnée
    if (selectedLanguage === "en") {
        apprenti.innerHTML = '<h1>Amal Taous</h1><div class="mu-featured-slider-wrapper" ><div class="mu-featured-slider" id="typed-strings"><p>Apprentice <span>software engineer</span></p></div><span id="typed"></span></div></div>';
        apropos.innerHTML = '<h2 class="mu-heading-title">About me</h2><span class="mu-header-dot"></span><p>My name is Amal Taous, I am a second year computer science student at the engineering school <strong>Sup Galilée</strong>. I am also an apprentice automation engineer within <strong>Kering</strong>.</p>';
        Skills.innerHTML = 'Skills';
        contactezmoi.innerHTML = '<div class="mu-contact-header"><h2 class="mu-heading-title">CONTACT ME</h2><span class="mu-header-dot"></span><p>For more information about me, feel free to contact me using the details below:</p></div><!-- Start Contact Content --><div class="mu-contact-content"><div class="row"><div class="col-md-12"><div class="mu-contact-top"><div class="row"><div class="col-sm-4"><div class="mu-contact-top-single"><div class="mu-icon"><i class="fa fa-map-marker"></i></div><p>Le Bourget, France</p></div></div><div class="col-sm-4"><div class="mu-contact-top-single"><div class="mu-icon"><i class="fa fa-phone"></i></div><p>07 64 76 67 92</p></div></div><div class="col-sm-4"><div class="mu-contact-top-single"><div class="mu-icon"><i class="fa fa-envelope"></i></div><p>amal.taous@kering.com</p><p>amal.taous@edu.univ-paris13.fr</p></div></div></div></div></div></div></div>';
        const videoSrc = `https://www.youtube.com/embed/CHo6goJn658?cc_load_policy=1&cc_lang_pref=en`;
        document.getElementById('youtube-video').src=videoSrc;
        video.innerHTML = 'Presentational video';
        tes.innerHTML = 'Portfolio';
    } else if (selectedLanguage === "fr") {
        apprenti.innerHTML = '<h1>Amal Taous</h1><div class="mu-featured-slider-wrapper" ><div class="mu-featured-slider" id="typed-strings"><p>Apprenti <span>Ingénieur informatique</span></p></div><span id="typed"></span></div></div>';
        apropos.innerHTML = '<h2 class="mu-heading-title">À PROPOS DE MOI</h2><span class="mu-header-dot"></span><p>Je m\'appelle Yanis Houri, je suis étudiant en deuxième année d\'informatique à l\'école d\'ingénieurs <strong>Sup Galilée</strong>. Je suis également apprenti ingénieur automaticien au sein de <strong>Kering</strong>.</p>';
        Skills.innerHTML = 'Compétences';
        contactezmoi.innerHTML = '<div class="mu-contact-header"><h2 class="mu-heading-title">CONTACTEZ MOI</h2><span class="mu-header-dot"></span><p>Pour plus d\'informations me concernant, n\'hesitez par à mon contacter en utilisant les coordonnées ci-dessous:</p></div><!-- Start Contact Content --><div class="mu-contact-content"><div class="row"><div class="col-md-12"><div class="mu-contact-top"><div class="row"><div class="col-sm-4"><div class="mu-contact-top-single"><div class="mu-icon"><i class="fa fa-map-marker"></i></div><p>Le Bourget, France</p></div></div><div class="col-sm-4"><div class="mu-contact-top-single"><div class="mu-icon"><i class="fa fa-phone"></i></div><p>07 64 76 67 92</p></div></div><div class="col-sm-4"><div class="mu-contact-top-single"><div class="mu-icon"><i class="fa fa-envelope"></i></div><p>amal.taous@kering.com</p><p>amal.taous@edu.univ-paris13.fr</p></div></div></div></div></div></div></div>';
        const videoSrc = `https://www.youtube.com/embed/CHo6goJn658?cc_load_policy=1&cc_lang_pref=fr`;
        document.getElementById('youtube-video').src=videoSrc;
        video.innerHTML = 'Vidéo Presentative';
        tes.innerHTML = 'Portfolio';
    } else if (selectedLanguage === "ar") {
        apprenti.innerHTML = '<h1>امال طوس</h1><div class="mu-featured-slider-wrapper" ><div class="mu-featured-slider" id="typed-strings"><p>متدربة  <span> في هندسة تكنولوجيا المعلومات</span></p></div><span id="typed"></span></div></div>';
        apropos.innerHTML = '<h2 class="mu-heading-title">ماذا عني</h2><span class="mu-header-dot"></span><p> اسمي أمل طاووس، طالبة في السنة الثانية علوم حاسوب في كلية الهندسة<strong> سوب غاليليو </strong> أنا أيضًا مهندسة أتم التدريب في <strong>كيرينغ</strong></p>';
        Skills.innerHTML = 'قدرات';
            contactezmoi.innerHTML = '<div class="mu-contact-header"><h2 class="mu-heading-title">تواصل معي</h2><span class="mu-header-dot"></span><p>لمزيد من المعلومات حولي، لا تتردد في الاتصال بي باستخدام البيانات الاتصال أدناه:</p></div><!-- بدء محتوى الاتصال --><div class="mu-contact-content"><div class="row"><div class="col-md-12"><div class="mu-contact-top"><div class="row"><div class="col-sm-4"><div class="mu-contact-top-single"><div class="mu-icon"><i class="fa fa-map-marker"></i></div><p>لو بورجيه، فرنسا</p></div></div><div class="col-sm-4"><div class="mu-contact-top-single"><div class="mu-icon"><i class="fa fa-phone"></i></div><p>07 64 76 67 92</p></div></div><div class="col-sm-4"><div class="mu-contact-top-single"><div class="mu-icon"><i class="fa fa-envelope"></i></div><p>amal.taous@kering.com</p><p>amal.taous@edu.univ-paris13.fr</p></div></div></div></div></div></div></div>';
        const videoSrc = `https://www.youtube.com/embed/CHo6goJn658?cc_load_policy=1&cc_lang_pref=ar`;
        
        document.getElementById('youtube-video').src=videoSrc;
        video.innerHTML = 'فيديو تعريفي';
        tes.innerHTML = 'ملف تعريفي';
    }
}
document.getElementById("langSwitcher").addEventListener("change", displayContent);

// Appeler la fonction une première fois pour afficher le contenu par défaut
displayContent();
