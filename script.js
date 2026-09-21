var personnes = [
  {nom: {prenom: 'Grace', deuxiemePrenom: 'B.', nomFamille: 'Hopper'}, age: 85},
  {nom: {prenom: 'Adele', nomFamille: 'Goldstine'}, age: 43},
  {nom: {prenom: 'Ada', nomFamille: 'Lovelace'}, age: 36},
  {nom: {prenom: 'Hedy', deuxiemePrenom: 'E.', nomFamille: 'Lamarr'}, age: 85},
  {nom: {prenom: 'Ruchi', nomFamille: 'Sanghvi'}, age: 34}
];
//ex1
function sommeAges(personnes) {
  return personnes.reduce(function (somme, personne) {
    return somme + personne.age;
  }, 0);
}
console.log('1 - sommeAges:', sommeAges(personnes)); 
//ex2
function ageMoyen(personnes) {
  var somme = personnes.reduce(function (total, personne) {
    return total + personne.age;
  }, 0);
  return somme / personnes.length;
}
console.log('2 - ageMoyen:', ageMoyen(personnes));
//ex3
function intervalle(debut, fin) {
  var resultat = [];
 
  for (var i = debut; i < fin; i++) {
    resultat.push(i);
  }
 
  return resultat;
}
 
function factorielle(n) {
  return intervalle(1, n + 1).reduce(function (produit, nombre) {
    return produit * nombre;
  }, 1);
}
console.log('3 - factorielle(5):', factorielle(5)); 
console.log('3 - factorielle(3):', factorielle(3)); 
//ex4
function compterOccurrences(chaine, caractere) {
  return chaine.split('').reduce(function (compteur, lettre) {
    if (lettre === caractere) {
      return compteur + 1;
    }
    return compteur; // sinon on ne change rien
  }, 0);
}
console.log('4 - bonjour, o:', compterOccurrences('bonjour', 'o')); // 2
console.log('4 - bonjour, z:', compterOccurrences('bonjour', 'z')); // 0
console.log('4 - bonjour tout le monde, o:', compterOccurrences('bonjour tout le monde', 'o'));
//ex5
function personneLaPlusAgee(personnes) {
  return personnes.reduce(function (plusAgee, personne) {
    if (personne.age > plusAgee.age) {
      return personne;
    }
    return plusAgee;
  });
}
console.log('5 - personneLaPlusAgee:', personneLaPlusAgee(personnes));
//ex6
function compterParAge(personnes) {
  return personnes.reduce(function (compteurs, personne) {
    if (compteurs[personne.age] === undefined) {
      compteurs[personne.age] = 0;
    }
    compteurs[personne.age] = compteurs[personne.age] + 1;
    return compteurs;
  }, {});
}
console.log('6 - compterParAge:', compterParAge(personnes));
//ex7
function obtenirPrenoms(personnes) {
  return personnes.reduce(function (liste, personne) {
    liste.push(personne.nom.prenom);
    return liste;
  }, []);
}
console.log('7 - obtenirPrenoms:', obtenirPrenoms(personnes));
//ex8
function tousPlusDe30Ans(personnes) {
  return personnes.reduce(function (resultat, personne) {
    return resultat && personne.age > 30;
  }, true);
}
console.log('8 - tousPlusDe30Ans:', tousPlusDe30Ans(personnes)); 
//ex9
function totalLettresPrenoms(personnes) {
  return personnes.reduce(function (total, personne) {
    return total + personne.nom.prenom.length;
  }, 0);
}
console.log('9 - totalLettresPrenoms:', totalLettresPrenoms(personnes));
//ex10
function construireNomsComplets(personnes) {
  return personnes.reduce(function (texte, personne) {
    var nomComplet = personne.nom.prenom + ' ' + personne.nom.nomFamille;
    if (texte === '') {
      return nomComplet;
    }
    return texte + ', ' + nomComplet;
  }, '');
}
console.log('10 - construireNomsComplets:', construireNomsComplets(personnes));