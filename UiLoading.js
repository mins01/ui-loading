class UiLoading{
    constructor(handlerElement=null){
        this.counter = 0;
        this.handlerElement = handlerElement??document.body;
    }
    show(){
        this.counter++;
        this.action();
    }
    hide(){
        this.counter = Math.max(0,this.counter-1);
        this.action();
    }
    off(){
        this.counter = 0;
        this.action();
    }
    action(){
        if(this.counter > 0 && !this.handlerElement.dataset.uiLoading){ this.handlerElement.dataset.uiLoading = 'on' }
        if(this.counter ===0 ){ delete this.handlerElement.dataset.uiLoading }
    }
}