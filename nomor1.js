//1. Demy membeli makanan menggunakan aplikasi ArkFood. Dimana
// terdapat sebuah diskon sebesar 35% dengan maksimal potongan
// sebesar Rp 50.000, dengan minimum perbelanjaan Rp 60.000.

let harga = (jmlMakanan,harga)=>{
    let bayar= jmlMakanan*harga;
    let diskon=bayar*35/100;
        
        if (bayar>=60000 && diskon>50000 ){
            diskon=50000;
            console.log(`total harga adalah : ${bayar}`);
            console.log(`potongan :${diskon}`);
            console.log(`subTotal : ${bayar-diskon}`);
            
        } else if(bayar>=60000 && diskon <=50000){
            console.log(`total harga adalah : ${bayar}`);
            console.log(`potongan :${diskon}`);
            console.log(`subTotal : ${bayar-diskon}`);
            
        }
        else{
            console.log(`total harga adalah : ${bayar}`);
            console.log(`potongan : 0`);
            console.log(`subTotal : ${bayar}`);
        }
     }
    harga(4,240000);