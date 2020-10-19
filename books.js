const express= require('express');
const router= express.Router();
const path = require('path');
const bodyParser = require('body-parser');


function livre(auteur,titre,categorie){
  this.auteur=auteur;
  this.titre=titre;
  this.categorie=categorie;
}


let tab =[];
tab.push(new livre("Guillaume Debre","L'affaire Lafayette","roman historique"));
tab.push(new livre("Gérald Messadié","La conspiration Jeanne d'Arc","roman historique"));
tab.push(new livre("J.R.R. Tolkien","Le Seigneur des anneaux","fantasy"));
tab.push(new livre("Michael Ende","L'Histoire sans fin","fantasy"));
tab.push(new livre("Andrzej Sapkowski","Le Sorceleur","fantasy"));
tab.push(new livre("George R. R. Martin","Le Trône de fer","fantasy"));
tab.push(new livre("Hervé Bazin","Vipère au poing","autobiographie"));
tab.push(new livre("Marie Cardinal","Les mots pour le dire","autobiographie"));
tab.push(new livre("Giacomo Casanova","Histoire de ma vie","autobiographie"));


//console.log(tab);




router.post('/list',(req,resp)=>{

 // console.log(req.body.categorie);

  let tab2 =[];

  for (const livre of tab) {

  console.log(livre);
  if (livre.categorie===req.body.categorie) {
   tab2.push(livre);
  }
}
console.log(tab2);

  resp.render('list',{tab2,categorie:req.body.categorie});
});

router.get('/search',(req,resp)=>{
resp.sendFile(path.join(__dirname + '/public/form.html'));
});
router.get('/',(req,resp)=>{
  resp.sendFile(path.join(__dirname + '/public/form.html'));
});

module.exports = router;
