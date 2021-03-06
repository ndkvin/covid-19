class AppBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
       <style>
           * {
               margin: 0;
               padding: 0;
               box-sizing: border-box;
           }
           :host {
               display: block;
               background-color: #1c1b1b;
               color: white;
               box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
           }
           h2 {
               padding: 16px;
               border-radius: 10px;
           }
           @media screen and (max-width: 992px) {
               h2{
                   width:75%;
                   padding: 0;
               }
           }
           @media screen and (max-width: 600pxpx) {
            h2{
                width:75%;
                padding:10px;
                border-radius:10px;
            }
        }

       </style>
       <h2>Live Report Covid-19</h2>`;
    }
}

customElements.define("app-bar", AppBar);