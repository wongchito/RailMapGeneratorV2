const e={destination:1500,runin:1200,railmap:2500,indoor:4e3},a=500,i="shmetro",n=40,r=8,s="l",t="",l=["beijing","bj25fs","#e46022","#fff"],o=["房山线","Fangshan Line"],c="namb4J",f={linestart:{name:["RIGHT END","RIGHT END"],secondaryName:!1,num:"00",services:["local"],parents:[],children:["vF9Opd"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:120},NrI7z9:{name:["丰台东大街","Fengtai Dongdajie"],secondaryName:!1,num:"909",services:["local"],parents:["Uo1cC5"],children:["Gw1ITs"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:120},lineend:{name:["LEFT END","LEFT END"],secondaryName:!1,num:"00",services:["local"],parents:["YpLwEX","namb4J"],children:[],branch:{left:["through","namb4J"],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:120},Uo1cC5:{name:["丰台南路","Fengtai Nanlu"],secondaryName:!1,num:"910",services:["local"],parents:["fL5ELd"],children:["NrI7z9"],branch:{left:[],right:[]},transfer:{info:[[["beijing","bj16","#76a32e","#fff","16号线","Line 16"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:120},fL5ELd:{name:["科怡路","Keyi Lu"],secondaryName:!1,num:"911",services:["local"],parents:["C-r9IC"],children:["Uo1cC5"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:120},"C-r9IC":{name:["丰台科技园","Fengtai Science Park"],secondaryName:!1,num:"912",services:["local"],parents:["tX2RQ7"],children:["fL5ELd"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:120},tX2RQ7:{name:["郭公庄","Guogongzhuang"],secondaryName:!1,num:"05",services:["local"],parents:["01asKi"],children:["C-r9IC","rjpxaD"],branch:{left:[],right:["through","rjpxaD"]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:120},"01asKi":{name:["大葆台","Dabaotai"],secondaryName:!1,num:"06",services:["local"],parents:["6RkpdN"],children:["tX2RQ7"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:120},"6RkpdN":{name:["稻田","Daotian"],secondaryName:!1,num:"07",services:["local"],parents:["Oe0Ulv"],children:["01asKi"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:120},Oe0Ulv:{name:["长阳","Changyang"],secondaryName:!1,num:"08",services:["local"],parents:["NwIH0X"],children:["6RkpdN"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:120},NwIH0X:{name:["篱笆房","Libafang"],secondaryName:!1,num:"09",services:["local"],parents:["FdiDQ_"],children:["Oe0Ulv"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:120},FdiDQ_:{name:["广阳城","Guangyang Cheng"],secondaryName:!1,num:"10",services:["local"],parents:["6JuVEG"],children:["NwIH0X"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:120},"6JuVEG":{name:["良乡大学城北","Liangxiang Univ. Town North"],secondaryName:!1,num:"11",services:["local"],parents:["7tWCy7"],children:["FdiDQ_"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:120},"7tWCy7":{name:["良乡大学城","Liangxiang Univ. Town"],secondaryName:!1,num:"12",services:["local"],parents:["D8UK80"],children:["6JuVEG"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:120},D8UK80:{name:["良乡大学城西","Liangxiang Univ. Town West"],secondaryName:!1,num:"13",services:["local"],parents:["tDwIdQ"],children:["7tWCy7"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:120},tDwIdQ:{name:["良乡南关","Liangxiang Nanguan"],secondaryName:!1,num:"14",services:["local"],parents:["sa2H8J"],children:["D8UK80"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:120},sa2H8J:{name:["苏庄","Suzhuang"],secondaryName:!1,num:"15",services:["local"],parents:["vF9Opd"],children:["tDwIdQ"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:120},vF9Opd:{name:["阎村东","Yancun Dong (E)"],secondaryName:!1,num:"16",services:["local"],parents:["linestart"],children:["sa2H8J"],branch:{left:[],right:[]},transfer:{info:[[["beijing","bj25fs","#e46022","#fff","燕房线","Yanfang Line"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:120},rjpxaD:{name:["白盆窑","Baipenyao"],secondaryName:!1,num:"04",services:["local"],parents:["tX2RQ7"],children:["h9TIja"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:120},Gw1ITs:{name:["七里庄","Qilizhuang"],secondaryName:!1,num:"908",services:["local"],parents:["NrI7z9"],children:["kOa8ck"],branch:{left:[],right:[]},transfer:{info:[[["beijing","bj14","#d5a7a1","#000","14号线","Line 14"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:120},kOa8ck:{name:["六里桥","Liuli Qiao"],secondaryName:!1,num:"907",services:["local"],parents:["Gw1ITs"],children:["PUXWoo"],branch:{left:[],right:[]},transfer:{info:[[["beijing","bj10","#009bc0","#fff","10号线","Line 10"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:120},PUXWoo:{name:["六里桥东","Liuliqiao Dong (E)"],secondaryName:!1,num:"906",services:["local"],parents:["kOa8ck"],children:["jstLOD"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:120},jstLOD:{name:["北京西站","Beijingxi Zhan\\ (Beijing West Railway Station)"],secondaryName:!1,num:"905",services:["local"],parents:["PUXWoo"],children:["Ifqb1h"],branch:{left:[],right:[]},transfer:{info:[[["beijing","bj7","#f6c582","#000","7号线","Line 7"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:135},Ifqb1h:{name:["军事博物馆","Military Museum"],secondaryName:!1,num:"904",services:["local"],parents:["jstLOD"],children:["NVGeil"],branch:{left:[],right:[]},transfer:{info:[[["beijing","bj1","#c23a30","#fff","1号线","Line 1"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:120},NVGeil:{name:["白堆子","Baiduizi"],secondaryName:!1,num:"903",services:["local"],parents:["Ifqb1h"],children:["jsy6s7"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:120},jsy6s7:{name:["白石桥南","Baishiqiaonan"],secondaryName:!1,num:"902",services:["local"],parents:["NVGeil"],children:["YpLwEX"],branch:{left:[],right:[]},transfer:{info:[[["beijing","bj6","#d29700","#fff","6号线","Line 6"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:120},YpLwEX:{name:["国家图书馆","Guojia Tushuguan \\(National Library)"],secondaryName:!1,num:"901",services:["local"],parents:["jsy6s7"],children:["lineend"],branch:{left:[],right:[]},transfer:{info:[[["beijing","bj4","#008e9c","#fff","4号线","Line 4"],["beijing","bj16","#76a32e","#fff","16号线","Line 16"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:130},h9TIja:{name:["花乡东桥","Huaxiang Dongqiao"],secondaryName:!1,num:"03",services:["local"],parents:["rjpxaD"],children:["uhBmVw"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:120},uhBmVw:{name:["首经贸","Capital Univ. of \\Economics & Business"],secondaryName:!1,num:"02",services:["local"],parents:["h9TIja"],children:["namb4J"],branch:{left:[],right:[]},transfer:{info:[[["beijing","bj10","#009bc0","#fff","10号线","Line 10"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:120},namb4J:{name:["东管头南","Dongguantou Nan (S)"],secondaryName:!1,num:"01",services:["local"],parents:["uhBmVw"],children:["lineend"],branch:{left:[],right:[]},transfer:{info:[[["beijing","bj16","#76a32e","#fff","16号线","Line 16"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:120}},d={isStagger:!0,isFlip:!0},_={isLegacy:!1,terminal:!1},p="25",m="12",g="sh2020",h=[],u=3.666667,y=79.666667,b={"1xhy":{from:"tX2RQ7",to:"namb4J",colors:[["beijing","bj25fs","#e46022","#fff","房山线","Fangshan Line"]],display:!0},RlhP:{from:"tX2RQ7",to:"YpLwEX",colors:[["beijing","bj9","#8fc31f","#fff","9号线","Line 9"]],display:!0},wl5m:{from:"vF9Opd",to:"tX2RQ7",colors:[["beijing","bj25fs","#e46022","#fff","房山线","Fangshan Line"]],display:!0}},v=!1,N={bank:!0,left_and_right_factor:1,bottom_factor:1},j=38,k={svgWidth:e,svg_height:a,style:i,y_pc:n,padding:r,direction:s,platform_num:t,theme:l,line_name:o,current_stn_idx:c,stn_list:f,namePosMTR:d,customiseMTRDest:_,line_num:p,psd_num:m,info_panel_type:g,notesGZMTR:h,direction_gz_x:u,direction_gz_y:y,coline:b,loop:v,loop_info:N,branchSpacingPct:j};export{j as branchSpacingPct,b as coline,c as current_stn_idx,_ as customiseMTRDest,k as default,s as direction,u as direction_gz_x,y as direction_gz_y,g as info_panel_type,o as line_name,p as line_num,v as loop,N as loop_info,d as namePosMTR,h as notesGZMTR,r as padding,t as platform_num,m as psd_num,f as stn_list,i as style,e as svgWidth,a as svg_height,l as theme,n as y_pc};
