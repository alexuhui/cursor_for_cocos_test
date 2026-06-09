'use strict';

const PROJECT = 'D:/client/CocosCreator/cursor_for_cocos_test';

global.Editor = {
    Project: { path: PROJECT },
};

const assetUtils = require('C:/Users/JOYY/.CocosCreator/packages/ai_prefab/lib/asset-utils');

const TEXTURE = 'db://assets/resources/texture/rank';
const SCRIPT_VIEW = 'db://assets/script/rank/RankSettlementView.ts';
const SCRIPT_LOGIC = 'db://assets/script/rank/RankSettlement.ts';

const rootNode = {
    name: 'RankSettlementPopup',
    width: 720,
    height: 1080,
    children: [
        {
            name: 'bgPanel',
            type: 'sprite',
            x: -7,
            y: -24,
            width: 585,
            height: 703,
            spriteFrameUrl: `${TEXTURE}/bg_panel_purple.png`,
            sizeMode: 1,
            children: [
                {
                    name: 'titleLabel',
                    type: 'label',
                    x: 0,
                    y: 183,
                    text: 'Congratulations',
                    fontSize: 40,
                    lineHeight: 44,
                    horizontalAlign: 1,
                    verticalAlign: 1,
                    color: { r: 255, g: 233, b: 153 },
                },
                {
                    name: 'decoBar',
                    type: 'sprite',
                    x: 0,
                    y: 155,
                    width: 400,
                    height: 19,
                    spriteFrameUrl: `${TEXTURE}/deco_bar.png`,
                    sizeMode: 1,
                },
                {
                    name: 'iconDiamond',
                    type: 'sprite',
                    x: 0,
                    y: 60,
                    width: 115,
                    height: 100,
                    spriteFrameUrl: `${TEXTURE}/icon_diamond.png`,
                    sizeMode: 1,
                },
                {
                    name: 'rewardLabel',
                    type: 'label',
                    x: 0,
                    y: -98,
                    text: '+0',
                    fontSize: 52,
                    lineHeight: 56,
                    horizontalAlign: 1,
                    verticalAlign: 1,
                    color: { r: 255, g: 233, b: 153 },
                },
                {
                    name: 'okBtn',
                    type: 'sprite',
                    x: 0,
                    y: -218,
                    width: 320,
                    height: 106,
                    spriteFrameUrl: `${TEXTURE}/btn_ok_bg.png`,
                    sizeMode: 1,
                    children: [
                        {
                            name: 'okLabel',
                            type: 'label',
                            x: 0,
                            y: 0,
                            text: 'Ok',
                            fontSize: 40,
                            lineHeight: 44,
                            horizontalAlign: 1,
                            verticalAlign: 1,
                            color: { r: 255, g: 255, b: 255 },
                            bold: true,
                        },
                    ],
                },
            ],
        },
    ],
    scripts: [
        {
            scriptUrl: SCRIPT_VIEW,
            props: {
                titleLabelNode: 'titleLabel',
                rewardLabelNode: 'rewardLabel',
                okBtn: 'okBtn',
                bgPanel: 'bgPanel',
            },
        },
        {
            scriptUrl: SCRIPT_LOGIC,
            props: {},
        },
    ],
};

const result = assetUtils.writePrefab({
    outputUrl: 'db://assets/resources/prefab/rank/RankSettlementPopup.prefab',
    root: rootNode,
});

console.log(JSON.stringify(result, null, 2));
