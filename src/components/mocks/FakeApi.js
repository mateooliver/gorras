
import img1 from "/Users/mateooliver/Desktop/React/gorras/src/components/img/img1.jpeg"
import img2 from "/Users/mateooliver/Desktop/React/gorras/src/components/img/img2.jpeg"
import img3 from "/Users/mateooliver/Desktop/React/gorras/src/components/img/img3.jpeg"


const Gorras =[{id:'1', stock:1, nombre:"Butch", precio:1000, img:img1, descripcion:"Gorra de bordado premium, Diseñadas en San Francisco. Colección Animal Farm. Composición: 57% poliester, 43% algodón. Ajustables.", talles:"M, L, XL, XXL"},
    {id:'2', stock:3, nombre:"Borrow", precio:1100, img:img2, descripcion:"Gorra de bordado premium,  Diseñadas en San Francisco. Colección Animal Farm. Composición: 57% poliester, 43% algodón. Ajustables.", talles:"S, L, XL"},
    {id:'3', stock:0, nombre:"Tyson", precio:1050, img:img3, descripcion:"Gorra de bordado premium, Diseñadas en San Francisco. Colección Animal Farm. Composición: 57% poliester, 43% algodón. Ajustables.", talles:"S, M"},]



// promesa que se ejecuta en consola 2 segundos mas tarde
export const Promesa =new Promise ((resolve, reject)=>{
let condicion=true;
    if(condicion){
        setTimeout(()=>{
            resolve (Gorras )}, 2000
    );
        }else{
        reject("Error del servidor");
    }
});