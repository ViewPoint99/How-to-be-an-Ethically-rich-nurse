gdjs.StartCode = {};
gdjs.StartCode.localVariables = [];
gdjs.StartCode.idToCallbackMap = new Map();
gdjs.StartCode.GDLarge_9595Play_9595ButtonObjects1= [];
gdjs.StartCode.GDLarge_9595Play_9595ButtonObjects2= [];
gdjs.StartCode.GDLarge_9595Exit_9595ButtonObjects1= [];
gdjs.StartCode.GDLarge_9595Exit_9595ButtonObjects2= [];
gdjs.StartCode.GDBackground_95951Objects1= [];
gdjs.StartCode.GDBackground_95951Objects2= [];
gdjs.StartCode.GDNewSpriteObjects1= [];
gdjs.StartCode.GDNewSpriteObjects2= [];
gdjs.StartCode.GDVery_9595Happy_9595Emote_9595MidObjects1= [];
gdjs.StartCode.GDVery_9595Happy_9595Emote_9595MidObjects2= [];
gdjs.StartCode.GDWorried_9595Emote_9595MidObjects1= [];
gdjs.StartCode.GDWorried_9595Emote_9595MidObjects2= [];
gdjs.StartCode.GDDoh_9595Emote_9595MidObjects1= [];
gdjs.StartCode.GDDoh_9595Emote_9595MidObjects2= [];
gdjs.StartCode.GDTryAgain_9595BubbleObjects1= [];
gdjs.StartCode.GDTryAgain_9595BubbleObjects2= [];
gdjs.StartCode.GDTry_9595Again_9595Objects1= [];
gdjs.StartCode.GDTry_9595Again_9595Objects2= [];
gdjs.StartCode.GDYesObjects1= [];
gdjs.StartCode.GDYesObjects2= [];
gdjs.StartCode.GDNoObjects1= [];
gdjs.StartCode.GDNoObjects2= [];
gdjs.StartCode.GDYes2Objects1= [];
gdjs.StartCode.GDYes2Objects2= [];
gdjs.StartCode.GDNo2Objects1= [];
gdjs.StartCode.GDNo2Objects2= [];
gdjs.StartCode.GDTalking_9595Emote_9595MidObjects1= [];
gdjs.StartCode.GDTalking_9595Emote_9595MidObjects2= [];


gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDLarge_95959595Play_95959595ButtonObjects1Objects = Hashtable.newFrom({"Large_Play_Button": gdjs.StartCode.GDLarge_9595Play_9595ButtonObjects1});
gdjs.StartCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


};gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDLarge_95959595Exit_95959595ButtonObjects1Objects = Hashtable.newFrom({"Large_Exit_Button": gdjs.StartCode.GDLarge_9595Exit_9595ButtonObjects1});
gdjs.StartCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


};gdjs.StartCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Large_Play_Button"), gdjs.StartCode.GDLarge_9595Play_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDLarge_95959595Play_95959595ButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18261852);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene 1", false);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "pop-cartoon-328167.mp3", false, 100, 1);
}
{gdjs.evtTools.sound.playMusic(runtimeScene, "Who Wants to be a Millionaire Suspense - Sound Effect (HD).mp3", true, 100, 1);
}

{ //Subevents
gdjs.StartCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Large_Exit_Button"), gdjs.StartCode.GDLarge_9595Exit_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDLarge_95959595Exit_95959595ButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18263052);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "pop-cartoon-328167.mp3", false, 100, 1);
}

{ //Subevents
gdjs.StartCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartCode.GDLarge_9595Play_9595ButtonObjects1.length = 0;
gdjs.StartCode.GDLarge_9595Play_9595ButtonObjects2.length = 0;
gdjs.StartCode.GDLarge_9595Exit_9595ButtonObjects1.length = 0;
gdjs.StartCode.GDLarge_9595Exit_9595ButtonObjects2.length = 0;
gdjs.StartCode.GDBackground_95951Objects1.length = 0;
gdjs.StartCode.GDBackground_95951Objects2.length = 0;
gdjs.StartCode.GDNewSpriteObjects1.length = 0;
gdjs.StartCode.GDNewSpriteObjects2.length = 0;
gdjs.StartCode.GDVery_9595Happy_9595Emote_9595MidObjects1.length = 0;
gdjs.StartCode.GDVery_9595Happy_9595Emote_9595MidObjects2.length = 0;
gdjs.StartCode.GDWorried_9595Emote_9595MidObjects1.length = 0;
gdjs.StartCode.GDWorried_9595Emote_9595MidObjects2.length = 0;
gdjs.StartCode.GDDoh_9595Emote_9595MidObjects1.length = 0;
gdjs.StartCode.GDDoh_9595Emote_9595MidObjects2.length = 0;
gdjs.StartCode.GDTryAgain_9595BubbleObjects1.length = 0;
gdjs.StartCode.GDTryAgain_9595BubbleObjects2.length = 0;
gdjs.StartCode.GDTry_9595Again_9595Objects1.length = 0;
gdjs.StartCode.GDTry_9595Again_9595Objects2.length = 0;
gdjs.StartCode.GDYesObjects1.length = 0;
gdjs.StartCode.GDYesObjects2.length = 0;
gdjs.StartCode.GDNoObjects1.length = 0;
gdjs.StartCode.GDNoObjects2.length = 0;
gdjs.StartCode.GDYes2Objects1.length = 0;
gdjs.StartCode.GDYes2Objects2.length = 0;
gdjs.StartCode.GDNo2Objects1.length = 0;
gdjs.StartCode.GDNo2Objects2.length = 0;
gdjs.StartCode.GDTalking_9595Emote_9595MidObjects1.length = 0;
gdjs.StartCode.GDTalking_9595Emote_9595MidObjects2.length = 0;

gdjs.StartCode.eventsList2(runtimeScene);
gdjs.StartCode.GDLarge_9595Play_9595ButtonObjects1.length = 0;
gdjs.StartCode.GDLarge_9595Play_9595ButtonObjects2.length = 0;
gdjs.StartCode.GDLarge_9595Exit_9595ButtonObjects1.length = 0;
gdjs.StartCode.GDLarge_9595Exit_9595ButtonObjects2.length = 0;
gdjs.StartCode.GDBackground_95951Objects1.length = 0;
gdjs.StartCode.GDBackground_95951Objects2.length = 0;
gdjs.StartCode.GDNewSpriteObjects1.length = 0;
gdjs.StartCode.GDNewSpriteObjects2.length = 0;
gdjs.StartCode.GDVery_9595Happy_9595Emote_9595MidObjects1.length = 0;
gdjs.StartCode.GDVery_9595Happy_9595Emote_9595MidObjects2.length = 0;
gdjs.StartCode.GDWorried_9595Emote_9595MidObjects1.length = 0;
gdjs.StartCode.GDWorried_9595Emote_9595MidObjects2.length = 0;
gdjs.StartCode.GDDoh_9595Emote_9595MidObjects1.length = 0;
gdjs.StartCode.GDDoh_9595Emote_9595MidObjects2.length = 0;
gdjs.StartCode.GDTryAgain_9595BubbleObjects1.length = 0;
gdjs.StartCode.GDTryAgain_9595BubbleObjects2.length = 0;
gdjs.StartCode.GDTry_9595Again_9595Objects1.length = 0;
gdjs.StartCode.GDTry_9595Again_9595Objects2.length = 0;
gdjs.StartCode.GDYesObjects1.length = 0;
gdjs.StartCode.GDYesObjects2.length = 0;
gdjs.StartCode.GDNoObjects1.length = 0;
gdjs.StartCode.GDNoObjects2.length = 0;
gdjs.StartCode.GDYes2Objects1.length = 0;
gdjs.StartCode.GDYes2Objects2.length = 0;
gdjs.StartCode.GDNo2Objects1.length = 0;
gdjs.StartCode.GDNo2Objects2.length = 0;
gdjs.StartCode.GDTalking_9595Emote_9595MidObjects1.length = 0;
gdjs.StartCode.GDTalking_9595Emote_9595MidObjects2.length = 0;


return;

}

gdjs['StartCode'] = gdjs.StartCode;
