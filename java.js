
//setter//

//with function//

// class Button{
//     constructor(name){
//         this.button=document.createElement("button")
//         this.button.innerHTML=name;
//         document.body.appendChild(this.button)
        
//     }
//     setWidth(width){
//         this.button.style.width=width+"px"
//     }
//     setHeight(height){
//         this.button.style.height=height+"px"
//     }
// }
// btn1=new Button("clickme")
// btn1.setHeight(100)
// btn1.setWidth(900)


//without function// setter and getter//
class Button{
    constructor(name){
        this.button=document.createElement("button")
        this.button.innerHTML=name;
        document.body.appendChild(this.button)
        
    }
    set width(width){
        this.button.style.width=width+"px"
        // this.button.style.margin=margin+"px"
    }
    set height(height){
        this.button.style.height=height+"px"
    }
    get width(){
        return parseInt(this.button.style.width)
    }

    get height(){
        return parseInt(this.button.style.height)
    }
}
btn1=new Button("click here")
btn1.height=100
btn1.width=500


console.log(btn1.width,btn1.height);
