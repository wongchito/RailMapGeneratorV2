const params = {
    style: 'gzmtr',
    svg_height: 311,
    padding: 7.24,
    y_pc: 55.56,
    branch_spacing: 44.44444444444444,
    theme: ['qingdao', 'qd8', '#DF1995', '#fff'],
    direction: 'l',
    current_stn_idx: 'iwf6',
    platform_num: '8',
    stn_list: {
        linestart: {
            parents: [],
            children: ['rygs'],
            name: ['路綫左端', 'LEFT END'],
            branch: {
                left: [],
                right: [],
            },
            num: '00',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        lineend: {
            parents: ['iwf6'],
            children: [],
            name: ['路綫右端', 'RIGHT END'],
            branch: {
                left: [],
                right: [],
            },
            num: '12',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        l1mz: {
            parents: ['ujti'],
            children: ['iwf6'],
            name: ['大洋', 'Dayang'],
            branch: {
                left: [],
                right: [],
            },
            num: '10',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        iwf6: {
            children: ['lineend'],
            parents: ['l1mz'],
            name: ['青岛北站', 'Qingdao North Railway Station'],
            branch: {
                left: [],
                right: [],
            },
            num: '11',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [
                    [
                        ['qingdao', 'qd1', '#EAAA00', '#fff', '1号线', 'Line 1'],
                        ['qingdao', 'qd3', '#0057B7', '#fff', '3号线', 'Line 3'],
                    ],
                ],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        ujti: {
            parents: ['3ok9'],
            children: ['l1mz'],
            name: ['红岛科技馆（方特）', 'Hongdao Science and Technology\\ Museum (Fangte)'],
            branch: {
                left: [],
                right: [],
            },
            num: '09',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        '3ok9': {
            parents: ['wgb3'],
            children: ['ujti'],
            name: ['观涛', 'Guantao'],
            branch: {
                left: [],
                right: [],
            },
            num: '08',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        wgb3: {
            parents: ['rul5'],
            children: ['3ok9'],
            name: ['健身中心（红岛会展）', 'Fitness Center (Hongdao International\\ Convention and Exhibition Center)'],
            branch: {
                left: [],
                right: [],
            },
            num: '07',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        rul5: {
            parents: ['s0vw'],
            children: ['wgb3'],
            name: ['健康中心', 'Health Center'],
            branch: {
                left: [],
                right: [],
            },
            num: '06',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        s0vw: {
            parents: ['tu3q'],
            children: ['rul5'],
            name: ['红岛火车站', 'Hongdao Railway Station'],
            branch: {
                left: [],
                right: [],
            },
            num: '05',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        tu3q: {
            parents: ['tgzu'],
            children: ['s0vw'],
            name: ['大涧', 'Dajian'],
            branch: {
                left: [],
                right: [],
            },
            num: '04',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        tgzu: {
            parents: ['kf85'],
            children: ['tu3q'],
            name: ['胶东', 'Jiaodong'],
            branch: {
                left: [],
                right: [],
            },
            num: '03',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        kf85: {
            parents: ['rygs'],
            children: ['tgzu'],
            name: ['胶东机场', 'Jiaodong International Airport'],
            branch: {
                left: [],
                right: [],
            },
            num: '02',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        rygs: {
            parents: ['linestart'],
            children: ['kf85'],
            name: ['胶州北站', 'Jiaozhou North Railway Station'],
            branch: {
                left: [],
                right: [],
            },
            num: '01',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
    },
    line_name: ['8号线', 'Line 8'],
    psd_num: '10',
    line_num: '8',
    info_panel_type: 'gz4',
    direction_gz_x: 18.65,
    direction_gz_y: 74.01,
    customiseMTRDest: {
        isLegacy: false,
        terminal: false,
    },
    svgWidth: {
        destination: 1100,
        runin: 1143,
        railmap: 900,
        indoor: 900,
    },
    notesGZMTR: [],
    namePosMTR: {
        isStagger: true,
        isFlip: false,
    },
};

export default params;
