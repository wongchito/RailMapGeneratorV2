const e={destination:1200,runin:1200,railmap:1200,indoor:1200},n=300,i="shmetro",a=50,t=10,r=33,s="l",o="",c=["chengdu","cd18","#006271","#fff"],l=["18号线","Line 18"],f="Ve4Q4g",d={linestart:{name:["LEFT END","LEFT END"],secondaryName:!1,num:"00",services:["local"],parents:[],children:["49boLf"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:255},Ve4Q4g:{name:["天府机场北","Tianfu International Airport North"],secondaryName:!1,num:"17",services:["local","express"],parents:["C2Xqr1"],children:["lineend"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:255},lineend:{name:["RIGHT END","RIGHT END"],secondaryName:!1,num:"00",services:["local"],parents:["Ve4Q4g"],children:[],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:255},"49boLf":{name:["火车南站","South Railway Station"],secondaryName:!1,num:"05",services:["local","express"],parents:["linestart"],children:["EeH0KY"],branch:{left:[],right:[]},transfer:{info:[[["chengdu","cd1","#10069F","#fff","1号线","Line 1"],["chengdu","cd7","#59CBE8","#fff","7号线","Line 7"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:255},EeH0KY:{name:["孵化园","Incubation Park"],secondaryName:!1,num:"06",services:["local","express"],parents:["49boLf"],children:["N9M4Rt"],branch:{left:[],right:[]},transfer:{info:[[["chengdu","cd1","#10069F","#fff","1号线","Line 1"],["chengdu","cd9","#FFB81C","#fff","9号线","Line 9"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:255},N9M4Rt:{name:["锦城广场东","Jincheng Plaza East"],secondaryName:!1,num:"07",services:["local"],parents:["EeH0KY"],children:["DfOmv1"],branch:{left:[],right:[]},transfer:{info:[[],[["chengdu","cd1","#10069F","#fff","1号线","Line 1"]],[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:255},DfOmv1:{name:["世纪城","Century City"],secondaryName:!1,num:"08",services:["local"],parents:["N9M4Rt"],children:["p5bn8r"],branch:{left:[],right:[]},transfer:{info:[[["chengdu","cd1","#10069F","#fff","1号线","Line 1"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:255},p5bn8r:{name:["海昌路","Haichang Road"],secondaryName:!1,num:"09",services:["local","express"],parents:["DfOmv1"],children:["kWpvMP"],branch:{left:[],right:[]},transfer:{info:[[["chengdu","cd1","#10069F","#fff","1号线","Line 1"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:255},kWpvMP:{name:["西博城","Western China Int'l Expo City"],secondaryName:!1,num:"10",services:["local"],parents:["p5bn8r"],children:["u9UeXb"],branch:{left:[],right:[]},transfer:{info:[[["chengdu","cd1","#10069F","#fff","1号线","Line 1"],["chengdu","cd6","#B36924","#fff","6号线","Line 6"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:255},u9UeXb:{name:["兴隆","Xinglong"],secondaryName:!1,num:"11",services:["local"],parents:["kWpvMP"],children:["uzaCst"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:255},uzaCst:{name:["三岔","Sancha"],secondaryName:!1,num:"13",services:["local","express"],parents:["u9UeXb"],children:["C2Xqr1"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:255},C2Xqr1:{name:["天府机场1号2号航站楼","Terminal 1&amp;2 of Tianfu International Airport"],secondaryName:!1,num:"16",services:["local","express"],parents:["uzaCst"],children:["Ve4Q4g"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:255}},_={isStagger:!0,isFlip:!0},p={isLegacy:!1,terminal:!1},m="18",u="1",h="gz1",g=[],y=40,v=70,b={},N=!1,k={bank:!0,left_and_right_factor:1,bottom_factor:1},L={svgWidth:e,svg_height:n,style:i,y_pc:a,padding:t,branchSpacingPct:r,direction:s,platform_num:o,theme:c,line_name:l,current_stn_idx:f,stn_list:d,namePosMTR:_,customiseMTRDest:p,line_num:m,psd_num:u,info_panel_type:h,notesGZMTR:g,direction_gz_x:y,direction_gz_y:v,coline:b,loop:N,loop_info:k};export{r as branchSpacingPct,b as coline,f as current_stn_idx,p as customiseMTRDest,L as default,s as direction,y as direction_gz_x,v as direction_gz_y,h as info_panel_type,l as line_name,m as line_num,N as loop,k as loop_info,_ as namePosMTR,g as notesGZMTR,t as padding,o as platform_num,u as psd_num,d as stn_list,i as style,e as svgWidth,n as svg_height,c as theme,a as y_pc};
