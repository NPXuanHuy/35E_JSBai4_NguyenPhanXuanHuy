/** Xuất 3 số theo thứ tự tăng dần */
document.getElementById('btnSapXep').onclick = function() {
    /** Đầu Vào */
    var a = document.getElementById('num1').value*1;
    var b = document.getElementById('num2').value*1;
    var c = document.getElementById('num3').value*1;
    var thuTu = '';

    /** Xử lý */
    if (a < b) {
        if (a < c) {
          if (b < c) {
            thuTu += a + '<' + b + '<'+ c;
          } else if (a > b) {
            if (a > c) {
              if (b > c) {
                thuTu += a + '>' + b +'>'+ c;
              } else if (b > a) {
                if (b > c) {
                  if (a > c) {
                    thuTu += b + '>' + a + '>' + c;
                  } else if (b > a) {
                    if (b > c) {
                      if (c > a) {
                        thuTu += b + '>' + c + '>' + a;
                      } else if (a > b) {
                        if (a > c) {
                          if (c > b) {
                            thuTu += a + '>' + c + '>' + b;
                          } else if (c > a) {
                            if (c > b) {
                              if (a > b) {
                                thuTu += c + '>' + a + '>' + b;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

    /** Đầu ra */
    // var result = "Sắp xếp là: " + thuTu;


    document.getElementById('showInfoSapXep').innerHTML = thuTu;
}

/** Gửi Lời Chào */
document.getElementById('btnGuiLoiChao').onclick = function () {
    /**Đâu vào */
    var bo = document.getElementById('Bố');
    var me = document.getElementById('Mẹ');
    var anhTrai = document.getElementById('Anh Trai');
    var emGai = document.getElementById('Em Gái');
    var chao = "" ;

    /** Xử lý */

    if (chao == "Bố") {
        chao += "Xin Chào Bố !"; 
    } else if (chao == "Mẹ") {
        chao += "Xin Chào Mẹ !"
    } else if (chao == "Anh Trai") {
        chao += "Xin Chào Anh Trai !"
    } else if (chao == "Em Gái") {
        chao += "Xin Chào Anh Trai !"
    }

    /** Đầu ra */
    document.getElementById('showInfoChao').innerHTML = chao;

}
/** Đếm chẵn lẻ*/
document.getElementById('btnDemSo').onclick = function () {
  var a = document.getElementById9('Number1').value*1;
  var b = document.getElementById9('Number2').value*1;
  var c = document.getElementById9('Number3').value*1;
  var number = 0;
  var count = 0;

  /** Xử lý */

}

/** Xác định tam giác */
document.getElementById('btnTG').onclick = function () {
  var a = document.getElementById('canh1').value*1;
  var b = document.getElementById('canh2').value*1;
  var c = document.getElementById('canh3').value*1;
  var content = '';

  /** Xử lý */
  if ( a == b && a ==c) {
    content += "Tam giác đều"
  } else if (a == b || a == c) {
    content += " Tam giác cân"
  } else if (c^2 == a^2 + b^2) {
    content += "Tam giác vuông"
  } else {
    content +="Tam giác khác"
  }

  /**Đầu ra */
  
  document.getElementById('showInfoTG').innerHTML = content;
}

/** Tính ngày */

document.getElementById('btnNgayMai').onclick = function () {
  var day = document.getElementById('day').value*1;
var month = document.getElementById('month').value*1;
var year = document.getElementById('year').value*1;
var month1 = document.getElementById('month').value*1;
var year1 = document.getElementById('year').value*1;
var songay = songay1;
var month = month1;
var year = year1;
var songay1 =0;
var month1 = 0;
var year1= 0
switch (month) {
  case 4:
  case 6:
  case 9:
  case 11:
    tg = 30; 
    break;
  case 2:
    tg = 28;

  default:
    tg = 31;
    break;
}
   songay = (day % tg)+1;
  /**Xử lý */
    if(songay==1)
    {
        month = (month % 12) + 1;
    }
    /**Đầu ra */
    var result = songay +'/'+ month +'/' + year
    document.getElementById('showInfoLich').innerHTML = result;

//   songay1 = (day % tg)+1;
// if(songay1 == 1)
//     {
//         switch(month1-1)
//         {
//             case 4:
//             case 6:
//             case 9:
//             case 11:
//                 day1 = 30;
//                 break;
//             case 2:
//                 day1 = 28 ;
//                 break;
//             default:
//                 day1 = 31;
//         }
//         if(month1 == 1)
//         {
//             month1 = 12;
//             year1--;
//         }
//         else
//         {
//             month1--;
//         }
//     }
//     else
//     {
//         songay1--;
//     }

//     var result = songay1 +'/'+ month1 +'/' + year1
//     document.getElementById('showInfoLich').innerHTML = result;

  }

  /** Tính ngày
   */
  
  document.getElementById('btnTinhNgay').onclick = function () {
    var month = document.getElementById('month_1').value*1;
    var year = document.getElementById('year_1').value*1;
    var day = 0;

    /** Xử lý */
    if ( month <=1 || month <=12) {
      switch(month)
      {
      case 1: case 3: case 5: case 7: case 8: case 10: case 12: 
       day = 'Tháng có ' + 31 +" ngày"; 
       break;
      case 4: case 6: case 9: case 11:
       day = 'Tháng có ' + 30 +" ngày"; 
       break;
      case 2:
       day = "Moi nhap them nam: " ;
       if(year % 4 == 0){
        day = "Thang co 29 ngay";
       }
        
       else {
        day = "Thang co 28 ngay";
       }
      }
     }
     else {
      day = "Khong ton tai thang nay";
     }
     
    /** Đầu ra */
    document.getElementById('showInfoTinhNgay').innerHTML = day;
    }

/** Đọc số */
    document.getElementById('btnDocSo').onclick = function () {
      var number = document.getElementById('docSo').value*1;
      var donVi = Math.floor(number % 10);
      var chuc = Math.floor((number / 10) % 10);
      var tram = Math.floor(number / 100);
      var content = '';
      /**Xử lý */
      if ( number < 100 || number > 999){
        content += " Nhập vào cố có ba chữ số"
      } else {
        switch(tram){
          case 1: content += "Một trăm ";
          break;
          case 2: content += "Hai trăm ";
          break;
          case 3: content += "Ba trăm ";
          break;
          case 4: content += "Bốn trăm ";
          break;
          case 5: content += "Năm trăm ";
          break;
          case 6: content += "Sáu trăm ";
          break;
          case 7: content += "Bảy trăm ";
          break;
          case 8: content += "Tám trăm ";
          break;
          case 9: content += "Chín trăm ";
          break;
        }
        // in ra chử "lẻ" nếu hàng chục bằng không
        if(chuc % 10 == 0 && donVi != 0){
          content += "lẻ ";
        }
        //in ra hàng chục
        switch(chuc){
          case 1: content += "mười ";
          break;
          case 2: content += "hai mươi ";
          break;
          case 3: content += "ba mươi ";
          break;
          case 4: content += "bốn mươi ";
          break;
          case 5: content += "năm mươi ";
          break;
          case 6: content += "sáu mươi ";
          break;
          case 7: content += "bảy mươi ";
          break;
          case 8: content += "tám mươi ";
          break;
          case 9: content += "chín mươi ";
          break;
        }
        //in ra hàn đơn vị
        switch(donVi){
          case 1:  content += "một ";
          break;
          case 2: content += "hai ";
          break;
          case 3: content += "ba ";
          break;
          case 4: content += "bốn ";
          break;
          case 5: content += "lăm ";
          break;
          case 6: content += "sáu ";
          break;
          case 7: content += "bảy ";
          break;
          case 8: content += "tám ";
          break;
          case 9: content += "chín ";
          break;
        }
      }
      /**Đầu ra */
      document.getElementById('showInfoDocSo').innerHTML = content;
    }
    


  