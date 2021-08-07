const params = {
    svg_height: 300,
    svg_width: 1000,
    svg_dest_width: 1000,
    show_outer: true,
    padding: 18.12097812097812,
    y_pc: 40,
    strip_pc: 90,
    branch_spacing: 39.86615186615187,
    theme: ['hongkong', 'tkl', '#a35eb5', '#fff'],
    direction: 'r',
    current_stn_idx: 'jiaf',
    platform_num: '4',
    txt_bg_gap: 15,
    txt_flip: true,
    stn_list: {
        linestart: {
            parents: [],
            children: ['fv2y', 'iwf6'],
            name: ['路綫左端', 'LEFT END'],
            change_type: 'none',
            branch: { left: [], right: ['through', 'fv2y'] },
            interchange: [[]],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
        },
        lineend: {
            parents: ['2pep'],
            children: [],
            name: ['路綫右端', 'RIGHT END'],
            change_type: 'none',
            branch: { left: [], right: [] },
            interchange: [[]],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
        },
        l1mz: {
            parents: ['iwf6'],
            children: ['jiaf'],
            name: ['坑口', 'Hang Hau'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '02',
            interchange: [[]],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
        },
        iwf6: {
            children: ['l1mz'],
            parents: ['linestart'],
            name: ['寶琳', 'Po Lam'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '01',
            interchange: [[]],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
        },
        jiaf: {
            parents: ['fv2y', 'l1mz'],
            children: ['626e'],
            branch: { left: ['through', 'fv2y'], right: [] },
            name: ['將軍澳', 'Tseung Kwan O'],
            change_type: 'none',
            num: '00',
            interchange: [[]],
            services: ['local'],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
        },
        '626e': {
            parents: ['jiaf'],
            children: ['4vor'],
            branch: { left: [], right: [] },
            name: ['調景嶺', 'Tiu Keng Leng'],
            change_type: 'int2',
            num: '00',
            interchange: [[['hongkong', 'ktl', '#00af41', '#fff', '觀塘綫', 'Kwun Tong Line']]],
            services: ['local'],
            transfer: {
                type: 'int2',
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[['hongkong', 'ktl', '#00af41', '#fff', '觀塘綫', 'Kwun Tong Line']]],
            },
        },
        '4vor': {
            parents: ['626e'],
            children: ['nbnp'],
            branch: { left: [], right: [] },
            name: ['油塘', 'Yau Tong'],
            change_type: 'none',
            num: '00',
            interchange: [[]],
            services: ['local'],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
        },
        nbnp: {
            parents: ['4vor'],
            children: ['2pep'],
            branch: { left: [], right: [] },
            name: ['鰂魚涌', 'Quarry Bay'],
            change_type: 'int2',
            num: '00',
            interchange: [[['hongkong', 'isl', '#0071ce', '#fff', '港島綫\\往柴灣', 'Island Line\\to Chai Wan']]],
            services: ['local'],
            transfer: {
                type: 'int2',
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[['hongkong', 'isl', '#0071ce', '#fff', '港島綫\\往柴灣', 'Island Line\\to Chai Wan']]],
            },
        },
        '2pep': {
            parents: ['nbnp'],
            children: ['lineend'],
            branch: { left: [], right: [] },
            name: ['北角', 'North Point'],
            change_type: 'int2',
            num: '00',
            interchange: [
                [['hongkong', 'isl', '#0071ce', '#fff', '港島綫\\往堅尼地城', 'Island Line\\to Kennedy Town']],
            ],
            services: ['local'],
            transfer: {
                type: 'int2',
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[['hongkong', 'isl', '#0071ce', '#fff', '港島綫\\往堅尼地城', 'Island Line\\to Kennedy Town']]],
            },
        },
        fv2y: {
            branch: { left: [], right: [] },
            children: ['jiaf'],
            parents: ['linestart'],
            name: ['康城', 'LOHAS Park'],
            change_type: 'none',
            num: '00',
            interchange: [[]],
            services: ['local'],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
        },
    },
    line_name: ['將軍澳綫', 'Tseung Kwan O Line'],
    dest_legacy: false,
    char_form: 'trad',
    psd_num: 1,
    line_num: 'TW',
    info_panel_type: 'gz28',
    direction_gz_x: 50,
    direction_gz_y: 70,
};

export default params;
