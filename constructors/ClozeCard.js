
function ClozeCard(text, clozeDeletion) {



  if (!(this instanceof ClozeCard)) {
    return new ClozeCard(text, clozeDeletion);
  }

  var clozeBegEnd = deleteSection(text, clozeDeletion);
  
  this.question = makeQuestion(text, clozeBegEnd);

 
  this.cloze = text.slice(clozeBegEnd[0], clozeBegEnd[1]);

  function makeQuestion(text, clozeBegEnd) {

   
    var start = text.slice(0, clozeBegEnd[0]);
    
    var end = text.slice(clozeBegEnd[1], text.length);

    
    return start + "..." + end;
  }

  function deleteSection(text, clozeDeletion) {
    var start = text.indexOf(clozeDeletion);

    if (start === -1) {
      console.log("Cloze deletion was not found");
    }
    [start, start + clozeDeletion.length];
  }
}

ClozeCard.prototype.displayCard = function displayCard() {
  return this.partial.replace(/\.\.\./, "'" + this.cloze + "'");
};

module.exports = ClozeCard;
