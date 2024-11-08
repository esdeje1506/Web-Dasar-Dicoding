
        //***Memindahkan posisi aside
        //Fungsi untuk menampilkan ukuran jendela
        function displayWindowSize() {
            const widthWin = window.innerWidth
            const asideContent = document.querySelectorAll('aside')[0]
            const articleBeranda = document.querySelector('#beranda')
            const mainContentArticle = document.querySelector('main .content')

            if(widthWin <= 950) articleBeranda.after(asideContent)  //aside akan berada di dalam class content menjadi sibling beranda saat ukuran window kurang dari 950px         
            else mainContentArticle.after(asideContent)  //aside akan berada di dalam main menjadi sibling article saat ukuran window lebih 950px         
        }

        //Event untuk resize window
        window.addEventListener('resize', displayWindowSize)

        //Memanggil fungsi saat halaman pertama kali dimuat
        displayWindowSize();