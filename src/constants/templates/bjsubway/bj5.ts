const params = {
    style: 'gzmtr',
    svg_height: 450,
    padding: 8.750201061605276,
    y_pc: 40,
    branch_spacing: 45,
    theme: ['beijing', 'bj5', '#AA0061', '#fff'],
    direction: 'r',
    current_stn_idx: '1sbo',
    platform_num: '2',
    stn_list: {
        linestart: {
            parents: [],
            children: ['1sbo'],
            name: ['路綫右端', 'RIGHT END'],
            branch: { left: [], right: [] },
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            num: '00',
            secondaryName: false,
        },
        lineend: {
            parents: ['l1mz'],
            children: [],
            name: ['路綫左端', 'LEFT END'],
            branch: { left: [], right: [] },
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            num: '24',
            secondaryName: false,
        },
        l1mz: {
            parents: ['iwf6'],
            children: ['lineend'],
            name: ['天通苑北', 'Tiantongyuan Bei(N)'],
            branch: { left: [], right: [] },
            num: '23',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        iwf6: {
            children: ['l1mz'],
            parents: ['gtgp'],
            name: ['天通苑', 'Tiantong Yuan'],
            branch: { left: [], right: [] },
            num: '22',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        gtgp: {
            name: ['天通苑南', 'Tiantongyuan Nan(S)'],
            secondaryName: false,
            num: '21',
            services: ['local'],
            parents: ['fdms'],
            children: ['iwf6'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        fdms: {
            name: ['立水桥', 'Lishui Qiao'],
            secondaryName: false,
            num: '20',
            services: ['local'],
            parents: ['92bb'],
            children: ['gtgp'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['beijing', 'bj13', '#F4DA40', '#fff', '13号线', 'Line 13']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        '92bb': {
            name: ['立水桥南', 'Lishuiqiao Nan(S)'],
            secondaryName: false,
            num: '19',
            services: ['local'],
            parents: ['vud4'],
            children: ['fdms'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        vud4: {
            name: ['北苑路北', 'Bieyuanlu Bei(N)'],
            secondaryName: false,
            num: '18',
            services: ['local'],
            parents: ['yzsy'],
            children: ['92bb'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        yzsy: {
            name: ['大屯路东', 'Datunlu Dong(E)'],
            secondaryName: false,
            num: '17',
            services: ['local'],
            parents: ['ola2'],
            children: ['vud4'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['beijing', 'bj15', '#653279', '#fff', '15号线', 'Line 15']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        ola2: {
            name: ['惠新西街北口', 'Huixin Xijie Beikou'],
            secondaryName: false,
            num: '16',
            services: ['local'],
            parents: ['c8co'],
            children: ['yzsy'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        c8co: {
            name: ['惠新西街南口', 'Huixin Xijie Nankou'],
            secondaryName: false,
            num: '15',
            services: ['local'],
            parents: ['h22a'],
            children: ['ola2'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['beijing', 'bj10', '#0092BC', '#fff', '10号线', 'Line 10']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        h22a: {
            name: ['和平西桥', 'Heping Xiqiao'],
            secondaryName: false,
            num: '14',
            services: ['local'],
            parents: ['qgzs'],
            children: ['c8co'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        qgzs: {
            name: ['和平里北街', 'Hepingli Beijie'],
            secondaryName: false,
            num: '13',
            services: ['local'],
            parents: ['c5az'],
            children: ['h22a'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        c5az: {
            name: ['雍和宫', 'Yonghegong\\Lama Temple'],
            secondaryName: false,
            num: '12',
            services: ['local'],
            parents: ['gwv0'],
            children: ['qgzs'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['beijing', 'bj2', '#004B87', '#fff', '2号线', 'Line 2']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        gwv0: {
            name: ['北新桥', 'Beixinqiao'],
            secondaryName: false,
            num: '11',
            services: ['local'],
            parents: ['gjgs'],
            children: ['c5az'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        gjgs: {
            name: ['张自忠路', 'Zhangzizhong Lu'],
            secondaryName: false,
            num: '10',
            services: ['local'],
            parents: ['zmhf'],
            children: ['gwv0'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        zmhf: {
            name: ['东四', 'Dongsi'],
            secondaryName: false,
            num: '09',
            services: ['local'],
            parents: ['dih2'],
            children: ['gjgs'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['beijing', 'bj6', '#B58500', '#fff', '6号线', 'Line 6']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        dih2: {
            name: ['灯市口', 'Dengshi Kou'],
            secondaryName: false,
            num: '08',
            services: ['local'],
            parents: ['silq'],
            children: ['zmhf'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        silq: {
            name: ['东单', 'Dongdan'],
            secondaryName: false,
            num: '07',
            services: ['local'],
            parents: ['lwkm'],
            children: ['dih2'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['beijing', 'bj1', '#A4343A', '#fff', '1号线', 'Line 1']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        lwkm: {
            name: ['崇文门', 'Chongwen Men'],
            secondaryName: false,
            num: '06',
            services: ['local'],
            parents: ['b2nv'],
            children: ['silq'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['beijing', 'bj2', '#004B87', '#fff', '2号线', 'Line 2']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        b2nv: {
            name: ['磁器口', 'Ciqi Kou'],
            secondaryName: false,
            num: '05',
            services: ['local'],
            parents: ['fuew'],
            children: ['lwkm'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['beijing', 'bj7', '#FFC56E', '#fff', '7号线', 'Line 7']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        fuew: {
            name: ['天坛东门', 'Temple of Heaven East Gate'],
            secondaryName: false,
            num: '04',
            services: ['local'],
            parents: ['sysf'],
            children: ['b2nv'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        sysf: {
            name: ['蒲黄榆', 'Puhuangyu'],
            secondaryName: false,
            num: '03',
            services: ['local'],
            parents: ['chnl'],
            children: ['fuew'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['beijing', 'bj14', '#CA9A8E', '#fff', '14号线', 'Line 14']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        chnl: {
            name: ['刘家窑', 'Liujiayao'],
            secondaryName: false,
            num: '02',
            services: ['local'],
            parents: ['1sbo'],
            children: ['sysf'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        '1sbo': {
            name: ['宋家庄', 'Songjiazhuang'],
            secondaryName: false,
            num: '01',
            services: ['local'],
            parents: ['linestart'],
            children: ['chnl'],
            branch: { left: [], right: [] },
            transfer: {
                info: [
                    [
                        ['beijing', 'bj10', '#0092BC', '#fff', '10号线', 'Line 10'],
                        ['beijing', 'yzl', '#D0006F', '#fff', '亦庄线', 'Yizhuang Line'],
                    ],
                ],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
    },
    line_name: ['5号线', 'Line 5'],
    psd_num: '1',
    line_num: '5',
    info_panel_type: 'gz28',
    direction_gz_x: 50,
    direction_gz_y: 70,
    customiseMTRDest: { isLegacy: false, terminal: false },
    svgWidth: { destination: 2000, runin: 2000, railmap: 2000, indoor: 2000 },
    notesGZMTR: [],
    namePosMTR: { isStagger: true, isFlip: false },
};

export default params;
