let configData = {
  
  creator: { /* haram, hapus / edit data creator :D */
    name: "Erik Sanjaya",
    whatsapp: "https://wa.me/6289517000409",
    website: "https://eriksanjaya.com",
    youtube: "https://www.youtube.com/channel/UC1jSKHbhMg3JDZ-vFcXHTjQ",
    trakteer: "https://trakteer.id/eriksanjaya"
    /*
      dukung saya dengan subcribe,
      aktifkan tombol loncengnya, biar dapat notif template baru / update

      In Syaa Allah, kedepan saya akan update, 
      - pilihan warna template
      - slider text (info / konten)
      - running text
      - audio
      
      nb: boleh dishare, dilarang membajak template dan menjual kembali.
    */ 
  },

  /*
    lisensi free, wajib ada attribute kontak saya di semua halaman.
    jika ingin dihilangkan bisa trakteer saya kopi 15k.
    https://trakteer.id/eriksanjaya
  */ 
  
  lisensi: "free",

  wifi_nama: "ImunNET",
  wifi_slogan: "Internet , Unlimited.",
  
  lokasi_nama: "Pakel, Selopuro.",

  /*
    Dapatkan Latitude dan Longitude di sini.
    https://eriksanjaya.com/app/koordinat.html

    jika muncul pop up, klik ALLOW
    
    aktifkan GPS terlebih dahulu, jika via smartphone.
  */

  prayTimes: {
    latitude: -8.165035,
    longitude: 112.112.311955,
    gmt: 7, /* wib = 7, wita = 8, wit = 9 */

    hijriahNama: 1, /* 0 atau 1 */ 

    tune:{ // menyesuaikan jadwal sholat (tambah / kurangi)
      terbit: -4,
      subuh: -1,
      dzuhur: 1,
      ashar: 1,
      maghrib: 2,
      isya: 3,
    },
  },

  kontak: { // akan muncul jika lisensi non-free
    alamat: "jalan lesanpura pakel",
    hp: "0813-8146-9679",
    email: "imronhz37@gmail.com",
  },
  
  konten: [
    {
      textArabic: "يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا قُوْٓا اَنْفُسَكُمْ وَاَهْلِيْكُمْ نَارًا",
      textIndo: "Wahai orang-orang yang beriman! Peliharalah dirimu dan keluargamu dari api neraka",
      textRef: "QS. At Tahrim : 6",
    }
  ],

  paket: {
    kolom: 3, // 1 - 10
    data:  [
      {
        waktu: "1 Jam",
        harga: "KOSONG",
      },
      {
        waktu: "5 Jam",
        harga: "KOSONG",
      },
      {
        waktu: "1 Hari",
        harga: "Rp5000",
      },
      {
        waktu: "7 Hari",
        harga: "Rp15.000",
      },
      {
        waktu: "15 Hari",
        harga: "Rp30.000",
      },
      {
        waktu: "30 Hari",
        harga: "Rp50.000",
      }
    ],
  }

}
