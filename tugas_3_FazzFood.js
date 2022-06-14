// tugas 3

const FazzFood = (harga, voucher, jarak, pajak) => {

    let harga_akhir = 0;
    let tempJarak = 0;
    let potongan = 0;
    let pajakHarga = 0;
    let hargaPromo = 0;
    if (voucher == "FAZZFOOD50") {

        if (harga > 50000 && harga * 50 / 100) {

            if (jarak == 2) {

                tempJarak = 5000
                if (pajak == true) {
                    pajakHarga = harga * (5 / 100) // fix
                    hargaPromo = harga * (50 / 100)
                    harga_akhir = hargaPromo + pajakHarga + tempJarak;
                    potongan = harga - hargaPromo;
                    console.log(`Harga : ${harga}\nPotongan : ${potongan}\nBiaya antar : ${tempJarak}\nPajak : ${pajakHarga}\nSubTotal : ${harga_akhir}`)

                } else {
                    pajakHarga = 0
                    hargaPromo = harga * (50 / 100)
                    harga_akhir = hargaPromo + pajakHarga + tempJarak;
                    potongan = harga - hargaPromo;
                    console.log(`Harga : ${harga}\nPotongan : ${potongan}\nBiaya antar : ${tempJarak}\nPajak : ${pajakHarga}\nSubTotal : ${harga_akhir}`)

                }
            } else if (jarak > 2) {
                tempJarak = 5000 + ((jarak - 2) * 3000); // fix
                if (pajak == true) {
                    pajakHarga = harga * (5 / 100) // fix
                    hargaPromo = harga * (50 / 100)
                    harga_akhir = hargaPromo + pajakHarga + tempJarak;
                    potongan = harga - hargaPromo;
                    console.log(`Harga : ${harga}\nPotongan : ${potongan}\nBiaya antar : ${tempJarak}\nPajak : ${pajakHarga}\nSubTotal : ${harga_akhir}`)
                } else {
                    pajakHarga = 0
                    hargaPromo = harga * (50 / 100)
                    harga_akhir = hargaPromo + pajakHarga + tempJarak;
                    potongan = harga - hargaPromo;
                    console.log(`Harga : ${harga}\nPotongan : ${potongan}\nBiaya antar : ${tempJarak}\nPajak : ${pajakHarga}\nSubTotal : ${harga_akhir}`)
                }
            }


        } else {
            console.log("Maaf voucher tidak bisa dipakai, harus lebiih dari 50 rb")
        }

    } else if (voucher == "DITRAKTIR60") {

        if (harga > 25000) {

            if (jarak == 2) {

                tempJarak = 5000;

                if (pajak == true) {

                    pajakHarga = harga * (5 / 100)
                    hargaPromo = harga*(60/100)
                    harga_akhir = hargaPromo + pajakHarga + tempJarak;
                    potongan = harga - hargaPromo;
                    console.log(`Harga : ${harga}\nPotongan : ${potongan}\nBiaya antar : ${tempJarak}\nPajak : ${pajakHarga}\nSubTotal : ${harga_akhir}`)
                } else {
                    pajakHarga = 0
                    hargaPromo = harga*(60/100)
                    harga_akhir = hargaPromo + pajakHarga + tempJarak;
                    potongan = harga - hargaPromo;
                    console.log(`Harga : ${harga}\nPotongan : ${potongan}\nBiaya antar : ${tempJarak}\nPajak : ${pajakHarga}\nSubTotal : ${harga_akhir}`)

                }

            } else if (jarak > 2) {
                tempJarak = 5000 + ((jarak - 2) * 3000);
                if (pajak == true) {
                    pajakHarga = harga * (5 / 100)
                    hargaPromo = harga*(60/100)
                    harga_akhir = hargaPromo + pajakHarga + tempJarak;
                    potongan = harga - hargaPromo;
                    console.log(`Harga : ${harga}\nPotongan : ${potongan}\nBiaya antar : ${tempJarak}\nPajak : ${pajakHarga}\nSubTotal : ${harga_akhir}`)
                } else {
                    pajakHarga = 0;
                    hargaPromo = harga*(60/100)
                    harga_akhir = hargaPromo + pajakHarga + tempJarak;
                    potongan = harga - hargaPromo;
                    console.log(`Harga : ${harga}\nPotongan : ${potongan}\nBiaya antar : ${tempJarak}\nPajak : ${pajakHarga}\nSubTotal : ${harga_akhir}`)
                }
            }

        } else {
            console.log("minimal belanja 25 rb")
        }

    }
}

FazzFood(75000, 'FAZZFOOD50', 5, true)