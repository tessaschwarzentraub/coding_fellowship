var forms = document.querySelectorAll('.validate');                         //add no value when JS loads
for (var i = 0; i < forms.length; i++) {
    forms[i].setAttribute('novalidate', true);
}