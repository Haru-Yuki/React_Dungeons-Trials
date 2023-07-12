export const ExpansionFilterData = {
    duties: [
        {
            filterName: 'Show All',
            value: 'ALL',
            key: 'ef1'
        },
        {
            filterName: 'ARR',
            value: 'ARR',
            key: 'ef2'
        },
        {
            filterName: 'Heavensward',
            value: 'Heavensward',
            key: 'ef3'
        },
        {
            filterName: 'Stormblood',
            value: 'Stormblood',
            key: 'ef4'
        },
        {
            filterName: 'Shadowbringers',
            value: 'Shadowbringers',
            key: 'ef5'
        },
        {
            filterName: 'Endwalker',
            value: 'Endwalker',
            key: 'ef6'
        }
    ],
    quests: {
        Trials: [
            {
                filterName: 'Primal Quests',
                value: 'Primal',
                key: 'ef7'
            },
            {
                filterName: 'Warring Triad',
                value: 'Warring Triad',
                key: 'ef8'
            },
            {
                filterName: 'The Four Lords',
                value: 'The Four Lords',
                key: 'ef9'
            },,
            {
                filterName: 'The Sorrow of Werlyt',
                value: 'The Sorrow of Werlyt',
                key: 'ef10'
            },
        ]
    }
};

export const DutiesFilterData = {
    duties: [
        {
            dutyType: 'Dungeons',
            value: 'Dungeons',
            key: 'dt1'
        },
        {
            dutyType: 'Trials',
            value: 'Trials',
            key: 'dt2'
        },
        {
            dutyType: 'Trials (Extreme)',
            value: 'Trials-extreme',
            key: 'dt2e'
        },
        {
            dutyType: 'Normal Raids',
            value: 'NormalRaids',
            key: 'dt3'
        },
        {
            dutyType: 'Normal Raids (Savage)',
            value: 'NormalRaids-savage',
            key: 'dt3e'
        },
        {
            dutyType: 'Alliance Raids',
            value: 'AllianceRaids',
            key: 'dt4'
        }
    ],
    quests: [
        {
            dutyType: 'Trials & Dungeons',
            value: 'Trials',
            key: 'dt2'
        },
        {
            dutyType: 'Normal Raids',
            value: 'NormalRaids',
            key: 'dt3'
        },
        {
            dutyType: 'Alliance Raids',
            value: 'AllianceRaids',
            key: 'dt4'
        }
    ]
};

export const SortFilterData = [
    {
        sortOption: 'Level ↓',
        value: 'desc',
        key: 'sort1'
    },
    {
        sortOption: 'Level ↑',
        value: 'asc',
        key: 'sort2'
    }
];