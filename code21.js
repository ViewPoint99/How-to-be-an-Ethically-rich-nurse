gdjs.EndCode = {};
gdjs.EndCode.localVariables = [];
gdjs.EndCode.idToCallbackMap = new Map();
gdjs.EndCode.GDQuestionObjects1= [];
gdjs.EndCode.GDQuestionObjects2= [];
gdjs.EndCode.GDAObjects1= [];
gdjs.EndCode.GDAObjects2= [];
gdjs.EndCode.GDBObjects1= [];
gdjs.EndCode.GDBObjects2= [];
gdjs.EndCode.GDCObjects1= [];
gdjs.EndCode.GDCObjects2= [];
gdjs.EndCode.GDDObjects1= [];
gdjs.EndCode.GDDObjects2= [];
gdjs.EndCode.GDQuestion_9595TxtObjects1= [];
gdjs.EndCode.GDQuestion_9595TxtObjects2= [];
gdjs.EndCode.GDB2Objects1= [];
gdjs.EndCode.GDB2Objects2= [];
gdjs.EndCode.GDC2Objects1= [];
gdjs.EndCode.GDC2Objects2= [];
gdjs.EndCode.GDD2Objects1= [];
gdjs.EndCode.GDD2Objects2= [];
gdjs.EndCode.GDA2Objects1= [];
gdjs.EndCode.GDA2Objects2= [];
gdjs.EndCode.GDNewPanelSpriteObjects1= [];
gdjs.EndCode.GDNewPanelSpriteObjects2= [];
gdjs.EndCode.GDenderObjects1= [];
gdjs.EndCode.GDenderObjects2= [];
gdjs.EndCode.GDNewPanelSprite2Objects1= [];
gdjs.EndCode.GDNewPanelSprite2Objects2= [];
gdjs.EndCode.GDNewBBTextObjects1= [];
gdjs.EndCode.GDNewBBTextObjects2= [];
gdjs.EndCode.GDdoneeeeeeeeeeeeeObjects1= [];
gdjs.EndCode.GDdoneeeeeeeeeeeeeObjects2= [];
gdjs.EndCode.GDBackground_95951Objects1= [];
gdjs.EndCode.GDBackground_95951Objects2= [];
gdjs.EndCode.GDNewSpriteObjects1= [];
gdjs.EndCode.GDNewSpriteObjects2= [];
gdjs.EndCode.GDVery_9595Happy_9595Emote_9595MidObjects1= [];
gdjs.EndCode.GDVery_9595Happy_9595Emote_9595MidObjects2= [];
gdjs.EndCode.GDWorried_9595Emote_9595MidObjects1= [];
gdjs.EndCode.GDWorried_9595Emote_9595MidObjects2= [];
gdjs.EndCode.GDDoh_9595Emote_9595MidObjects1= [];
gdjs.EndCode.GDDoh_9595Emote_9595MidObjects2= [];
gdjs.EndCode.GDTryAgain_9595BubbleObjects1= [];
gdjs.EndCode.GDTryAgain_9595BubbleObjects2= [];
gdjs.EndCode.GDTry_9595Again_9595Objects1= [];
gdjs.EndCode.GDTry_9595Again_9595Objects2= [];
gdjs.EndCode.GDYesObjects1= [];
gdjs.EndCode.GDYesObjects2= [];
gdjs.EndCode.GDNoObjects1= [];
gdjs.EndCode.GDNoObjects2= [];
gdjs.EndCode.GDYes2Objects1= [];
gdjs.EndCode.GDYes2Objects2= [];
gdjs.EndCode.GDNo2Objects1= [];
gdjs.EndCode.GDNo2Objects2= [];
gdjs.EndCode.GDTalking_9595Emote_9595MidObjects1= [];
gdjs.EndCode.GDTalking_9595Emote_9595MidObjects2= [];


gdjs.EndCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("doneeeeeeeeeeeee"), gdjs.EndCode.GDdoneeeeeeeeeeeeeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.EndCode.GDdoneeeeeeeeeeeeeObjects1.length;i<l;++i) {
    if ( gdjs.EndCode.GDdoneeeeeeeeeeeeeObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.EndCode.GDdoneeeeeeeeeeeeeObjects1[k] = gdjs.EndCode.GDdoneeeeeeeeeeeeeObjects1[i];
        ++k;
    }
}
gdjs.EndCode.GDdoneeeeeeeeeeeeeObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start", false);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "pop-cartoon-328167.mp3", false, 100, 1);
}
}

}


};

gdjs.EndCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndCode.GDQuestionObjects1.length = 0;
gdjs.EndCode.GDQuestionObjects2.length = 0;
gdjs.EndCode.GDAObjects1.length = 0;
gdjs.EndCode.GDAObjects2.length = 0;
gdjs.EndCode.GDBObjects1.length = 0;
gdjs.EndCode.GDBObjects2.length = 0;
gdjs.EndCode.GDCObjects1.length = 0;
gdjs.EndCode.GDCObjects2.length = 0;
gdjs.EndCode.GDDObjects1.length = 0;
gdjs.EndCode.GDDObjects2.length = 0;
gdjs.EndCode.GDQuestion_9595TxtObjects1.length = 0;
gdjs.EndCode.GDQuestion_9595TxtObjects2.length = 0;
gdjs.EndCode.GDB2Objects1.length = 0;
gdjs.EndCode.GDB2Objects2.length = 0;
gdjs.EndCode.GDC2Objects1.length = 0;
gdjs.EndCode.GDC2Objects2.length = 0;
gdjs.EndCode.GDD2Objects1.length = 0;
gdjs.EndCode.GDD2Objects2.length = 0;
gdjs.EndCode.GDA2Objects1.length = 0;
gdjs.EndCode.GDA2Objects2.length = 0;
gdjs.EndCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.EndCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.EndCode.GDenderObjects1.length = 0;
gdjs.EndCode.GDenderObjects2.length = 0;
gdjs.EndCode.GDNewPanelSprite2Objects1.length = 0;
gdjs.EndCode.GDNewPanelSprite2Objects2.length = 0;
gdjs.EndCode.GDNewBBTextObjects1.length = 0;
gdjs.EndCode.GDNewBBTextObjects2.length = 0;
gdjs.EndCode.GDdoneeeeeeeeeeeeeObjects1.length = 0;
gdjs.EndCode.GDdoneeeeeeeeeeeeeObjects2.length = 0;
gdjs.EndCode.GDBackground_95951Objects1.length = 0;
gdjs.EndCode.GDBackground_95951Objects2.length = 0;
gdjs.EndCode.GDNewSpriteObjects1.length = 0;
gdjs.EndCode.GDNewSpriteObjects2.length = 0;
gdjs.EndCode.GDVery_9595Happy_9595Emote_9595MidObjects1.length = 0;
gdjs.EndCode.GDVery_9595Happy_9595Emote_9595MidObjects2.length = 0;
gdjs.EndCode.GDWorried_9595Emote_9595MidObjects1.length = 0;
gdjs.EndCode.GDWorried_9595Emote_9595MidObjects2.length = 0;
gdjs.EndCode.GDDoh_9595Emote_9595MidObjects1.length = 0;
gdjs.EndCode.GDDoh_9595Emote_9595MidObjects2.length = 0;
gdjs.EndCode.GDTryAgain_9595BubbleObjects1.length = 0;
gdjs.EndCode.GDTryAgain_9595BubbleObjects2.length = 0;
gdjs.EndCode.GDTry_9595Again_9595Objects1.length = 0;
gdjs.EndCode.GDTry_9595Again_9595Objects2.length = 0;
gdjs.EndCode.GDYesObjects1.length = 0;
gdjs.EndCode.GDYesObjects2.length = 0;
gdjs.EndCode.GDNoObjects1.length = 0;
gdjs.EndCode.GDNoObjects2.length = 0;
gdjs.EndCode.GDYes2Objects1.length = 0;
gdjs.EndCode.GDYes2Objects2.length = 0;
gdjs.EndCode.GDNo2Objects1.length = 0;
gdjs.EndCode.GDNo2Objects2.length = 0;
gdjs.EndCode.GDTalking_9595Emote_9595MidObjects1.length = 0;
gdjs.EndCode.GDTalking_9595Emote_9595MidObjects2.length = 0;

gdjs.EndCode.eventsList0(runtimeScene);
gdjs.EndCode.GDQuestionObjects1.length = 0;
gdjs.EndCode.GDQuestionObjects2.length = 0;
gdjs.EndCode.GDAObjects1.length = 0;
gdjs.EndCode.GDAObjects2.length = 0;
gdjs.EndCode.GDBObjects1.length = 0;
gdjs.EndCode.GDBObjects2.length = 0;
gdjs.EndCode.GDCObjects1.length = 0;
gdjs.EndCode.GDCObjects2.length = 0;
gdjs.EndCode.GDDObjects1.length = 0;
gdjs.EndCode.GDDObjects2.length = 0;
gdjs.EndCode.GDQuestion_9595TxtObjects1.length = 0;
gdjs.EndCode.GDQuestion_9595TxtObjects2.length = 0;
gdjs.EndCode.GDB2Objects1.length = 0;
gdjs.EndCode.GDB2Objects2.length = 0;
gdjs.EndCode.GDC2Objects1.length = 0;
gdjs.EndCode.GDC2Objects2.length = 0;
gdjs.EndCode.GDD2Objects1.length = 0;
gdjs.EndCode.GDD2Objects2.length = 0;
gdjs.EndCode.GDA2Objects1.length = 0;
gdjs.EndCode.GDA2Objects2.length = 0;
gdjs.EndCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.EndCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.EndCode.GDenderObjects1.length = 0;
gdjs.EndCode.GDenderObjects2.length = 0;
gdjs.EndCode.GDNewPanelSprite2Objects1.length = 0;
gdjs.EndCode.GDNewPanelSprite2Objects2.length = 0;
gdjs.EndCode.GDNewBBTextObjects1.length = 0;
gdjs.EndCode.GDNewBBTextObjects2.length = 0;
gdjs.EndCode.GDdoneeeeeeeeeeeeeObjects1.length = 0;
gdjs.EndCode.GDdoneeeeeeeeeeeeeObjects2.length = 0;
gdjs.EndCode.GDBackground_95951Objects1.length = 0;
gdjs.EndCode.GDBackground_95951Objects2.length = 0;
gdjs.EndCode.GDNewSpriteObjects1.length = 0;
gdjs.EndCode.GDNewSpriteObjects2.length = 0;
gdjs.EndCode.GDVery_9595Happy_9595Emote_9595MidObjects1.length = 0;
gdjs.EndCode.GDVery_9595Happy_9595Emote_9595MidObjects2.length = 0;
gdjs.EndCode.GDWorried_9595Emote_9595MidObjects1.length = 0;
gdjs.EndCode.GDWorried_9595Emote_9595MidObjects2.length = 0;
gdjs.EndCode.GDDoh_9595Emote_9595MidObjects1.length = 0;
gdjs.EndCode.GDDoh_9595Emote_9595MidObjects2.length = 0;
gdjs.EndCode.GDTryAgain_9595BubbleObjects1.length = 0;
gdjs.EndCode.GDTryAgain_9595BubbleObjects2.length = 0;
gdjs.EndCode.GDTry_9595Again_9595Objects1.length = 0;
gdjs.EndCode.GDTry_9595Again_9595Objects2.length = 0;
gdjs.EndCode.GDYesObjects1.length = 0;
gdjs.EndCode.GDYesObjects2.length = 0;
gdjs.EndCode.GDNoObjects1.length = 0;
gdjs.EndCode.GDNoObjects2.length = 0;
gdjs.EndCode.GDYes2Objects1.length = 0;
gdjs.EndCode.GDYes2Objects2.length = 0;
gdjs.EndCode.GDNo2Objects1.length = 0;
gdjs.EndCode.GDNo2Objects2.length = 0;
gdjs.EndCode.GDTalking_9595Emote_9595MidObjects1.length = 0;
gdjs.EndCode.GDTalking_9595Emote_9595MidObjects2.length = 0;


return;

}

gdjs['EndCode'] = gdjs.EndCode;
