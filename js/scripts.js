      
  // Get ID
  var ul=document.getElementById('ul');
  var btn=document.getElementById('button');
  var previ=document.getElementById('previous');
  var scoreCard=document.getElementById('scoreCard');
  var quizBox=document.getElementById('questionBox');
  var op1=document.getElementById('op1');
  var op2=document.getElementById('op2');
  var info=document.getElementById('info');
  var rst=document.getElementById('restart');
  var pinfo=document.getElementById('+in');

//Instance
      var app={
                questions:[
                  {q:'Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?',options:['Non', 'Oui'], answer:1, selected: -1, value:1},
                  {q:'Avez-vous des frissons ou des sueurs inhabituelles ?',options:['Non', 'Oui'], answer:1, selected: -1, value:1},
                  {q:'Avez-vous de la diarrhée ?',options:['Non', 'Oui'], answer:1, selected: -1, value:1},
                  {q:'Ces derniers jours, avez-vous noté une forte diminution ou perte de votre goût ou de votre odorat ?',options:['Non', 'Oui'], answer:1, selected: -1, value:1},
                  {q:'Avez-vous des maux de gorge ?',options:['Non', 'Oui'], answer:1, selected: -1, value:1},
                  {q:'Avez-vous de la mialgie ou des douleurs musculaires ?',options:['Non', 'Oui'], answer:1, selected: -1, value:1},
                  {q:'Avez-vous des maux de tête ?',options:['Non', 'Oui'], answer:1, selected: -1, value:1},
                  {q:'Avez-vous de la fièvre (supérieure ou égale à 37.8°C) ?',options:['Non', 'Oui'], answer:1, selected: -1, value:1},
                  {q:'Avez-vous des difficultés à respirer ?',options:['Non', 'Oui'], answ:1, selected: -1, value:2},
                  {q:'Avez-vous des coups de fatigue inhabituelle ?',options:['Non', 'Oui'], answ:1, selected: -1, value:2},
                  {q:'Êtes vous dans l\'impossibilité de vous alimenter ou de boire DEPUIS 24 HEURES OU PLUS ?',options:['Non', 'Oui'], answe:1, selected: -1, value:3},
                  {q:'Avez-vous récemment voyagé pendant les 14 derniers jours ?',options:['Non', 'Oui'], answe:1, selected: -1, value:3},
                  {q:'Avez-vous des antécédents dans des zones infectées par le COVID-19 ?',options:['Non', 'Oui'], answe:1, selected: -1, value:3},
                  {q:'Avez-vous eu un contact direct ou avez vous pris soin de quelqu\'un atteint du COVID-19 ?',options:['Non', 'Oui'], answe:1, selected: -1, value:3}
                  ],
                index:0,
                
                load:function() {
                	   if (this.index<=this.questions.length-1) {
                            quizBox.innerHTML=this.index+1+". "+this.questions[this.index].q;      
                            op1.innerHTML=this.questions[this.index].options[0];
                            op2.innerHTML=this.questions[this.index].options[1];
                            if (this.questions[this.index].selected == 0) {
                                op1.className="choisi";
                                op2.className="";
                            } else if (this.questions[this.index].selected == 1) {
                                op1.className="";
                                op2.className="choisi";
                            } else {
                                op1.className="";
                                op2.className="";
                            }
                            if (this.index == 0) {
                              previ.style.opacity=0;
                            } else {
                              previ.style.opacity=1;
                              previ.style.display="block";
                            }
                      } else {
                              score = 0;

                              for (let i = 0; i < this.questions.length; i++) {
                                if (this.questions[i].selected == 1)
                                  score += this.questions[i].value;
                              }
                              if (score <= 2) {
                                quizBox.innerHTML="Résultat : Vous êtes peut-être juste un peu stressé."
                              } else if (score <= 5 && score >= 3) {  
                                quizBox.innerHTML="Résultat : Votre cas ne semble pas alarmant. Hydratez vous et reposez vous bien et améliorer votre hygiène personelle. Puis repassez le test dans 2 jours."
                              }  else if (score <= 13 && score >= 6) {
                                quizBox.innerHTML="Résultat : Prenez une consultation chez votre médecin et/ou prenez des mesures d'auto-quarantaine."
                              }  else if (score <=  24 && score >= 14) {
                                quizBox.innerHTML="Résultat : Mettez vous en auto-quarantaine et appelez dès maintenant l'un des numéros d'urgence : 95 36 11 07 - 51 02 00 00 - 51 04 00 00."
                              } else if (this.score < 0) {
                                this.score = (this.score + this.score);
                              }
                              op1.style.display="none";
                              op2.style.display="none";
                              btn.style.display="none";
                              previ.style.display="none";
                              rst.style.display="block";
                              pinfo.style.display="block";
                    }
                }, 
                next:function() {
                      if (this.questions[this.index].selected != -1) {
                              this.index++;
                              this.load();
                        }  
                },
                prev:function() {
                      if (this.index > 0) {
                        this.index--;
                        this.load();
                      }
                }
          }
          window.onload=app.load();
          function button(ele){
                  if (op1.id == ele.id) {
                    op1.className="choisi";
                    op2.className="";
                    app.questions[app.index].selected = 0;
                  }
                  if (op2.id == ele.id) {
                    op1.className="";
                    op2.className="choisi";
                    app.questions[app.index].selected = 1;
                  }
          }
          function next() {
                app.next();
          }
          function prev() {
            app.prev();
          }
          function restart() {
            window.location.reload();
          } 