var dataCompte = {};

$(document).ready(function() {

  $.get("http://localhost:8080/api/collaborateurs", function(data) {
    var tableau = [];
    data.forEach((collabo) => {
      dataCompte[collabo.id] = collabo.compte;
      tableau.push(
        `<tr class="${collabo.departement}" onclick="getCompte(${collabo.id})">` +
        '<td>' + collabo.matricule + '</td>' +
        '<td>' + collabo.nom + '</td>' +
        '<td>' + collabo.prenom + '</td>' +
        '</tr>')
    })
    $("#collabo_list").html(tableau.join());
  });
});

function getCompte(idCollabo) {
  compte = dataCompte[idCollabo];
  $("#nom_banque").val(compte.nomBanque);
  $("#bic").val(compte.bic);
  $("#iban").val(compte.iban);
}
