// 2.Demy membeli makanan menggunakan aplikasi ArkFood. Dimana
// terdapat 2 buah kode promo:
// 1. Promo ‘ARKAFOOD5’ dengan ketentuan pemesanan
// minimal 50rb akan mendapat diskon 50%, dengan
// maksimal potongan sebesar 50rb.
// 2. Promo ‘DITRAKTIRDEMY’ dengan ketentuan pemesanan
// minimal 25rb akan mendapatkan diskon 60%, dengan
// maksimal potongan sebesar 30rb.
// 3. Jika tidak menggunakan kode promo ‘false’
// Untuk pengiriman sejauh 2km pertama akan dikenakan tarif 5rb,
// dan setiap satu kilometer selanjutnya dikenakan penambahan 3rb.
// Untuk beberapa restoran dikenakan pajak yakni 5% dari harga
// makanan yang dipesan (true), jika tidak dikenakan pajak (false).


let arkFood= (harga,voucher,jarak,pajak)=>{
    // console.log(`Harga : ${harga}`)
    let diskon;
    let BiayaAntar;
    if (voucher=="ARKAFOOD5"){
         diskon=harga*50/100;
        if(harga>=50000 && diskon>50000){
            diskon=50000;
            // console.log(`Potongan : ${diskon}`);
           
        }
        else if(harga>=50000 && diskon<=50000){ 
            // console.log(`Potongan : ${diskon}`);
            
        }else{
            diskon=0;
            // console.log(`Potongan : 0 `);
            
        }
    }else if(voucher==" "){
         diskon=harga*60/100;
        if(harga>=25000 && diskon>30000){
            diskon=30000;
            // console.log(`Potongan : ${diskon}`);
            
            }
            else if(harga>=25000 && diskon<=30000){ 
            // console.log(`Potongan : ${diskon}`);
            
            }else{
            diskon=0;
                // console.log(`Potongan : 0`);
                
            }
    }else{
        console.log(false);
    }
    let hargaAwal=5000;
    let tambahan=3000;
    if(jarak>2){
         BiayaAntar=(((jarak-2)*tambahan)+hargaAwal)
        // console.log(`Biaya antar : ${BiayaAntar}`);
    }else{
        BiayaAntar=hargaAwal
        // console.log(`Biaya antar : ${BiayaAntar}`);
    }
    let pajak1;
    let subTotal;
    if(pajak==true){
    pajak1=harga*5/100;
    // console.log(`Pajak : ${pajak1}`);
    
    }else{
        pajak1=0;
        // console.log(`Pajak : 0`);
    }
    subTotal=harga+pajak1+BiayaAntar-diskon;
    console.log(`Harga          : ${harga}`)
    console.log(`Potongan       : ${diskon}`);
    console.log(`Biaya antar    : ${BiayaAntar}`);
    console.log(`Pajak          : ${pajak1}`);
    console.log(`SubTotal       : ${subTotal}`);
    
}
arkFood(40000,"ARKAFOOD5",5,false)