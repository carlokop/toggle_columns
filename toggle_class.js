//Ths class requires an array of div elements with a set className
//We will use the index number in the array to set them to active

class activeClassToggle { 
    constructor(id,classes,classname) {
      this.classes = document.getElementById(id).getElementsByClassName(classes);
      this.classname = classname;
    }
    
    //returns the possition in the array of the current active element
    activeCol() { 
      for (let i=0; i < this.classes.length; i++) {
          if (this.classes[i].classList.contains(this.classname)) {
              return i;
          } 
      }
    }
      
    //we will remove the old active and set the new
    setActive(activeOld,activeNew) {
        for (let i=0; i < this.classes.length; i++) {
            if (activeOld == i) {
                this.classes[i].classList.remove(this.classname);
            }
            if (activeNew == i) {
                this.classes[i].classList.add(this.classname);
            } 
        }
    }  
}
