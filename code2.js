gdjs.Scene2Code = {};
gdjs.Scene2Code.localVariables = [];
gdjs.Scene2Code.idToCallbackMap = new Map();
gdjs.Scene2Code.GDQuestionObjects1= [];
gdjs.Scene2Code.GDQuestionObjects2= [];
gdjs.Scene2Code.GDAObjects1= [];
gdjs.Scene2Code.GDAObjects2= [];
gdjs.Scene2Code.GDBObjects1= [];
gdjs.Scene2Code.GDBObjects2= [];
gdjs.Scene2Code.GDCObjects1= [];
gdjs.Scene2Code.GDCObjects2= [];
gdjs.Scene2Code.GDDObjects1= [];
gdjs.Scene2Code.GDDObjects2= [];
gdjs.Scene2Code.GDQuestion_9595TxtObjects1= [];
gdjs.Scene2Code.GDQuestion_9595TxtObjects2= [];
gdjs.Scene2Code.GDB2Objects1= [];
gdjs.Scene2Code.GDB2Objects2= [];
gdjs.Scene2Code.GDC2Objects1= [];
gdjs.Scene2Code.GDC2Objects2= [];
gdjs.Scene2Code.GDD2Objects1= [];
gdjs.Scene2Code.GDD2Objects2= [];
gdjs.Scene2Code.GDA2Objects1= [];
gdjs.Scene2Code.GDA2Objects2= [];
gdjs.Scene2Code.GDNewPanelSpriteObjects1= [];
gdjs.Scene2Code.GDNewPanelSpriteObjects2= [];
gdjs.Scene2Code.GDBackground_95951Objects1= [];
gdjs.Scene2Code.GDBackground_95951Objects2= [];
gdjs.Scene2Code.GDNewSpriteObjects1= [];
gdjs.Scene2Code.GDNewSpriteObjects2= [];
gdjs.Scene2Code.GDVery_9595Happy_9595Emote_9595MidObjects1= [];
gdjs.Scene2Code.GDVery_9595Happy_9595Emote_9595MidObjects2= [];
gdjs.Scene2Code.GDWorried_9595Emote_9595MidObjects1= [];
gdjs.Scene2Code.GDWorried_9595Emote_9595MidObjects2= [];
gdjs.Scene2Code.GDDoh_9595Emote_9595MidObjects1= [];
gdjs.Scene2Code.GDDoh_9595Emote_9595MidObjects2= [];
gdjs.Scene2Code.GDTryAgain_9595BubbleObjects1= [];
gdjs.Scene2Code.GDTryAgain_9595BubbleObjects2= [];
gdjs.Scene2Code.GDTry_9595Again_9595Objects1= [];
gdjs.Scene2Code.GDTry_9595Again_9595Objects2= [];
gdjs.Scene2Code.GDYesObjects1= [];
gdjs.Scene2Code.GDYesObjects2= [];
gdjs.Scene2Code.GDNoObjects1= [];
gdjs.Scene2Code.GDNoObjects2= [];
gdjs.Scene2Code.GDYes2Objects1= [];
gdjs.Scene2Code.GDYes2Objects2= [];
gdjs.Scene2Code.GDNo2Objects1= [];
gdjs.Scene2Code.GDNo2Objects2= [];
gdjs.Scene2Code.GDTalking_9595Emote_9595MidObjects1= [];
gdjs.Scene2Code.GDTalking_9595Emote_9595MidObjects2= [];


gdjs.Scene2Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("A"), gdjs.Scene2Code.GDAObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene2Code.GDAObjects1.length;i<l;++i) {
    if ( gdjs.Scene2Code.GDAObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Scene2Code.GDAObjects1[k] = gdjs.Scene2Code.GDAObjects1[i];
        ++k;
    }
}
gdjs.Scene2Code.GDAObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "pop-cartoon-328167.mp3", false, 100, 1);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("B"), gdjs.Scene2Code.GDBObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene2Code.GDBObjects1.length;i<l;++i) {
    if ( gdjs.Scene2Code.GDBObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Scene2Code.GDBObjects1[k] = gdjs.Scene2Code.GDBObjects1[i];
        ++k;
    }
}
gdjs.Scene2Code.GDBObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "pop-cartoon-328167.mp3", false, 100, 1);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("C"), gdjs.Scene2Code.GDCObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene2Code.GDCObjects1.length;i<l;++i) {
    if ( gdjs.Scene2Code.GDCObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Scene2Code.GDCObjects1[k] = gdjs.Scene2Code.GDCObjects1[i];
        ++k;
    }
}
gdjs.Scene2Code.GDCObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "pop-cartoon-328167.mp3", false, 100, 1);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene3", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("D"), gdjs.Scene2Code.GDDObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene2Code.GDDObjects1.length;i<l;++i) {
    if ( gdjs.Scene2Code.GDDObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Scene2Code.GDDObjects1[k] = gdjs.Scene2Code.GDDObjects1[i];
        ++k;
    }
}
gdjs.Scene2Code.GDDObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "pop-cartoon-328167.mp3", false, 100, 1);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 3);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Doh_Emote_Mid"), gdjs.Scene2Code.GDDoh_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("No"), gdjs.Scene2Code.GDNoObjects1);
gdjs.copyArray(runtimeScene.getObjects("No2"), gdjs.Scene2Code.GDNo2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Talking_Emote_Mid"), gdjs.Scene2Code.GDTalking_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("TryAgain_Bubble"), gdjs.Scene2Code.GDTryAgain_9595BubbleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Try_Again_"), gdjs.Scene2Code.GDTry_9595Again_9595Objects1);
gdjs.copyArray(runtimeScene.getObjects("Very_Happy_Emote_Mid"), gdjs.Scene2Code.GDVery_9595Happy_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("Worried_Emote_Mid"), gdjs.Scene2Code.GDWorried_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("Yes"), gdjs.Scene2Code.GDYesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Yes2"), gdjs.Scene2Code.GDYes2Objects1);
{for(var i = 0, len = gdjs.Scene2Code.GDVery_9595Happy_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDVery_9595Happy_9595Emote_9595MidObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scene2Code.GDWorried_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDWorried_9595Emote_9595MidObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene2Code.GDDoh_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDDoh_9595Emote_9595MidObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene2Code.GDTalking_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDTalking_9595Emote_9595MidObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene2Code.GDTryAgain_9595BubbleObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDTryAgain_9595BubbleObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene2Code.GDTry_9595Again_9595Objects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDTry_9595Again_9595Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene2Code.GDYesObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDYesObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene2Code.GDNoObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDNoObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene2Code.GDYes2Objects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDYes2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene2Code.GDNo2Objects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDNo2Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Doh_Emote_Mid"), gdjs.Scene2Code.GDDoh_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("No"), gdjs.Scene2Code.GDNoObjects1);
gdjs.copyArray(runtimeScene.getObjects("No2"), gdjs.Scene2Code.GDNo2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Talking_Emote_Mid"), gdjs.Scene2Code.GDTalking_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("TryAgain_Bubble"), gdjs.Scene2Code.GDTryAgain_9595BubbleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Try_Again_"), gdjs.Scene2Code.GDTry_9595Again_9595Objects1);
gdjs.copyArray(runtimeScene.getObjects("Very_Happy_Emote_Mid"), gdjs.Scene2Code.GDVery_9595Happy_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("Worried_Emote_Mid"), gdjs.Scene2Code.GDWorried_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("Yes"), gdjs.Scene2Code.GDYesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Yes2"), gdjs.Scene2Code.GDYes2Objects1);
{for(var i = 0, len = gdjs.Scene2Code.GDDoh_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDDoh_9595Emote_9595MidObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene2Code.GDWorried_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDWorried_9595Emote_9595MidObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scene2Code.GDVery_9595Happy_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDVery_9595Happy_9595Emote_9595MidObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene2Code.GDTalking_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDTalking_9595Emote_9595MidObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene2Code.GDTryAgain_9595BubbleObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDTryAgain_9595BubbleObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene2Code.GDTry_9595Again_9595Objects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDTry_9595Again_9595Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene2Code.GDYesObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDYesObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene2Code.GDNoObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDNoObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene2Code.GDYes2Objects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDYes2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene2Code.GDNo2Objects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDNo2Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Doh_Emote_Mid"), gdjs.Scene2Code.GDDoh_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("No"), gdjs.Scene2Code.GDNoObjects1);
gdjs.copyArray(runtimeScene.getObjects("No2"), gdjs.Scene2Code.GDNo2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Talking_Emote_Mid"), gdjs.Scene2Code.GDTalking_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("TryAgain_Bubble"), gdjs.Scene2Code.GDTryAgain_9595BubbleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Try_Again_"), gdjs.Scene2Code.GDTry_9595Again_9595Objects1);
gdjs.copyArray(runtimeScene.getObjects("Very_Happy_Emote_Mid"), gdjs.Scene2Code.GDVery_9595Happy_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("Worried_Emote_Mid"), gdjs.Scene2Code.GDWorried_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("Yes"), gdjs.Scene2Code.GDYesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Yes2"), gdjs.Scene2Code.GDYes2Objects1);
{for(var i = 0, len = gdjs.Scene2Code.GDDoh_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDDoh_9595Emote_9595MidObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scene2Code.GDWorried_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDWorried_9595Emote_9595MidObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene2Code.GDVery_9595Happy_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDVery_9595Happy_9595Emote_9595MidObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene2Code.GDTalking_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDTalking_9595Emote_9595MidObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene2Code.GDTryAgain_9595BubbleObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDTryAgain_9595BubbleObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene2Code.GDTry_9595Again_9595Objects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDTry_9595Again_9595Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene2Code.GDYesObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDYesObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene2Code.GDNoObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDNoObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene2Code.GDYes2Objects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDYes2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene2Code.GDNo2Objects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDNo2Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Doh_Emote_Mid"), gdjs.Scene2Code.GDDoh_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("No"), gdjs.Scene2Code.GDNoObjects1);
gdjs.copyArray(runtimeScene.getObjects("No2"), gdjs.Scene2Code.GDNo2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Talking_Emote_Mid"), gdjs.Scene2Code.GDTalking_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("TryAgain_Bubble"), gdjs.Scene2Code.GDTryAgain_9595BubbleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Try_Again_"), gdjs.Scene2Code.GDTry_9595Again_9595Objects1);
gdjs.copyArray(runtimeScene.getObjects("Very_Happy_Emote_Mid"), gdjs.Scene2Code.GDVery_9595Happy_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("Worried_Emote_Mid"), gdjs.Scene2Code.GDWorried_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("Yes"), gdjs.Scene2Code.GDYesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Yes2"), gdjs.Scene2Code.GDYes2Objects1);
{for(var i = 0, len = gdjs.Scene2Code.GDVery_9595Happy_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDVery_9595Happy_9595Emote_9595MidObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene2Code.GDWorried_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDWorried_9595Emote_9595MidObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene2Code.GDDoh_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDDoh_9595Emote_9595MidObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scene2Code.GDTalking_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDTalking_9595Emote_9595MidObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene2Code.GDTryAgain_9595BubbleObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDTryAgain_9595BubbleObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scene2Code.GDTry_9595Again_9595Objects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDTry_9595Again_9595Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scene2Code.GDYesObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDYesObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scene2Code.GDNoObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDNoObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scene2Code.GDYes2Objects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDYes2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scene2Code.GDNo2Objects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDNo2Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Yes"), gdjs.Scene2Code.GDYesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene2Code.GDYesObjects1.length;i<l;++i) {
    if ( gdjs.Scene2Code.GDYesObjects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Scene2Code.GDYesObjects1[k] = gdjs.Scene2Code.GDYesObjects1[i];
        ++k;
    }
}
gdjs.Scene2Code.GDYesObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(3);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(3);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start", false);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "pop-cartoon-328167.mp3", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("No"), gdjs.Scene2Code.GDNoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene2Code.GDNoObjects1.length;i<l;++i) {
    if ( gdjs.Scene2Code.GDNoObjects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Scene2Code.GDNoObjects1[k] = gdjs.Scene2Code.GDNoObjects1[i];
        ++k;
    }
}
gdjs.Scene2Code.GDNoObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "pop-cartoon-328167.mp3", false, 100, 1);
}
}

}


};

gdjs.Scene2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scene2Code.GDQuestionObjects1.length = 0;
gdjs.Scene2Code.GDQuestionObjects2.length = 0;
gdjs.Scene2Code.GDAObjects1.length = 0;
gdjs.Scene2Code.GDAObjects2.length = 0;
gdjs.Scene2Code.GDBObjects1.length = 0;
gdjs.Scene2Code.GDBObjects2.length = 0;
gdjs.Scene2Code.GDCObjects1.length = 0;
gdjs.Scene2Code.GDCObjects2.length = 0;
gdjs.Scene2Code.GDDObjects1.length = 0;
gdjs.Scene2Code.GDDObjects2.length = 0;
gdjs.Scene2Code.GDQuestion_9595TxtObjects1.length = 0;
gdjs.Scene2Code.GDQuestion_9595TxtObjects2.length = 0;
gdjs.Scene2Code.GDB2Objects1.length = 0;
gdjs.Scene2Code.GDB2Objects2.length = 0;
gdjs.Scene2Code.GDC2Objects1.length = 0;
gdjs.Scene2Code.GDC2Objects2.length = 0;
gdjs.Scene2Code.GDD2Objects1.length = 0;
gdjs.Scene2Code.GDD2Objects2.length = 0;
gdjs.Scene2Code.GDA2Objects1.length = 0;
gdjs.Scene2Code.GDA2Objects2.length = 0;
gdjs.Scene2Code.GDNewPanelSpriteObjects1.length = 0;
gdjs.Scene2Code.GDNewPanelSpriteObjects2.length = 0;
gdjs.Scene2Code.GDBackground_95951Objects1.length = 0;
gdjs.Scene2Code.GDBackground_95951Objects2.length = 0;
gdjs.Scene2Code.GDNewSpriteObjects1.length = 0;
gdjs.Scene2Code.GDNewSpriteObjects2.length = 0;
gdjs.Scene2Code.GDVery_9595Happy_9595Emote_9595MidObjects1.length = 0;
gdjs.Scene2Code.GDVery_9595Happy_9595Emote_9595MidObjects2.length = 0;
gdjs.Scene2Code.GDWorried_9595Emote_9595MidObjects1.length = 0;
gdjs.Scene2Code.GDWorried_9595Emote_9595MidObjects2.length = 0;
gdjs.Scene2Code.GDDoh_9595Emote_9595MidObjects1.length = 0;
gdjs.Scene2Code.GDDoh_9595Emote_9595MidObjects2.length = 0;
gdjs.Scene2Code.GDTryAgain_9595BubbleObjects1.length = 0;
gdjs.Scene2Code.GDTryAgain_9595BubbleObjects2.length = 0;
gdjs.Scene2Code.GDTry_9595Again_9595Objects1.length = 0;
gdjs.Scene2Code.GDTry_9595Again_9595Objects2.length = 0;
gdjs.Scene2Code.GDYesObjects1.length = 0;
gdjs.Scene2Code.GDYesObjects2.length = 0;
gdjs.Scene2Code.GDNoObjects1.length = 0;
gdjs.Scene2Code.GDNoObjects2.length = 0;
gdjs.Scene2Code.GDYes2Objects1.length = 0;
gdjs.Scene2Code.GDYes2Objects2.length = 0;
gdjs.Scene2Code.GDNo2Objects1.length = 0;
gdjs.Scene2Code.GDNo2Objects2.length = 0;
gdjs.Scene2Code.GDTalking_9595Emote_9595MidObjects1.length = 0;
gdjs.Scene2Code.GDTalking_9595Emote_9595MidObjects2.length = 0;

gdjs.Scene2Code.eventsList0(runtimeScene);
gdjs.Scene2Code.GDQuestionObjects1.length = 0;
gdjs.Scene2Code.GDQuestionObjects2.length = 0;
gdjs.Scene2Code.GDAObjects1.length = 0;
gdjs.Scene2Code.GDAObjects2.length = 0;
gdjs.Scene2Code.GDBObjects1.length = 0;
gdjs.Scene2Code.GDBObjects2.length = 0;
gdjs.Scene2Code.GDCObjects1.length = 0;
gdjs.Scene2Code.GDCObjects2.length = 0;
gdjs.Scene2Code.GDDObjects1.length = 0;
gdjs.Scene2Code.GDDObjects2.length = 0;
gdjs.Scene2Code.GDQuestion_9595TxtObjects1.length = 0;
gdjs.Scene2Code.GDQuestion_9595TxtObjects2.length = 0;
gdjs.Scene2Code.GDB2Objects1.length = 0;
gdjs.Scene2Code.GDB2Objects2.length = 0;
gdjs.Scene2Code.GDC2Objects1.length = 0;
gdjs.Scene2Code.GDC2Objects2.length = 0;
gdjs.Scene2Code.GDD2Objects1.length = 0;
gdjs.Scene2Code.GDD2Objects2.length = 0;
gdjs.Scene2Code.GDA2Objects1.length = 0;
gdjs.Scene2Code.GDA2Objects2.length = 0;
gdjs.Scene2Code.GDNewPanelSpriteObjects1.length = 0;
gdjs.Scene2Code.GDNewPanelSpriteObjects2.length = 0;
gdjs.Scene2Code.GDBackground_95951Objects1.length = 0;
gdjs.Scene2Code.GDBackground_95951Objects2.length = 0;
gdjs.Scene2Code.GDNewSpriteObjects1.length = 0;
gdjs.Scene2Code.GDNewSpriteObjects2.length = 0;
gdjs.Scene2Code.GDVery_9595Happy_9595Emote_9595MidObjects1.length = 0;
gdjs.Scene2Code.GDVery_9595Happy_9595Emote_9595MidObjects2.length = 0;
gdjs.Scene2Code.GDWorried_9595Emote_9595MidObjects1.length = 0;
gdjs.Scene2Code.GDWorried_9595Emote_9595MidObjects2.length = 0;
gdjs.Scene2Code.GDDoh_9595Emote_9595MidObjects1.length = 0;
gdjs.Scene2Code.GDDoh_9595Emote_9595MidObjects2.length = 0;
gdjs.Scene2Code.GDTryAgain_9595BubbleObjects1.length = 0;
gdjs.Scene2Code.GDTryAgain_9595BubbleObjects2.length = 0;
gdjs.Scene2Code.GDTry_9595Again_9595Objects1.length = 0;
gdjs.Scene2Code.GDTry_9595Again_9595Objects2.length = 0;
gdjs.Scene2Code.GDYesObjects1.length = 0;
gdjs.Scene2Code.GDYesObjects2.length = 0;
gdjs.Scene2Code.GDNoObjects1.length = 0;
gdjs.Scene2Code.GDNoObjects2.length = 0;
gdjs.Scene2Code.GDYes2Objects1.length = 0;
gdjs.Scene2Code.GDYes2Objects2.length = 0;
gdjs.Scene2Code.GDNo2Objects1.length = 0;
gdjs.Scene2Code.GDNo2Objects2.length = 0;
gdjs.Scene2Code.GDTalking_9595Emote_9595MidObjects1.length = 0;
gdjs.Scene2Code.GDTalking_9595Emote_9595MidObjects2.length = 0;


return;

}

gdjs['Scene2Code'] = gdjs.Scene2Code;
