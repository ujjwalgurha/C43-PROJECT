class Security {

    constructor(){

        this.access1 = createInput("Code1")
        this.access1.position(100,90);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(100,120);
        this.button1.style('background', 'lightgrey');    

        this.access2 = createInput("Code1")
        this.access2.position(700,190);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Check');
        this.button2.position(700,220);
        this.button2.style('background', 'WHITE');

        this.access3 = createInput("Code1")
        this.access3.position(100,290);
        this.access3.style('background', 'WHITE');  

         this.button3 = createButton('Check');
         this.button3.position(100,320);
         this.button3.style('background', 'WHITE');
        
         this.access4 = createInput("Code1")
         this.access4.position(700,320);
         this.access4.style('background', 'WHITE');  
 
          this.button4 = createButton('Check');
          this.button4.position(700,350);
          this.button4.style('background', 'WHITE');
    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });

        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode3,this.access3.value())){
          
                 this.button3.hide();
                 this.access3.hide();
 
                
                score++;
            }
        });

        this.button4.mousePressed(() => {
            if(system.authenticate(accessCode4,this.access4.value())){
          
                 this.button4.hide();
                 this.access4.hide();
 
                
                score++;
            }
        });

    }
}