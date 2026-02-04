gdjs.Scene11Code = {};
gdjs.Scene11Code.localVariables = [];
gdjs.Scene11Code.idToCallbackMap = new Map();
gdjs.Scene11Code.GDQuestionObjects1= [];
gdjs.Scene11Code.GDQuestionObjects2= [];
gdjs.Scene11Code.GDAObjects1= [];
gdjs.Scene11Code.GDAObjects2= [];
gdjs.Scene11Code.GDBObjects1= [];
gdjs.Scene11Code.GDBObjects2= [];
gdjs.Scene11Code.GDCObjects1= [];
gdjs.Scene11Code.GDCObjects2= [];
gdjs.Scene11Code.GDDObjects1= [];
gdjs.Scene11Code.GDDObjects2= [];
gdjs.Scene11Code.GDQuestion_9595TxtObjects1= [];
gdjs.Scene11Code.GDQuestion_9595TxtObjects2= [];
gdjs.Scene11Code.GDB2Objects1= [];
gdjs.Scene11Code.GDB2Objects2= [];
gdjs.Scene11Code.GDC2Objects1= [];
gdjs.Scene11Code.GDC2Objects2= [];
gdjs.Scene11Code.GDD2Objects1= [];
gdjs.Scene11Code.GDD2Objects2= [];
gdjs.Scene11Code.GDA2Objects1= [];
gdjs.Scene11Code.GDA2Objects2= [];
gdjs.Scene11Code.GDNewPanelSpriteObjects1= [];
gdjs.Scene11Code.GDNewPanelSpriteObjects2= [];
gdjs.Scene11Code.GDBackground_95951Objects1= [];
gdjs.Scene11Code.GDBackground_95951Objects2= [];
gdjs.Scene11Code.GDNewSpriteObjects1= [];
gdjs.Scene11Code.GDNewSpriteObjects2= [];
gdjs.Scene11Code.GDVery_9595Happy_9595Emote_9595MidObjects1= [];
gdjs.Scene11Code.GDVery_9595Happy_9595Emote_9595MidObjects2= [];
gdjs.Scene11Code.GDWorried_9595Emote_9595MidObjects1= [];
gdjs.Scene11Code.GDWorried_9595Emote_9595MidObjects2= [];
gdjs.Scene11Code.GDDoh_9595Emote_9595MidObjects1= [];
gdjs.Scene11Code.GDDoh_9595Emote_9595MidObjects2= [];
gdjs.Scene11Code.GDTryAgain_9595BubbleObjects1= [];
gdjs.Scene11Code.GDTryAgain_9595BubbleObjects2= [];
gdjs.Scene11Code.GDTry_9595Again_9595Objects1= [];
gdjs.Scene11Code.GDTry_9595Again_9595Objects2= [];
gdjs.Scene11Code.GDYesObjects1= [];
gdjs.Scene11Code.GDYesObjects2= [];
gdjs.Scene11Code.GDNoObjects1= [];
gdjs.Scene11Code.GDNoObjects2= [];
gdjs.Scene11Code.GDYes2Objects1= [];
gdjs.Scene11Code.GDYes2Objects2= [];
gdjs.Scene11Code.GDNo2Objects1= [];
gdjs.Scene11Code.GDNo2Objects2= [];
gdjs.Scene11Code.GDTalking_9595Emote_9595MidObjects1= [];
gdjs.Scene11Code.GDTalking_9595Emote_9595MidObjects2= [];


gdjs.Scene11Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("A"), gdjs.Scene11Code.GDAObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene11Code.GDAObjects1.length;i<l;++i) {
    if ( gdjs.Scene11Code.GDAObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Scene11Code.GDAObjects1[k] = gdjs.Scene11Code.GDAObjects1[i];
        ++k;
    }
}
gdjs.Scene11Code.GDAObjects1.length = k;
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

gdjs.copyArray(runtimeScene.getObjects("B"), gdjs.Scene11Code.GDBObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene11Code.GDBObjects1.length;i<l;++i) {
    if ( gdjs.Scene11Code.GDBObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Scene11Code.GDBObjects1[k] = gdjs.Scene11Code.GDBObjects1[i];
        ++k;
    }
}
gdjs.Scene11Code.GDBObjects1.length = k;
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

gdjs.copyArray(runtimeScene.getObjects("C"), gdjs.Scene11Code.GDCObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene11Code.GDCObjects1.length;i<l;++i) {
    if ( gdjs.Scene11Code.GDCObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Scene11Code.GDCObjects1[k] = gdjs.Scene11Code.GDCObjects1[i];
        ++k;
    }
}
gdjs.Scene11Code.GDCObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "pop-cartoon-328167.mp3", false, 100, 1);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene12", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("D"), gdjs.Scene11Code.GDDObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene11Code.GDDObjects1.length;i<l;++i) {
    if ( gdjs.Scene11Code.GDDObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Scene11Code.GDDObjects1[k] = gdjs.Scene11Code.GDDObjects1[i];
        ++k;
    }
}
gdjs.Scene11Code.GDDObjects1.length = k;
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
gdjs.copyArray(runtimeScene.getObjects("Doh_Emote_Mid"), gdjs.Scene11Code.GDDoh_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("No"), gdjs.Scene11Code.GDNoObjects1);
gdjs.copyArray(runtimeScene.getObjects("No2"), gdjs.Scene11Code.GDNo2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Talking_Emote_Mid"), gdjs.Scene11Code.GDTalking_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("TryAgain_Bubble"), gdjs.Scene11Code.GDTryAgain_9595BubbleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Try_Again_"), gdjs.Scene11Code.GDTry_9595Again_9595Objects1);
gdjs.copyArray(runtimeScene.getObjects("Very_Happy_Emote_Mid"), gdjs.Scene11Code.GDVery_9595Happy_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("Worried_Emote_Mid"), gdjs.Scene11Code.GDWorried_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("Yes"), gdjs.Scene11Code.GDYesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Yes2"), gdjs.Scene11Code.GDYes2Objects1);
{for(var i = 0, len = gdjs.Scene11Code.GDVery_9595Happy_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene11Code.GDVery_9595Happy_9595Emote_9595MidObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scene11Code.GDWorried_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene11Code.GDWorried_9595Emote_9595MidObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene11Code.GDDoh_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene11Code.GDDoh_9595Emote_9595MidObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene11Code.GDTalking_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene11Code.GDTalking_9595Emote_9595MidObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene11Code.GDTryAgain_9595BubbleObjects1.length ;i < len;++i) {
    gdjs.Scene11Code.GDTryAgain_9595BubbleObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene11Code.GDTry_9595Again_9595Objects1.length ;i < len;++i) {
    gdjs.Scene11Code.GDTry_9595Again_9595Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene11Code.GDYesObjects1.length ;i < len;++i) {
    gdjs.Scene11Code.GDYesObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene11Code.GDNoObjects1.length ;i < len;++i) {
    gdjs.Scene11Code.GDNoObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene11Code.GDYes2Objects1.length ;i < len;++i) {
    gdjs.Scene11Code.GDYes2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene11Code.GDNo2Objects1.length ;i < len;++i) {
    gdjs.Scene11Code.GDNo2Objects1[i].hide();
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
gdjs.copyArray(runtimeScene.getObjects("Doh_Emote_Mid"), gdjs.Scene11Code.GDDoh_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("No"), gdjs.Scene11Code.GDNoObjects1);
gdjs.copyArray(runtimeScene.getObjects("No2"), gdjs.Scene11Code.GDNo2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Talking_Emote_Mid"), gdjs.Scene11Code.GDTalking_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("TryAgain_Bubble"), gdjs.Scene11Code.GDTryAgain_9595BubbleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Try_Again_"), gdjs.Scene11Code.GDTry_9595Again_9595Objects1);
gdjs.copyArray(runtimeScene.getObjects("Very_Happy_Emote_Mid"), gdjs.Scene11Code.GDVery_9595Happy_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("Worried_Emote_Mid"), gdjs.Scene11Code.GDWorried_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("Yes"), gdjs.Scene11Code.GDYesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Yes2"), gdjs.Scene11Code.GDYes2Objects1);
{for(var i = 0, len = gdjs.Scene11Code.GDDoh_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene11Code.GDDoh_9595Emote_9595MidObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene11Code.GDWorried_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene11Code.GDWorried_9595Emote_9595MidObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scene11Code.GDVery_9595Happy_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene11Code.GDVery_9595Happy_9595Emote_9595MidObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene11Code.GDTalking_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene11Code.GDTalking_9595Emote_9595MidObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene11Code.GDTryAgain_9595BubbleObjects1.length ;i < len;++i) {
    gdjs.Scene11Code.GDTryAgain_9595BubbleObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene11Code.GDTry_9595Again_9595Objects1.length ;i < len;++i) {
    gdjs.Scene11Code.GDTry_9595Again_9595Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene11Code.GDYesObjects1.length ;i < len;++i) {
    gdjs.Scene11Code.GDYesObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene11Code.GDNoObjects1.length ;i < len;++i) {
    gdjs.Scene11Code.GDNoObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene11Code.GDYes2Objects1.length ;i < len;++i) {
    gdjs.Scene11Code.GDYes2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene11Code.GDNo2Objects1.length ;i < len;++i) {
    gdjs.Scene11Code.GDNo2Objects1[i].hide();
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
gdjs.copyArray(runtimeScene.getObjects("Doh_Emote_Mid"), gdjs.Scene11Code.GDDoh_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("No"), gdjs.Scene11Code.GDNoObjects1);
gdjs.copyArray(runtimeScene.getObjects("No2"), gdjs.Scene11Code.GDNo2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Talking_Emote_Mid"), gdjs.Scene11Code.GDTalking_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("TryAgain_Bubble"), gdjs.Scene11Code.GDTryAgain_9595BubbleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Try_Again_"), gdjs.Scene11Code.GDTry_9595Again_9595Objects1);
gdjs.copyArray(runtimeScene.getObjects("Very_Happy_Emote_Mid"), gdjs.Scene11Code.GDVery_9595Happy_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("Worried_Emote_Mid"), gdjs.Scene11Code.GDWorried_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("Yes"), gdjs.Scene11Code.GDYesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Yes2"), gdjs.Scene11Code.GDYes2Objects1);
{for(var i = 0, len = gdjs.Scene11Code.GDDoh_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene11Code.GDDoh_9595Emote_9595MidObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scene11Code.GDWorried_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene11Code.GDWorried_9595Emote_9595MidObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene11Code.GDVery_9595Happy_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene11Code.GDVery_9595Happy_9595Emote_9595MidObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene11Code.GDTalking_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene11Code.GDTalking_9595Emote_9595MidObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene11Code.GDTryAgain_9595BubbleObjects1.length ;i < len;++i) {
    gdjs.Scene11Code.GDTryAgain_9595BubbleObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene11Code.GDTry_9595Again_9595Objects1.length ;i < len;++i) {
    gdjs.Scene11Code.GDTry_9595Again_9595Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene11Code.GDYesObjects1.length ;i < len;++i) {
    gdjs.Scene11Code.GDYesObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene11Code.GDNoObjects1.length ;i < len;++i) {
    gdjs.Scene11Code.GDNoObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene11Code.GDYes2Objects1.length ;i < len;++i) {
    gdjs.Scene11Code.GDYes2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene11Code.GDNo2Objects1.length ;i < len;++i) {
    gdjs.Scene11Code.GDNo2Objects1[i].hide();
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
gdjs.copyArray(runtimeScene.getObjects("Doh_Emote_Mid"), gdjs.Scene11Code.GDDoh_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("No"), gdjs.Scene11Code.GDNoObjects1);
gdjs.copyArray(runtimeScene.getObjects("No2"), gdjs.Scene11Code.GDNo2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Talking_Emote_Mid"), gdjs.Scene11Code.GDTalking_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("TryAgain_Bubble"), gdjs.Scene11Code.GDTryAgain_9595BubbleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Try_Again_"), gdjs.Scene11Code.GDTry_9595Again_9595Objects1);
gdjs.copyArray(runtimeScene.getObjects("Very_Happy_Emote_Mid"), gdjs.Scene11Code.GDVery_9595Happy_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("Worried_Emote_Mid"), gdjs.Scene11Code.GDWorried_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("Yes"), gdjs.Scene11Code.GDYesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Yes2"), gdjs.Scene11Code.GDYes2Objects1);
{for(var i = 0, len = gdjs.Scene11Code.GDVery_9595Happy_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene11Code.GDVery_9595Happy_9595Emote_9595MidObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene11Code.GDWorried_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene11Code.GDWorried_9595Emote_9595MidObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene11Code.GDDoh_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene11Code.GDDoh_9595Emote_9595MidObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scene11Code.GDTalking_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene11Code.GDTalking_9595Emote_9595MidObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene11Code.GDTryAgain_9595BubbleObjects1.length ;i < len;++i) {
    gdjs.Scene11Code.GDTryAgain_9595BubbleObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scene11Code.GDTry_9595Again_9595Objects1.length ;i < len;++i) {
    gdjs.Scene11Code.GDTry_9595Again_9595Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scene11Code.GDYesObjects1.length ;i < len;++i) {
    gdjs.Scene11Code.GDYesObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scene11Code.GDNoObjects1.length ;i < len;++i) {
    gdjs.Scene11Code.GDNoObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scene11Code.GDYes2Objects1.length ;i < len;++i) {
    gdjs.Scene11Code.GDYes2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scene11Code.GDNo2Objects1.length ;i < len;++i) {
    gdjs.Scene11Code.GDNo2Objects1[i].hide(false);
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

gdjs.copyArray(runtimeScene.getObjects("Yes"), gdjs.Scene11Code.GDYesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene11Code.GDYesObjects1.length;i<l;++i) {
    if ( gdjs.Scene11Code.GDYesObjects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Scene11Code.GDYesObjects1[k] = gdjs.Scene11Code.GDYesObjects1[i];
        ++k;
    }
}
gdjs.Scene11Code.GDYesObjects1.length = k;
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

gdjs.copyArray(runtimeScene.getObjects("No"), gdjs.Scene11Code.GDNoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene11Code.GDNoObjects1.length;i<l;++i) {
    if ( gdjs.Scene11Code.GDNoObjects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Scene11Code.GDNoObjects1[k] = gdjs.Scene11Code.GDNoObjects1[i];
        ++k;
    }
}
gdjs.Scene11Code.GDNoObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "pop-cartoon-328167.mp3", false, 100, 1);
}
}

}


};

gdjs.Scene11Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scene11Code.GDQuestionObjects1.length = 0;
gdjs.Scene11Code.GDQuestionObjects2.length = 0;
gdjs.Scene11Code.GDAObjects1.length = 0;
gdjs.Scene11Code.GDAObjects2.length = 0;
gdjs.Scene11Code.GDBObjects1.length = 0;
gdjs.Scene11Code.GDBObjects2.length = 0;
gdjs.Scene11Code.GDCObjects1.length = 0;
gdjs.Scene11Code.GDCObjects2.length = 0;
gdjs.Scene11Code.GDDObjects1.length = 0;
gdjs.Scene11Code.GDDObjects2.length = 0;
gdjs.Scene11Code.GDQuestion_9595TxtObjects1.length = 0;
gdjs.Scene11Code.GDQuestion_9595TxtObjects2.length = 0;
gdjs.Scene11Code.GDB2Objects1.length = 0;
gdjs.Scene11Code.GDB2Objects2.length = 0;
gdjs.Scene11Code.GDC2Objects1.length = 0;
gdjs.Scene11Code.GDC2Objects2.length = 0;
gdjs.Scene11Code.GDD2Objects1.length = 0;
gdjs.Scene11Code.GDD2Objects2.length = 0;
gdjs.Scene11Code.GDA2Objects1.length = 0;
gdjs.Scene11Code.GDA2Objects2.length = 0;
gdjs.Scene11Code.GDNewPanelSpriteObjects1.length = 0;
gdjs.Scene11Code.GDNewPanelSpriteObjects2.length = 0;
gdjs.Scene11Code.GDBackground_95951Objects1.length = 0;
gdjs.Scene11Code.GDBackground_95951Objects2.length = 0;
gdjs.Scene11Code.GDNewSpriteObjects1.length = 0;
gdjs.Scene11Code.GDNewSpriteObjects2.length = 0;
gdjs.Scene11Code.GDVery_9595Happy_9595Emote_9595MidObjects1.length = 0;
gdjs.Scene11Code.GDVery_9595Happy_9595Emote_9595MidObjects2.length = 0;
gdjs.Scene11Code.GDWorried_9595Emote_9595MidObjects1.length = 0;
gdjs.Scene11Code.GDWorried_9595Emote_9595MidObjects2.length = 0;
gdjs.Scene11Code.GDDoh_9595Emote_9595MidObjects1.length = 0;
gdjs.Scene11Code.GDDoh_9595Emote_9595MidObjects2.length = 0;
gdjs.Scene11Code.GDTryAgain_9595BubbleObjects1.length = 0;
gdjs.Scene11Code.GDTryAgain_9595BubbleObjects2.length = 0;
gdjs.Scene11Code.GDTry_9595Again_9595Objects1.length = 0;
gdjs.Scene11Code.GDTry_9595Again_9595Objects2.length = 0;
gdjs.Scene11Code.GDYesObjects1.length = 0;
gdjs.Scene11Code.GDYesObjects2.length = 0;
gdjs.Scene11Code.GDNoObjects1.length = 0;
gdjs.Scene11Code.GDNoObjects2.length = 0;
gdjs.Scene11Code.GDYes2Objects1.length = 0;
gdjs.Scene11Code.GDYes2Objects2.length = 0;
gdjs.Scene11Code.GDNo2Objects1.length = 0;
gdjs.Scene11Code.GDNo2Objects2.length = 0;
gdjs.Scene11Code.GDTalking_9595Emote_9595MidObjects1.length = 0;
gdjs.Scene11Code.GDTalking_9595Emote_9595MidObjects2.length = 0;

gdjs.Scene11Code.eventsList0(runtimeScene);
gdjs.Scene11Code.GDQuestionObjects1.length = 0;
gdjs.Scene11Code.GDQuestionObjects2.length = 0;
gdjs.Scene11Code.GDAObjects1.length = 0;
gdjs.Scene11Code.GDAObjects2.length = 0;
gdjs.Scene11Code.GDBObjects1.length = 0;
gdjs.Scene11Code.GDBObjects2.length = 0;
gdjs.Scene11Code.GDCObjects1.length = 0;
gdjs.Scene11Code.GDCObjects2.length = 0;
gdjs.Scene11Code.GDDObjects1.length = 0;
gdjs.Scene11Code.GDDObjects2.length = 0;
gdjs.Scene11Code.GDQuestion_9595TxtObjects1.length = 0;
gdjs.Scene11Code.GDQuestion_9595TxtObjects2.length = 0;
gdjs.Scene11Code.GDB2Objects1.length = 0;
gdjs.Scene11Code.GDB2Objects2.length = 0;
gdjs.Scene11Code.GDC2Objects1.length = 0;
gdjs.Scene11Code.GDC2Objects2.length = 0;
gdjs.Scene11Code.GDD2Objects1.length = 0;
gdjs.Scene11Code.GDD2Objects2.length = 0;
gdjs.Scene11Code.GDA2Objects1.length = 0;
gdjs.Scene11Code.GDA2Objects2.length = 0;
gdjs.Scene11Code.GDNewPanelSpriteObjects1.length = 0;
gdjs.Scene11Code.GDNewPanelSpriteObjects2.length = 0;
gdjs.Scene11Code.GDBackground_95951Objects1.length = 0;
gdjs.Scene11Code.GDBackground_95951Objects2.length = 0;
gdjs.Scene11Code.GDNewSpriteObjects1.length = 0;
gdjs.Scene11Code.GDNewSpriteObjects2.length = 0;
gdjs.Scene11Code.GDVery_9595Happy_9595Emote_9595MidObjects1.length = 0;
gdjs.Scene11Code.GDVery_9595Happy_9595Emote_9595MidObjects2.length = 0;
gdjs.Scene11Code.GDWorried_9595Emote_9595MidObjects1.length = 0;
gdjs.Scene11Code.GDWorried_9595Emote_9595MidObjects2.length = 0;
gdjs.Scene11Code.GDDoh_9595Emote_9595MidObjects1.length = 0;
gdjs.Scene11Code.GDDoh_9595Emote_9595MidObjects2.length = 0;
gdjs.Scene11Code.GDTryAgain_9595BubbleObjects1.length = 0;
gdjs.Scene11Code.GDTryAgain_9595BubbleObjects2.length = 0;
gdjs.Scene11Code.GDTry_9595Again_9595Objects1.length = 0;
gdjs.Scene11Code.GDTry_9595Again_9595Objects2.length = 0;
gdjs.Scene11Code.GDYesObjects1.length = 0;
gdjs.Scene11Code.GDYesObjects2.length = 0;
gdjs.Scene11Code.GDNoObjects1.length = 0;
gdjs.Scene11Code.GDNoObjects2.length = 0;
gdjs.Scene11Code.GDYes2Objects1.length = 0;
gdjs.Scene11Code.GDYes2Objects2.length = 0;
gdjs.Scene11Code.GDNo2Objects1.length = 0;
gdjs.Scene11Code.GDNo2Objects2.length = 0;
gdjs.Scene11Code.GDTalking_9595Emote_9595MidObjects1.length = 0;
gdjs.Scene11Code.GDTalking_9595Emote_9595MidObjects2.length = 0;


return;

}

gdjs['Scene11Code'] = gdjs.Scene11Code;
