const e={destination:1200,runin:1200,railmap:1200,indoor:1200},n=300,i="mtr",t=50,a=10,s=33,r="l",o="",c=["shenzhen","sz20","#88DBDF","#fff"],l=["20号线","Line 20"],_="nsgcXG",d={linestart:{name:["LEFT END","LEFT END"],secondaryName:!1,num:"00",services:["local"],parents:[],children:["aucsds"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:355},aucsds:{name:["会展城","Convention & Exhibition City"],secondaryName:!1,num:"01",services:["local"],parents:["linestart"],children:["iGj_67"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:355},nsgcXG:{name:["机场北","Airport North"],secondaryName:!1,num:"02",services:["local"],parents:["Fu98_x"],children:["lineend"],branch:{left:[],right:[]},transfer:{info:[[["shenzhen","sz11","#672146","#fff","11号线","Line 11"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:355},lineend:{name:["RIGHT END","RIGHT END"],secondaryName:!1,num:"00",services:["local"],parents:["nsgcXG"],children:[],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:355},iGj_67:{name:["国展北","Shenzhen World North"],secondaryName:!1,num:"00",services:["local"],parents:["aucsds"],children:["3nVaGd"],branch:{left:[],right:[]},transfer:{info:[[["shenzhen","sz12","#A192B2","#fff","12号线","Line 12"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:355},"3nVaGd":{name:["国展","Shenzhen World"],secondaryName:!1,num:"00",services:["local"],parents:["iGj_67"],children:["Fu98_x"],branch:{left:[],right:[]},transfer:{info:[[["shenzhen","sz12","#A192B2","#fff","12号线","Line 12"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:355},Fu98_x:{name:["国展南","Shenzhen World South"],secondaryName:!1,num:"00",services:["local"],parents:["3nVaGd"],children:["nsgcXG"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:355}},f={isStagger:!0,isFlip:!0},p={isLegacy:!1,terminal:!1},h="1",m="1",u="gz1",g=[],y=40,v=70,z={},G=!1,N={bank:!0,left_and_right_factor:1,bottom_factor:1},b={svgWidth:e,svg_height:n,style:i,y_pc:t,padding:a,branchSpacingPct:s,direction:r,platform_num:o,theme:c,line_name:l,current_stn_idx:_,stn_list:d,namePosMTR:f,customiseMTRDest:p,line_num:h,psd_num:m,info_panel_type:u,notesGZMTR:g,direction_gz_x:y,direction_gz_y:v,coline:z,loop:G,loop_info:N};export{s as branchSpacingPct,z as coline,_ as current_stn_idx,p as customiseMTRDest,b as default,r as direction,y as direction_gz_x,v as direction_gz_y,u as info_panel_type,l as line_name,h as line_num,G as loop,N as loop_info,f as namePosMTR,g as notesGZMTR,a as padding,o as platform_num,m as psd_num,d as stn_list,i as style,e as svgWidth,n as svg_height,c as theme,t as y_pc};
