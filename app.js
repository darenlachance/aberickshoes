var bars = document.querySelector('.fa-bars')
var times = document.querySelector('.fa-times')
var searchicon = document.querySelector('.fa-search')
var ulmenu = document.getElementById('ulMenu')
var makeorder = document.getElementById('makeorder')
var CardPourCommander = document.getElementById('CardPourCommander')
var closesearchdiv = document.getElementById('closesearchdiv')
var divSearchproducts = document.getElementById('divSearchproducts')
var closeCardPourCommander = document.getElementById('closeCardPourCommander')
var BottomSearch = document.querySelector('.BottomSearch')
var BottomCategory = document.querySelector('.BottomCategory')
var connectAdmin = document.getElementById('connectAdmin')
/* message d'erreur dans LoginAdmin*/var note = document.getElementById('note')




bars.addEventListener('click', function(){
ulmenu.style.right = 0
})

times.addEventListener('click', function(){
    ulmenu.style.right = '100%'
})

try{
    closesearchdiv.addEventListener('click', function(){
        divSearchproducts.style.left = '-100%'
    })
} catch{}


searchicon.addEventListener('click', function(){
    divSearchproducts.style.left = '0%'
})


try{
    makeorder.addEventListener('click', function(){
        CardPourCommander.style.display = 'block'
        })
} catch{}


BottomSearch.addEventListener('click', ()=>{
    divSearchproducts.style.left = '0%'
})


BottomCategory.addEventListener('click', ()=> {
    ulmenu.style.right = 0
})


try{
    closeCardPourCommander.addEventListener('click', function(){
        CardPourCommander.style.display = 'none'
    })
}catch{}

try{
    connectAdmin.addEventListener('click', ()=>{
        var UsernameAdmin = document.getElementById('UsernameAdmin').value
        var PasswordAdmin = document.getElementById('PasswordAdmin').value
        if(UsernameAdmin.toLowerCase().trim() == "aberick" & PasswordAdmin == 2001){
            localStorage.setItem('UsernameAdmin', UsernameAdmin)
            localStorage.setItem('PasswordAdmin', PasswordAdmin)
            
            window.open('AdminPanel.html')
            
        }else{
           note.innerText = 'Username ou Password Incorrect!'
        }
        
    })
}catch{}





            














// MODULE FIREBASE IMPORT/EXPORT

//1- index.html
export const mouf = function(){
    const firebaseConfig = {
        apiKey: "AIzaSyAV7ZjzSc_HK-GH6SLh0geZWpl2XMGwgLg",
        authDomain: "jayz-shop.firebaseapp.com",
        projectId: "jayz-shop",
        storageBucket: "jayz-shop.appspot.com",
        messagingSenderId: "712744882837",
        appId: "1:712744882837:web:2fe783328a3cd1e281c19c"
      };

    return firebaseConfig
}



//2- ajouterproduit.html
export  function SavedatatoRealTimeDB(URL) {
    var x = Math.random()
     
    var imgname = document.getElementById('imgname').value
    var imgprice = document.getElementById('imgprice').value
    var categorie = document.getElementById('categorie').value
    var mode = document.getElementById('mode').value
    var promo = document.getElementById('promo').value
    var newimgprice = document.getElementById('newimgprice').value
    
     
    set(ref(realDB, 'ImageLinks/'+ Math.round(x * 10000000)), {
        MyImageName: imgname,
        ImageUrl: URL,
        MyImagePrice: imgprice + " XAF",
        MyImageCategory: categorie,
        MyImageMode: mode,
        CodeProduit: Math.round(x * 10000000),
        Promotion: promo,
        NewImagePrice: newimgprice + " XAF",
        TauxPrmotion: (Math.round((newimgprice/imgprice)*100)) - 100 + "%"
    });
 }




 /*  const firebaseConfig = {
          apiKey: "AIzaSyAV7ZjzSc_HK-GH6SLh0geZWpl2XMGwgLg",
          authDomain: "jayz-shop.firebaseapp.com",
          projectId: "jayz-shop",
          storageBucket: "jayz-shop.appspot.com",
          messagingSenderId: "712744882837",
          appId: "1:712744882837:web:2fe783328a3cd1e281c19c"
        };*/
  


        
        


        

       
    

    
        
        
        

        
