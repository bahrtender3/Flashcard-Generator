function BasicCard(front, back) {


  // instanceof checks to see if this Object.prototype already exists
  if (!(this instanceof BasicCard)) {
    return new BasicCard(front, back);
  }

  this.front = front;
  this.back = back;
}

module.exports = BasicCard;
