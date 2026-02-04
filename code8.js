gdjs.Scene8Code = {};
gdjs.Scene8Code.localVariables = [];
gdjs.Scene8Code.idToCallbackMap = new Map();
gdjs.Scene8Code.GDQuestionObjects1= [];
gdjs.Scene8Code.GDQuestionObjects2= [];
gdjs.Scene8Code.GDAObjects1= [];
gdjs.Scene8Code.GDAObjects2= [];
gdjs.Scene8Code.GDBObjects1= [];
gdjs.Scene8Code.GDBObjects2= [];
gdjs.Scene8Code.GDCObjects1= [];
gdjs.Scene8Code.GDCObjects2= [];
gdjs.Scene8Code.GDDObjects1= [];
gdjs.Scene8Code.GDDObjects2= [];
gdjs.Scene8Code.GDQuestion_9595TxtObjects1= [];
gdjs.Scene8Code.GDQuestion_9595TxtObjects2= [];
gdjs.Scene8Code.GDB2Objects1= [];
gdjs.Scene8Code.GDB2Objects2= [];
gdjs.Scene8Code.GDC2Objects1= [];
gdjs.Scene8Code.GDC2Objects2= [];
gdjs.Scene8Code.GDD2Objects1= [];
gdjs.Scene8Code.GDD2Objects2= [];
gdjs.Scene8Code.GDA2Objects1= [];
gdjs.Scene8Code.GDA2Objects2= [];
gdjs.Scene8Code.GDNewPanelSpriteObjects1= [];
gdjs.Scene8Code.GDNewPanelSpriteObjects2= [];
gdjs.Scene8Code.GDBackground_95951Objects1= [];
gdjs.Scene8Code.GDBackground_95951Objects2= [];
gdjs.Scene8Code.GDNewSpriteObjects1= [];
gdjs.Scene8Code.GDNewSpriteObjects2= [];
gdjs.Scene8Code.GDVery_9595Happy_9595Emote_9595MidObjects1= [];
gdjs.Scene8Code.GDVery_9595Happy_9595Emote_9595MidObjects2= [];
gdjs.Scene8Code.GDWorried_9595Emote_9595MidObjects1= [];
gdjs.Scene8Code.GDWorried_9595Emote_9595MidObjects2= [];
gdjs.Scene8Code.GDDoh_9595Emote_9595MidObjects1= [];
gdjs.Scene8Code.GDDoh_9595Emote_9595MidObjects2= [];
gdjs.Scene8Code.GDTryAgain_9595BubbleObjects1= [];
gdjs.Scene8Code.GDTryAgain_9595BubbleObjects2= [];
gdjs.Scene8Code.GDTry_9595Again_9595Objects1= [];
gdjs.Scene8Code.GDTry_9595Again_9595Objects2= [];
gdjs.Scene8Code.GDYesObjects1= [];
gdjs.Scene8Code.GDYesObjects2= [];
gdjs.Scene8Code.GDNoObjects1= [];
gdjs.Scene8Code.GDNoObjects2= [];
gdjs.Scene8Code.GDYes2Objects1= [];
gdjs.Scene8Code.GDYes2Objects2= [];
gdjs.Scene8Code.GDNo2Objects1= [];
gdjs.Scene8Code.GDNo2Objects2= [];
gdjs.Scene8Code.GDTalking_9595Emote_9595MidObjects1= [];
gdjs.Scene8Code.GDTalking_9595Emote_9595MidObjects2= [];


gdjs.Scene8Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("A"), gdjs.Scene8Code.GDAObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene8Code.GDAObjects1.length;i<l;++i) {
    if ( gdjs.Scene8Code.GDAObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Scene8Code.GDAObjects1[k] = gdjs.Scene8Code.GDAObjects1[i];
        ++k;
    }
}
gdjs.Scene8Code.GDAObjects1.length = k;
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

gdjs.copyArray(runtimeScene.getObjects("B"), gdjs.Scene8Code.GDBObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene8Code.GDBObjects1.length;i<l;++i) {
    if ( gdjs.Scene8Code.GDBObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Scene8Code.GDBObjects1[k] = gdjs.Scene8Code.GDBObjects1[i];
        ++k;
    }
}
gdjs.Scene8Code.GDBObjects1.length = k;
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

gdjs.copyArray(runtimeScene.getObjects("C"), gdjs.Scene8Code.GDCObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene8Code.GDCObjects1.length;i<l;++i) {
    if ( gdjs.Scene8Code.GDCObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Scene8Code.GDCObjects1[k] = gdjs.Scene8Code.GDCObjects1[i];
        ++k;
    }
}
gdjs.Scene8Code.GDCObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "pop-cartoon-328167.mp3", false, 100, 1);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene9", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("D"), gdjs.Scene8Code.GDDObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene8Code.GDDObjects1.length;i<l;++i) {
    if ( gdjs.Scene8Code.GDDObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Scene8Code.GDDObjects1[k] = gdjs.Scene8Code.GDDObjects1[i];
        ++k;
    }
}
gdjs.Scene8Code.GDDObjects1.length = k;
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
gdjs.copyArray(runtimeScene.getObjects("Doh_Emote_Mid"), gdjs.Scene8Code.GDDoh_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("No"), gdjs.Scene8Code.GDNoObjects1);
gdjs.copyArray(runtimeScene.getObjects("No2"), gdjs.Scene8Code.GDNo2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Talking_Emote_Mid"), gdjs.Scene8Code.GDTalking_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("TryAgain_Bubble"), gdjs.Scene8Code.GDTryAgain_9595BubbleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Try_Again_"), gdjs.Scene8Code.GDTry_9595Again_9595Objects1);
gdjs.copyArray(runtimeScene.getObjects("Very_Happy_Emote_Mid"), gdjs.Scene8Code.GDVery_9595Happy_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("Worried_Emote_Mid"), gdjs.Scene8Code.GDWorried_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("Yes"), gdjs.Scene8Code.GDYesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Yes2"), gdjs.Scene8Code.GDYes2Objects1);
{for(var i = 0, len = gdjs.Scene8Code.GDVery_9595Happy_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDVery_9595Happy_9595Emote_9595MidObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scene8Code.GDWorried_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDWorried_9595Emote_9595MidObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene8Code.GDDoh_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDDoh_9595Emote_9595MidObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene8Code.GDTalking_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDTalking_9595Emote_9595MidObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene8Code.GDTryAgain_9595BubbleObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDTryAgain_9595BubbleObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene8Code.GDTry_9595Again_9595Objects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDTry_9595Again_9595Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene8Code.GDYesObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDYesObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene8Code.GDNoObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDNoObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene8Code.GDYes2Objects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDYes2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene8Code.GDNo2Objects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDNo2Objects1[i].hide();
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
gdjs.copyArray(runtimeScene.getObjects("Doh_Emote_Mid"), gdjs.Scene8Code.GDDoh_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("No"), gdjs.Scene8Code.GDNoObjects1);
gdjs.copyArray(runtimeScene.getObjects("No2"), gdjs.Scene8Code.GDNo2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Talking_Emote_Mid"), gdjs.Scene8Code.GDTalking_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("TryAgain_Bubble"), gdjs.Scene8Code.GDTryAgain_9595BubbleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Try_Again_"), gdjs.Scene8Code.GDTry_9595Again_9595Objects1);
gdjs.copyArray(runtimeScene.getObjects("Very_Happy_Emote_Mid"), gdjs.Scene8Code.GDVery_9595Happy_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("Worried_Emote_Mid"), gdjs.Scene8Code.GDWorried_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("Yes"), gdjs.Scene8Code.GDYesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Yes2"), gdjs.Scene8Code.GDYes2Objects1);
{for(var i = 0, len = gdjs.Scene8Code.GDDoh_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDDoh_9595Emote_9595MidObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene8Code.GDWorried_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDWorried_9595Emote_9595MidObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scene8Code.GDVery_9595Happy_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDVery_9595Happy_9595Emote_9595MidObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene8Code.GDTalking_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDTalking_9595Emote_9595MidObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene8Code.GDTryAgain_9595BubbleObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDTryAgain_9595BubbleObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene8Code.GDTry_9595Again_9595Objects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDTry_9595Again_9595Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene8Code.GDYesObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDYesObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene8Code.GDNoObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDNoObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene8Code.GDYes2Objects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDYes2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene8Code.GDNo2Objects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDNo2Objects1[i].hide();
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
gdjs.copyArray(runtimeScene.getObjects("Doh_Emote_Mid"), gdjs.Scene8Code.GDDoh_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("No"), gdjs.Scene8Code.GDNoObjects1);
gdjs.copyArray(runtimeScene.getObjects("No2"), gdjs.Scene8Code.GDNo2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Talking_Emote_Mid"), gdjs.Scene8Code.GDTalking_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("TryAgain_Bubble"), gdjs.Scene8Code.GDTryAgain_9595BubbleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Try_Again_"), gdjs.Scene8Code.GDTry_9595Again_9595Objects1);
gdjs.copyArray(runtimeScene.getObjects("Very_Happy_Emote_Mid"), gdjs.Scene8Code.GDVery_9595Happy_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("Worried_Emote_Mid"), gdjs.Scene8Code.GDWorried_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("Yes"), gdjs.Scene8Code.GDYesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Yes2"), gdjs.Scene8Code.GDYes2Objects1);
{for(var i = 0, len = gdjs.Scene8Code.GDDoh_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDDoh_9595Emote_9595MidObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scene8Code.GDWorried_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDWorried_9595Emote_9595MidObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene8Code.GDVery_9595Happy_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDVery_9595Happy_9595Emote_9595MidObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene8Code.GDTalking_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDTalking_9595Emote_9595MidObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene8Code.GDTryAgain_9595BubbleObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDTryAgain_9595BubbleObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene8Code.GDTry_9595Again_9595Objects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDTry_9595Again_9595Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene8Code.GDYesObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDYesObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene8Code.GDNoObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDNoObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene8Code.GDYes2Objects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDYes2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene8Code.GDNo2Objects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDNo2Objects1[i].hide();
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
gdjs.copyArray(runtimeScene.getObjects("Doh_Emote_Mid"), gdjs.Scene8Code.GDDoh_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("No"), gdjs.Scene8Code.GDNoObjects1);
gdjs.copyArray(runtimeScene.getObjects("No2"), gdjs.Scene8Code.GDNo2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Talking_Emote_Mid"), gdjs.Scene8Code.GDTalking_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("TryAgain_Bubble"), gdjs.Scene8Code.GDTryAgain_9595BubbleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Try_Again_"), gdjs.Scene8Code.GDTry_9595Again_9595Objects1);
gdjs.copyArray(runtimeScene.getObjects("Very_Happy_Emote_Mid"), gdjs.Scene8Code.GDVery_9595Happy_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("Worried_Emote_Mid"), gdjs.Scene8Code.GDWorried_9595Emote_9595MidObjects1);
gdjs.copyArray(runtimeScene.getObjects("Yes"), gdjs.Scene8Code.GDYesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Yes2"), gdjs.Scene8Code.GDYes2Objects1);
{for(var i = 0, len = gdjs.Scene8Code.GDVery_9595Happy_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDVery_9595Happy_9595Emote_9595MidObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene8Code.GDWorried_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDWorried_9595Emote_9595MidObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene8Code.GDDoh_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDDoh_9595Emote_9595MidObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scene8Code.GDTalking_9595Emote_9595MidObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDTalking_9595Emote_9595MidObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Scene8Code.GDTryAgain_9595BubbleObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDTryAgain_9595BubbleObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scene8Code.GDTry_9595Again_9595Objects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDTry_9595Again_9595Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scene8Code.GDYesObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDYesObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scene8Code.GDNoObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDNoObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scene8Code.GDYes2Objects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDYes2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Scene8Code.GDNo2Objects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDNo2Objects1[i].hide(false);
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

gdjs.copyArray(runtimeScene.getObjects("Yes"), gdjs.Scene8Code.GDYesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene8Code.GDYesObjects1.length;i<l;++i) {
    if ( gdjs.Scene8Code.GDYesObjects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Scene8Code.GDYesObjects1[k] = gdjs.Scene8Code.GDYesObjects1[i];
        ++k;
    }
}
gdjs.Scene8Code.GDYesObjects1.length = k;
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

gdjs.copyArray(runtimeScene.getObjects("No"), gdjs.Scene8Code.GDNoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scene8Code.GDNoObjects1.length;i<l;++i) {
    if ( gdjs.Scene8Code.GDNoObjects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Scene8Code.GDNoObjects1[k] = gdjs.Scene8Code.GDNoObjects1[i];
        ++k;
    }
}
gdjs.Scene8Code.GDNoObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "pop-cartoon-328167.mp3", false, 100, 1);
}
}

}


};

gdjs.Scene8Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scene8Code.GDQuestionObjects1.length = 0;
gdjs.Scene8Code.GDQuestionObjects2.length = 0;
gdjs.Scene8Code.GDAObjects1.length = 0;
gdjs.Scene8Code.GDAObjects2.length = 0;
gdjs.Scene8Code.GDBObjects1.length = 0;
gdjs.Scene8Code.GDBObjects2.length = 0;
gdjs.Scene8Code.GDCObjects1.length = 0;
gdjs.Scene8Code.GDCObjects2.length = 0;
gdjs.Scene8Code.GDDObjects1.length = 0;
gdjs.Scene8Code.GDDObjects2.length = 0;
gdjs.Scene8Code.GDQuestion_9595TxtObjects1.length = 0;
gdjs.Scene8Code.GDQuestion_9595TxtObjects2.length = 0;
gdjs.Scene8Code.GDB2Objects1.length = 0;
gdjs.Scene8Code.GDB2Objects2.length = 0;
gdjs.Scene8Code.GDC2Objects1.length = 0;
gdjs.Scene8Code.GDC2Objects2.length = 0;
gdjs.Scene8Code.GDD2Objects1.length = 0;
gdjs.Scene8Code.GDD2Objects2.length = 0;
gdjs.Scene8Code.GDA2Objects1.length = 0;
gdjs.Scene8Code.GDA2Objects2.length = 0;
gdjs.Scene8Code.GDNewPanelSpriteObjects1.length = 0;
gdjs.Scene8Code.GDNewPanelSpriteObjects2.length = 0;
gdjs.Scene8Code.GDBackground_95951Objects1.length = 0;
gdjs.Scene8Code.GDBackground_95951Objects2.length = 0;
gdjs.Scene8Code.GDNewSpriteObjects1.length = 0;
gdjs.Scene8Code.GDNewSpriteObjects2.length = 0;
gdjs.Scene8Code.GDVery_9595Happy_9595Emote_9595MidObjects1.length = 0;
gdjs.Scene8Code.GDVery_9595Happy_9595Emote_9595MidObjects2.length = 0;
gdjs.Scene8Code.GDWorried_9595Emote_9595MidObjects1.length = 0;
gdjs.Scene8Code.GDWorried_9595Emote_9595MidObjects2.length = 0;
gdjs.Scene8Code.GDDoh_9595Emote_9595MidObjects1.length = 0;
gdjs.Scene8Code.GDDoh_9595Emote_9595MidObjects2.length = 0;
gdjs.Scene8Code.GDTryAgain_9595BubbleObjects1.length = 0;
gdjs.Scene8Code.GDTryAgain_9595BubbleObjects2.length = 0;
gdjs.Scene8Code.GDTry_9595Again_9595Objects1.length = 0;
gdjs.Scene8Code.GDTry_9595Again_9595Objects2.length = 0;
gdjs.Scene8Code.GDYesObjects1.length = 0;
gdjs.Scene8Code.GDYesObjects2.length = 0;
gdjs.Scene8Code.GDNoObjects1.length = 0;
gdjs.Scene8Code.GDNoObjects2.length = 0;
gdjs.Scene8Code.GDYes2Objects1.length = 0;
gdjs.Scene8Code.GDYes2Objects2.length = 0;
gdjs.Scene8Code.GDNo2Objects1.length = 0;
gdjs.Scene8Code.GDNo2Objects2.length = 0;
gdjs.Scene8Code.GDTalking_9595Emote_9595MidObjects1.length = 0;
gdjs.Scene8Code.GDTalking_9595Emote_9595MidObjects2.length = 0;

gdjs.Scene8Code.eventsList0(runtimeScene);
gdjs.Scene8Code.GDQuestionObjects1.length = 0;
gdjs.Scene8Code.GDQuestionObjects2.length = 0;
gdjs.Scene8Code.GDAObjects1.length = 0;
gdjs.Scene8Code.GDAObjects2.length = 0;
gdjs.Scene8Code.GDBObjects1.length = 0;
gdjs.Scene8Code.GDBObjects2.length = 0;
gdjs.Scene8Code.GDCObjects1.length = 0;
gdjs.Scene8Code.GDCObjects2.length = 0;
gdjs.Scene8Code.GDDObjects1.length = 0;
gdjs.Scene8Code.GDDObjects2.length = 0;
gdjs.Scene8Code.GDQuestion_9595TxtObjects1.length = 0;
gdjs.Scene8Code.GDQuestion_9595TxtObjects2.length = 0;
gdjs.Scene8Code.GDB2Objects1.length = 0;
gdjs.Scene8Code.GDB2Objects2.length = 0;
gdjs.Scene8Code.GDC2Objects1.length = 0;
gdjs.Scene8Code.GDC2Objects2.length = 0;
gdjs.Scene8Code.GDD2Objects1.length = 0;
gdjs.Scene8Code.GDD2Objects2.length = 0;
gdjs.Scene8Code.GDA2Objects1.length = 0;
gdjs.Scene8Code.GDA2Objects2.length = 0;
gdjs.Scene8Code.GDNewPanelSpriteObjects1.length = 0;
gdjs.Scene8Code.GDNewPanelSpriteObjects2.length = 0;
gdjs.Scene8Code.GDBackground_95951Objects1.length = 0;
gdjs.Scene8Code.GDBackground_95951Objects2.length = 0;
gdjs.Scene8Code.GDNewSpriteObjects1.length = 0;
gdjs.Scene8Code.GDNewSpriteObjects2.length = 0;
gdjs.Scene8Code.GDVery_9595Happy_9595Emote_9595MidObjects1.length = 0;
gdjs.Scene8Code.GDVery_9595Happy_9595Emote_9595MidObjects2.length = 0;
gdjs.Scene8Code.GDWorried_9595Emote_9595MidObjects1.length = 0;
gdjs.Scene8Code.GDWorried_9595Emote_9595MidObjects2.length = 0;
gdjs.Scene8Code.GDDoh_9595Emote_9595MidObjects1.length = 0;
gdjs.Scene8Code.GDDoh_9595Emote_9595MidObjects2.length = 0;
gdjs.Scene8Code.GDTryAgain_9595BubbleObjects1.length = 0;
gdjs.Scene8Code.GDTryAgain_9595BubbleObjects2.length = 0;
gdjs.Scene8Code.GDTry_9595Again_9595Objects1.length = 0;
gdjs.Scene8Code.GDTry_9595Again_9595Objects2.length = 0;
gdjs.Scene8Code.GDYesObjects1.length = 0;
gdjs.Scene8Code.GDYesObjects2.length = 0;
gdjs.Scene8Code.GDNoObjects1.length = 0;
gdjs.Scene8Code.GDNoObjects2.length = 0;
gdjs.Scene8Code.GDYes2Objects1.length = 0;
gdjs.Scene8Code.GDYes2Objects2.length = 0;
gdjs.Scene8Code.GDNo2Objects1.length = 0;
gdjs.Scene8Code.GDNo2Objects2.length = 0;
gdjs.Scene8Code.GDTalking_9595Emote_9595MidObjects1.length = 0;
gdjs.Scene8Code.GDTalking_9595Emote_9595MidObjects2.length = 0;


return;

}

gdjs['Scene8Code'] = gdjs.Scene8Code;
