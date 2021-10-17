const params = {
    style: 'mtr',
    svg_height: 300,
    svg_width: 1250,
    svg_dest_width: 1250,
    show_outer: true,
    padding: 10.503617806315587,
    y_pc: 40,
    strip_pc: 90,
    branch_spacing: 45,
    theme: ['hongkong', 'twl', '#E2231A'],
    direction: 'r',
    current_stn_idx: '86ux',
    platform_num: '2',
    txt_bg_gap: 15,
    txt_flip: true,
    stn_list: {
        linestart: {
            parents: [],
            children: ['43sy'],
            name: ['路綫左端', 'LEFT END'],
            change_type: 'none',
            branch: { left: [], right: [] },
        },
        lineend: {
            parents: ['iwf6'],
            children: [],
            name: ['路綫右端', 'RIGHT END'],
            change_type: 'none',
            branch: { left: [], right: [] },
        },
        l1mz: {
            parents: ['wgsh'],
            children: ['ab8w'],
            name: ['尖沙咀', 'Tsim Sha Tsui'],
            change_type: 'osi11_ur',
            branch: { left: [], right: [] },
            interchange: [
                [],
                [
                    ['尖東', 'East Tsim Sha Tsui'],
                    ['hongkong', 'wrl', '#B6008D', '西鐵綫', 'West Rail Line'],
                ],
            ],
        },
        iwf6: {
            children: ['lineend'],
            parents: ['ab8w'],
            name: ['中環', 'Central'],
            change_type: 'osi22_pr',
            branch: { left: [], right: [] },
            interchange: [
                [['hongkong', 'isl', '#0071CE', '港島綫\\往堅尼地城', 'Island Line\\to Kennedy Town']],
                [
                    ['香港', 'Hong Kong'],
                    ['hongkong', 'ael', '#007078', '機場快綫', 'Airport Express'],
                    ['hongkong', 'tcl', '#F38B00', '東涌綫', 'Tung Chung Line'],
                ],
            ],
        },
        ab8w: {
            branch: { left: [], right: [] },
            parents: ['l1mz'],
            children: ['iwf6'],
            name: ['金鐘', 'Admiralty'],
            change_type: 'int3_r',
            interchange: [
                [
                    ['hongkong', 'sile', '#B6BD00', '南港島綫', 'South Island Line'],
                    ['hongkong', 'isl', '#0071CE', '港島綫往柴灣', 'Island Line to Chai Wan'],
                ],
            ],
        },
        wgsh: {
            branch: { left: [], right: [] },
            parents: ['z1vi'],
            children: ['l1mz'],
            name: ['佐敦', 'Jordan'],
            change_type: 'none',
        },
        z1vi: {
            branch: { left: [], right: [] },
            parents: ['aivh'],
            children: ['wgsh'],
            name: ['油麻地', 'Yau Ma Tei'],
            change_type: 'none',
        },
        aivh: {
            branch: { left: [], right: [] },
            parents: ['icpx'],
            children: ['z1vi'],
            name: ['旺角', 'Mong Kok'],
            change_type: 'int2',
            interchange: [[['hongkong', 'ktl', '#00AF41', '觀塘綫\\往黃埔', 'Kwun Tong Line\\to Whampoa']]],
        },
        icpx: {
            branch: { left: [], right: [] },
            parents: ['5zzd'],
            children: ['aivh'],
            name: ['太子', 'Prince Edward'],
            change_type: 'int2',
            interchange: [[['hongkong', 'ktl', '#00AF41', '觀塘綫\\往調景嶺', 'Kwun Tong Line\\to Tiu Keng Leng']]],
        },
        '5zzd': {
            branch: { left: [], right: [] },
            parents: ['l3jq'],
            children: ['icpx'],
            name: ['深水埗', 'Shum Shui Po'],
            change_type: 'none',
        },
        l3jq: {
            branch: { left: [], right: [] },
            parents: ['hckj'],
            children: ['5zzd'],
            name: ['長沙灣', 'Cheung Sha Wan'],
            change_type: 'none',
        },
        hckj: {
            branch: { left: [], right: [] },
            parents: ['u0x9'],
            children: ['l3jq'],
            name: ['茘枝角', 'Lai Chi Kok'],
            change_type: 'none',
        },
        u0x9: {
            branch: { left: [], right: [] },
            parents: ['h7hm'],
            children: ['hckj'],
            name: ['美孚', 'Mei Foo'],
            change_type: 'int2',
            interchange: [[['hongkong', 'wrl', '#B6008D', '西鐵綫', 'West Rail Line']]],
        },
        h7hm: {
            branch: { left: [], right: [] },
            parents: ['ssgh'],
            children: ['u0x9'],
            name: ['茘景', 'Lai King'],
            change_type: 'int2',
            interchange: [[['hongkong', 'tcl', '#F38B00', '東涌綫', 'Tung Chung Line']]],
        },
        ssgh: {
            branch: { left: [], right: [] },
            parents: ['2s1s'],
            children: ['h7hm'],
            name: ['葵芳', 'Kwai Fong'],
            change_type: 'none',
        },
        '2s1s': {
            branch: { left: [], right: [] },
            parents: ['86ux'],
            children: ['ssgh'],
            name: ['葵興', 'Kwai Hing'],
            change_type: 'none',
        },
        '86ux': {
            branch: { left: [], right: [] },
            parents: ['43sy'],
            children: ['2s1s'],
            name: ['大窩口', 'Tai Wo Hau'],
            change_type: 'none',
        },
        '43sy': {
            branch: { left: [], right: [] },
            parents: ['linestart'],
            children: ['86ux'],
            name: ['荃灣', 'Tsuen Wan'],
            change_type: 'none',
        },
    },
    line_name: ['荃灣綫', 'Tsuen Wan Line'],
    dest_legacy: false,
    char_form: 'trad',
};

export default params;
