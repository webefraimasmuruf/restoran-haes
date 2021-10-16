function semuaMenu() {
  $.getJSON("data/pizza.json", function (data) {
    let menu = data.menu;
    $.each(menu, function (i, data) {
      $("#daftar-menu").append(
        ' <div class="col-md-4"><div class="card mb-3"> <img src="menu/' +
          data.gambar +
          '" class="card-img-top"><div class="card-body"><h5 class="card-title">' +
          data.nama +
          '</h5><p class="card-text">' +
          data.deksripsi +
          '</p><h5 class="card-title"> Rp.' +
          data.harga +
          '</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>'
      );
    });
  });
}

semuaMenu();

$(".nav-link").on("click", function () {
  $(".nav-link").removeClass("active");
  $(this).addClass("active");

  let kategori = $(this).html();
  $("h1").html(kategori);
  if (kategori == "All Menu") {
    semuaMenu();
    return;
  }

  $.getJSON("data/pizza.json", function (data) {
    let menu = data.menu;
    let conten = "";
    $.each(menu, function (i, data) {
      if (data.kategori == kategori.toLowerCase()) {
        conten +=
          '<div class="col-md-4"><div class="card mb-3"> <img src="menu/' +
          data.gambar +
          '" class="card-img-top"><div class="card-body"><h5 class="card-title">' +
          data.nama +
          '</h5><p class="card-text">' +
          data.deksripsi +
          '</p><h5 class="card-title"> Rp.' +
          data.harga +
          '</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>';
      }
    });

    $("#daftar-menu").html(conten);
  });
});
