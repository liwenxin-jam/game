var CONFIG = CONFIG || {};

CONFIG.DEBUG_FLAG       = 0;
CONFIG.DEBUG_STAGE_NUM  = 4;
CONFIG.BGM_VOLUME       = 1;
CONFIG.SE_VOLUME        = 0.8;

CONFIG.MAX_STAGE_NUMBER = 7;
CONFIG.PLAYER_OCCUPY_POWER = 0.09;
CONFIG.ENEMY_OCCUPY_POWER  = 0.15;



CONFIG.COLLEGUE_MAX_CNT = 30;
CONFIG.ENEMY_MAX_CNT    = 30;

//bullet
CONFIG.BULLET_EFFECT_TIME = 45;
CONFIG.BULLET_SPEED       = 12;

//
CONFIG.UI_DROW_ORDER = 99999;

//storagegy
CONFIG.DEFAULT_STORATEGY_CODE = 1;

//map
CONFIG.MAP_WIDHT   = 1000;
CONFIG.MAP_HEIGHT  = 1000;

CONFIG.DEFAULT_SCROLL_TYPE = 1; //1:player 2:user

CONFIG.PLAYER_AND_ENEMY_KNOCK_BAKC_RANGE        = 30;
CONFIG.COLLEAGUE_AND_COLLEAGUE_KNOCK_BAKC_RANGE = 30;
CONFIG.PLAYER_AND_COLLEAGUE_KNOCK_BACK_RANGE    = 50;

CONFIG.STAGE_BASE = [
    0,0,0,0,1,0,0,0,0,
     0,0,0,1,1,0,0,0,0,
    0,0,0,1,1,1,0,0,0,
     0,0,1,1,1,1,0,0,0,
    0,0,1,1,1,1,1,0,0,
     0,0,1,1,1,1,0,0,0,
    0,0,0,1,1,1,0,0,0,
     0,0,0,1,1,0,0,0,0,
    0,0,0,0,1,0,0,0,0
];
