/******************************

脚本功能：扫描全能王 至尊SVIP

使用声明：扫描全能王

*******************************
[rewrite_local]


^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body ipad-app.js


[mitm] 

hostname = ap*.intsig.net

*******************************/


var body = $response.body;
var obj = JSON.parse(body);
obj = {
    "ret" : "0",
    "data" : {
    "fax_balance" : "10000",
    "used_points" : "10000",
    "cert_mode_balance" : 0,
    "points" : "0",
    "login_ocr_balance" : "10",
    "psnl_vip_property" : {
      "product_id" : "com.intsig.camscanner.premiums.oneyear.autorenewable.svip.low",
      "initial_tm" : "1614867690",
      "svip" : 1,
      "auto_renewal" : true,
      "ms_first_pay" : 0,
      "pending" : 0,
      "group2_paid" : 0,
      "inherited_flag" : 0,
      "nxt_renew_tm" : "9915126887",
      "level_info" : {
        "level" : 1,
        "days" : 1,
        "end_days" : 30
      },
      "group1_paid" : 1,
      "ys_first_pay" : 0,
      "renew_type" : "year",
      "expiry" : 16755870836,
      "grade" : 2,
      "renew_method" : "appstore",
      "last_payment_method" : "appstore"
    },
    "pdfword_balance" : "0",
    "bookmode_balance" : 20,
    "immt_expy_points" : "0",
    "ocr_balance" : 14,
    "no_login_ocr_balance" : "2",
    "server_time" : "1664956509",
    "CamScanner_RoadMap" : "0"
  }
};
body = JSON.stringify(obj);
$done(body);
